/* צוות: זהו קובץ התוכן המרכזי. הוסיפו/עדכנו כאן אירועים, קישורים ומועדים לאורך השנה. */
const schedule = {
  stations: [
    { id:'year1', title:'שנה א׳', subtitle:'כניסה למסלול', icon:'▣', intro:'הכנה לאקדמיה, למידה והיכרות עם הקהילה' },
    { id:'year2', title:'שנה ב׳', subtitle:'בניית מוכנות לתעסוקה', icon:'◆', intro:'קורסים, מיומנויות וכלים לעולם העבודה' },
    { id:'year3', title:'שנה ג׳', subtitle:'העמקת ההשתלבות', icon:'◆', intro:'התמחות, פורטפוליו וחיבור לתעשייה' },
    { id:'year4', title:'שנה ד׳', subtitle:'הכנה לקריירה', icon:'★', intro:'נטוורקינג, סיורי חברות וחיבור לקהילה' },
    { id:'stepup', title:'STEP-UP', subtitle:'קהילת הנשים', icon:'♛', intro:'קהילה, השראה וצמיחה משותפת' }
  ],
  events: [
    { id:'e1', station:'year1', date:'2026-09-24', time:'18:00', end:'20:00', title:'הכנה לאקדמיה', location:'Zoom', zoom:'https://zoom.us/', feedback:'https://forms.google.com/', note:'חן ורקין · למחזורי שנה א׳' },
    { id:'e2', station:'year1', date:'2026-10-13', time:'18:00', end:'20:00', title:'כנס פתיחת שנה', location:'קמפוס מטרו-טק', feedback:'https://forms.google.com/', note:'כל הסטודנטים מוזמנים' },
    { id:'e3', station:'year1', date:'2026-11-23', time:'18:30', end:'20:00', title:'סדנת ניהול פיננסי', location:'Zoom', zoom:'https://zoom.us/', feedback:'https://forms.google.com/', note:'אליזבת גילאי · ללמוד כיצד' },
    { id:'e4', station:'year2', date:'2026-12-04', time:'18:00', end:'20:00', title:'סדנת הכנה לתקופת מבחנים', location:'Zoom', zoom:'https://zoom.us/', feedback:'https://forms.google.com/', note:'חן ורקין · למחזורי שנה ב׳' },
    { id:'e5', station:'year2', date:'2027-01-14', time:'18:00', end:'20:00', title:'סדנת קורות חיים ולינקדאין', location:'קמפוס מטרו-טק', feedback:'https://forms.google.com/', note:'כלים לעולם העבודה' },
    { id:'e6', station:'year3', date:'2027-02-11', time:'18:00', end:'20:00', title:'סדנת פורטפוליו', location:'Zoom', zoom:'https://zoom.us/', feedback:'https://forms.google.com/', note:'הצגת היכולות המקצועיות' },
    { id:'e7', station:'year4', date:'2027-03-18', time:'18:00', end:'20:00', title:'מפגש נטוורקינג', location:'קמפוס מטרו-טק', feedback:'https://forms.google.com/', note:'חיבור לתעשייה' },
    { id:'e8', station:'stepup', date:'2027-04-22', time:'19:00', end:'20:30', title:'קהילת STEP-UP · מפגש השראה', location:'Zoom', zoom:'https://zoom.us/', feedback:'https://forms.google.com/', note:'מפגש קהילתי לנשים' }
  ],
  deadlines: [
    { date:'2026-11-25', title:'דיווחי התנדבות · פעימה ראשונה', text:'הגשה במערכת עד התאריך' },
    { date:'2027-02-25', title:'דיווחי התנדבות · פעימה שנייה', text:'הגשה במערכת עד התאריך' },
    { date:'2027-04-30', title:'שיחה אישית עם הרכזת', text:'תיאום שיחה אישית לסיכום השנה' },
    { date:'2027-06-15', title:'דיווחי התנדבות · סיכום שנתי', text:'השלמת כל שעות ההתנדבות' }
  ],
  scholarships: [
    { date:'2026-11-25', title:'מלגת קיום', text:'ב-25 בכל חודש · 3,000 ₪ לחודש' },
    { date:'2026-11-25', title:'מענק הצטיידות', text:'תשלום חד-פעמי · 2,500 ₪' },
    { date:'2026-12-25', title:'מלגת שכר לימוד', text:'2 פעימות של 5,000 ₪' },
    { date:'2027-04-30', title:'סל סיוע אקדמי', text:'1,100 ₪ לשנה · עדכון לפי זכאות' }
  ]
};
