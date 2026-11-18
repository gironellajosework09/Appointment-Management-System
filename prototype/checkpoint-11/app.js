(() => {
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  $$('a[href="#booking"]:not(.guest-exit)').forEach(link => { link.textContent = 'Book appointment'; });
  $('.page[data-page="booking"] h1').textContent = 'Book appointment';
  const navIcon = path => `<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${path}"/></svg>`;
  $$('.back:not(:has(svg))').forEach(link => link.insertAdjacentHTML('afterbegin', navIcon('M15 5 8 12l7 7')));
  $('#side-toggle').insertAdjacentHTML('afterbegin', navIcon('M4 7h16M4 12h16M4 17h16'));
  $('#customer-drawer-close').insertAdjacentHTML('afterbegin', navIcon('M5 5l14 14M19 5 5 19'));
  const appPages = new Set(['dashboard','booking','review','confirmation','appointments','calendar','manage','link','profile','staff-today','staff-appointments','staff-attendance','staff-new','staff-roster','staff-reconcile','staff-exception','staff-profile','admin-overview','admin-appointments','admin-services','admin-schedules','admin-access','admin-organization','admin-review','admin-profile']);
  const demoAccount = 'alex@example.test';
  const exampleVisits = [
    {reference:'ITK-1042',service:'General consultation',dateKey:'2027-06-14',time:'10:30 AM',status:'Scheduled',qrEligible:true,qrToken:'DEMO-QR-1042'},
    {reference:'ITK-1031',service:'Follow-up visit',dateKey:'2027-06-03',time:'9:00 AM',status:'Scheduled',attendance:'Arrived',serviceOutcome:'Completed'},
    {reference:'ITK-1034',service:'Service appointment',dateKey:'2027-06-08',time:'2:00 PM',status:'Cancelled'},
    {reference:'ITK-1038',service:'General consultation',dateKey:'2027-06-10',time:'10:30 AM',status:'Scheduled',attendance:'No-show'},
    {reference:'ITK-1045',service:'Service appointment',dateKey:'2027-06-16',time:'9:00 AM',status:'Scheduled'},
    {reference:'ITK-1046',service:'Follow-up visit',dateKey:'2027-06-18',time:'2:00 PM',status:'Rescheduled'},
    {reference:'ITK-1047',service:'General consultation',dateKey:'2027-06-23',time:'3:30 PM',status:'Scheduled'},
    {reference:'ITK-1048',service:'Service appointment',dateKey:'2027-07-08',time:'10:30 AM',status:'Scheduled'},
    {reference:'ITK-1026',service:'Follow-up visit',dateKey:'2027-05-27',time:'2:00 PM',status:'Scheduled',attendance:'Arrived',serviceOutcome:'Completed'},
    {reference:'ITK-1049',service:'Service appointment',dateKey:'2027-06-15',time:'9:00 AM',status:'Scheduled'},
    {reference:'ITK-1050',service:'General consultation',dateKey:'2027-06-22',time:'10:30 AM',status:'Rescheduled'},
    {reference:'ITK-1051',service:'Follow-up visit',dateKey:'2027-06-25',time:'2:00 PM',status:'Cancelled'},
    {reference:'ITK-1052',service:'Service appointment',dateKey:'2027-06-29',time:'3:30 PM',status:'Scheduled'},
    {reference:'ITK-1053',service:'General consultation',dateKey:'2027-07-12',time:'9:00 AM',status:'Scheduled'}
  ].map(visit=>({ ...visit, date:new Date(`${visit.dateKey}T12:00:00Z`).toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}), accountEmail:demoAccount, source:'Fictional appointment in this demo account' }));
  exampleVisits.push({reference:'ITK-1037',service:'General consultation',dateKey:'2027-06-21',date:'Monday, 21 June 2027',time:'9:00 AM',status:'Scheduled',qrEligible:true,qrToken:'DEMO-QR-1037',accountEmail:null,booker:'Guest booker',attendee:'Guest attendee',source:'Fictional guest booking; not linked to a customer account'});
  const state = { signedIn: false, role: 'customer', email: demoAccount, accountKey:demoAccount, name: 'Alex Rivera', booking: null, appointments: exampleVisits, unknown: false, dashboardEmpty: false };
  const customerAppointments = () => state.appointments.filter(item=>state.signedIn && item.accountEmail?.toLowerCase()===state.accountKey);
  const formatDate = value => new Date(`${value}T12:00:00Z`).toLocaleDateString('en-GB', { weekday:'long', day:'numeric', month:'long', year:'numeric', timeZone:'UTC' });
  const dateKey = date => `${date.getUTCFullYear()}-${String(date.getUTCMonth()+1).padStart(2,'0')}-${String(date.getUTCDate()).padStart(2,'0')}`;
  const fromKey = value => new Date(`${value}T12:00:00Z`);
  const addDays = (value, count) => { const next=fromKey(value); next.setUTCDate(next.getUTCDate()+count); return dateKey(next); };
  const dayState = value => { const date=fromKey(value); if ([0,6].includes(date.getUTCDay())) return 'closed'; if (date.getUTCDate() % 9 === 6) return 'full'; return 'available'; };
  let bookingMonth = new Date(Date.UTC(2027,5,1,12));
  let selectedDay = '';
  let calendarDate = '2027-06-14';
  let calendarMode = 'month';
  const iconPaths = {
    dashboard:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    booking:'<path d="M12 5v14M5 12h14"/><circle cx="12" cy="12" r="9"/>',
    appointments:'<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 3v4M16 3v4M4 10h16M8 15h8M8 18h5"/>',
    calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18M8 14h3v3H8z"/>',
    manage:'<path d="M4 12a8 8 0 1 1 2.3 5.7M4 17v-5h5M9 12h6M15 12l-2-2M15 12l-2 2"/>',
    link:'<path d="M10 14a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.2 1.2M14 10a5 5 0 0 0-7.1 0l-2 2a5 5 0 0 0 7.1 7.1l1.2-1.2"/>',
    settings:'<path d="M4 7h16M4 17h16M9 4v6M15 14v6"/><circle cx="9" cy="7" r="2"/><circle cx="15" cy="17" r="2"/>',
    profile:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    logout:'<path d="M10 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5M14 8l4 4-4 4M8 12h10"/>',
    arrow:'<path d="M4 12h15M13 6l6 6-6 6"/>'
  };
  function addIcon(el, name) {
    if (!el || !iconPaths[name]) return;
    const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('viewBox','0 0 24 24'); svg.setAttribute('aria-hidden','true'); svg.setAttribute('class','ui-icon');
    svg.innerHTML = iconPaths[name]; el.prepend(svg);
  }
  $$('.sidebar [data-page]:not(.customer-person), .app-mobile-nav a').forEach(el => addIcon(el, el.getAttribute('data-page') || ({'#dashboard':'dashboard','#booking':'booking','#appointments':'appointments','#calendar':'calendar','#manage':'manage','#profile':'profile'})[el.getAttribute('href')]));
  addIcon($('#logout'),'logout'); addIcon($('#mobile-logout'),'logout');
  $$('.hero-actions .button-primary, .page-head .button-primary, .closing .button-primary').forEach(el => addIcon(el,'arrow'));
  function feedback(id, message, tone = '') { const el = $(id); el.textContent = message; el.dataset.tone = tone; }
  // Keep the existing form markup and behavior; enhance each labeled control consistently.
  const touched = new WeakSet();
  const fields = $$('form input:not([type="checkbox"]):not([type="radio"]):not([type="hidden"]), form select');
  fields.forEach(field => {
    if (!field.id) return;
    const label = $$('label[for]').find(item => item.htmlFor === field.id);
    if (!label) return;
    let wrap = field.closest('.floating-field');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'floating-field';
      label.before(wrap);
      wrap.append(field, label);
    }
    if (field.tagName === 'SELECT') wrap.classList.add('select-field');
    else if (field.type === 'file') wrap.classList.add('file-field');
    else field.setAttribute('placeholder', ' ');
    let error = document.getElementById(`${field.id}-error`);
    if (!error) {
      error = document.createElement('p');
      error.id = `${field.id}-error`;
      error.className = 'field-error';
      error.setAttribute('aria-live', 'polite');
      wrap.after(error);
    }
    field.setAttribute('aria-describedby', [...new Set([...(field.getAttribute('aria-describedby') || '').split(/\s+/).filter(Boolean), error.id])].join(' '));
    field.addEventListener('blur', () => { touched.add(field); validateField(field); });
    field.addEventListener('input', () => { if (touched.has(field)) validateField(field); });
    field.addEventListener('change', () => { if (touched.has(field)) validateField(field); });
  });
  $$('form').forEach(form => form.noValidate = true);
  function validateField(field) {
    const error = document.getElementById(`${field.id}-error`);
    if (!error) return true;
    const label = document.querySelector(`label[for="${field.id}"]`)?.textContent.trim() || 'This field';
    const value = field.value.trim();
    const message = field.type === 'file' ? error.textContent : field.required && !value ? `Enter ${label.toLowerCase()}.` :
      field.validity.typeMismatch ? `Enter a valid ${label.toLowerCase()}.` :
      field.validity.tooLong ? `${label} is too long.` : '';
    error.textContent = message;
    if (message) field.setAttribute('aria-invalid', 'true');
    else field.removeAttribute('aria-invalid');
    return !message;
  }
  function validateForm(form) {
    const invalid = [...form.querySelectorAll('input:not([type="checkbox"]):not([type="radio"]):not([type="hidden"]), select')].filter(field => {
      touched.add(field);
      return !validateField(field);
    });
    if (invalid.length) invalid[0].focus();
    return invalid.length === 0;
  }
  function closeCustomerDrawer(restoreFocus = true) {
    const sidebar=$('.sidebar'), toggle=$('#side-toggle'), backdrop=$('#customer-drawer-backdrop');
    sidebar?.classList.remove('is-open');
    document.body.classList.remove('customer-drawer-open');
    if (backdrop) backdrop.hidden=true;
    toggle?.setAttribute('aria-expanded','false');
    sidebar?.removeAttribute('role'); sidebar?.removeAttribute('aria-modal');
    if (sidebar) sidebar.inert=window.innerWidth<=900;
    const workspace=$('.workspace'); if (workspace) workspace.inert=false;
    if (restoreFocus && toggle && !toggle.closest('[hidden]')) toggle.focus();
  }
  function openCustomerDrawer() {
    const sidebar=$('.sidebar'), toggle=$('#side-toggle'), backdrop=$('#customer-drawer-backdrop');
    if (!sidebar || !toggle || window.innerWidth>900) return;
    sidebar.inert=false;
    sidebar.classList.add('is-open');
    document.body.classList.add('customer-drawer-open');
    if (backdrop) backdrop.hidden=false;
    toggle.setAttribute('aria-expanded','true');
    sidebar.setAttribute('role','dialog'); sidebar.setAttribute('aria-modal','true');
    const workspace=$('.workspace'); if (workspace) workspace.inert=true;
    ($('#customer-drawer-close') || sidebar.querySelector('a,button'))?.focus();
  }
  function route() {
    let page = location.hash.slice(1) || 'home';
    if (!['home','login','register','recovery','how','services'].includes(page) && !appPages.has(page)) page = 'home';
    if (page === 'how' || page === 'services') { document.body.classList.remove('login-view'); show('home'); requestAnimationFrame(() => document.getElementById(page)?.scrollIntoView()); return; }
    if (appPages.has(page) && !state.signedIn && !['booking','review','confirmation','manage'].includes(page)) page = 'login';
    show(appPages.has(page) ? 'app' : page);
    const rolePage = page.startsWith('staff-') || page.startsWith('admin-');
    $('.app').classList.toggle('role-mode', rolePage);
    const customerRoleSelect = $('.work-header .demo-role-control select');
    if (customerRoleSelect) customerRoleSelect.value = state.role;
    document.body.classList.toggle('login-view', page === 'login');
    $('.app').classList.toggle('guest-app', !state.signedIn);
    if (appPages.has(page)) {
      $$('.page').forEach(el => el.hidden = el.dataset.page !== page);
      $$('[data-page]').forEach(el => { if (el.tagName === 'A') { if (el.dataset.page === page) el.setAttribute('aria-current','page'); else el.removeAttribute('aria-current'); } });
      if (page === 'appointments') renderAppointments();
      if (page === 'booking') renderAvailability();
      if (page === 'calendar') renderCalendar();
      if (page === 'dashboard') renderDashboard();
      if (page === 'confirmation') { renderDetails('#confirmation-list'); renderQrPresentation(); }
      if (rolePage) window.renderRoleWorkspace?.(page, state);
      const guestBack = $('#guest-back');
      if (guestBack) {
        guestBack.href = page === 'manage' || page === 'booking' ? '#home' : page === 'review' ? '#booking' : '#home';
        guestBack.lastChild.textContent = page === 'review' ? 'Back to booking' : 'Back to home';
      }
    }
    $('#mobile-nav').hidden = true; $('#menu-toggle').setAttribute('aria-expanded','false');
    $('#app-nav').hidden = true; closeCustomerDrawer(false);
    window.scrollTo(0,0);
    requestAnimationFrame(() => { const heading=rolePage ? $('#role-workspace h1') : appPages.has(page) ? $('.page:not([hidden]) h1') : $('.view:not([hidden]) h1'); if (heading) { heading.setAttribute('tabindex','-1'); heading.focus({preventScroll:true}); } });
  }
  function show(view) {
    $$('.view').forEach(el => el.hidden = el.dataset.view !== view);
    $('#public-header').hidden = view === 'app' && state.signedIn;
    document.body.classList.toggle('home-view', view === 'home');
  }
  function renderDetails(target) {
    const booking = state.booking || state.appointments[0];
    const fields = [['Service',booking.service],['Date',booking.date],['Time',booking.time],['Booker',booking.booker || state.name],['Attendee',booking.attendee || booking.booker || state.name],['Reference',booking.reference || 'Assigned after acceptance']];
    const list = $(target); list.replaceChildren();
    fields.forEach(([label,value]) => { const row = document.createElement('div'); const dt = document.createElement('dt'); const dd = document.createElement('dd'); dt.textContent=label; dd.textContent=value; row.append(dt,dd); list.append(row); });
  }
  function renderAppointments() {
    const list = $('#appointment-list'); list.replaceChildren();
    customerAppointments().forEach(item => { const row=document.createElement('div'); row.className='appointment-row'; const text=document.createElement('div'); const title=document.createElement('h2'); const detail=document.createElement('p'); const status=document.createElement('strong'); title.textContent=item.service; detail.textContent=`${item.date} · ${item.time} · ${item.reference}${item.attendance ? ` · Attendance: ${item.attendance}` : ''}${item.serviceOutcome ? ` · Service: ${item.serviceOutcome}` : ''}`; status.textContent=item.status; text.append(title,detail); row.append(text,status); list.append(row); });
    if (!list.childElementCount) { const empty=document.createElement('p'); empty.className='notice'; empty.textContent='No appointments are linked to this demo account. A guest booking does not appear here simply because someone signs in.'; list.append(empty); }
  }
  function renderAvailability() {
    const grid=$('#availability-grid');
    if (!grid) return;
    const year=bookingMonth.getUTCFullYear(), month=bookingMonth.getUTCMonth();
    $('#availability-month').textContent=bookingMonth.toLocaleDateString('en-GB',{month:'long',year:'numeric',timeZone:'UTC'});
    grid.replaceChildren();
    const leading=(new Date(Date.UTC(year,month,1,12)).getUTCDay()+6)%7;
    const gridStart=addDays(dateKey(new Date(Date.UTC(year,month,1,12))),-leading);
    for (let index=0;index<42;index++) {
      const key=addDays(gridStart,index), date=fromKey(key), outside=date.getUTCMonth()!==month, availability=outside?'outside':dayState(key);
      const button=document.createElement('button'); button.type='button'; button.className=`availability-day ${availability}`;
      button.textContent=String(date.getUTCDate()); button.disabled=availability!=='available';
      button.setAttribute('aria-label',outside?`${formatDate(key)}: outside this month`: `${formatDate(key)}: ${availability} in this fictional example`);
      if (key===selectedDay) { button.classList.add('selected'); button.setAttribute('aria-pressed','true'); }
      button.addEventListener('click',()=>selectDay(key)); grid.append(button);
    }
    $('#booking-calendar-note').textContent='Available, full, and closed dates are fictional examples; effective service policy is unresolved.';
    $('#booking-calendar-note').dataset.tone='';
    renderSlots();
  }
  function selectDay(key) {
    selectedDay=key; $('#date').value=formatDate(key); $('#date').dataset.key=key;
    $('#booking-date-label').textContent=$('#date').value;
    $$('#booking-form [name="time"]').forEach(field=>field.checked=false);
    renderAvailability(); updateBookingSummary();
    $('#availability-grid .selected')?.focus();
  }
  function renderSlots() {
    const slots=$('#availability-slots'); if (!slots) return;
    slots.replaceChildren();
    if (!selectedDay) { slots.textContent='Choose an available date to see example times.'; return; }
    if (dayState(selectedDay)!=='available') { selectedDay=''; $('#date').value=''; $('#booking-date-label').textContent='Choose an available day on the calendar'; slots.textContent='Choose another date.'; return; }
    const times=['9:00 AM','10:30 AM','2:00 PM'];
    const selected=$('#booking-form [name="time"]:checked')?.value;
    times.forEach((time,index)=>{
      const label=document.createElement('label'); label.className='availability-slot';
      const input=document.createElement('input'); input.type='radio'; input.name='time'; input.value=time; input.checked=time===selected;
      input.setAttribute('aria-describedby','time-error');
      input.addEventListener('change',()=>{ $('#time-error').textContent=''; updateBookingSummary(); });
      const caption=document.createElement('span'); caption.textContent=time;
      const hint=document.createElement('small'); hint.textContent=index===1?'Popular example time':'Example slot';
      label.append(input,caption,hint); slots.append(label);
    });
  }
  function renderCalendar() {
    const host=$('#calendar-week-content'); if (!host) return;
    const selected=fromKey(calendarDate);
    const weekStart=addDays(calendarDate,-((selected.getUTCDay()+6)%7));
    const range=calendarMode==='month'
      ? selected.toLocaleDateString('en-GB',{month:'long',year:'numeric',timeZone:'UTC'})
      : calendarMode==='week'
        ? `${fromKey(weekStart).toLocaleDateString('en-GB',{day:'numeric',month:'short',timeZone:'UTC'})}–${fromKey(addDays(weekStart,6)).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'})}`
        : selected.toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric',timeZone:'UTC'});
    $('#calendar-range').textContent=range;
    $('#calendar-date-input').value=`${String(selected.getUTCMonth()+1).padStart(2,'0')}/${String(selected.getUTCDate()).padStart(2,'0')}/${selected.getUTCFullYear()}`;
    $('#calendar-date-input').removeAttribute('aria-invalid');
    $('#calendar-date-error').textContent='';
    $('#calendar-prev').setAttribute('aria-label',`Previous ${calendarMode}`);
    $('#calendar-next').setAttribute('aria-label',`Next ${calendarMode}`);
    $$('[data-calendar-mode]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.calendarMode===calendarMode)));
    host.replaceChildren();
    host.className=`calendar-week-content calendar-${calendarMode}`;
    const appointments=key=>customerAppointments().filter(item=>item.dateKey===key);
    const asideDate=$('#calendar-aside-date'), asideList=$('#calendar-aside-list');
    if (asideDate && asideList) {
      asideDate.textContent=formatDate(calendarDate);
      asideList.replaceChildren();
      const selectedVisits=appointments(calendarDate);
      if (!selectedVisits.length) {
        const empty=document.createElement('p'); empty.textContent='No demo appointments on this date.'; asideList.append(empty);
      } else selectedVisits.forEach(item=>{
        const row=document.createElement('li');
        const time=document.createElement('strong'); time.textContent=item.time;
        const detail=document.createElement('span'); detail.textContent=`${item.service} · ${item.status}`;
        row.append(time,detail); asideList.append(row);
      });
    }
    const card=(item,compact=false)=>{
      const link=document.createElement('a'); link.href='#appointments'; link.className='week-event'; link.dataset.status=item.status;
      const title=document.createElement('strong'); title.textContent=compact?`${item.time} · ${item.service}`:item.service;
      const detail=document.createElement('small'); detail.textContent=compact?item.status:`${item.time} · ${item.status}${item.attendance ? ` · ${item.attendance}` : ''}${item.serviceOutcome ? ` · ${item.serviceOutcome}` : ''} · ${item.reference}`;
      link.append(title,detail); return link;
    };
    if (calendarMode==='month') {
      const weekdays=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
      weekdays.forEach(day=>{ const label=document.createElement('span'); label.className='month-weekday'; label.textContent=day; host.append(label); });
      const year=selected.getUTCFullYear(), month=selected.getUTCMonth();
      const leading=(new Date(Date.UTC(year,month,1,12)).getUTCDay()+6)%7;
      const gridStart=addDays(dateKey(new Date(Date.UTC(year,month,1,12))),-leading);
      for(let index=0;index<42;index++){
        const key=addDays(gridStart,index), date=fromKey(key), items=appointments(key), cell=document.createElement('div'); cell.className='month-day';
        if(date.getUTCMonth()!==month) cell.classList.add('is-outside');
        if(key===calendarDate) cell.classList.add('is-current');
        const button=document.createElement('button'); button.type='button'; button.className='month-date'; button.textContent=String(date.getUTCDate());
        button.setAttribute('aria-label',`${formatDate(key)}; ${items.length} demo ${items.length===1?'appointment':'appointments'}. Open day view`);
        button.setAttribute('aria-pressed',String(key===calendarDate));
        button.addEventListener('click',()=>{ calendarDate=key; calendarMode=date.getUTCMonth()===month?'day':'month'; renderCalendar(); }); cell.append(button);
        if(items.length){ const count=document.createElement('span'); count.className='month-count'; count.textContent=String(items.length); count.setAttribute('aria-hidden','true'); cell.append(count); }
        items.slice(0,2).forEach(item=>cell.append(card(item,true)));
        if(items.length>2){ const more=document.createElement('button'); more.type='button'; more.className='month-more'; more.textContent=`+${items.length-2} more`; more.addEventListener('click',()=>{ calendarDate=key; calendarMode='day'; renderCalendar(); }); cell.append(more); }
        host.append(cell);
      }
      return;
    }
    const days=calendarMode==='week'?Array.from({length:7},(_,i)=>addDays(weekStart,i)):[calendarDate];
    const hours=['9:00 AM','10:30 AM','2:00 PM','3:30 PM'];
    const timeOrder=value=>{ const match=value.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i); return match?(Number(match[1])%12+(match[3].toUpperCase()==='PM'?12:0))*60+Number(match[2]):9999; };
    days.flatMap(appointments).forEach(item=>{ if(item.time && !hours.includes(item.time)) hours.push(item.time); });
    hours.sort((a,b)=>timeOrder(a)-timeOrder(b));
    const corner=document.createElement('span'); corner.className='week-grid-corner'; corner.textContent='Time'; host.append(corner);
    days.forEach(key=>{ const heading=document.createElement('h2'); heading.className='week-day-head'; heading.textContent=fromKey(key).toLocaleDateString('en-GB',{weekday:'short',day:'numeric',timeZone:'UTC'}); host.append(heading); });
    hours.forEach(time=>{ const stamp=document.createElement('div'); stamp.className='week-time-label'; stamp.textContent=time; host.append(stamp);
      days.forEach(key=>{ const cell=document.createElement('div'); cell.className='week-time-cell'; appointments(key).filter(item=>item.time===time).forEach(item=>cell.append(card(item))); host.append(cell); });
    });
  }
  function renderQrPresentation() {
    const host=$('#confirmation-qr'); if (!host) return;
    host.replaceChildren();
    const booking=state.booking;
    if (!booking?.reference || !booking.qrEligible || booking.status!=='Scheduled') { host.textContent='No eligible QR presentation for this outcome.'; return; }
    const title=document.createElement('h2'); title.textContent='Appointment lookup presentation';
    const marker=document.createElement('div'); marker.className='qr-demo-mark'; marker.setAttribute('aria-hidden','true'); marker.textContent='QR preview';
    const token=document.createElement('code'); token.textContent=booking.qrToken;
    const note=document.createElement('p'); note.textContent='Illustrative QR marker only; use the demo lookup code above in Staff → Attendance. QR lifecycle and encoded content remain undecided. This does not prove identity or check in the attendee.';
    const ref=document.createElement('p'); ref.textContent=`Human-readable reference: ${booking.reference}`;
    host.append(title,marker,token,ref,note);
  }
  function renderDashboard() {
    const page = $('.page[data-page="dashboard"]');
    let control = $('#dashboard-preview-toggle');
    if (!control) {
      control = document.createElement('button');
      control.id = 'dashboard-preview-toggle';
      control.type = 'button';
      control.className = 'dashboard-preview-toggle';
      page.querySelector('.page-head').after(control);
      control.addEventListener('click', () => { state.dashboardEmpty = !state.dashboardEmpty; renderDashboard(); });
    }
    control.textContent = state.dashboardEmpty ? 'Show appointment example' : 'Preview empty state';
    const stage = page.querySelector('.dashboard-stage');
    const lower = page.querySelector('.dashboard-lower');
    let empty = $('#dashboard-empty');
    if (!empty) {
      empty = document.createElement('div');
      empty.id = 'dashboard-empty';
      empty.className = 'dashboard-empty';
      const title = document.createElement('h2');
      title.textContent = 'No upcoming appointments';
      const note = document.createElement('p');
      note.textContent = 'This demo account has no visits on its schedule. Choose a service and time when you are ready.';
      const action = document.createElement('a');
      action.href = '#booking'; action.className = 'button button-primary'; action.textContent = 'Book appointment';
      empty.append(title, note, action);
      stage.before(empty);
    }
    const next = customerAppointments().find(item=>['Scheduled','Rescheduled'].includes(item.status) && item.attendance !== 'No-show' && item.serviceOutcome !== 'Completed');
    const hasAppointment = !state.dashboardEmpty && Boolean(next);
    stage.hidden = lower.hidden = !hasAppointment;
    empty.hidden = hasAppointment;
    if (hasAppointment) {
      page.querySelector('.feature-details h2').textContent = next.service;
      page.querySelector('.feature-status').textContent = `${next.status} · ${next.source || 'Fictional demo account appointment'}`;
      page.querySelector('.feature-details p').textContent = `${next.time} · Northside Service Studio`;
      const date=fromKey(next.dateKey || '2027-06-14');
      page.querySelector('.feature-date strong').textContent=String(date.getUTCDate());
      page.querySelector('.feature-date span').textContent=date.toLocaleDateString('en-GB',{weekday:'long',month:'long',year:'numeric',timeZone:'UTC'});
      page.querySelector('.agenda-line > span').textContent=date.toLocaleDateString('en-GB',{day:'numeric',month:'short',timeZone:'UTC'});
      page.querySelector('.agenda-line strong').textContent=next.service;
      page.querySelector('.agenda-line small').textContent=`${next.time} · ${next.status}`;
    }
    window.renderDemoMetrics?.();
  }
  $('.skip').addEventListener('click', event => {
    event.preventDefault();
    const target = $$('#main h1').find(heading => heading.getClientRects().length) || $('#main');
    target.setAttribute('tabindex', '-1');
    target.classList.add('skip-destination');
    target.addEventListener('blur', () => target.classList.remove('skip-destination'), { once: true });
    target.focus();
  });
  window.addEventListener('hashchange', route); route();
  $('#menu-toggle').addEventListener('click', () => { const nav=$('#mobile-nav'); nav.hidden=!nav.hidden; $('#menu-toggle').setAttribute('aria-expanded',String(!nav.hidden)); });
  $('#side-toggle').addEventListener('click', () => $('.sidebar').classList.contains('is-open') ? closeCustomerDrawer() : openCustomerDrawer());
  $('#customer-drawer-close')?.addEventListener('click',()=>closeCustomerDrawer());
  $('#customer-drawer-backdrop')?.addEventListener('click',()=>closeCustomerDrawer());
  document.addEventListener('keydown', event=>{
    const sidebar=$('.sidebar'); if (!sidebar?.classList.contains('is-open')) return;
    if (event.key==='Escape') { event.preventDefault(); closeCustomerDrawer(); return; }
    if (event.key!=='Tab') return;
    const items=[...sidebar.querySelectorAll('a[href],button:not([disabled])')].filter(item=>!item.hidden);
    if (!items.length) return;
    if (event.shiftKey && document.activeElement===items[0]) { event.preventDefault(); items.at(-1).focus(); }
    else if (!event.shiftKey && document.activeElement===items.at(-1)) { event.preventDefault(); items[0].focus(); }
  });
  window.addEventListener('resize',()=>{ const sidebar=$('.sidebar'); if(!sidebar) return; if(window.innerWidth>900 && sidebar.classList.contains('is-open')) closeCustomerDrawer(false); else if(!sidebar.classList.contains('is-open')) sidebar.inert=window.innerWidth<=900; });
  function signOut() { state.signedIn=false; state.role='customer'; state.email='alex@example.test'; location.hash='home'; }
  window.itakdaPreview = { state, signOut,
    lookupByQr(token) { const item=state.appointments.find(visit=>visit.qrEligible && visit.qrToken===token.trim()); return item ? { ...item } : null; },
    lookupByReference(ref) { const item=state.appointments.find(visit=>visit.reference.toLowerCase()===ref.trim().toLowerCase()); return item ? { ...item } : null; },
    switchRole(role) { state.signedIn=true; state.role=role; location.hash=role==='staff'?'staff-today':role==='admin'?'admin-overview':'dashboard'; route(); } };
  const roleLabel = document.createElement('label');
  roleLabel.className = 'demo-role-control';
  roleLabel.textContent = 'Demo role preview ';
  const roleSelect = document.createElement('select');
  roleSelect.setAttribute('aria-label','Demo role preview');
  [['customer','Customer'],['staff','Staff'],['admin','Administrator']].forEach(([value,label]) => { const option=document.createElement('option'); option.value=value; option.textContent=label; roleSelect.append(option); });
  roleSelect.addEventListener('change', () => window.itakdaPreview.switchRole(roleSelect.value));
  roleLabel.append(roleSelect);
  $('.work-header').append(roleLabel);
  $('#logout').addEventListener('click',signOut); $('#mobile-logout').addEventListener('click',signOut);
  const loginEmail = $('#login-email');
  const loginPassword = $('#login-password');
  $('#password-toggle').addEventListener('click', e => {
    const reveal = loginPassword.type === 'password';
    loginPassword.type = reveal ? 'text' : 'password';
    e.currentTarget.textContent = reveal ? 'Hide' : 'Show';
    e.currentTarget.setAttribute('aria-label', reveal ? 'Hide password' : 'Show password');
    e.currentTarget.setAttribute('aria-pressed', String(reveal));
  });
  $('#login-form').addEventListener('submit', e => {
    e.preventDefault();
    if (!validateForm(e.target)) return;
    state.signedIn = true;
    state.email = loginEmail.value.trim(); state.accountKey=state.email.toLowerCase();
    $('#account-email').textContent = state.email;
    location.hash = 'dashboard';
  });
  $('#register-form').addEventListener('submit', e => { e.preventDefault(); if (!validateForm(e.target)) return; if ($('#registration-state').value==='disabled') { feedback('#register-feedback','New registration is disabled in this example. Existing verified accounts may still sign in, and guest booking remains open.','bad'); return; } const delivery=$('#registration-delivery').value; feedback('#register-feedback',delivery==='delivered'?'Example verification email delivered in this simulation. No message was actually sent.':delivery==='delayed'?'Example verification email is delayed. Account access remains pending in this simulation.':'Example verification email failed. Account access remains pending in this simulation.',delivery==='delivered'?'good':'bad'); });
  $('#recovery-form').addEventListener('submit', e => { e.preventDefault(); if (!validateForm(e.target)) return; feedback('#recovery-feedback','If this were an eligible account, recovery instructions would be sent. No email was sent here.','good'); });
  $('#for-other').addEventListener('change', e => { $('#attendee-wrap').hidden=!e.target.checked; $('#attendee').required=e.target.checked; if (e.target.checked) $('#attendee').focus(); });
  $$('.service-card').forEach(card=>card.addEventListener('click',()=>{
    $('#service').value=card.dataset.service;
    $('#service-error').textContent='';
    $$('.service-card').forEach(item=>{ item.setAttribute('aria-pressed',String(item===card)); item.querySelector('small').textContent=item===card?'Selected':'Select service'; });
    $('#service').dispatchEvent(new Event('change',{bubbles:true}));
  }));
  $('#service').addEventListener('change',()=>$$('.service-card').forEach(card=>{ const chosen=card.dataset.service===$('#service').value; card.setAttribute('aria-pressed',String(chosen)); card.querySelector('small').textContent=chosen?'Selected':'Select service'; }));
  function changeBookingMonth(offset) { bookingMonth.setUTCMonth(bookingMonth.getUTCMonth()+offset); selectedDay=''; $('#date').value=''; $('#booking-date-label').textContent='Choose an available day on the calendar'; renderAvailability(); updateBookingSummary(); }
  $('#availability-prev')?.addEventListener('click',()=>changeBookingMonth(-1));
  $('#availability-next')?.addEventListener('click',()=>changeBookingMonth(1));
  function moveCalendar(direction) {
    if(calendarMode==='month') { const day=fromKey(calendarDate).getUTCDate(), next=fromKey(calendarDate); next.setUTCDate(1); next.setUTCMonth(next.getUTCMonth()+direction); const last=new Date(Date.UTC(next.getUTCFullYear(),next.getUTCMonth()+1,0,12)).getUTCDate(); next.setUTCDate(Math.min(day,last)); calendarDate=dateKey(next); }
    else calendarDate=addDays(calendarDate,direction*(calendarMode==='week'?7:1));
    renderCalendar();
  }
  $('#calendar-prev')?.addEventListener('click',()=>moveCalendar(-1));
  $('#calendar-next')?.addEventListener('click',()=>moveCalendar(1));
  $$('[data-calendar-mode]').forEach(button=>button.addEventListener('click',()=>{ calendarMode=button.dataset.calendarMode; renderCalendar(); }));
  function goToCalendarDate() {
    const field=$('#calendar-date-input'), error=$('#calendar-date-error'), match=/^(\d{2})\/(\d{2})\/(\d{4})$/.exec(field.value.trim());
    const key=match?`${match[3]}-${match[1]}-${match[2]}`:'';
    const date=key?fromKey(key):null;
    if(!date || Number.isNaN(date.getTime()) || dateKey(date)!==key) { error.textContent='Enter a valid date as MM/DD/YYYY.'; field.setAttribute('aria-invalid','true'); field.focus(); return; }
    error.textContent=''; field.removeAttribute('aria-invalid'); calendarDate=key; renderCalendar();
  }
  $('#calendar-date-go')?.addEventListener('click',goToCalendarDate);
  $('#calendar-date-input')?.addEventListener('keydown',event=>{ if(event.key==='Enter'){ event.preventDefault(); goToCalendarDate(); } });
  function updateBookingSummary() {
    $('#summary-service').textContent = $('#service').value || 'Choose a service';
    $('#summary-date').textContent = $('#date').value || 'Choose a date';
    $('#summary-time').textContent = $('#booking-form [name="time"]:checked')?.value || 'Choose a time';
  }
  $('#booking-form').addEventListener('change', updateBookingSummary);
  updateBookingSummary();
  $('#booking-form').addEventListener('submit', e => { e.preventDefault(); const form=e.target; const valid=validateForm(form); const time=form.querySelector('[name="time"]:checked'); const timeError=$('#time-error'); timeError.textContent=time?'':'Choose an available example time.'; $$('#booking-form [name="time"]').forEach(item => time ? item.removeAttribute('aria-invalid') : item.setAttribute('aria-invalid','true')); if (!$('#service').value) { $('#service-error').textContent='Choose a service card to continue.'; $('.service-card')?.focus(); return; } if (!valid) return; if (!selectedDay) { $('#booking-calendar-note').textContent='Choose an available example date on the calendar.'; $('#booking-calendar-note').dataset.tone='bad'; $('#availability-grid button:not([disabled])')?.focus(); return; } $('#booking-calendar-note').dataset.tone=''; if (!time) { form.querySelector('[name="time"]')?.focus(); return; } state.booking={service:$('#service').value,date:$('#date').value,dateKey:selectedDay,time:time.value,booker:$('#booker').value.trim(),attendee:$('#for-other').checked?$('#attendee').value.trim():$('#booker').value.trim(),email:$('#booker-email').value.trim()}; state.unknown=false; $('#confirm-booking').disabled=false; $('#check-status').hidden=true; feedback('#review-feedback',''); renderDetails('#review-list'); location.hash='review'; });
  $('#confirm-booking').addEventListener('click', () => { const result=$('#booking-outcome').value; if (result==='accepted') { const number=1043+state.appointments.length; state.booking.reference=`ITK-${number}`; state.booking.qrToken=`DEMO-QR-${number}`; state.booking.qrEligible=true; state.booking.status='Scheduled'; state.booking.accountEmail=state.signedIn?state.accountKey:null; state.booking.source=state.signedIn?'Fictional booking in this demo account':'Fictional guest booking in this session'; state.appointments.unshift({...state.booking}); state.unknown=false; location.hash='confirmation'; return; } if (result==='unknown') { state.unknown=true; feedback('#review-feedback','Result not yet confirmed. Check status before trying the same booking again. This demo cannot establish an actual outcome.','bad'); $('#confirm-booking').disabled=true; $('#check-status').hidden=false; } else { feedback('#review-feedback',result==='full'?'That example time is unavailable. Choose another time.':'Booking request denied in this example. No appointment was added.','bad'); } });
  $('#check-status').addEventListener('click', () => feedback('#review-feedback','Status still cannot be confirmed in this isolated demo. Seek an authoritative result before another submission.','bad'));
  $('#show-delivery').addEventListener('click', () => { const delivery=$('#booking-delivery').value; feedback('#delivery-feedback',`Confirmation email ${delivery} in this simulation. The accepted booking result does not change; no email was sent.`,delivery==='delivered'?'good':'bad'); });
  $('#booking-outcome').addEventListener('change', () => { if (!state.unknown) $('#confirm-booking').disabled=false; });
  let managedVisit=null;
  // Fictional tab-session illustration, not a production reconciliation mechanism.
  const unresolvedKey = 'itakda-cp11-unresolved-reschedules';
  let rememberedReschedules = [];
  try { const stored=JSON.parse(sessionStorage.getItem(unresolvedKey) || '[]'); if (Array.isArray(stored)) rememberedReschedules=stored; } catch { /* Keep the in-memory demonstration available. */ }
  const unresolvedReschedules = new Set(rememberedReschedules);
  const manageActions=$('#manage-actions');
  const reschedulePanel=document.createElement('div'); reschedulePanel.className='reschedule-preview';
  const rescheduleLabel=document.createElement('label'); rescheduleLabel.htmlFor='reschedule-date'; rescheduleLabel.textContent='Example alternative date';
  const rescheduleDate=document.createElement('select'); rescheduleDate.id='reschedule-date';
  [['2027-06-17','Thursday, 17 June 2027'],['2027-06-18','Friday, 18 June 2027'],['2027-06-21','Monday, 21 June 2027']].forEach(([key,label])=>{ const option=document.createElement('option'); option.value=key; option.textContent=label; rescheduleDate.append(option); });
  const timeLabel=document.createElement('label'); timeLabel.htmlFor='reschedule-time'; timeLabel.textContent='Example alternative time';
  const rescheduleTime=document.createElement('select'); rescheduleTime.id='reschedule-time';
  ['9:00 AM','10:30 AM','2:00 PM'].forEach(value=>{ const option=document.createElement('option'); option.value=value; option.textContent=value; rescheduleTime.append(option); });
  const rescheduleButton=document.createElement('button'); rescheduleButton.type='button'; rescheduleButton.id='reschedule-button'; rescheduleButton.className='button button-outline'; rescheduleButton.textContent='Request reschedule';
  const rescheduleNote=document.createElement('p'); rescheduleNote.className='notice'; rescheduleNote.textContent='These are fictional candidates. Eligibility, cutoff, capacity, and duplicate policy remain unresolved.';
  reschedulePanel.append(rescheduleLabel,rescheduleDate,timeLabel,rescheduleTime,rescheduleButton,rescheduleNote);
  $('#change-button').after(reschedulePanel);
  $('#manage-form').addEventListener('submit', e => { e.preventDefault(); if (!validateForm(e.target)) return; managedVisit=$('#proof').value==='granted' ? state.appointments.find(item=>item.reference.toLowerCase()===$('#reference').value.trim().toLowerCase()) : null; manageActions.hidden=!managedVisit; if (managedVisit) { manageActions.querySelector('h2').textContent=managedVisit.service; manageActions.querySelector('p').textContent=`${managedVisit.date} · ${managedVisit.time} · ${managedVisit.status}`; } feedback('#manage-feedback',managedVisit?'Illustrative appointment-scoped access established. No real proof or identity was verified.':'Access not established. A reference or matching personal details alone cannot authorize a booking. This response reveals no appointment details.',managedVisit?'good':'bad'); });
  function applyChange(kind) {
    if (!managedVisit) return;
    const intent = kind==='reschedule' ? JSON.stringify([managedVisit.reference,rescheduleDate.value,rescheduleTime.value]) : null;
    if (intent && unresolvedReschedules.has(intent)) {
      feedback('#change-feedback','This reschedule remains unresolved. Check an authoritative result before retrying the same request. This preview cannot establish that result.', 'bad');
      return;
    }
    const outcome=$('#change-outcome').value;
    if (outcome==='accepted') {
      if (kind==='cancel') managedVisit.status='Cancelled';
      else { managedVisit.dateKey=rescheduleDate.value; managedVisit.date=formatDate(rescheduleDate.value); managedVisit.time=rescheduleTime.value; managedVisit.status='Rescheduled'; }
      managedVisit.qrEligible=false;
      if (state.booking?.reference===managedVisit.reference) state.booking={...managedVisit};
      manageActions.querySelector('p').textContent=`${managedVisit.date} · ${managedVisit.time} · ${managedVisit.status}`;
      feedback('#change-feedback',`${kind==='cancel'?'Cancellation':'Reschedule'} accepted in this fictional session. The appointment list and calendar now show that state; no real capacity was changed. The former demo QR is no longer offered while lifecycle rules remain open.`, 'good');
    } else if (outcome==='unknown') {
      if (intent) { unresolvedReschedules.add(intent); try { sessionStorage.setItem(unresolvedKey,JSON.stringify([...unresolvedReschedules])); } catch { /* In-memory guard remains active until reload. */ } }
      feedback('#change-feedback','Result unknown. The original state is shown provisionally; check an authoritative result before retry. This preview cannot establish that result.', 'bad');
    } else feedback('#change-feedback','Known rejection. The original appointment remains unchanged.', 'bad');
  }
  $('#change-button').addEventListener('click',()=>applyChange('cancel'));
  rescheduleButton.addEventListener('click',()=>applyChange('reschedule'));
  $('#link-form').addEventListener('submit', e => { e.preventDefault(); if (!validateForm(e.target)) return; const established=$('#link-proof').value==='established' && $('#link-consent').checked; feedback('#link-feedback',established?'This single booking is linked in the demo only. No real proof or account association occurred.':'Link denied. Matching details or a reference alone do not establish original-booker authority.',established?'good':'bad'); });
  $('#brand-form').addEventListener('submit', e => { e.preventDefault(); if (!validateForm(e.target)) return; const name=$('#org-name').value.trim(); $$('[data-org]').forEach(el=>el.textContent=name); $('.wordmark').setAttribute('aria-label',`${name} home`); feedback('#brand-feedback','Organization preview updated for this page session.','good'); });
  $('#org-image').addEventListener('change', e => { const file=e.target.files[0]; const error=$('#org-image-error'); if (!file) { error.textContent=''; return; } if (!['image/png','image/jpeg','image/webp','image/svg+xml'].includes(file.type) || file.size>2_000_000) { error.textContent='Choose a PNG, JPEG, WebP, or SVG under 2 MB.'; e.target.setAttribute('aria-invalid','true'); e.target.value=''; return; } error.textContent=''; e.target.removeAttribute('aria-invalid'); const reader=new FileReader(); reader.onload=()=>{ $$('[data-org-logo], #org-logo').forEach(el => el.src=reader.result); feedback('#brand-feedback','Logo preview updated locally.','good'); }; reader.readAsDataURL(file); });
  $('#profile-form').addEventListener('submit', e => { e.preventDefault(); if (!validateForm(e.target)) return; state.name=$('#profile-name').value.trim(); state.email=$('#profile-email').value.trim(); $('#account-email').textContent=state.email; $('#customer-profile-name').textContent=state.name; $('.customer-person').setAttribute('aria-label',`My Profile — ${state.name}, Customer preview`); $('.customer-person .role-avatar').textContent=state.name.split(/\s+/).map(part=>part[0]).slice(0,2).join('').toUpperCase(); feedback('#profile-feedback','Demo profile updated for this page session. Appointments were not changed.','good'); });
  $('#deactivate').addEventListener('click',()=>feedback('#deactivate-feedback','Deactivation preview only. Account access and appointment records remain unchanged.','good'));
})();
