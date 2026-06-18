"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/* ─────────────────────────────────────────────
   CONTENT
─────────────────────────────────────────────── */
const C = {
  ru: {
    brand: "Наталья Сиголович",
    floatLabel: "Написать в Telegram",
    nav: {
      cta: "Записаться",
      links: [
        { label: "Обо мне", href: "#about" },
        { label: "Услуги", href: "#services" },
        { label: "Подход", href: "#approach" },
        { label: "Отзывы", href: "#reviews" },
        { label: "Вопросы", href: "#faq" },
        { label: "Контакты", href: "#contacts" },
      ],
    },
    hero: {
      badge: "КОНСУЛЬТАНТ · ИЗРАИЛЬ · ОНЛАЙН",
      title: "Отношения с детьми",
      subtitle: "Помогаю родителям детей от 2 до 9 лет сохранять спокойствие и выбирать реакцию в самые сложные моменты.",
      cta: "Записаться на консультацию",
      reassurance: "Диагностическая консультация · Бесплатно · 30 минут",
    },
    requests: {
      eyebrow: "С чем приходят",
      title: "С какими запросами приходят родители",
      items: [
        { title: "Истерики и сопротивление", text: "Ребёнок не слышит, закатывает истерики, отказывается выполнять просьбы. Непонятно, что с этим делать.", color: "#ffb084" },
        { title: "Чувство вины", text: "Ощущение «плохого родителя», постоянные сомнения в своих решениях и усталость от этого круга.", color: "#e8b94a" },
        { title: "Срывы на крик", text: "Теряете контроль в момент кризиса. Потом мучаетесь. Хотите это изменить, но не знаете как.", color: "#b8a4ed" },
        { title: "Границы и правила", text: "Хочется выстроить спокойную и безопасную среду дома, чтобы ребёнок слышал, а не подчинялся из страха.", color: "#a4d4c5" },
      ],
    },
    about: {
      eyebrow: "Обо мне",
      title: "Наталья Сиголович",
      subtitle: "Консультант по детско-родительским отношениям в подходе эмоционального интеллекта",
      who: [
        "Я сертифицированный консультант по детско-родительским отношениям, методолог, педагог и специалист по обучению взрослых. Работаю по методикам, направленным на развитие эмоционального интеллекта.",
        "На практике: помогаю освоить конкретные навыки, как сохранять устойчивость и ясность мышления в момент кризиса, с опорой на себя.",
        "Я не даю универсальных советов. Работаю с вашей конкретной ситуацией, с вашим ребёнком, с вашей семьёй, с вашей реальностью.",
      ],
      whyTitle: "Почему мне важна эта работа",
      why: [
        "Я сама мама нейроотличного ребёнка.",
        "Я знаю, что значит делать всё правильно и всё равно срываться. Знаю, как стыдно потом. Знаю, как тяжело, когда ребёнок тебя не слышит, а силы уже на нуле.",
        "Именно поэтому я работаю так, как работаю: без оценок, без давления, без «вы всё делаете неправильно». Только рядом, пока не станет легче.",
      ],
      eduTitle: "Образование и квалификация",
      edu: [
        "Педагог с более чем 20-летним опытом работы с детьми и семьями в формальном и неформальном образовании.",
        "Сертифицированный консультант по сопровождению родителей детей раннего возраста в подходе эмоционального интеллекта (Израиль).",
        "Профессиональная подготовка в теме СДВГ и нейроотличных детей.",
        "Методолог и специалист по навыко-ориентированным форматам обучения взрослых.",
      ],
      expTitle: "Опыт работы",
      exp: [
        { year: "2024 — сейчас", text: "индивидуальное сопровождение родителей в подходе эмоционального интеллекта" },
        { year: "2018–2025",      text: "руководитель и методолог образовательных проектов" },
        { year: "2012–2018",      text: "работа в израильском детском саду (дети 2,5–5 лет)" },
        { year: "2004–2011",      text: "хореограф, руководитель танцевальной студии (Екатеринбург)" },
      ],
      knowTitle: "Что важно знать",
      know: [
        "Я работаю онлайн, с семьями в Израиле и за его пределами.",
        "Я работаю только с родителями, не с детьми напрямую.",
        "Я не беру много клиентов одновременно, потому что каждой семье нужно моё реальное присутствие.",
        "Я говорю на русском и иврите.",
      ],
      facts: [
        { label: "20+ лет опыта",          tone: "mint" },
        { label: "Сертификация · Израиль",  tone: "ochre" },
        { label: "Онлайн",                  tone: "peach" },
      ],
    },
    changes: {
      eyebrow: "Результат",
      title: "Что изменится и чему вы научитесь",
      items: [
        { title: "Управление эмоциями",   text: "Выстроим границы и контакт без давления, криков и борьбы за власть.",                                                    color: "peach" },
        { title: "Помощь здесь и сейчас", text: "Не просто теория. Понятные инструменты, которые работают в реальной жизни вашей семьи.",                                 color: "mint" },
        { title: "Понимание вместо хаоса",text: "Разберём, что на самом деле происходит с ребёнком и почему привычные методы не работают.",                               color: "ochre" },
        { title: "Структура и спокойствие",text:"Построим понятную систему без оценок и осуждения, с уважением к вашей реальности.",                                      color: "lavender" },
      ],
    },
    approach: {
      eyebrow: "Подход",
      title: "Как я работаю",
      leadTitle: "Я не «исправляю» детей — я сопровождаю родителей",
      lead: [
        "Я работаю с родителями.",
        "Потому что дети меняются, когда меняется то, что происходит рядом с ними.",
        "В основе моей работы — эмоциональный интеллект: умение замечать, что происходит внутри, останавливаться и выбирать реакцию. Не действовать на автопилоте.",
      ],
      principles: [
        { title: "Диалог на равных",    text: "Я не оцениваю вас как родителя. Мы работаем вместе как партнёры, а не как учитель и ученик." },
        { title: "Принятие без оценки", text: "Здесь нет правильных и неправильных родителей. Есть уставшие люди в сложных ситуациях и есть работающие инструменты." },
        { title: "Обучение без давления",text:"Я методолог и специалист по обучению взрослых. Моя задача — помочь освоить конкретные действия, которые работают в реальной жизни." },
      ],
      notTitle: "Чего в моей работе нет",
      not: [
        "Криков, наказаний, давления и запугивания",
        "Работы через вину, стыд или оценку",
        "Универсальных советов без учёта вашей конкретной семьи",
        "Обещаний быстрых результатов",
        "«Исправления» ребёнка",
      ],
      resultTitle: "Как выглядит результат",
      result: [
        "Дома становится тише. Не потому что ребёнок «стал лучше вести себя», а потому что изменилась атмосфера.",
        "Вы начинаете понимать, почему ребёнок реагирует именно так.",
        "У вас появляются конкретные действия для кризисных моментов вместо растерянности.",
        "Вы перестаёте срываться так часто. И когда срываетесь, знаете, как из этого выйти.",
      ],
    },
    formats: {
      eyebrow: "Форматы работы",
      title: "Форматы работы",
      subtitle: "Все форматы — онлайн. Работаю только с родителями.",
      before: "Моя работа — это не разовые советы. Это процесс, в котором вы осваиваете конкретные навыки и применяете их в жизни своей семьи. Если сомневаетесь, какой формат подходит, напишите мне. Разберёмся вместе.",
      formatCta: "Записаться",
      recommendedLabel: "Глубокая работа",
      cards: [
        { name: "Диагностическая консультация", price: "Бесплатно", period: "· 30 минут", description: "Если хотите разобраться, с чего начать, и понять, подходим ли мы друг другу.", features: ["Анализ вашего запроса в Zoom","Определение «слепых зон» в ситуации","Чек-лист для первых шагов","Понимание, какой формат работы подойдёт"], featured: false },
        { name: "Неделя сопровождения",        price: "$285",       period: "· 1 неделя",  description: "Если хотите попробовать изменения в реальной жизни, с поддержкой рядом, но без длительного процесса.", features: ["2 консультации в Zoom","Индивидуальный трек на неделю","Чек-лист контроля откатов и сопротивления","Вопрос-ответ в личном чате"], featured: false },
        { name: "Курс сопровождения",          price: "$1 400",     period: "· 5 недель",  description: "Если нужны глубокие, устойчивые изменения и поддержка на всём пути.", features: ["3 консультации в Zoom","Индивидуальная программа на 5 недель","Индивидуальный пакет техник самопомощи","Ежедневный контроль изменений","Глубокий разбор паттернов","Создание и поддержка системности","Вопрос-ответ в личном чате"], featured: true },
      ],
      after: "Не уверены, что выбрать? Начните с бесплатной диагностической консультации. 30 минут — и вы поймёте, что происходит и что с этим делать.",
      afterCta: "Записаться на диагностику",
    },
    reviews: {
      eyebrow: "Отзывы",
      title: "Что говорят родители",
      items: [
        { name: "Света и Идан",    role: "Подтверждённый клиент", quote: "Последний месяц был для нас очень интенсивным и глубоким процессом. Это была не теоретическая консультация, а ежедневная работа с реальными ситуациями из нашей жизни. Мы видим реальный прогресс в поведении Майи и чувствуем гораздо больше уверенности в себе как родители. Это глубокий процесс, который действительно меняет жизнь семьи. Он стоил каждой минуты." },
        { name: "Анна",            role: "Подтверждённый клиент", quote: "После первой консультации я наконец поняла, почему мой сын так реагирует. Уже через неделю истерики стали реже. Теперь я знаю, как реагировать в сложных ситуациях." },
        { name: "Мария",           role: "Подтверждённый клиент", quote: "Я перестала кричать на детей. Это казалось невозможным, но Наталья дала мне конкретные инструменты. Дома стало спокойнее, и я чувствую себя уверенной мамой." },
        { name: "Елена и Дмитрий", role: "Подтверждённый клиент", quote: "Мы с мужем были на грани. Постоянные конфликты из-за воспитания. Наталья помогла нам найти общий язык. Теперь мы команда, а не противники." },
      ],
    },
    faq: {
      eyebrow: "Вопросы",
      title: "Вопросы, которые задают чаще всего",
      items: [
        { q: "Как проходит консультация?",                           a: "Встреча в Zoom. До начала работы я прошу коротко описать ситуацию, чтобы прийти подготовленной. На консультации разбираем конкретную ситуацию из вашей жизни, определяем ключевые сложности и намечаем практические шаги. Это не разговор «вообще о воспитании» — это работа с вашей реальностью." },
        { q: "Это поможет моей семье?",                              a: "Честный ответ: я не знаю до того, как мы поговорим. Именно поэтому есть бесплатная диагностическая консультация — чтобы вы могли понять, подходит ли этот подход вам. Что я могу сказать точно: я работаю с реальными ситуациями, а не с теорией. И работаю только с теми семьями, которым действительно могу помочь." },
        { q: "Нужно ли присутствие ребёнка?",                       a: "Нет. Я работаю только с родителями. Ребёнок не участвует в консультациях, но именно через изменения в вашем поведении меняется и его." },
        { q: "Как быстро будут результаты?",                        a: "Первые сдвиги многие родители замечают уже после первой консультации — появляется ясность и конкретные инструменты. Устойчивые изменения — это процесс. Обычно семьи видят реальный прогресс в течение нескольких недель практики. Я не обещаю быстрых чудес. Я обещаю честную работу." },
        { q: "Я живу не в Израиле. Можно работать?",                a: "Да. Все форматы онлайн. Работаю с русскоязычными семьями из разных стран." },
        { q: "Я боюсь, что без криков ребёнок перестанет слушаться.", a: "Это один из самых частых страхов — и он абсолютно понятен. Мы разберём его в работе. Ясные границы и уважительный тон — это не противоречие. Дети лучше слышат родителей, которые не кричат." },
        { q: "Как записаться?",                                      a: "Через Telegram или WhatsApp. Напишите мне — я отвечу в течение 24 часов и предложу время для диагностической консультации." },
      ],
    },
    contacts: {
      eyebrow: "Контакты",
      title: "Начните путь к спокойной семейной жизни",
      text: "Изменения рождаются там, где есть опора и честность с собой.",
      text2: "Свяжитесь со мной в Telegram или WhatsApp — для записи на бесплатную диагностическую консультацию.",
      final: "Вы не обязаны справляться в одиночку.",
      buttons: [
        { label: "Написать в Telegram", href: "https://t.me/+972524548345",    primary: true  },
        { label: "Написать в WhatsApp", href: "https://wa.me/972524548345",    primary: false },
      ],
    },
    footer: {
      name: "Наталья Сиголович",
      lines: ["Эмоционально-ориентированный подход","Специализация: дети 2–9 лет","Израиль · Онлайн консультации"],
      privacy: "Политика конфиденциальности",
      copyright: "© 2025 Наталья Сиголович. Все права защищены.",
    },
    cookie: {
      text: "Сайт использует файлы cookie для улучшения работы. Нажимая «Принять», вы соглашаетесь с их использованием согласно политике конфиденциальности.",
      accept: "Принять", decline: "Отклонить",
    },
  },
  he: {
    brand: "נטליה סיגולוביץ׳",
    floatLabel: "לכתוב בוואטסאפ",
    nav: {
      cta: "לקביעת תור",
      links: [
        { label: "אודות",    href: "#about"    },
        { label: "שירותים", href: "#services"  },
        { label: "גישה",    href: "#approach"  },
        { label: "המלצות",  href: "#reviews"   },
        { label: "שאלות",   href: "#faq"       },
        { label: "צרו קשר", href: "#contacts"  },
      ],
    },
    hero: {
      badge: "יועצת · ישראל · אונליין",
      title: "יחסים עם הילדים",
      subtitle: "אני עוזרת להורים לילדים בגילאי 2 עד 9 לשמור על רוגע ולבחור את התגובה ברגעים הקשים ביותר.",
      cta: "לקביעת ייעוץ",
      reassurance: "ייעוץ אבחוני · חינם · 30 דקות",
    },
    requests: {
      eyebrow: "עם מה פונים",
      title: "עם מה הורים פונים אלי",
      items: [
        { title: "התקפות זעם והתנגדות", text: "הילד לא שומע, מתפרץ, מסרב לבקשות. לא ברור מה לעשות עם זה.",               color: "#ffb084" },
        { title: "תחושת אשמה",           text: "תחושה של «הורה רע», ספקות מתמידים בהחלטות ועייפות מהמעגל הזה.",           color: "#e8b94a" },
        { title: "פרצי כעס",             text: "מאבדים שליטה ברגעי משבר. אחר כך סובלים. רוצים לשנות, אבל לא יודעים איך.", color: "#b8a4ed" },
        { title: "גבולות וכללים",        text: "רוצים לבנות סביבה רגועה ובטוחה בבית, שהילד ישמע, לא רק מפחד.",            color: "#a4d4c5" },
      ],
    },
    about: {
      eyebrow: "אודות",
      title: "נטליה סיגולוביץ׳",
      subtitle: "יועצת ליחסי הורים-ילדים בגישת האינטליגנציה הרגשית",
      who: [
        "אני יועצת מוסמכת ליחסי הורים-ילדים, מתודולוגית, מחנכת ומומחית להכשרת מבוגרים. עובדת בשיטות לפיתוח האינטליגנציה הרגשית.",
        "בפועל: אני עוזרת לרכוש כלים קונקרטיים. איך לשמור על יציבות ובהירות מחשבתית ברגע משבר, עם הישענות על עצמך.",
        "אני לא נותנת עצות כלליות. עובדת עם המצב הספציפי שלכם, עם הילד שלכם, עם המשפחה שלכם, עם המציאות שלכם.",
      ],
      whyTitle: "למה העבודה הזו חשובה לי",
      why: [
        "אני בעצמי אמא לילד נוירו-שונה.",
        "אני יודעת מה זה לעשות הכל נכון ועדיין להתפרץ. יודעת כמה מביך אחר כך. יודעת כמה קשה כשהילד לא שומע וכוחות כבר אזלו.",
        "בדיוק בגלל זה אני עובדת כמו שאני עובדת: ללא שיפוטיות, ללא לחץ, ללא «אתם עושים הכל לא נכון». רק לצדכם, עד שיהיה יותר קל.",
      ],
      eduTitle: "השכלה וכישורים",
      edu: [
        "מחנכת עם למעלה מ-20 שנות ניסיון בעבודה עם ילדים ומשפחות בחינוך פורמלי ובלתי פורמלי.",
        "מנחת הורים מוסמכת לגיל הרך בגישת האינטליגנציה הרגשית (ישראל).",
        "הכשרה מקצועית בתחום ADHD וילדים נוירו-שונים.",
        "מתודולוגית ומומחית לפורמטים מכווני-מיומנויות בהכשרת מבוגרים.",
      ],
      expTitle: "ניסיון עבודה",
      exp: [
        { year: "2024 — היום", text: "ליווי אישי להורים בגישת האינטליגנציה הרגשית" },
        { year: "2018–2025",   text: "מנהלת ומתודולוגית פרויקטים חינוכיים" },
        { year: "2012–2018",   text: "עבודה בגן ילדים ישראלי (ילדים בגילאי 2.5–5)" },
        { year: "2004–2011",   text: "כוריאוגרפית, מנהלת סטודיו לריקוד" },
      ],
      knowTitle: "חשוב לדעת",
      know: [
        "אני עובדת אונליין, עם משפחות בישראל ומחוצה לה.",
        "אני עובדת רק עם הורים, לא עם ילדים ישירות.",
        "אני לא לוקחת הרבה לקוחות בו-זמנית, כי כל משפחה צריכה את הנוכחות האמיתית שלי.",
        "אני מדברת רוסית ועברית.",
      ],
      facts: [
        { label: "20+ שנות ניסיון", tone: "mint"  },
        { label: "הסמכה · ישראל",   tone: "ochre" },
        { label: "אונליין",          tone: "peach" },
      ],
    },
    changes: {
      eyebrow: "תוצאה",
      title: "מה ישתנה ומה תלמדו",
      items: [
        { title: "ניהול רגשות",       text: "נבנה גבולות וקשר, בלי לחץ, בלי צעקות, בלי מאבקי כוח.",                          color: "peach"    },
        { title: "עזרה כאן ועכשיו",  text: "לא רק תיאוריה. כלים ברורים שעובדים בחיים האמיתיים של המשפחה שלכם.",              color: "mint"     },
        { title: "הבנה במקום כאוס",  text: "נבין מה קורה באמת עם הילד ולמה השיטות הרגילות לא עובדות.",                      color: "ochre"    },
        { title: "מבנה ושקט",        text: "נבנה מערכת ברורה, ללא שיפוטיות, עם כבוד למציאות שלכם.",                          color: "lavender" },
      ],
    },
    approach: {
      eyebrow: "גישה",
      title: "איך אני עובדת",
      leadTitle: "אני לא «מתקנת» ילדים — אני מלווה הורים",
      lead: [
        "אני עובדת עם הורים.",
        "כי ילדים משתנים, כשמשתנה מה שקורה לידם.",
        "הבסיס של העבודה שלי — אינטליגנציה רגשית: היכולת לשים לב למה שקורה בפנים, לעצור ולבחור תגובה. לא לפעול על אוטומט.",
      ],
      principles: [
        { title: "דיאלוג בין שווים",   text: "אני לא שופטת אתכם כהורים. אנחנו עובדים יחד כשותפים, לא כמורה ותלמיד." },
        { title: "קבלה ללא שיפוטיות", text: "אין כאן הורים נכונים ולא נכונים. יש אנשים עייפים במצבים קשים ויש כלים שעובדים." },
        { title: "למידה ללא לחץ",     text: "אני מתודולוגית ומומחית להכשרת מבוגרים. המטרה שלי — לעזור לרכוש פעולות קונקרטיות שעובדות בחיים האמיתיים." },
      ],
      notTitle: "מה אין בעבודה שלי",
      not: [
        "צעקות, ענישה, לחץ והפחדה",
        "עבודה דרך אשמה, בושה או שיפוט",
        "עצות כלליות בלי התחשבות במשפחה הספציפית שלכם",
        "הבטחות לתוצאות מהירות",
        "«תיקון» הילד",
      ],
      resultTitle: "איך נראית התוצאה",
      result: [
        "בבית נהיה שקט יותר. לא כי הילד «השתפר», אלא כי האווירה השתנתה.",
        "אתם מתחילים להבין למה הילד מגיב כך.",
        "יש לכם פעולות קונקרטיות לרגעי משבר, במקום אבדן עשתונות.",
        "אתם מתפרצים פחות. וכשזה קורה, יודעים איך לצאת מזה.",
      ],
    },
    formats: {
      eyebrow: "פורמטים",
      title: "פורמטי עבודה",
      subtitle: "כל הפורמטים — אונליין. עובדת רק עם הורים.",
      before: "העבודה שלי אינה עצות חד-פעמיות. זהו תהליך שבו אתם רוכשים מיומנויות קונקרטיות ומיישמים אותן בחיי המשפחה. לא בטוחים איזה פורמט מתאים? כתבו לי, נבין יחד.",
      formatCta: "לקביעת תור",
      recommendedLabel: "עבודה עמוקה",
      cards: [
        { name: "ייעוץ אבחוני",  price: "חינם",   period: "· 30 דקות",  description: "אם רוצים להבין מהיכן להתחיל ולראות אם אנחנו מתאימים זה לזה.", features: ["ניתוח הפנייה שלכם בזום","זיהוי «נקודות עיוורון» במצב","רשימת תיוג לצעדים ראשונים","הבנה איזה פורמט עבודה מתאים"], featured: false },
        { name: "שבוע ליווי",    price: "$285",    period: "· שבוע אחד", description: "אם רוצים לנסות שינויים בחיים האמיתיים, עם תמיכה לצדכם, אבל בלי תהליך ארוך.", features: ["2 ייעוצים בזום","מסלול אישי לשבוע","רשימת תיוג לניהול נסיגות והתנגדויות","שאלות ותשובות בצ׳אט אישי"], featured: false },
        { name: "קורס ליווי",    price: "$1,400",  period: "· 5 שבועות", description: "אם רוצים שינויים עמוקים ויציבים ותמיכה לאורך כל הדרך.", features: ["3 ייעוצים בזום","תוכנית אישית ל-5 שבועות","חבילת טכניקות עזרה עצמית אישית","מעקב יומיומי אחר השינויים","ניתוח מעמיק של דפוסים","בניית מערכתיות ותחזוקתה","שאלות ותשובות בצ׳אט אישי"], featured: true },
      ],
      after: "לא בטוחים מה לבחור? התחילו עם ייעוץ אבחוני בחינם. 30 דקות ותבינו מה קורה ומה לעשות עם זה.",
      afterCta: "לקביעת ייעוץ אבחוני",
    },
    reviews: {
      eyebrow: "המלצות",
      title: "מה הורים אומרים",
      items: [
        { name: "שבע ועידן",     role: "לקוחה מאומתת", quote: "החודש האחרון היה תהליך עמוק ואינטנסיבי מאוד. זו לא הייתה ייעוץ תיאורטי, אלא עבודה יומיומית עם מצבים אמיתיים מהחיים שלנו. אנחנו רואים התקדמות אמיתית בהתנהגות של מאיה ומרגישים הרבה יותר בטחון עצמי כהורים, גם כשלא הכל מושלם. זהו תהליך עמוק שמשנה באמת את חיי המשפחה. הוא שווה כל דקה." },
        { name: "אנה",           role: "לקוחה מאומתת", quote: "אחרי הייעוץ הראשון הבנתי סוף סוף למה הבן שלי מגיב כך. כבר אחרי שבוע ההתקפות הזעם פחתו. עכשיו אני יודעת איך להגיב במצבים קשים." },
        { name: "מריה",          role: "לקוחה מאומתת", quote: "הפסקתי לצעוק על הילדים. זה נראה בלתי אפשרי, אבל נטליה נתנה לי כלים קונקרטיים. בבית נהיה שקט יותר ואני מרגישה אמא בטוחה." },
        { name: "אלנה ודמיטרי", role: "לקוחה מאומתת", quote: "היינו על הגבול. קונפליקטים מתמידים בגלל גידול ילדים. נטליה עזרה לנו למצוא שפה משותפת. עכשיו אנחנו צוות, לא יריבים." },
      ],
    },
    faq: {
      eyebrow: "שאלות",
      title: "שאלות שנשאלות הכי הרבה",
      items: [
        { q: "איך מתנהל הייעוץ?",                              a: "הפגישה בזום. לפני שמתחילים אני מבקשת לתאר בקצרה את המצב, כדי לבוא מוכנה. בייעוץ עצמו אנחנו מנתחים מצב קונקרטי מהחיים שלכם, מזהים את הקשיים המרכזיים וקובעים צעדים מעשיים. זה לא שיחה «על גידול ילדים בכלל». זו עבודה עם המציאות שלכם." },
        { q: "האם זה יעזור למשפחה שלי?",                     a: "תשובה כנה: לא יודעת לפני שנדבר. בדיוק בגלל זה יש ייעוץ אבחוני חינם, כדי שתוכלו להבין אם הגישה הזו מתאימה לכם. מה שיכולה לומר בוודאות: אני עובדת עם מצבים אמיתיים, לא עם תיאוריה. ואני עובדת רק עם משפחות שאני יכולה באמת לעזור להן." },
        { q: "האם הילד צריך להשתתף?",                         a: "לא. אני עובדת רק עם הורים. הילד לא משתתף בייעוצים, אבל דרך השינויים בהתנהגות שלכם, גם הוא משתנה." },
        { q: "מתי יורגשו תוצאות?",                            a: "שינויים ראשונים הורים רבים מרגישים כבר אחרי הייעוץ הראשון. מופיעה בהירות וכלים קונקרטיים. שינויים יציבים הם תהליך. בדרך כלל משפחות רואות התקדמות אמיתית תוך מספר שבועות של תרגול. אני לא מבטיחה נסים מהירים. אני מבטיחה עבודה כנה." },
        { q: "אני לא גרה בישראל. אפשר לעבוד?",              a: "כן. כל הפורמטים אונליין. עובדת עם משפחות דוברות רוסית מארצות שונות." },
        { q: "אני חוששת שבלי צעקות הילד יפסיק לשמוע.",      a: "זהו אחד הפחדים הנפוצים ביותר, ומובן לחלוטין. נעסוק בו ישירות בעבודה. גבולות ברורים וטון מכבד אלה לא סתירה. ילדים שומעים טוב יותר הורים שלא צועקים." },
        { q: "איך נרשמים?",                                   a: "דרך וואטסאפ. כתבו לי, אענה תוך 24 שעות ואציע זמן לייעוץ אבחוני." },
      ],
    },
    contacts: {
      eyebrow: "צרו קשר",
      title: "התחילו את הדרך לחיי משפחה שקטים",
      text: "שינויים נולדים במקום שיש בו תמיכה ויושר עם עצמך.",
      text2: "צרו איתי קשר בוואטסאפ לקביעת ייעוץ אבחוני בחינם.",
      final: "אתם לא חייבים להסתדר לבד.",
      buttons: [
        { label: "לכתוב בוואטסאפ", href: "https://wa.me/972524548345", primary: true },
      ],
    },
    footer: {
      name: "נטליה סיגולוביץ׳",
      lines: ["גישה מכוונת-רגש","התמחות: ילדים בגילאי 2–9","ישראל · ייעוץ אונליין"],
      privacy: "מדיניות פרטיות",
      copyright: "© 2025 נטליה סיגולוביץ׳. כל הזכויות שמורות.",
    },
    cookie: {
      text: "האתר משתמש בעוגיות לשיפור חוויית הגלישה. בלחיצה על «אישור» אתם מסכימים לשימוש בעוגיות בהתאם למדיניות הפרטיות.",
      accept: "אישור", decline: "סירוב",
    },
  },
} as const;

type Lang = keyof typeof C;

/* ─────────────────────────────────────────────
   SMALL HELPERS
─────────────────────────────────────────────── */
const toneClasses: Record<string, string> = {
  peach: "badge-peach", mint: "badge-mint", ochre: "badge-ochre", lavender: "badge-lavender",
};
const toneBg: Record<string, string> = {
  peach: "#fff0e6", mint: "#e6f5f1", ochre: "#fef7e0", lavender: "#f0ecff",
};
const toneDot: Record<string, string> = {
  peach: "#ffb084", mint: "#a4d4c5", ochre: "#e8b94a", lavender: "#b8a4ed",
};

function Badge({ tone, uppercase, children }: { tone: string; uppercase?: boolean; children: React.ReactNode }) {
  return (
    <span className={`badge ${toneClasses[tone] ?? "badge-peach"}`}
      style={{ textTransform: uppercase ? "uppercase" : undefined, letterSpacing: uppercase ? "1.2px" : undefined }}>
      {children}
    </span>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: 12, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "#b07a4a" }}>
      {children}
    </span>
  );
}

function RubikH2({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <h2 style={{ margin: "12px 0 0", fontFamily: "var(--font-rubik,sans-serif)", fontWeight: 500, fontSize: "clamp(28px,4.4vw,42px)", lineHeight: 1.1, letterSpacing: "-1.2px", color: "#0a0a0a", ...style }}>
      {children}
    </h2>
  );
}

function TelegramIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M21.5 4.3 2.9 11.5c-.9.36-.88 1.66.03 1.99l4.6 1.62 1.77 5.34c.24.66 1.1.79 1.53.24l2.5-3.06 4.66 3.42c.6.44 1.46.11 1.62-.62L23.9 5.2c.18-.86-.65-1.6-1.5-1.27z" fill="#fff"/>
      <path d="m7.6 15.1 9.2-7.1c.18-.14.4.11.25.28l-7.4 7.3c-.27.27-.44.62-.49 1l-.21 1.6-1.35-3.08z" fill="#1a3a3a" opacity="0.45"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
      <path d="M12.04 2c-5.5 0-9.97 4.46-9.97 9.96 0 1.76.46 3.48 1.34 5L2 22l5.18-1.36a9.94 9.94 0 0 0 4.86 1.24c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm0 18.2c-1.55 0-3.07-.42-4.4-1.2l-.31-.19-3.07.8.82-3-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.55 3.7-8.25 8.25-8.25s8.24 3.7 8.24 8.25-3.7 8.25-8.25 8.25zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.48-1.38-1.73-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.16 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"/>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   PAGE
─────────────────────────────────────────────── */
export default function Page() {
  const [lang, setLang] = useState<Lang>("ru");
  const [openFaq, setOpenFaq] = useState<number>(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cookieVisible, setCookieVisible] = useState(false);

  useEffect(() => {
    let l: Lang = "ru";
    try { const s = localStorage.getItem("ns_lang"); if (s === "he" || s === "ru") l = s; } catch (_) {}
    let ck = true;
    try { ck = !localStorage.getItem("ns_cookie"); } catch (_) {}
    document.documentElement.dir = l === "he" ? "rtl" : "ltr";
    document.documentElement.lang = l;
    setLang(l);
    setCookieVisible(ck);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".io-up, .io-card");
    if (!("IntersectionObserver" in window)) {
      els.forEach(el => el.classList.add("io-in"));
      return;
    }
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("io-in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const switchLang = (l: Lang) => {
    if (l === lang) return;
    try { localStorage.setItem("ns_lang", l); } catch (_) {}
    document.documentElement.dir = l === "he" ? "rtl" : "ltr";
    document.documentElement.lang = l;
    setLang(l);
    setMobileOpen(false);
  };

  const t = C[lang];
  const isHe = lang === "he";
  const floatHref = isHe ? "https://wa.me/972524548345" : "https://t.me/+972524548345";
  const px = "clamp(18px,5vw,48px)";
  const mw: React.CSSProperties = { maxWidth: 1180, margin: "0 auto", paddingLeft: px, paddingRight: px };

  return (
    <div dir={isHe ? "rtl" : "ltr"} style={{ direction: isHe ? "rtl" : "ltr", fontFamily: "var(--font-inter,sans-serif)" }}>

      {/* ══ HEADER ══ */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,250,240,0.86)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(10,10,10,0.06)" }}>
        <div style={{ ...mw, height: 70, display: "flex", alignItems: "center", gap: 22 }}>
          <a href="#top" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}>
            <span style={{ width: 13, height: 13, borderRadius: "50%", background: "#ffb084", boxShadow: "inset -3px -3px 6px rgba(10,10,10,0.18)", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-rubik,sans-serif)", fontWeight: 500, fontSize: 17, letterSpacing: "-0.3px", color: "#0a0a0a" }}>{t.brand}</span>
          </a>
          <nav className="ns-nav-desktop" style={{ display: "flex", gap: 2, flex: 1, justifyContent: "center" }}>
            {t.nav.links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="nav-link" style={{ fontSize: 14, fontWeight: 500, color: "#3a3a3a", padding: "8px 12px", textDecoration: "none", borderRadius: 8 }}>{l.label}</a>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginInlineStart: "auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span onClick={() => switchLang("ru")} style={{ fontSize: 14, fontWeight: isHe ? 500 : 700, color: isHe ? "#9a9a9a" : "#0a0a0a", cursor: "pointer" }}>RU</span>
              <span style={{ fontSize: 13, color: "#c8c2b4" }}>|</span>
              <span onClick={() => switchLang("he")} style={{ fontSize: 15, fontWeight: isHe ? 700 : 500, color: isHe ? "#0a0a0a" : "#9a9a9a", cursor: "pointer" }}>עב</span>
            </div>
            <span className="ns-hide-sm"><a href="#contacts" className="btn btn-primary btn-sm">{t.nav.cta}</a></span>
            <button className="ns-burger" onClick={() => setMobileOpen(v => !v)} style={{ display: "none", alignItems: "center", justifyContent: "center", width: 40, height: 40, border: "1px solid rgba(10,10,10,0.1)", background: "#fffaf0", borderRadius: 10, cursor: "pointer", padding: 0 }}>
              <span style={{ display: "block", width: 18, height: 2, background: "#0a0a0a", boxShadow: "0 -5px 0 #0a0a0a, 0 5px 0 #0a0a0a" }} />
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div style={{ borderTop: "1px solid rgba(10,10,10,0.06)", background: "#fffaf0", padding: `14px ${px} 22px` }}>
            <nav style={{ display: "flex", flexDirection: "column" }}>
              {t.nav.links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={{ fontSize: 16, fontWeight: 500, color: "#1a1a1a", padding: "13px 4px", textDecoration: "none", borderBottom: "1px solid rgba(10,10,10,0.05)" }}>{l.label}</a>
              ))}
            </nav>
            <div style={{ marginTop: 16 }}>
              <a href="#contacts" className="btn btn-primary btn-md" style={{ width: "100%", textAlign: "center" }} onClick={() => setMobileOpen(false)}>{t.nav.cta}</a>
            </div>
          </div>
        )}
      </header>
      <div id="top" />

      {/* ══ HERO ══ */}
      <section style={{ padding: "clamp(44px,7vw,84px) 0 clamp(48px,8vw,90px)" }}>
        <div className="hero-grid" style={{ ...mw, gap: "clamp(36px,5vw,64px)" }}>
          <div className="hero-stagger" style={{ background: "#ffffff", border: "1px solid #efe7d6", borderRadius: 20, padding: "clamp(24px,3vw,34px)", boxShadow: "0 1px 3px rgba(10,10,10,0.06), 0 24px 50px rgba(10,10,10,0.12)" }}>
            <div style={{ display: "inline-flex", marginBottom: 22 }}><Badge tone="mint" uppercase>{t.hero.badge}</Badge></div>
            <h1 style={{ margin: 0, fontFamily: "var(--font-rubik,sans-serif)", fontWeight: 500, fontSize: "clamp(36px,5.6vw,60px)", lineHeight: 1.03, letterSpacing: "-2px", color: "#0a0a0a" }}>{t.hero.title}</h1>
            <p style={{ margin: "22px 0 0", fontSize: "clamp(17px,2.2vw,19px)", lineHeight: 1.55, color: "#3a3a3a", maxWidth: "48ch" }}>{t.hero.subtitle}</p>
            <a href="#contacts" className="btn btn-primary btn-lg" style={{ width: "100%", marginTop: 32 }}>{t.hero.cta}</a>
            <p style={{ margin: "14px 0 0", fontSize: 14, color: "#6a6a6a" }}>{t.hero.reassurance}</p>
          </div>
          <div className="hero-photo-reveal hero-slot">
            <div className="blob-b" style={{ position: "absolute", bottom: "-12%", insetInlineEnd: "-12%", width: "80%", aspectRatio: "1 / 1", background: "#a4d4c5", borderRadius: "50% / 60% 58% 42% 40%", boxShadow: "inset -6px -8px 12px rgba(10,10,10,0.12), inset 6px 6px 12px rgba(255,255,255,0.4)" }} />
            <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 420, marginInline: "auto" }}>
              <Image src="/family-illustration.png" alt="Иллюстрация семьи с детьми" width={1080} height={1350} sizes="(max-width: 768px) 86vw, 420px" priority style={{ width: "100%", height: "auto" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══ REQUESTS ══ */}
      <section style={{ padding: "clamp(52px,8vw,96px) 0", background: "#faf5e8" }}>
        <div style={mw}>
          <div className="io-up" style={{ maxWidth: 620, marginBottom: "clamp(28px,4vw,44px)" }}>
            <Eyebrow>{t.requests.eyebrow}</Eyebrow>
            <RubikH2>{t.requests.title}</RubikH2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(248px,1fr))", gap: 18 }}>
            {t.requests.items.map((item, i) => (
              <div key={item.title} className="io-card" style={{ background: "#fffaf0", border: "1px solid #efe7d6", borderRadius: 16, padding: "26px 24px", "--d": `${i * 80}ms`, "--hover-border": item.color } as React.CSSProperties}>
                <span style={{ display: "block", width: 12, height: 12, borderRadius: "50%", background: item.color, boxShadow: "inset -3px -3px 5px rgba(10,10,10,0.14)", marginBottom: 16 }} />
                <h3 style={{ margin: "0 0 8px", fontFamily: "var(--font-rubik,sans-serif)", fontWeight: 500, fontSize: 19, letterSpacing: "-0.3px", color: "#0a0a0a" }}>{item.title}</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "#5a5a5a" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section id="about" style={{ padding: "clamp(56px,9vw,104px) 0" }}>
        <div style={mw}>
          <div className="io-up" style={{ maxWidth: 680, marginBottom: "clamp(30px,4vw,48px)" }}>
            <Eyebrow>{t.about.eyebrow}</Eyebrow>
            <h2 style={{ margin: "12px 0 8px", fontFamily: "var(--font-rubik,sans-serif)", fontWeight: 500, fontSize: "clamp(30px,4.8vw,46px)", lineHeight: 1.06, letterSpacing: "-1.4px", color: "#0a0a0a" }}>{t.about.title}</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.5, color: "#6a6a6a" }}>{t.about.subtitle}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "clamp(28px,4vw,56px)", alignItems: "start" }}>
            <div className="io-up">
              {t.about.who.map((p, i) => <p key={i} style={{ margin: "0 0 18px", fontSize: 16, lineHeight: 1.65, color: "#3a3a3a" }}>{p}</p>)}
              <h3 style={{ margin: "30px 0 12px", fontFamily: "var(--font-rubik,sans-serif)", fontWeight: 500, fontSize: 22, letterSpacing: "-0.4px", color: "#0a0a0a" }}>{t.about.whyTitle}</h3>
              {t.about.why.map((p, i) => <p key={i} style={{ margin: "0 0 16px", fontSize: 16, lineHeight: 1.65, color: "#3a3a3a" }}>{p}</p>)}
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}>
                {t.about.facts.map(f => <Badge key={f.label} tone={f.tone}>{f.label}</Badge>)}
              </div>
            </div>
            <div className="io-up" style={{ background: "#faf5e8", border: "1px solid #efe7d6", borderRadius: 20, padding: "clamp(24px,3vw,34px)", "--d": "120ms" } as React.CSSProperties}>
              <h3 style={{ margin: "0 0 16px", fontFamily: "var(--font-rubik,sans-serif)", fontWeight: 500, fontSize: 19, letterSpacing: "-0.3px", color: "#0a0a0a" }}>{t.about.eduTitle}</h3>
              <ul style={{ listStyle: "none", margin: "0 0 26px", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {t.about.edu.map((e, i) => (
                  <li key={i} style={{ position: "relative", paddingInlineStart: 20, fontSize: 15, lineHeight: 1.55, color: "#4a4a4a" }}>
                    <span style={{ position: "absolute", insetInlineStart: 0, top: 9, width: 7, height: 7, borderRadius: "50%", background: "#c79a5e" }} />{e}
                  </li>
                ))}
              </ul>
              <h3 style={{ margin: "0 0 14px", fontFamily: "var(--font-rubik,sans-serif)", fontWeight: 500, fontSize: 19, letterSpacing: "-0.3px", color: "#0a0a0a" }}>{t.about.expTitle}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 26 }}>
                {t.about.exp.map(x => (
                  <div key={x.year} style={{ display: "flex", gap: 12 }}>
                    <span style={{ flex: "0 0 auto", minWidth: 92, fontFamily: "var(--font-rubik,sans-serif)", fontWeight: 500, fontSize: 13, color: "#b07a4a", paddingTop: 1 }}>{x.year}</span>
                    <span style={{ fontSize: 14, lineHeight: 1.5, color: "#4a4a4a" }}>{x.text}</span>
                  </div>
                ))}
              </div>
              <h3 style={{ margin: "0 0 14px", fontFamily: "var(--font-rubik,sans-serif)", fontWeight: 500, fontSize: 19, letterSpacing: "-0.3px", color: "#0a0a0a" }}>{t.about.knowTitle}</h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {t.about.know.map((k, i) => (
                  <li key={i} style={{ position: "relative", paddingInlineStart: 20, fontSize: 15, lineHeight: 1.55, color: "#4a4a4a" }}>
                    <span style={{ position: "absolute", insetInlineStart: 0, top: 9, width: 7, height: 7, borderRadius: "50%", background: "#a4d4c5" }} />{k}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CHANGES ══ */}
      <section style={{ padding: "clamp(52px,8vw,96px) 0", background: "#faf5e8" }}>
        <div style={mw}>
          <div className="io-up" style={{ maxWidth: 640, marginBottom: "clamp(28px,4vw,44px)" }}>
            <Eyebrow>{t.changes.eyebrow}</Eyebrow>
            <RubikH2>{t.changes.title}</RubikH2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(244px,1fr))", gap: 18 }}>
            {t.changes.items.map((c, i) => (
              <div key={c.title} className="io-card" style={{ background: toneBg[c.color] ?? "#fffaf0", border: "1px solid #efe7d6", borderRadius: 16, padding: "26px 24px", "--d": `${i * 80}ms`, "--hover-border": toneDot[c.color] } as React.CSSProperties}>
                <span style={{ display: "block", width: 10, height: 10, borderRadius: "50%", background: toneDot[c.color] ?? "#ccc", marginBottom: 16 }} />
                <h3 style={{ margin: "0 0 8px", fontFamily: "var(--font-rubik,sans-serif)", fontWeight: 500, fontSize: 18, letterSpacing: "-0.2px", color: "#0a0a0a" }}>{c.title}</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#5a5a5a" }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ APPROACH ══ */}
      <section id="approach" style={{ padding: "clamp(56px,9vw,104px) 0" }}>
        <div style={mw}>
          <div className="io-up" style={{ maxWidth: 680, marginBottom: "clamp(28px,4vw,44px)" }}>
            <Eyebrow>{t.approach.eyebrow}</Eyebrow>
            <h2 style={{ margin: "12px 0 0", fontFamily: "var(--font-rubik,sans-serif)", fontWeight: 500, fontSize: "clamp(30px,4.8vw,46px)", lineHeight: 1.06, letterSpacing: "-1.4px", color: "#0a0a0a" }}>{t.approach.title}</h2>
          </div>
          <div className="io-up" style={{ background: "#1a3a3a", borderRadius: 24, padding: "clamp(30px,4vw,52px)", marginBottom: 28 }}>
            <h3 style={{ margin: "0 0 18px", fontFamily: "var(--font-rubik,sans-serif)", fontWeight: 500, fontSize: "clamp(24px,3.4vw,32px)", letterSpacing: "-0.6px", lineHeight: 1.1, color: "#ffffff" }}>{t.approach.leadTitle}</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 20 }}>
              {t.approach.lead.map((p, i) => <p key={i} style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.82)" }}>{p}</p>)}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 18, marginBottom: 40 }}>
            {t.approach.principles.map((pr, i) => (
              <div key={pr.title} className="io-card" style={{ background: "#faf5e8", border: "1px solid #efe7d6", borderRadius: 16, padding: "26px 24px", "--d": `${i * 80}ms` } as React.CSSProperties}>
                <h4 style={{ margin: "0 0 10px", fontFamily: "var(--font-rubik,sans-serif)", fontWeight: 500, fontSize: 18, letterSpacing: "-0.2px", color: "#0a0a0a" }}>{pr.title}</h4>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#5a5a5a" }}>{pr.text}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(24px,4vw,48px)" }}>
            <div>
              <h3 style={{ margin: "0 0 18px", fontFamily: "var(--font-rubik,sans-serif)", fontWeight: 500, fontSize: 22, letterSpacing: "-0.4px", color: "#0a0a0a" }}>{t.approach.notTitle}</h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {t.approach.not.map((n, i) => (
                  <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 15, lineHeight: 1.55, color: "#5a5a5a" }}>
                    <span style={{ flexShrink: 0, width: 20, height: 20, borderRadius: "50%", background: "#f4e4d6", color: "#c08a5a", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, marginTop: 1 }}>✕</span>{n}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={{ margin: "0 0 18px", fontFamily: "var(--font-rubik,sans-serif)", fontWeight: 500, fontSize: 22, letterSpacing: "-0.4px", color: "#0a0a0a" }}>{t.approach.resultTitle}</h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {t.approach.result.map((r, i) => (
                  <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 15, lineHeight: 1.55, color: "#3a3a3a" }}>
                    <span style={{ flexShrink: 0, width: 20, height: 20, borderRadius: "50%", background: "#d8ece3", color: "#2f7a5e", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12, marginTop: 1 }}>✓</span>{r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FORMATS ══ */}
      <section id="services" style={{ padding: "clamp(52px,8vw,96px) 0", background: "#faf5e8" }}>
        <div style={mw}>
          <div className="io-up" style={{ maxWidth: 680, marginBottom: "clamp(26px,4vw,40px)" }}>
            <Eyebrow>{t.formats.eyebrow}</Eyebrow>
            <h2 style={{ margin: "12px 0 8px", fontFamily: "var(--font-rubik,sans-serif)", fontWeight: 500, fontSize: "clamp(30px,4.8vw,46px)", lineHeight: 1.06, letterSpacing: "-1.4px", color: "#0a0a0a" }}>{t.formats.title}</h2>
            <p style={{ margin: "0 0 14px", fontSize: 17, lineHeight: 1.5, color: "#6a6a6a" }}>{t.formats.subtitle}</p>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#5a5a5a" }}>{t.formats.before}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(282px,1fr))", gap: 20, alignItems: "start" }}>
            {t.formats.cards.map((card, i) => (
              <div key={card.name} style={{ position: "relative" }}>
                {i === 2 && (
                  <div style={{ position: "absolute", top: -13, insetInlineStart: 24, zIndex: 2 }}>
                    <Badge tone="ochre" uppercase>{t.formats.recommendedLabel}</Badge>
                  </div>
                )}
                <div className={`io-card ${card.featured ? "pricing-featured" : ""}`} style={{ background: "#fffaf0", border: "1px solid #efe7d6", borderRadius: 20, padding: "28px 26px", display: "flex", flexDirection: "column", "--d": `${i * 90}ms` } as React.CSSProperties}>
                  <p className="card-price" style={{ margin: "0 0 2px", fontFamily: "var(--font-rubik,sans-serif)", fontWeight: 500, fontSize: "clamp(28px,4vw,36px)", letterSpacing: "-1px", color: "#0a0a0a", lineHeight: 1.1 }}>
                    {card.price}<span className="card-period" style={{ fontSize: 15, fontWeight: 400, color: "#8a8a8a", letterSpacing: 0 }}>{" "}{card.period}</span>
                  </p>
                  <div className="divider" style={{ borderTop: "1px solid #efe7d6", margin: "18px 0" }} />
                  <p className="card-name" style={{ margin: "0 0 8px", fontFamily: "var(--font-rubik,sans-serif)", fontWeight: 500, fontSize: 18, letterSpacing: "-0.3px", color: "#0a0a0a" }}>{card.name}</p>
                  <p className="card-desc" style={{ margin: "0 0 20px", fontSize: 14, lineHeight: 1.55, color: "#6a6a6a" }}>{card.description}</p>
                  <ul style={{ listStyle: "none", margin: "0 0 24px", padding: 0, display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                    {card.features.map(f => (
                      <li key={f} className="feature-item" style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, lineHeight: 1.5, color: "#3a3a3a" }}>
                        <span className="check-circle" style={{ flexShrink: 0, width: 18, height: 18, borderRadius: "50%", background: "#d8ece3", color: "#2f7a5e", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, marginTop: 1 }}>✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <a href="#contacts" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 20px", borderRadius: 100, fontSize: 15, fontWeight: 600, textDecoration: "none", background: card.featured ? "#ffffff" : "transparent", color: card.featured ? "#1a3a3a" : "#0a0a0a", border: card.featured ? "none" : "1.5px solid rgba(10,10,10,0.22)", cursor: "pointer", fontFamily: "var(--font-inter,sans-serif)" }}>{t.formats.formatCta}</a>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 34, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 18, background: "#fffaf0", border: "1px solid #efe7d6", borderRadius: 18, padding: "24px 28px" }}>
            <p style={{ margin: 0, flex: "1 1 320px", fontSize: 16, lineHeight: 1.55, color: "#3a3a3a" }}>{t.formats.after}</p>
            <a href="#contacts" className="btn btn-primary btn-lg">{t.formats.afterCta}</a>
          </div>
        </div>
      </section>

      {/* ══ REVIEWS ══ */}
      <section id="reviews" style={{ padding: "clamp(56px,9vw,104px) 0" }}>
        <div style={mw}>
          <div className="io-up" style={{ maxWidth: 640, marginBottom: "clamp(28px,4vw,44px)" }}>
            <Eyebrow>{t.reviews.eyebrow}</Eyebrow>
            <h2 style={{ margin: "12px 0 0", fontFamily: "var(--font-rubik,sans-serif)", fontWeight: 500, fontSize: "clamp(30px,4.8vw,46px)", lineHeight: 1.06, letterSpacing: "-1.4px", color: "#0a0a0a" }}>{t.reviews.title}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18 }}>
            {t.reviews.items.map((rv, i) => (
              <div key={rv.name} className="io-card" style={{ background: "#faf5e8", border: "1px solid #efe7d6", borderRadius: 18, padding: "26px 24px", display: "flex", flexDirection: "column", "--d": `${i * 80}ms` } as React.CSSProperties}>
                <p style={{ margin: "0 0 20px", fontSize: 15, lineHeight: 1.65, color: "#3a3a3a", flex: 1 }}>&ldquo;{rv.quote}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#ffb084", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-rubik,sans-serif)", fontWeight: 500, fontSize: 14, color: "#fff", flexShrink: 0 }}>{rv.name[0]}</div>
                  <div>
                    <p style={{ margin: 0, fontWeight: 600, fontSize: 14, color: "#0a0a0a" }}>{rv.name}</p>
                    <p style={{ margin: 0, fontSize: 12, color: "#8a8a8a" }}>{rv.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section id="faq" style={{ padding: "clamp(52px,8vw,96px) 0", background: "#faf5e8" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", paddingLeft: px, paddingRight: px }}>
          <div className="io-up" style={{ marginBottom: "clamp(26px,4vw,40px)" }}>
            <Eyebrow>{t.faq.eyebrow}</Eyebrow>
            <RubikH2>{t.faq.title}</RubikH2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {t.faq.items.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={i} style={{ background: "#fffaf0", border: "1px solid #efe7d6", borderRadius: 16, overflow: "hidden" }}>
                  <button onClick={() => setOpenFaq(open ? -1 : i)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 16, padding: "20px 24px", background: "transparent", border: "none", cursor: "pointer", textAlign: "start", fontFamily: "var(--font-inter,sans-serif)" }}>
                    <span style={{ flex: 1, fontFamily: "var(--font-rubik,sans-serif)", fontWeight: 500, fontSize: 17, letterSpacing: "-0.2px", color: "#0a0a0a", textAlign: isHe ? "right" : "left" }}>{item.q}</span>
                    <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: "50%", background: open ? "#1a3a3a" : "#f4ead8", color: open ? "#ffffff" : "#b07a4a", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 18, lineHeight: 1 }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && <p style={{ margin: 0, padding: "0 24px 22px", fontSize: 15, lineHeight: 1.65, color: "#4a4a4a" }}>{item.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ CONTACTS ══ */}
      <section id="contacts" style={{ padding: "clamp(56px,9vw,108px) 0" }}>
        <div style={mw}>
          <div style={{ position: "relative", overflow: "hidden", background: "#faf5e8", border: "1px solid #efe7d6", borderRadius: 28, padding: "clamp(36px,6vw,72px) clamp(28px,5vw,64px)", textAlign: "center" }}>
            <div className="blob-b" style={{ position: "absolute", top: -34, insetInlineStart: -24, width: 130, height: 130, background: "#ffb084", opacity: 0.6, borderRadius: "50%", boxShadow: "inset -8px -10px 18px rgba(10,10,10,0.12)" }} />
            <div className="blob-a" style={{ position: "absolute", bottom: -40, insetInlineEnd: 30, width: 110, height: 110, background: "#a4d4c5", opacity: 0.6, borderRadius: "50% / 58% 56% 44% 42%", boxShadow: "inset -8px -10px 18px rgba(10,10,10,0.1)" }} />
            <div className="io-up" style={{ position: "relative", zIndex: 2, maxWidth: 680, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Eyebrow>{t.contacts.eyebrow}</Eyebrow>
              <h2 style={{ margin: "14px 0 0", fontFamily: "var(--font-rubik,sans-serif)", fontWeight: 500, fontSize: "clamp(30px,5vw,48px)", lineHeight: 1.05, letterSpacing: "-1.6px", color: "#0a0a0a" }}>{t.contacts.title}</h2>
              <p style={{ margin: "18px 0 0", fontSize: 18, lineHeight: 1.55, color: "#3a3a3a" }}>{t.contacts.text}</p>
              <p style={{ margin: "10px 0 0", fontSize: 16, lineHeight: 1.55, color: "#6a6a6a" }}>{t.contacts.text2}</p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginTop: 30 }}>
                {t.contacts.buttons.map(b => (
                  <a key={b.label} href={b.href} target="_blank" rel="noopener noreferrer" className={`btn ${b.primary ? "btn-primary" : "btn-secondary"} btn-lg`}>{b.label}</a>
                ))}
              </div>
              <a href="mailto:natashasigolovich@gmail.com" style={{ marginTop: 18, fontSize: 15, color: "#6a6a6a", textDecoration: "none", borderBottom: "1px solid rgba(10,10,10,0.18)", paddingBottom: 1 }}>natashasigolovich@gmail.com</a>
              <p style={{ margin: "34px 0 0", fontFamily: "var(--font-rubik,sans-serif)", fontWeight: 500, fontSize: "clamp(20px,3vw,26px)", letterSpacing: "-0.4px", color: "#c08a3a" }}>{t.contacts.final}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background: "#f3ecdd", borderTop: "1px solid #e7ddc9" }}>
        <div style={{ ...mw, padding: `clamp(40px,6vw,64px) ${px}`, display: "flex", flexWrap: "wrap", gap: 28, justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ flex: "1 1 280px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 14 }}>
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffb084", boxShadow: "inset -3px -3px 6px rgba(10,10,10,0.18)", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-rubik,sans-serif)", fontWeight: 500, fontSize: 18, letterSpacing: "-0.3px", color: "#0a0a0a" }}>{t.footer.name}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {t.footer.lines.map(ln => <span key={ln} style={{ fontSize: 14, color: "#6a6a6a" }}>{ln}</span>)}
            </div>
          </div>
          <div style={{ flex: "0 1 auto", display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
            <a href="mailto:natashasigolovich@gmail.com" style={{ fontSize: 14, color: "#4a4a4a", textDecoration: "none" }}>natashasigolovich@gmail.com</a>
            <span style={{ fontSize: 14, color: "#6a6a6a" }}>+972 52-454-8345</span>
            <a href="#" style={{ fontSize: 14, color: "#6a6a6a", textDecoration: "none", borderBottom: "1px solid rgba(10,10,10,0.15)", paddingBottom: 1 }}>{t.footer.privacy}</a>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #e7ddc9" }}>
          <div style={{ ...mw, padding: `18px ${px}`, fontSize: 13, color: "#8a8a8a" }}>{t.footer.copyright}</div>
        </div>
      </footer>

      {/* ══ FLOATING BUTTON ══ */}
      <a href={floatHref} target="_blank" rel="noopener noreferrer" title={t.floatLabel} style={{ position: "fixed", bottom: 24, insetInlineEnd: 24, zIndex: 60, width: 58, height: 58, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 20px rgba(10,10,10,0.22)", textDecoration: "none", background: isHe ? "#25d366" : "#229ed9" }}>
        {isHe ? <WhatsAppIcon /> : <TelegramIcon />}
      </a>

      {/* ══ COOKIE BANNER ══ */}
      {cookieVisible && (
        <div style={{ position: "fixed", bottom: 0, insetInlineStart: 0, insetInlineEnd: 0, zIndex: 70, padding: "16px clamp(14px,4vw,28px)" }}>
          <div style={{ maxWidth: 880, margin: "0 auto", background: "#fffaf0", border: "1px solid #e7ddc9", borderRadius: 18, boxShadow: "0 10px 36px rgba(10,10,10,0.16)", padding: "18px 22px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14 }}>
            <p style={{ margin: 0, flex: "1 1 320px", fontSize: 14, lineHeight: 1.5, color: "#4a4a4a" }}>{t.cookie.text}</p>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => { try { localStorage.setItem("ns_cookie","decline"); } catch(_){} setCookieVisible(false); }} className="btn btn-ghost btn-sm">{t.cookie.decline}</button>
              <button onClick={() => { try { localStorage.setItem("ns_cookie","accept"); } catch(_){} setCookieVisible(false); }} className="btn btn-primary btn-sm">{t.cookie.accept}</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
