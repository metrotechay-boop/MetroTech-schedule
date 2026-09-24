const schedule = {
  stations: [
    { id: 'year1', title: 'שנה א׳', subtitle: 'כניסה למסלול', icon: '1', intro: 'הכנה לאקדמיה, למידה והיכרות עם הקהילה' },
    { id: 'year2', title: 'שנה ב׳', subtitle: 'בניית מוכנות לתעסוקה', icon: '2', intro: 'קורסים, מיומנויות וכלים לעולם העבודה' },
    { id: 'year3', title: 'שנה ג׳', subtitle: 'העמקת ההשתלבות', icon: '3', intro: 'התמחות, פורטפוליו וחיבור לתעשייה' },
    { id: 'year4', title: 'שנה ד׳', subtitle: 'הכנה לקריירה', icon: '4', intro: 'נטוורקינג, סיורי חברות וחיבור לקהילה' },
    { id: 'stepup', title: 'STEP-UP', subtitle: 'קהילת הנשים', icon: '♛', intro: 'קהילה, השראה וצמיחה משותפת' }
  ],
  events: [
    { id: 'e1', station: 'year1', date: '2026-09-24', time: '18:00', end: '20:00', title: 'הכנה לאקדמיה', location: 'Zoom', zoom: 'https://zoom.us/', feedback: 'https://forms.google.com/', note: 'חן ורקין · למחזורי שנה א׳' },
    { id: 'e2', station: 'year1', date: '2026-10-13', time: '18:00', end: '20:00', title: 'כנס פתיחת שנה', location: 'קמפוס מטרו-טק', feedback: 'https://forms.google.com/', note: 'כל הסטודנטים מוזמנים' },
    { id: 'e3', station: 'year1', date: '2026-11-23', time: '18:30', end: '20:00', title: 'סדנת ניהול פיננסי', location: 'Zoom', zoom: 'https://zoom.us/', feedback: 'https://forms.google.com/', note: 'אליזבת גילאי · ללמוד כיצד' },
    { id: 'e4', station: 'year2', date: '2026-12-04', time: '18:00', end: '20:00', title: 'סדנת הכנה לתקופת מבחנים', location: 'Zoom', zoom: 'https://zoom.us/', feedback: 'https://forms.google.com/', note: 'חן ורקין · למחזורי שנה ב׳' },
    { id: 'e5', station: 'year2', date: '2027-01-14', time: '18:00', end: '20:00', title: 'סדנת קורות חיים ולינקדאין', location: 'קמפוס מטרו-טק', feedback: 'https://forms.google.com/', note: 'כלים לעולם העבודה' },
    { id: 'e6', station: 'year3', date: '2027-02-11', time: '18:00', end: '20:00', title: 'סדנת פורטפוליו', location: 'Zoom', zoom: 'https://zoom.us/', feedback: 'https://forms.google.com/', note: 'הצגת היכולות המקצועיות' },
    { id: 'e7', station: 'year4', date: '2027-03-18', time: '18:00', end: '20:00', title: 'מפגש נטוורקינג', location: 'קמפוס מטרו-טק', feedback: 'https://forms.google.com/', note: 'חיבור לתעשייה' },
    { id: 'e8', station: 'stepup', date: '2027-04-22', time: '19:00', end: '20:30', title: 'קהילת STEP-UP · מפגש השראה', location: 'Zoom', zoom: 'https://zoom.us/', feedback: 'https://forms.google.com/', note: 'מפגש קהילתי לנשים' }
  ],
  deadlines: [
    { date: '2026-11-25', title: 'דיווחי התנדבות · פעימה ראשונה', text: 'הגשה במערכת עד התאריך' },
    { date: '2027-02-25', title: 'דיווחי התנדבות · פעימה שנייה', text: 'הגשה במערכת עד התאריך' },
    { date: '2027-04-30', title: 'שיחה אישית עם הרכזת', text: 'תיאום שיחה אישית לסיכום השנה' },
    { date: '2027-06-15', title: 'דיווחי התנדבות · סיכום שנתי', text: 'השלמת כל שעות ההתנדבות' }
  ],
  scholarships: [
    { date: '2026-11-25', title: 'מלגת קיום', text: 'ב־25 בכל חודש · 3,000 ₪ לחודש' },
    { date: '2026-11-25', title: 'מענק הצטיידות', text: 'תשלום חד-פעמי · 2,500 ₪' },
    { date: '2026-12-25', title: 'מלגת שכר לימוד', text: '2 פעימות של 5,000 ₪' },
    { date: '2027-04-30', title: 'סל סיוע אקדמי', text: '1,100 ₪ לשנה · עדכון לפי זכאות' }
  ]
};

const $ = (selector) => document.querySelector(selector);
let selected = 'year1';
const months = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'];

function formatDate(value) {
  const d = new Date(value + 'T12:00:00');
  return {
    day: d.getDate(),
    month: months[d.getMonth()],
    full: d.toLocaleDateString('he-IL', { day: '2-digit', month: '2-digit', year: 'numeric' })
  };
}

function calendarLinks(event) {
  const start = event.date.replaceAll('-', '') + 'T' + event.time.replace(':', '') + '00';
  const end = event.date.replaceAll('-', '') + 'T' + event.end.replace(':', '') + '00';
  const title = encodeURIComponent(event.title);
  const details = encodeURIComponent((event.note || '') + (event.zoom ? '\nקישור Zoom: ' + event.zoom : ''));
  const location = encodeURIComponent(event.location + (event.zoom ? ' · ' + event.zoom : ''));
  return {
    google: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`,
    outlook: `https://outlook.live.com/calendar/0/deeplink/compose?subject=${title}&startdt=${event.date}T${event.time}:00&enddt=${event.date}T${event.end}:00&body=${details}&location=${location}`
  };
}

function renderStations() {
  const years = schedule.stations.filter((s) => s.id !== 'stepup');
  $('#stations').innerHTML = years.map((s) => `
    <button class="station ${s.id === selected ? 'active' : ''}" data-id="${s.id}" aria-pressed="${s.id === selected}">
      <div class="station-dot">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.subtitle}</p>
    </button>
  `).join('');

  document.querySelectorAll('.station').forEach((button) => {
    button.addEventListener('click', () => {
      selected = button.dataset.id;
      render();
    });
  });

  document.querySelectorAll('.stepup-btn').forEach((button) => {
    button.addEventListener('click', () => {
      selected = 'stepup';
      render();
    });
  });

  const index = years.findIndex((s) => s.id === selected);
  const width = selected === 'stepup' ? 100 : ((index + 1) / years.length) * 100;
  $('#route-progress').style.width = `${width}%`;
}

function eventCard(event) {
  const info = formatDate(event.date);
  const links = calendarLinks(event);
  return `
    <article class="event-card">
      <div class="event-date"><b>${info.day}</b><small>${info.month}</small></div>
      <div class="event-info">
        <h3>${event.title}</h3>
        <p>${event.time}–${event.end} · ${event.location}</p>
        <div class="tags">
          <span class="tag ${event.zoom ? 'zoom' : 'inperson'}">${event.zoom ? '● Zoom' : '● פרונטלי'}</span>
          ${event.note ? `<span class="tag">${event.note}</span>` : ''}
        </div>
      </div>
      <div class="event-actions">
        ${event.zoom ? `<a href="${event.zoom}" target="_blank" rel="noopener">כניסה ל-Zoom</a>` : ''}
        <a href="${links.google}" target="_blank" rel="noopener">Google Calendar</a>
        <a href="${links.outlook}" target="_blank" rel="noopener">Outlook</a>
        <a href="${event.feedback || '#'}" target="_blank" rel="noopener">משוב</a>
      </div>
    </article>
  `;
}

function deadlineCard(item, extra = '') {
  const d = formatDate(item.date);
  return `
    <div class="deadline ${extra}">
      <div class="deadline-icon">${extra ? '₪' : '✓'}</div>
      <div>
        <time>${d.full}</time>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    </div>
  `;
}

function render() {
  renderStations();

  const station = schedule.stations.find((s) => s.id === selected) || schedule.stations[0];
  const events = schedule.events.filter((event) => event.station === selected);
  $('#selected-title').textContent = `${station.title} · ${station.subtitle}`;

  $('#content').innerHTML = `
    <section class="panel events-panel">
      <div class="panel-heading">
        <h2>אירועים קרובים</h2>
        <span class="count">${events.length} אירועים במסלול</span>
      </div>
      ${events.length ? events.map(eventCard).join('') : '<p class="muted">עדיין לא נוספו אירועים. הצוות יוכל להוסיף אותם בקובץ data.js.</p>'}
    </section>
    <aside>
      <section class="panel">
        <div class="panel-heading">
          <h2>המחויבויות שלי</h2>
          <span class="count">לפי מועדים</span>
        </div>
        ${schedule.deadlines.map((d) => deadlineCard(d)).join('')}
      </section>
      <section class="panel scholarship">
        <div class="panel-heading">
          <h2>מועדי מלגות</h2>
          <span class="count">תשפ״ז</span>
        </div>
        ${schedule.scholarships.map((d) => deadlineCard(d, 'scholarship')).join('')}
      </section>
    </aside>
  `;
}

$('#all-events').addEventListener('click', () => {
  selected = 'all';
  renderStations();
  $('#selected-title').textContent = 'כל האירועים · תשפ״ז';

  const panel = document.querySelector('.events-panel');
  if (panel) {
    panel.innerHTML = `
      <div class="panel-heading">
        <h2>כל אירועי השנה</h2>
        <span class="count">${schedule.events.length} אירועים</span>
      </div>
      ${schedule.events.map(eventCard).join('')}
    `;
  }

  document.querySelectorAll('.station').forEach((b) => b.classList.remove('active'));
});

$('#print-page').addEventListener('click', () => window.print());

document.querySelector('.stepup-btn').addEventListener('click', () => {
  selected = 'stepup';
  render();
});

render();
