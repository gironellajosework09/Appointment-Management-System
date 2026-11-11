// Charts are calculated from fictional appointment state in this browser session.
(() => {
  const orderedStatuses = ['Scheduled', 'Rescheduled', 'Cancelled'];
  const orderedAttendance = ['Not arrived', 'Arrived', 'No-show'];

  function el(tag, className, content) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (content !== undefined) node.textContent = content;
    return node;
  }

  function countBy(records, field) {
    const counts = new Map();
    records.forEach(record => {
      const label = record[field] || 'Not recorded';
      counts.set(label, (counts.get(label) || 0) + 1);
    });
    return counts;
  }

  function summaryStrip(records, key) {
    const status = countBy(records, 'status');
    const attendance = countBy(records, 'attendance');
    const facts = key === 'staff'
      ? [['Scheduled visits', records.length], ['Arrived', attendance.get('Arrived') || 0], ['No-show', attendance.get('No-show') || 0]]
      : key === 'admin'
        ? [['Example records', records.length], ['Scheduled', status.get('Scheduled') || 0], ['Cancelled', status.get('Cancelled') || 0]]
        : [['Account records', records.length], ['Scheduled', status.get('Scheduled') || 0], ['Rescheduled', status.get('Rescheduled') || 0]];
    const list = el('dl', 'demo-metrics-summary');
    facts.forEach(([label, value]) => {
      const item = el('div');
      item.append(el('dt', '', label), el('dd', '', String(value)));
      list.append(item);
    });
    return list;
  }

  function statusChart(records, field, order) {
    const figure = el('figure', 'demo-metrics-breakdown');
    figure.append(el('figcaption', '', field === 'attendance' ? 'Attendance state' : 'Booking state'));
    const counts = countBy(records, field);
    const labels = [...order.filter(label => counts.has(label)), ...[...counts.keys()].filter(label => !order.includes(label)).sort()];
    const list = el('ul', 'demo-metrics-bars');
    labels.forEach(label => {
      const count = counts.get(label);
      const row = el('li');
      const name = el('span', '', label);
      const track = el('span', 'demo-metrics-track');
      track.setAttribute('aria-hidden', 'true');
      const bar = el('span', 'demo-metrics-bar');
      bar.style.width = `${count / records.length * 100}%`;
      track.append(bar);
      const value = el('strong', '', String(count));
      value.setAttribute('aria-label', `${count} ${label.toLowerCase()} of ${records.length} fictional records`);
      row.append(name, track, value);
      list.append(row);
    });
    figure.append(list);
    return figure;
  }

  function dateChart(records) {
    const dated = records.filter(record => /^\d{4}-\d{2}-\d{2}$/.test(record.dateKey || ''));
    if (!dated.length) return null;
    const figure = el('figure', 'demo-metrics-dates');
    figure.append(el('figcaption', '', 'Dates with appointments'));
    const counts = countBy(dated, 'dateKey');
    const dates = [...counts.keys()].sort();
    const max = Math.max(...counts.values());
    const list = el('ol', 'demo-metrics-date-bars');
    list.style.setProperty('--date-count', dates.length);
    dates.forEach(key => {
      const date = new Date(`${key}T12:00:00Z`);
      const shortDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
      const fullDate = date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
      const row = el('li');
      row.setAttribute('aria-label', `${fullDate}: ${counts.get(key)} fictional ${counts.get(key) === 1 ? 'appointment' : 'appointments'}`);
      const number = el('strong', '', String(counts.get(key)));
      const track = el('span', 'demo-metrics-date-track');
      track.setAttribute('aria-hidden', 'true');
      const bar = el('span', 'demo-metrics-date-bar');
      bar.style.height = `${Math.max(12, counts.get(key) / max * 100)}%`;
      track.append(bar);
      row.append(number, track, el('span', '', shortDate));
      list.append(row);
    });
    figure.append(list);
    if (dated.length !== records.length) figure.append(el('p', 'demo-metrics-date-note', `${records.length - dated.length} undated fictional record${records.length - dated.length === 1 ? '' : 's'} omitted from this date chart.`));
    return figure;
  }

  function drawMetricPanel(container, anchor, key, title, records, field, order, context) {
    container.querySelector('.demo-metrics')?.remove();
    const panel = el('section', 'demo-metrics');
    panel.id = `demo-metrics-${key}`;
    panel.setAttribute('aria-labelledby', `demo-metrics-title-${key}`);
    const header = el('div', 'demo-metrics-head');
    const heading = el('h2', '', title);
    heading.id = `demo-metrics-title-${key}`;
    header.append(heading, el('p', '', `${context} Counts come only from fictional records in this browser session.`));
    panel.append(header);

    if (!records.length) {
      panel.append(el('p', 'demo-metrics-empty', 'No example records to chart yet.'));
      anchor.before(panel);
      return;
    }

    panel.append(summaryStrip(records, key));
    const body = el('div', 'demo-metrics-body');
    const dates = dateChart(records);
    if (dates && key !== 'staff') body.append(dates);
    else body.classList.add('single');
    body.append(statusChart(records, field, order));
    panel.append(body);
    panel.append(el('p', 'demo-metrics-total', `${records.length} fictional ${records.length === 1 ? 'record' : 'records'} represented. Bar lengths show counts within this preview, not a performance measure.`));
    anchor.before(panel);
  }

  window.renderDemoMetrics = () => {
    const page = location.hash.slice(1);
    if (page === 'dashboard') {
      const container = document.querySelector('.page[data-page="dashboard"]');
      const anchor = container?.querySelector('.dashboard-lower');
      const state = window.itakdaPreview?.state;
      const accountRecords = state?.signedIn ? state.appointments.filter(record => record.accountEmail?.toLowerCase() === state.accountKey) : [];
      if (anchor) {
        drawMetricPanel(container, anchor, 'customer', 'Appointments in this account', accountRecords, 'status', orderedStatuses, 'This reflects the demo account list.');
        container.querySelector('.demo-metrics').hidden = Boolean(state?.dashboardEmpty);
      }
    } else if (page === 'staff-today' || page === 'admin-overview') {
      const container = document.querySelector('#role-workspace .role-content');
      const anchor = container?.querySelector('.role-columns');
      const all = window.itakdaRoleSummary?.() || [];
      if (!anchor) return;
      if (page === 'staff-today') {
        const records = all.filter(record => (!record.dateKey || record.dateKey === '2027-06-14') && record.status === 'Scheduled');
        drawMetricPanel(container, anchor, 'staff', 'Attendance on the example day', records, 'attendance', orderedAttendance, '14 June 2027 only.');
      } else {
        drawMetricPanel(container, anchor, 'admin', 'Appointments across example records', all, 'status', orderedStatuses, 'Organization preview only.');
      }
    }
  };

  window.renderDemoMetrics();
})();
