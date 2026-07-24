/* ===== i18n ===== */
const i18n = {
  ru: {
    nav_services: 'Услуги', nav_gallery: 'Примеры работ',
    nav_about: 'О нас', nav_reviews: 'Отзывы', nav_contact: 'Контакты', nav_cta: 'Заказать замер',
    hero_title: 'Надёжные окна<br><span>для вашего дома</span>',
    hero_desc: 'Grunder — качественные ПВХ окна в Бишкеке. Европейские профили, профессиональный монтаж.',
    hero_btn: 'Бесплатный замер',     hero_btn2: 'Примеры работ',
    hero_stat_profile: 'Все виды', hero_stat_profile_label: 'ПВХ-профиля',
    services_label: 'Наши услуги', services_title: 'Полный цикл работ<br>по остеклению',
    service1_title: 'Изготовление окон', service1_desc: 'Производство окон любых форм и размеров. Профили Grunder, Win-open, Accado, Wuco EVO.',
    service2_title: 'Доставка', service2_desc: 'Быстрая доставка окон по Бишкеку. Аккуратная погрузка и разгрузка.',
    service3_title: 'Замер и монтаж', service3_desc: 'Выезд замерщика, профессиональный монтаж. Работаем с квартирами, домами, офисами.',
    service5_title: 'Подоконники', service5_desc: 'Высококачественные подоконники — надёжные, прочные, устойчивые к излучениям, не желтеют и служат очень долго.',
    why_label: 'Почему Grunder', why_title: 'Качество, которому<br>доверяют',
    why_text: 'Мы производим окна и используем только проверенные материалы и комплектующие от ведущих европейских брендов. Каждое окно проходит контроль качества перед установкой.',
    why_feat2: 'Сертифицированные профили и фурнитура',
    why_feat3: 'Бесплатный замер и консультация',
    tech_label: 'Конструкция', tech_title: 'Как устроено<br>наше окно',
    tech_pvc_badge: '1', tech_pvc_title: 'Многокамерный ПВХ-профиль', tech_pvc_desc: 'Обеспечивает эффективную теплоизоляцию и защиту от уличного шума благодаря сложной внутренней структуре камер.',
    tech_glass_badge: '2', tech_glass_title: 'Энергоэффективный стеклопакет', tech_glass_desc: 'Конструкция из трёх стёкол (двух камер) снижает теплопотери зимой и сохраняет прохладу летом.',
    tech_reinforce_badge: '3', tech_reinforce_title: 'Внутреннее стальное армирование', tech_reinforce_desc: 'Жёсткий оцинкованный профиль внутри рамы удерживает геометрию конструкции при нагрузках.',
    tech_seal_badge: '4', tech_seal_title: 'Двухконтурный уплотнитель', tech_seal_desc: 'Герметично закрывает притвор, защищая помещение от сквозняков, пыли и влаги.',
    gallery_label: 'Примеры работ', gallery_title: 'Примеры выполненных объектов',

    about_label: 'О компании', about_title: 'Grunder —<br>качество в основе',
    about_text4: 'GRUNDER — немецкая компания, основанная в 2001 году в Нюрнберге, по производству оконных систем из ПВХ. Благодаря современным технологиям и инновационным разработкам, продукция GRUNDER быстро получила широкое распространение в Европе и стала востребована среди строительных и дизайнерских компаний по всему миру.',
    about_text5: 'Профиль GRUNDER — это высококачественный, экологически чистый материал, проверенный временем. Профиль прошёл все необходимые испытания, что подтверждается актами и сертификатами соответствия Госстандарта Кыргызской Республики. Продукция из этого профиля показывает отличные результаты при эксплуатации и пригодна для использования в любых климатических условиях.',
    
    reviews_label: 'Отзывы', reviews_title: 'Что говорят наши клиенты',
    review1_text: '«Заказывали окна для новой квартиры. Очень довольны качеством — в комнатах стало заметно теплее, шум с улицы почти не слышен. Монтажники работали аккуратно, убрали за собой мусор. Рекомендую.»',
    review1_name: 'Айжан', review1_detail: 'Квартира, 3 окна',
    review2_text: '«Поставили окна в частном доме. Выбрали профиль Grunder — отличное соотношение цены и качества. Замер приехали на следующий день после звонка. Установили за один день. Всё на высшем уровне.»',
    review2_name: 'Марат', review2_detail: 'Частный дом, 5 окон',
    review3_text: '«Сотрудничаем с Grunder уже 3 года для нашего офисного центра. Ставят окна оперативно, качество стабильно хорошее. Ни разу не подвели по срокам. Очень удобно, что работают с юрлицами.»',
    review3_name: 'Алексей', review3_detail: 'Офисный центр, 20 окон',
    booking_label: 'Оставьте заявку', booking_title: 'Вызов замерщика<br>бесплатно',
    booking_desc: 'Оставьте номер телефона — мы перезвоним в течение 30 минут, согласуем удобное время выезда замерщика. Замер и консультация бесплатно.',
    booking_feat1: 'Перезвоним за 30 минут', booking_feat2: 'Замер и консультация — бесплатно',     
    form_name: 'Ваше имя', form_phone: 'Номер телефона', form_profile: 'Тип окна',
    form_profile_default: '— Выберите профиль —', form_comment: 'Комментарий',
    form_submit: 'Отправить заявку', form_submit_sent: '✓ Заявка отправлена!', form_error: 'Ошибка. Попробуйте позже.',
    form_note: 'Нажимая «Отправить», вы соглашаетесь на обработку персональных данных',
    contact_label: 'Контакты', contact_title: 'Свяжитесь с нами',
    contact_addr_title: 'Адрес', contact_addr: 'пр. Ленина, 316, Бишкек (Лебединовка)',
    contact_phone_title: 'Телефон', contact_hours_title: 'Режим работы',
    contact_hours: 'Пн–Пт: 09:00–17:00<br>Сб: 09:00–14:00<br>Вс: выходной',
    contact_wa_title: 'Напишите нам',
    footer_tag: 'Производство и продажа окон в Бишкеке',
    footer_addr: 'пр. Ленина, 316 · +996 770 004 650',
    footer_menu: 'Меню', footer_contact: 'Контакты',
  },
  ky: {
    nav_services: 'Кызматтар', nav_gallery: 'Иштердин мисалдары',
    nav_about: 'Биз жөнүндө', nav_reviews: 'Пикирлер', nav_contact: 'Байланыш', nav_cta: 'Өлчөөгө заказ берүү',
    hero_title: 'Үйүңүз үчүн<br><span>ишенимдүү терезелер</span>',
    hero_desc: 'Grunder — Бишкекте сапаттуу ПВХ терезелер. Европа профилдери, кесипкөй монтаж.',
    hero_btn: 'Акысыз өлчөө',     hero_btn2: 'Иштердин мисалдары',
    hero_stat_profile: 'Бардык түрлөрү', hero_stat_profile_label: 'ПВХ-профили',
    services_label: 'Кызматтар', services_title: 'Терезелер боюнча<br>толук цикл',
    service1_title: 'Терезе жасоо', service1_desc: 'Ар кандай формадагы жана өлчөмдөгү терезелерди өндүрүү. Grunder, Win-open, Accado, Wuco EVO профилдери.',
    service2_title: 'Жеткирүү', service2_desc: 'Бишкек боюнча терезелерди тез жеткирүү. Так ташуу.',
    service3_title: 'Өлчөө жана монтаж', service3_desc: 'Өлчөөчүнүн чыгышы, кесипкөй монтаж. Батирлер, үйлөр, кеңселер.',
    service5_title: 'Терезе алды такталары', service5_desc: 'Жогорку сапаттагы терезе алды такталары — ишенимдүү, бекем, нурланууга туруктуу, саргайбайт жана узак кызмат кылат.',
    why_label: 'Эмне Grunder', why_title: 'Ишенимге ээ<br>болгон сапат',
    why_text: 'Биз терезелерди өндүрөбүз жана Европанын алдыңкы бренддеринин гана далилденген материалдарын жана комплекттерин колдонобуз. Ар бир терезе орнотуу алдында сапат көзөмөлүнөн өтөт.',
    why_feat2: 'Сертификатталган профилдер жана фурнитура',
    why_feat3: 'Акысыз өлчөө жана кеңеш берүү',
    tech_label: 'Түзүлүшү', tech_title: 'Биздин терезе<br>кантип түзүлгөн',
    tech_pvc_badge: '1', tech_pvc_title: 'Көп камералуу ПВХ-профиль', tech_pvc_desc: 'Камералардын татаал ички түзүлүшүнүн аркасында эффективдүү жылуулук изоляциясын жана көчө ызы-чуусунан коргоону камсыз кылат.',
    tech_glass_badge: '2', tech_glass_title: 'Энергия үнөмдөөчү айнек пакет', tech_glass_desc: 'Үч айнектен (эки камера) турган конструкция кышында жылуулук жоготууну азайтып, жайында салкынды сактайт.',
    tech_reinforce_badge: '3', tech_reinforce_title: 'Ички болот арматура', tech_reinforce_desc: 'Рамканын ичиндеги катуу цинктелген профиль жүктөм учурунда конструкциянын геометриясын кармап турат.',
    tech_seal_badge: '4', tech_seal_title: 'Эки контурлуу пломба', tech_seal_desc: 'Жапкычты герметикалык жаап, бөлмөнү шамалдан, чаңдан жана нымдан коргойт.',
    gallery_label: 'Иштердин мисалдары', gallery_title: 'Бүткөрүлгөн объектилердин мисалдары',

    about_label: 'Компания жөнүндө', about_title: 'Grunder —<br>негизи сапат',
    about_text4: 'GRUNDER — 2001-жылы Нюрнбергде негизделген, ПВХ терезе системдерин өндүргөн немис компаниясы. Заманбап технологиялар жана инновациялык иштеп чыгуулардын аркасында GRUNDER продукциясы Европада кеңири жайылып, дүйнө жүзүндөгү курулуш жана дизайн компаниялары арасында суроо-талапка ээ болду.',
    about_text5: 'GRUNDER профили — бул жогорку сапаттагы, экологиялык жактан таза, убакыт сынагынан өткөн материал. Профиль Кыргыз Республикасынын Мамлекеттик стандартынын актылары жана сертификаттары менен тастыкталган бардык зарыл сыноолордон өттү. Бул профилден жасалган буюмдар колдонууда эң сонун натыйжаларды көрсөтөт жана каалаган климаттык шарттарда колдонууга ылайыктуу.',
    
    reviews_label: 'Пикирлер', reviews_title: 'Кардарларыбыз эмне дешет',
    review1_text: '«Жаңы батирге терезелерге заказ бергенбиз. Сапатына абдан ыраазыбыз — бөлмөлөр жылуураак болду, көчөнүн ызы-чуусу дээрлик угулбайт. Монтажчылар так иштешти. Сунуштайм.»',
    review1_name: 'Айжан', review1_detail: 'Батир, 3 терезе',
    review2_text: '«Жеке үйгө терезелерди койдук. Grunder профилин тандадык — баасы менен сапатынын эң сонун айкалышы. Чалуудан кийин эртеси эле өлчөөчү келди. Бир күндө орнотуп койду. Баары эң жогорку деңгээлде.»',
    review2_name: 'Марат', review2_detail: 'Жеке үй, 5 терезе',
    review3_text: '«Grunder менен 3 жылдан бери кеңсебиз үчүн кызматташабыз. Терезелерди тез коюшат, сапаты туруктуу жакшы. Мөөнөтүнөн эч качан кечиккен эмес.»',
    review3_name: 'Алексей', review3_detail: 'Кеңсе борбору, 20 терезе',
    booking_label: 'Заказ калтырыңыз', booking_title: 'Өлчөөчүнү чакыруу<br>акысыз',
    booking_desc: 'Телефон номериңизди калтырыңыз — биз 30 мүнөт ичинде кайра чалып, өлчөөчүнүн келүү убактысын макулдашабыз. Өлчөө жана кеңеш берүү акысыз.',
    booking_feat1: '30 мүнөттө кайра чалабыз', booking_feat2: 'Өлчөө жана кеңеш берүү — акысыз',
    form_name: 'Атыңыз', form_phone: 'Телефон номери', form_profile: 'Терезе түрү',
    form_profile_default: '— Профилди тандаңыз —', form_comment: 'Комментарий',
    form_submit: 'Заказ жөнөтүү', form_submit_sent: '✓ Заказ жөнөтүлдү!', form_error: 'Ката. Кийинчерээк аракет кылыңыз.',
    form_note: '«Жөнөтүү» басканда, сиз жеке маалыматтарды иштетүүгө макул болосуз',
    contact_label: 'Байланыш', contact_title: 'Биз менен байланышыңыз',
    contact_addr_title: 'Дарек', contact_addr: 'Ленин пр., 316, Бишкек (Лебединовка)',
    contact_phone_title: 'Телефон', contact_hours_title: 'Иш убактысы',
    contact_hours: 'Дш–Жм: 09:00–17:00<br>Ишм: 09:00–14:00<br>Жк: дем алыш',
    contact_wa_title: 'Бизге жазыңыз',
    footer_tag: 'Бишкекте терезе өндүрүү жана сатуу',
    footer_addr: 'Ленин пр., 316 · +996 770 004 650',
    footer_menu: 'Меню', footer_contact: 'Байланыш',
  }
};

let currentLang = 'ru';

function switchLang(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = i18n[lang][key];
    if (text !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = text;
      else if (el.tagName === 'OPTION' && el.value === '') el.textContent = text;
      else el.innerHTML = text;
    }
  });
  document.getElementById('langBtn').textContent = lang.toUpperCase();
}

document.getElementById('langBtn').addEventListener('click', () => {
  const next = currentLang === 'ru' ? 'ky' : 'ru';
  switchLang(next);
});

/* ===== Mobile Menu ===== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

/* ===== Navbar Scroll ===== */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

/* ===== Scroll Animation ===== */
if ('IntersectionObserver' in window) {
  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        animObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => animObserver.observe(el));
}

/* ===== Leaflet Map ===== */
try {
  const map = L.map('contactMap').setView([42.883957, 74.6648], 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap',
    maxZoom: 19
  }).addTo(map);
  L.marker([42.883957, 74.6648]).addTo(map)
    .bindPopup('Grunder<br>пр. Ленина, 316')
    .openPopup();
} catch (e) {
  console.warn('Map not loaded:', e.message);
}

/* ===== Booking Form ===== */
document.getElementById('bookingForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const original = btn.textContent;

  btn.disabled = true;
  btn.textContent = '...';

  const data = {
    name: e.target.name.value.trim(),
    phone: e.target.phone.value.trim(),
    profile: e.target.profile.value,
    comment: e.target.comment.value.trim()
  };

  try {
    const res = await fetch('/api/send-booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      btn.textContent = currentLang === 'ru'
        ? '✓ Заявка отправлена!'
        : '✓ Заказ жөнөтүлдү!';
      e.target.reset();
    } else {
      const err = await res.json().catch(() => ({}));
      console.error('Form error:', err);
      throw new Error(err.error || 'http ' + res.status);
    }
  } catch (e) {
    btn.textContent = currentLang === 'ru'
      ? 'Ошибка. Попробуйте позже.'
      : 'Ката. Кийинчерээк аракет кылыңыз.';
    console.error('Form error:', e.message);
  }

  setTimeout(() => {
    btn.disabled = false;
    btn.textContent = original;
  }, 3000);
});

/* ===== Initialize ===== */
switchLang('ru');
