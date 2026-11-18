// Prepare static, readable prototype controls before app.js attaches its handlers.
(() => {
  const arrow = direction => `<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${direction === 'left' ? 'M15 5 8 12l7 7' : 'M9 5l7 7-7 7'}"/></svg>`;
  const booking = document.querySelector('.page[data-page="booking"]');
  const form = booking.querySelector('#booking-form');
  form.innerHTML = `
    <div class="booking-step"><span>1</span><h2>Choose a service</h2></div>
    <p class="step-intro">These example services illustrate an installation's configured catalog.</p>
    <div class="service-picker" role="group" aria-label="Choose a service" aria-describedby="service-error">
      <button type="button" class="service-card" data-service="General consultation" aria-pressed="false"><strong>General consultation</strong><span>Talk through a request with the service team</span><small>Select service</small></button>
      <button type="button" class="service-card" data-service="Service appointment" aria-pressed="false"><strong>Service appointment</strong><span>A scheduled visit for an existing service</span><small>Select service</small></button>
      <button type="button" class="service-card" data-service="Follow-up visit" aria-pressed="false"><strong>Follow-up visit</strong><span>Continue a previous conversation</span><small>Select service</small></button>
    </div>
    <input id="service" type="hidden"><p id="service-error" class="field-error" role="status"></p>
    <div class="booking-step"><span>2</span><h2>Find a date and time</h2></div>
    <p class="step-intro">Example availability only. Selecting a time does not hold capacity.</p>
    <div class="availability-calendar" aria-label="Example availability calendar">
      <h3 class="availability-title">Choose a date on the calendar</h3>
      <div class="availability-toolbar"><button type="button" id="availability-prev" aria-label="Previous month">${arrow('left')}</button><strong id="availability-month" aria-live="polite">June 2027</strong><button type="button" id="availability-next" aria-label="Next month">${arrow('right')}</button></div>
      <div class="availability-weekdays" aria-hidden="true"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
      <div id="availability-grid" class="availability-grid"></div>
      <p class="availability-legend"><span>Available</span><span>Full</span><span>Closed</span></p>
    </div>
    <input id="date" type="hidden"><p class="selected-booking-date"><strong>Selected date</strong><output id="booking-date-label">Choose an available day on the calendar</output></p>
    <p id="booking-calendar-note" class="step-intro" role="status">Choose an available day to see example times.</p>
    <fieldset><legend>Available example times</legend><div id="availability-slots" class="time-list"></div><p class="field-error" id="time-error" aria-live="polite"></p></fieldset>
    <div class="booking-step"><span>3</span><h2>Who is coming?</h2></div>
    <p class="step-intro">The booker is the contact for this request. The attendee may be someone else; neither role proves identity.</p>
    <div class="form-grid"><div><label for="booker">Booker name</label><input id="booker" required autocomplete="name"></div><div><label for="booker-email">Booker contact email</label><input id="booker-email" type="email" required autocomplete="email"></div></div>
    <label class="check"><input id="for-other" type="checkbox"> I am booking for someone else</label>
    <div id="attendee-wrap" hidden><label for="attendee">Attendee name</label><input id="attendee"></div>
    <p class="step-intro">Service-specific questions require an approved purpose, visibility and retention rule; none is assumed in this example.</p>
    <button class="button button-primary" type="submit">Review booking</button><p class="feedback" id="booking-feedback" role="status"></p>`;
  const summary = booking.querySelector('.booking-summary');
  summary.innerHTML = `<h2>Your selection</h2><dl><div><dt>Service</dt><dd id="summary-service">Choose a service</dd></div><div><dt>Date</dt><dd id="summary-date">Choose a date</dd></div><div><dt>Time</dt><dd id="summary-time">Choose a time</dd></div></dl><p>Review all details before explicitly submitting. No booking is saved by this preview.</p>`;

  const calendar = document.querySelector('.page[data-page="calendar"]');
  calendar.querySelector('.calendar-layout').innerHTML = `<div class="cal-main"><div class="calendar-toolbar"><div class="calendar-view-controls" role="group" aria-label="Calendar view"><button type="button" data-calendar-mode="month" aria-pressed="true">Month</button><button type="button" data-calendar-mode="week" aria-pressed="false">Week</button><button type="button" data-calendar-mode="day" aria-pressed="false">Day</button></div><div class="week-navigation"><button type="button" id="calendar-prev" aria-label="Previous period">${arrow('left')}</button><strong id="calendar-range" aria-live="polite">June 2027</strong><button type="button" id="calendar-next" aria-label="Next period">${arrow('right')}</button></div><div class="calendar-date-jump"><label for="calendar-date-input">Go to date (MM/DD/YYYY)</label><div><input id="calendar-date-input" type="text" inputmode="numeric" autocomplete="off" maxlength="10" value="06/14/2027" aria-describedby="calendar-date-error"><button type="button" id="calendar-date-go" aria-label="Go to date">${arrow('right')}</button></div><p id="calendar-date-error" class="field-error" role="status"></p></div></div><div id="calendar-week-content" class="calendar-week-content"></div></div><aside class="cal-aside"><h2>Selected date</h2><p id="calendar-aside-date">Monday, 14 June 2027</p><ul id="calendar-aside-list" class="calendar-aside-list"></ul><p>Choose a date in the month grid for its full day. Booking status, attendance, and service outcome stay separate.</p><a href="#appointments">View appointment list</a></aside>`;

  calendar.querySelector('#calendar-week-content').insertAdjacentHTML('beforebegin', '<p class="calendar-scroll-hint">Week view: scroll horizontally to see all days.</p>');
  const confirmation = document.querySelector('[data-page="confirmation"]');
  confirmation.querySelector('#confirmation-list').insertAdjacentHTML('afterend', `<div class="confirmation-guidance"><h2>Your visit details</h2><p>Northside Service Studio · Check in at the front desk. Present your reference or eligible QR for lookup; staff identity checks and attendance are separate.</p><p>To request a change, use the scoped Manage booking path or an authorized staff channel. Effective deadlines and proof rules are still to be approved.</p></div><div id="confirmation-qr" class="confirmation-qr" aria-live="polite"></div>`);
})();
