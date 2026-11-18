(() => {
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const model = window.createCustomerModel();
  const landing = $('#landing-view');
  const login = $('#login-view');
  const journey = $('#journey-view');
  const menu = $('#mobile-nav');
  const menuButton = $('#mobile-menu');
  const dialog = $('#brand-dialog');
  const brandNameInput = $('#brand-name-input');
  const brandInitialsInput = $('#brand-initials-input');
  const brandImage = $('#brand-image');
  const upload = $('#brand-upload');
  let pendingLogo = '';
  let logoUrl = '';
  let activeAccount = '';
  let currentGuestReference = '';
  let currentChangeAuthorized = false;
  let guestProofEstablished = false;
  let continueBookingAfterLogin = false;
  let linkAfterLogin = false;
  let bookingNotice = '';

  const hand = $('.holo-hand').cloneNode(true);
  hand.classList.remove('holo-hand');
  hand.classList.add('login-hand');
  $('.login-hand-window').replaceChild(hand, $('.login-hand'));
  $('.login-hand-art').remove();

  function closeMenu() {
    menu.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
  }

  function showJourney(screen, focus = true) {
    $$('.journey-screen').forEach(item => { item.hidden = item.dataset.screen !== screen; });
    const page = $(`.journey-screen[data-screen="${screen}"]`);
    if (!page) return;
    if (focus) page.querySelector('h1')?.focus({ preventScroll: true });
    if (screen === 'booking') {
      model.setBookingOwner(activeAccount);
      $('#booking-continue').textContent = activeAccount ? 'Continue to appointment details' : 'Continue as guest';
      const selection = model.bookingSelection();
      $('#booking-service').value = selection.service || '';
      $('#booking-date').value = selection.date || '';
      $$('[name="booking-time"]').forEach(radio => { radio.checked = radio.value === selection.time; });
      if (bookingNotice) $('#booking-selection-message').textContent = bookingNotice;
    }
    if (screen === 'account') renderAccount();
    if (screen === 'manage-detail') {
      renderManagedAppointment();
      const appointment = model.appointment(currentGuestReference);
      $('#guest-access-email-panel').hidden = !guestProofEstablished || !appointment || appointment.linkStatus === 'held' || appointment.booking !== 'Scheduled';
    }
    if (screen === 'details') {
      $('#details-selection').textContent = selectionLabel();
      if (activeAccount && !$('#booker-email').value) $('#booker-email').value = activeAccount;
    }
  }

  const journeyScreens = new Set(['register', 'recovery', 'booking', 'details', 'review', 'confirmation', 'manage', 'manage-detail', 'account', 'link']);
  function route() {
    const view = location.hash.slice(1) || 'home';
    const isLogin = view === 'login';
    const isJourney = journeyScreens.has(view);
    if ((view === 'account' || view === 'link') && !activeAccount) {
      linkAfterLogin = view === 'link';
      location.hash = '#login';
      return;
    }
    landing.hidden = isLogin || isJourney;
    login.hidden = !isLogin;
    journey.hidden = !isJourney;
    closeMenu();
    document.title = `iTakda · ${isLogin ? 'Sign in' : isJourney ? view.replace('-', ' ') : 'Appointments on your time'}`;
    if (isJourney) { window.scrollTo({ top: 0, behavior: 'instant' }); showJourney(view); }
    else if (isLogin) { window.scrollTo({ top: 0, behavior: 'instant' }); $('#login-title').focus({ preventScroll: true }); }
    else if (view !== 'home') requestAnimationFrame(() => document.getElementById(view)?.scrollIntoView());
    else if (location.hash === '#home') window.scrollTo(0, 0);
  }

  menuButton.addEventListener('click', () => {
    menu.hidden = !menu.hidden;
    menuButton.setAttribute('aria-expanded', String(!menu.hidden));
    menuButton.setAttribute('aria-label', menu.hidden ? 'Open menu' : 'Close menu');
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !menu.hidden) {
      closeMenu();
      menuButton.focus();
    }
  });
  window.addEventListener('hashchange', route);
  document.addEventListener('click', event => {
    if (event.target.closest('[data-home-section], [data-go], [data-journey]')) closeMenu();
  });
  route();

  function openBrand() {
    closeMenu();
    dialog.showModal();
    brandNameInput.focus();
  }
  $('#open-brand').addEventListener('click', openBrand);
  $('#mobile-brand').addEventListener('click', openBrand);
  $('#close-brand').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  upload.addEventListener('change', () => {
    if (pendingLogo) URL.revokeObjectURL(pendingLogo);
    const file = upload.files?.[0];
    pendingLogo = file ? URL.createObjectURL(file) : '';
  });
  $('#brand-form').addEventListener('submit', event => {
    event.preventDefault();
    const name = brandNameInput.value.trim() || 'iTakda';
    const initials = brandInitialsInput.value.trim().slice(0, 3) || name[0].toUpperCase();
    $$('[data-brand-name]').forEach(element => { element.textContent = name; });
    $('.brand').setAttribute('aria-label', `${name} home`);
    $('#brand-initials').textContent = initials;
    if (pendingLogo) {
      if (logoUrl) URL.revokeObjectURL(logoUrl);
      logoUrl = pendingLogo;
      pendingLogo = '';
      brandImage.src = logoUrl;
      brandImage.hidden = false;
      $('#brand-initials').hidden = true;
    }
    document.title = `iTakda · ${login.hidden && journey.hidden ? 'Appointments on your time' : login.hidden ? 'Appointments on your time' : 'Sign in'}`;
    dialog.close();
  });
  $('#reset-brand').addEventListener('click', () => {
    brandNameInput.value = 'iTakda';
    brandInitialsInput.value = 'I';
    upload.value = '';
    if (pendingLogo) URL.revokeObjectURL(pendingLogo);
    if (logoUrl) URL.revokeObjectURL(logoUrl);
    pendingLogo = logoUrl = '';
    brandImage.src = '../checkpoint-11/references/iTakda-Icon.svg';
    brandImage.hidden = false;
    $('#brand-initials').hidden = true;
    $$('[data-brand-name]').forEach(element => { element.textContent = 'iTakda'; });
    $('.brand').setAttribute('aria-label', 'iTakda home');
    dialog.close();
  });

  $('#toggle-password').addEventListener('click', () => {
    const field = $('#password');
    const showing = field.type === 'password';
    field.type = showing ? 'text' : 'password';
    $('#toggle-password').textContent = showing ? 'Hide' : 'Show';
    $('#toggle-password').setAttribute('aria-label', showing ? 'Hide password' : 'Show password');
  });

  $('#login-form').addEventListener('submit', event => {
    event.preventDefault();
    const email = $('#email');
    const password = $('#password');
    const emailValid = email.validity.valid && email.value.trim() !== '';
    const passwordValid = password.value.trim() !== '';
    $('#email-error').textContent = emailValid ? '' : 'Enter a valid email address.';
    $('#password-error').textContent = passwordValid ? '' : 'Enter a password to continue.';
    email.setAttribute('aria-invalid', String(!emailValid));
    password.setAttribute('aria-invalid', String(!passwordValid));
    if (!emailValid) return email.focus();
    if (!passwordValid) return password.focus();
    const result = model.signIn(email.value, $('#signin-outcome').value);
    if (result.status !== 'signed-in') {
      $('#form-message').textContent = 'We could not sign you in. Check the details or use account recovery.';
      $('#form-message').focus();
      return;
    }
    activeAccount = email.value.trim().toLowerCase();
    $('#form-message').textContent = '';
    if (continueBookingAfterLogin) {
      continueBookingAfterLogin = false;
      model.setBookingOwner(activeAccount);
      location.hash = '#details';
    } else if (linkAfterLogin) {
      linkAfterLogin = false;
      location.hash = '#link';
    } else location.hash = '#account';
  });
  $('#account-booking-link').addEventListener('click', () => { continueBookingAfterLogin = true; });

  $('#registration-enabled').addEventListener('change', event => model.setRegistrationEnabled(event.target.checked));
  $('#register-form').addEventListener('submit', event => {
    event.preventDefault();
    const email = $('#register-email');
    const password = $('#register-password');
    if (!email.validity.valid || !email.value.trim()) {
      $('#register-error').textContent = 'Enter a valid email address.';
      email.setAttribute('aria-invalid', 'true');
      return email.focus();
    }
    if (!password.value) {
      $('#register-password-error').textContent = 'Enter a password to continue.';
      password.setAttribute('aria-invalid', 'true');
      return password.focus();
    }
    $('#register-error').textContent = '';
    $('#register-password-error').textContent = '';
    email.removeAttribute('aria-invalid');
    password.removeAttribute('aria-invalid');
    const result = model.register(email.value, $('#registration-email-outcome').value);
    $('#simulate-verification').hidden = result.emailDelivery !== 'delivered';
    $('#register-message').textContent = result.status === 'registration-disabled'
      ? 'New registration is disabled in this example. Existing verified sign-in and guest booking remain available.'
      : result.status === 'invalid' ? 'Enter a valid email address.'
        : result.emailDelivery === 'failed' ? 'Request received. Simulated email delivery failed; no message was sent.'
          : result.emailDelivery === 'delayed' ? 'Request received. Simulated email delivery is delayed; no message was sent.'
            : 'If the address is eligible, verification instructions would be available. This preview does not send email or reveal account status. Use the button below to simulate an inbox.';
  });
  $('#simulate-verification').addEventListener('click', () => {
    const email = $('#register-email').value.trim().toLowerCase();
    const result = model.verifyAccount(email);
    $('#register-message').textContent = 'The inbox verification step has been simulated. This preview performs no real verification or email delivery.';
    $('#simulate-verification').hidden = true;
  });

  $('#recovery-form').addEventListener('submit', event => {
    event.preventDefault();
    const email = $('#recovery-email');
    if (!email.validity.valid || !email.value.trim()) {
      $('#recovery-error').textContent = 'Enter a valid email address.';
      email.setAttribute('aria-invalid', 'true');
      return email.focus();
    }
    email.removeAttribute('aria-invalid');
    $('#recovery-error').textContent = '';
    const delivery = $('#recovery-delivery').value;
    model.simulateEmail('recovery', delivery);
    $('#recovery-message').textContent = delivery === 'failed'
      ? 'If the account is eligible, recovery instructions would be sent. The simulated delivery failed; no email was sent. Account status remains private.'
      : delivery === 'delayed'
        ? 'If the account is eligible, recovery instructions would be sent. Simulated delivery is delayed; no email was sent. Account status remains private.'
        : 'If the account is eligible, recovery instructions would be sent. This preview does not send email or reveal account status.';
  });

  function selectionLabel() {
    const selection = model.bookingSelection();
    const service = { consultation: 'General consultation', service: 'Service appointment', followup: 'Follow-up visit' }[selection.service] || 'Choose a service';
    const date = selection.date ? new Intl.DateTimeFormat('en', { timeZone: 'UTC', weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${selection.date}T12:00:00Z`)) : 'Choose a date';
    return `${service} · ${date} · ${selection.time || 'Choose a time'}`;
  }

  $('#booking-service').addEventListener('change', event => {
    model.selectService(event.target.value);
    event.target.removeAttribute('aria-invalid');
    bookingNotice = '';
    $('#booking-selection-message').textContent = 'Choose a date and an available time.';
  });
  $('#booking-date').addEventListener('change', event => {
    model.selectDate(event.target.value);
    event.target.removeAttribute('aria-invalid');
    bookingNotice = '';
    $$('[name="booking-time"]').forEach(radio => { radio.checked = false; });
    $('#booking-selection-message').textContent = event.target.value === '2027-06-13'
      ? 'No times are available in this example for Sunday. Monday has fictional alternatives.'
      : 'Choose an available time. The selection is not a reservation.';
  });
  $$('[name="booking-time"]').forEach(radio => radio.addEventListener('change', event => {
    model.selectSlot(event.target.value);
    $$('[name="booking-time"]').forEach(item => item.removeAttribute('aria-invalid'));
    $('#booking-selection-message').textContent = `Selected: ${selectionLabel()}. This is not a reservation.`;
  }));
  $('#booking-form').addEventListener('submit', event => {
    event.preventDefault();
    const selection = model.bookingSelection();
    if (!selection.service || !selection.date || !selection.time) {
      $('#booking-selection-message').textContent = 'Choose a service, a date with availability, and an available time.';
      const missing = !selection.service ? $('#booking-service') : !selection.date ? $('#booking-date') : $('[name="booking-time"]');
      missing.setAttribute('aria-invalid', 'true');
      missing.focus();
      return;
    }
    model.setBookingOwner(activeAccount);
    $('#details-selection').textContent = selectionLabel();
    location.hash = '#details';
  });

  $('#booking-for-other').addEventListener('change', event => {
    $('#attendee-fields').hidden = !event.target.checked;
    if (event.target.checked) $('#attendee-name').focus();
  });
  $('#details-form').addEventListener('submit', event => {
    event.preventDefault();
    const fields = [
      { id: 'booker-name', error: 'booker-name-error', message: 'Enter your name.' },
      { id: 'booker-email', error: 'booker-email-error', message: 'Enter a valid email address.' },
      ...($('#booking-for-other').checked ? [{ id: 'attendee-name', error: 'attendee-name-error', message: 'Enter the attendee name.' }] : [])
    ];
    let invalid = null;
    fields.forEach(({ id, error, message }) => {
      const field = $(`#${id}`);
      const invalidValue = !field.value.trim() || (field.type === 'email' && !field.validity.valid);
      field.setAttribute('aria-invalid', String(invalidValue));
      $(`#${error}`).textContent = invalidValue ? message : '';
      if (invalidValue && !invalid) invalid = field;
    });
    if (invalid) { invalid.focus(); return; }
    const name = $('#booker-name').value.trim();
    $('#review-service').textContent = selectionLabel().split(' · ')[0];
    $('#review-time').textContent = selectionLabel().split(' · ').slice(1).join(' · ');
    $('#review-booker').textContent = name;
    $('#review-attendee').textContent = $('#booking-for-other').checked ? $('#attendee-name').value.trim() : name;
    location.hash = '#review';
  });

  function showBookingOutcome(result) {
    if (result.status === 'confirmed') {
      const appointment = result.appointment || model.confirmation();
      $('#confirmation-reference').textContent = appointment.reference;
      $('#confirmation-service').textContent = appointment.service;
      $('#confirmation-time').textContent = `${appointment.date} · ${appointment.time}`;
      location.hash = '#confirmation';
      return;
    }
    const messages = {
      stale: 'That time is no longer available in this example. No booking was made. Return to availability and choose again.',
      rejected: 'The example request was rejected. No appointment was created.',
      failed: 'The example failed before submission. No appointment was created; your details remain on this screen.',
      unknown: 'Result not yet confirmed. This request may have been accepted. Check its status before taking another action; do not submit again.',
      'unknown-pending': 'Result not yet confirmed. Only a status check is available; a second submission is blocked.',
      incomplete: 'Choose a service, date, and available time before submitting.'
    };
    $('#booking-result').textContent = messages[result.status] || 'The example result is unavailable.';
    $('#booking-result').focus();
    $('#choose-new-time').hidden = result.status !== 'stale';
    if (result.status === 'stale') {
      bookingNotice = 'That time changed in this example. Choose another available time; the selection is not held.';
      $$('[name="booking-time"]').forEach(radio => { radio.checked = false; });
    }
    $('#reconcile-panel').hidden = result.status !== 'unknown' && result.status !== 'unknown-pending';
    $('#submit-booking-button').disabled = result.status === 'unknown' || result.status === 'unknown-pending';
  }
  $('#submit-booking-form').addEventListener('submit', event => {
    event.preventDefault();
    model.setBookingOwner(activeAccount);
    showBookingOutcome(model.submitBooking($('#booking-outcome').value));
  });
  $('#reconcile-booking').addEventListener('click', () => {
    showBookingOutcome(model.reconcileBooking($('#booking-reconciliation').value));
  });
  $('#simulate-booking-email').addEventListener('click', () => {
    const outcome = $('#booking-email-outcome').value;
    model.simulateEmail('booking', outcome);
    $('#booking-email-message').textContent = outcome === 'delivered'
      ? 'Simulated delivery succeeded. No email was sent; the confirmed booking remains available on screen.'
      : outcome === 'delayed'
        ? 'Simulated delivery is delayed. The confirmed booking remains available on screen; no email was sent.'
        : 'Simulated delivery failed. The confirmed booking remains available on screen; no email was sent.';
  });

  $('#manage-form').addEventListener('submit', event => {
    event.preventDefault();
    const input = $('#manage-reference');
    if (!input.value.trim()) { $('#manage-error').textContent = 'Enter an appointment reference.'; input.setAttribute('aria-invalid', 'true'); input.focus(); return; }
    $('#manage-error').textContent = '';
    input.removeAttribute('aria-invalid');
    const result = model.requestGuestAccess(input.value, $('#manage-proof').value === 'established');
    if (result.status !== 'scoped') {
      $('#manage-message').textContent = 'We could not confirm access to that appointment. Check your details or use the approved support route.';
      $('#manage-message').focus();
      return;
    }
    currentGuestReference = result.appointment.reference;
    currentChangeAuthorized = true;
    guestProofEstablished = true;
    location.hash = '#manage-detail';
  });

  function renderManagedAppointment() {
    const appointment = model.appointment(currentGuestReference);
    if (!appointment) return;
    $('#manage-detail-reference').textContent = appointment.reference;
    $('#manage-detail-service').textContent = appointment.service;
    $('#manage-detail-time').textContent = `${appointment.date} · ${appointment.time}`;
    $('#manage-detail-status').textContent = appointment.booking;
  }
  function showChangeResult(result) {
    const messages = {
      cancelled: 'Appointment cancelled in this fictional example. The result is established; no email was sent.',
      rescheduled: 'Appointment rescheduled in this fictional example. The new time is established; no email was sent.',
      rejected: 'The change was rejected. The existing appointment remains unchanged.',
      stale: 'The appointment changed since this view. No change was applied; review the current details.',
      failed: 'The example failed before submission. The current appointment remains unchanged.',
      'held-for-review': 'This appointment is held for assigned review. Self-service changes are unavailable; the scheduled appointment remains unchanged.',
      unknown: 'Result not yet confirmed. The appointment may have changed. Check status; do not submit another change.',
      'unknown-pending': 'Result not yet confirmed. Only a status check is available; another change is blocked.',
      denied: 'This action is not available for the current example.'
    };
    $('#change-message').textContent = messages[result.status] || 'The example result is unavailable.';
    $('#change-message').focus();
    $('#change-reconcile').hidden = result.status !== 'unknown' && result.status !== 'unknown-pending';
    $('#change-submit').disabled = result.status === 'unknown' || result.status === 'unknown-pending' || result.status === 'held-for-review';
    $('#change-email-panel').hidden = result.status !== 'cancelled' && result.status !== 'rescheduled';
    renderManagedAppointment();
    const appointment = model.appointment(currentGuestReference);
    $('#guest-access-email-panel').hidden = !guestProofEstablished || !appointment || appointment.linkStatus === 'held' || appointment.booking !== 'Scheduled';
  }
  $('#change-form').addEventListener('submit', event => {
    event.preventDefault();
    const action = $('#change-action').value;
    const result = model.requestAppointmentChange(currentGuestReference, action, $('#change-outcome').value, currentChangeAuthorized,
      action === 'reschedule' ? { date: '2027-06-14', time: '10:30' } : {});
    showChangeResult(result);
  });
  $('#reconcile-change').addEventListener('click', () => showChangeResult(model.reconcileAppointmentChange(currentGuestReference, $('#change-reconciliation').value)));
  $('#simulate-change-email').addEventListener('click', () => {
    const event = $('#change-action').value === 'cancel' ? 'cancellation' : 'reschedule';
    const outcome = $('#change-email-delivery').value;
    model.simulateEmail(event, outcome);
    $('#change-email-message').textContent = outcome === 'failed'
      ? `The ${event} is established in this example. Simulated email delivery failed; no email was sent and the appointment status is unchanged.`
      : outcome === 'delayed'
        ? `The ${event} is established in this example. Simulated email delivery is delayed; no email was sent and the appointment status is unchanged.`
        : `The ${event} is established in this example. Delivery is shown as simulated only; no email was sent.`;
  });
  $('#simulate-guest-access-email').addEventListener('click', () => {
    const access = model.requestGuestAccess(currentGuestReference, guestProofEstablished);
    if (access.status !== 'scoped') {
      $('#guest-access-email-message').textContent = 'Guest access is not available in the current example; no message was sent.';
      return;
    }
    const outcome = $('#guest-access-delivery').value;
    model.simulateEmail('guest-access', outcome);
    $('#guest-access-email-message').textContent = outcome === 'failed'
      ? 'The access instruction is simulated for this appointment only. Delivery failed; no email was sent, and the message itself is not proof.'
      : outcome === 'delayed'
        ? 'The access instruction is simulated for this appointment only. Delivery is delayed; no email was sent, and the message itself is not proof.'
        : 'The access instruction is simulated for this appointment only. No email was sent, and the message itself is not proof.';
  });

  function renderAccount() {
    const records = model.dashboard(activeAccount);
    const list = $('#account-appointments');
    list.replaceChildren();
    $('#account-empty').hidden = records.length > 0;
    records.forEach(record => {
      const article = document.createElement('article');
      article.className = 'account-row';
      const details = document.createElement('div');
      const title = document.createElement('h2');
      title.textContent = record.service;
      const time = document.createElement('p');
      time.textContent = `${record.date} · ${record.time} · ${record.reference}`;
      const status = document.createElement('p');
      status.textContent = `Booking status: ${record.booking}`;
      const action = document.createElement('button');
      action.type = 'button';
      action.className = 'button button-secondary';
      action.textContent = 'Manage this appointment';
      action.addEventListener('click', () => {
        currentGuestReference = record.reference;
        currentChangeAuthorized = true;
        guestProofEstablished = false;
        location.hash = '#manage-detail';
      });
      details.append(title, time, status, action);
      article.append(details);
      list.append(article);
    });
  }
  $('#sign-out').addEventListener('click', () => {
    activeAccount = '';
    guestProofEstablished = false;
    location.hash = '#home';
  });

  $('#link-form').addEventListener('submit', event => {
    event.preventDefault();
    const reference = $('#link-reference').value.trim();
    if (!reference) { $('#link-error').textContent = 'Enter an appointment reference.'; $('#link-reference').setAttribute('aria-invalid', 'true'); $('#link-reference').focus(); return; }
    $('#link-error').textContent = '';
    $('#link-reference').removeAttribute('aria-invalid');
    const proof = $('#link-proof').value === 'established';
    const result = model.linkGuestAppointment(reference, activeAccount, { proof, confirmed: $('#link-confirm').checked });
    const messages = {
      linked: 'This appointment is linked in the current browser preview only. No real record was changed.',
      denied: 'We could not confirm this individual link. Matching details, sign-in, and reference alone do not establish authority.',
      'confirmation-required': 'Confirm the link for this specific appointment before continuing.',
      'held-for-review': 'This claim is held for assigned case review. It does not cancel or alter the appointment.'
    };
    $('#link-message').textContent = messages[result.status] || 'This request is not available in the example.';
    $('#link-message').focus();
    if (result.status === 'linked') setTimeout(() => { location.hash = '#account'; }, 500);
  });
  $('#dispute-link').addEventListener('click', () => {
    const result = model.disputeGuestAppointment($('#link-reference').value, activeAccount);
    $('#link-message').textContent = result.status === 'held-for-review'
      ? 'The claim is held for assigned case review. The appointment remains scheduled; self-service changes are not made here.'
      : 'This example cannot place a review hold for the supplied appointment.';
    $('#link-message').focus();
  });

  window.addEventListener('beforeunload', () => {
    if (pendingLogo) URL.revokeObjectURL(pendingLogo);
    if (logoUrl) URL.revokeObjectURL(logoUrl);
  });
})();
