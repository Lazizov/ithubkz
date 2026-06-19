/* ==========================================================================
   IT HUB - Premium JavaScript Application Logic
   ========================================================================== */

// Translation Dictionary (RU, KK, EN)
const translations = {
  ru: {
    nav_home: "Главная",
    nav_services: "Услуги",
    nav_academy: "Учебный Центр",
    nav_projects: "Наши Проекты",
    nav_team: "Наша Команда",
    nav_contacts: "Контакты",
    cta_consult: "Консультация",
    hero_tagline: "Инновационные IT-Решения & Обучение",
    hero_title: "Создаем будущее <br>IT-индустрии Казахстана",
    hero_desc: "IT HUB — это синергия передовых веб-технологий и современного образования. Разрабатываем программное обеспечение для бизнеса и готовим профессиональные IT-кадры.",
    hero_cta_academy: "Учебный Центр",
    hero_cta_services: "Наши Услуги",
    stat_projects: "Проектов Сдано",
    stat_students: "Выпускников",
    stat_courses: "IT-Направлений",
    stat_satisfaction: "Довольных Клиентов",
    about_tag: "О Нас",
    about_title: "Мы решаем ваши бизнес-задачи с помощью технологий",
    about_desc_1: "IT HUB — это профессиональная команда IT-разработчиков и преподавателей. Мы объединяем практический опыт создания крупных веб-проектов и систем автоматизации со стремлением делиться знаниями.",
    about_desc_2: "Наш учебный центр готовит квалифицированных специалистов, которые сразу после окончания обучения готовы вливаться в реальные проекты. А наше IT-подразделение создает цифровые решения мирового уровня для компаний в Казахстане.",
    about_badge_exp: "Лет опыта в IT",
    feat_1_title: "Индивидуальный подход",
    feat_1_desc: "Как в обучении, так и в разработке программных решений.",
    feat_2_title: "Практикующие эксперты",
    feat_2_desc: "Обучаем только тому, что используем сами в коммерческой разработке.",
    services_tag: "Наши Услуги",
    services_title: "Решения для Вашего Бизнеса",
    services_subtitle: "Мы помогаем автоматизировать процессы, привлекать клиентов и масштабировать бизнес в цифровой среде.",
    serv_1_title: "Создание сайтов",
    serv_1_desc: "Разработка современных сайтов под ключ: от лендингов до крупных корпоративных порталов и интернет-магазинов.",
    serv_2_title: "Мобильные приложения",
    serv_2_desc: "Разработка кроссплатформенных и нативных мобильных приложений для iOS и Android любой сложности.",
    serv_3_title: "Автоматизация бизнеса",
    serv_3_desc: "Внедрение CRM, ERP систем, настройка интеграций и разработка индивидуального ПО под ваши бизнес-процессы.",
    serv_4_title: "Поддержка сайтов",
    serv_4_desc: "Техническое сопровождение, обновление контента, обеспечение безопасности и мониторинг работоспособности ваших систем.",
    serv_cta: "Заказать",
    academy_tag: "Учебный Центр",
    academy_title: "Освойте востребованную IT-Профессию",
    academy_subtitle: "Курсы от практикующей команды профессионалов с индивидуальным подходом, гибким графиком и помощью в трудоустройстве.",
    course_filter_all: "Все курсы",
    course_filter_prog: "Программирование",
    course_filter_design: "Дизайн",
    course_filter_kids: "Детям",
    badge_hit: "Хит",
    badge_popular: "Популярно",
    badge_kids: "Дети",
    level_beginner: "С нуля",
    course_frontend_desc: "Научитесь создавать интерактивные пользовательские интерфейсы для сайтов и веб-приложений. Сделаете 5 проектов в портфолио.",
    course_backend_desc: "Освойте логику работы серверов, баз данных и разработку API. Изучите основы проектирования сложных архитектур систем.",
    course_design_desc: "Проектируйте удобные интерфейсы сайтов и мобильных приложений. Научитесь проводить исследования, строить CJM и прототипы.",
    course_kids_desc: "Программирование в игровой форме: создание первых игр на Scratch, знакомство с HTML/CSS и развитием логического мышления.",
    course_enroll: "Записаться",
    projects_tag: "Наши Проекты",
    projects_title: "Портфолио Выполненных Работ",
    projects_subtitle: "Реализованные проекты, разработанные нашей командой для бизнеса в Казахстане и СНГ.",
    proj_1_category: "Корпоративный сайт",
    proj_1_tech: "Laravel • Vue.js • Tailwind CSS",
    proj_1_desc: "Информационный сайт-визитка крупного хлебопекарного комбината с каталогом продукции и системой заявок.",
    proj_2_category: "Автоматизация процессов",
    proj_2_tech: "React • Node.js • PostgreSQL",
    proj_2_desc: "Внутренняя CRM-система для учета заявок, автоматизации продаж и отслеживания логистики поставок.",
    proj_3_category: "Образовательная платформа",
    proj_3_tech: "Vue.js • Firebase • Node.js",
    proj_3_desc: "Сайт образовательного центра с интерактивным личным кабинетом студента, вебинарами и тестированием.",
    proj_view: "Подробнее",
    partners_title: "Наши Партнеры и Клиенты",
    team_tag: "Команда",
    team_title: "Профессионалы своего дела",
    team_subtitle: "Команда разработчиков, создающих качественные программные решения для вашего бизнеса.",
    contacts_tag: "Контакты",
    contacts_title: "Свяжитесь с Нами",
    contacts_subtitle: "Оставьте заявку, позвоните нам или приезжайте в гости. Наш офис всегда открыт для новых идей и сотрудничества.",
    contact_phone_title: "Телефон",
    contact_email_title: "Электронная почта",
    contact_address_title: "Наш офис",
    contact_address_desc: "Казахстан, г. Астана, ул. Туркестан, 10",
    socials_title: "Наши соцсети",
    map_open: "Открыть 2ГИС",
    form_title: "Оставить заявку",
    form_subtitle: "Оставьте ваши данные, и наш менеджер свяжется с вами в течение 15 минут для подробной консультации.",
    form_label_name: "Имя",
    form_label_phone: "Телефон",
    form_label_msg: "Ваш вопрос или проект",
    form_submit: "Отправить заявку",
    footer_brand_desc: "Разработка современных технологических решений для бизнеса и подготовка высококлассных специалистов в сфере IT.",
    footer_nav_title: "Навигация",
    footer_contacts_title: "Контакты",
    footer_copyright: "&copy; 2026 IT HUB. Все права защищены. | Разработано Alavkhanov",
    toast_success_title: "Успешно!",
    toast_success_desc: "Ваша заявка принята. Менеджер свяжется с вами."
  },
  kk: {
    nav_home: "Басты бет",
    nav_services: "Қызметтер",
    nav_academy: "Оқу Орталығы",
    nav_projects: "Біздің Жобалар",
    nav_team: "Біздің Команда",
    nav_contacts: "Байланыс",
    cta_consult: "Консультация",
    hero_tagline: "Инновациялық IT-Шешімдер & Оқу",
    hero_title: "Қазақстанның IT-индустриясының <br>болашағын жасаймыз",
    hero_desc: "IT HUB — озық веб-технологиялар мен заманауи білім берудің үйлесімі. Біз бизнеске арналған бағдарламалық қамтамасыз етуді әзірлейміз және кәсіби IT-кадрларды дайындаймыз.",
    hero_cta_academy: "Оқу Орталығы",
    hero_cta_services: "Біздің Қызметтер",
    stat_projects: "Тапсырылған Жобалар",
    stat_students: "Түлектер",
    stat_courses: "IT-Бағыттар",
    stat_satisfaction: "Риза Клиенттер",
    about_tag: "Біз Туралы",
    about_title: "Технологиялар арқылы бизнесіңіздің мәселелерін шешеміз",
    about_desc_1: "IT HUB — бұл IT-әзірлеушілер мен оқытушылардың кәсіби командасы. Біз ірі веб-жобалар мен автоматтандыру жүйелерін құрудың практикалық тәжірибесін білім беруге деген ұмтылыспен біріктіреміз.",
    about_desc_2: "Біздің оқу орталығымыз оқуды бітіргеннен кейін бірден нақты жобаларға араласуға дайын білікті мамандарды дайындайды. Ал біздің IT-бөлімшеміз Қазақстандағы компаниялар үшін әлемдік деңгейдегі цифрлық шешімдерді жасайды.",
    about_badge_exp: "IT-дегі жұмыс өтілі",
    feat_1_title: "Жеке тәсіл",
    feat_1_desc: "Оқытуда да, бағдарламалық шешімдерді әзірлеуде де.",
    feat_2_title: "Практик мамандар",
    feat_2_desc: "Біз тек коммерциялық әзірлеуде өзіміз қолданатын нәрселерді үйретеміз.",
    services_tag: "Қызметтеріміз",
    services_title: "Бизнесіңізге Арналған Шешімдер",
    services_subtitle: "Біз процестерді автоматтандыруға, клиенттерді тартуға және цифрлық ортада бизнесті кеңейтуге көмектесеміз.",
    serv_1_title: "Сайттарды жасау",
    serv_1_desc: "Заманауи сайттарды толығымен әзірлеу: лендингтерден бастап ірі корпоративтік порталдар мен интернет-дүкендерге дейін.",
    serv_2_title: "Мобильді қосымшалар",
    serv_2_desc: "iOS және Android үшін кез келген күрделіліктегі кроссплатформалық және нативті мобильді қосымшаларды әзірлеу.",
    serv_3_title: "Бизнесті автоматтандыру",
    serv_3_desc: "CRM, ERP жүйелерін енгізу, интеграцияларды баптау және сіздің бизнес-процестеріңізге сәйкес жеке БҚ әзірлеу.",
    serv_4_title: "Сайттарды қолдау",
    serv_4_desc: "Техникалық сүйемелдеу, мазмұнды жаңарту, қауіпсіздікті қамтамасыз ету және жүйелеріңіздің жұмыс қабілеттілігін бақылау.",
    serv_cta: "Тапсырыс беру",
    academy_tag: "Оқу Орталығы",
    academy_title: "Сұранысқа ие IT-Мамандықты Игеріңіз",
    academy_subtitle: "Практик кәсіпқойлар командасынан жеке тәсілмен, икемді кестемен және жұмысқа орналасуға көмектесетін курстар.",
    course_filter_all: "Барлық курстар",
    course_filter_prog: "Бағдарламалау",
    course_filter_design: "Дизайн",
    course_filter_kids: "Балаларға",
    badge_hit: "Хит",
    badge_popular: "Танымал",
    badge_kids: "Балалар",
    level_beginner: "Нөлден бастап",
    course_frontend_desc: "Сайттар мен веб-қосымшалар үшін интерактивті пайдаланушы интерфейстерін жасауды үйреніңіз. Портфолиода 5 жоба жасайсыз.",
    course_backend_desc: "Серверлердің жұмыс логикасын, деректер базасын және API әзірлеуді меңгеріңіз. Күрделі жүйелер архитектурасын жобалау негіздерін үйреніңіз.",
    course_design_desc: "Сайттар мен мобильді қосымшалардың ыңғайлы интерфейстерін жобалаңыз. Зерттеулер жүргізуді, CJM және прототиптерді құруды үйреніңіз.",
    course_kids_desc: "Ойын түріндегі бағдарламалау: Scratch-те алғашқы ойындарды құру, HTML/CSS-пен танысу және логикалық ойлауды дамыту.",
    course_enroll: "Жазылу",
    projects_tag: "Біздің Жобалар",
    projects_title: "Орындалған Жұмыстар Портфолиосы",
    projects_subtitle: "Біздің команда Қазақстан мен ТМД-дағы бизнес үшін әзірлеген жүзеге асырылған жобалар.",
    proj_1_category: "Корпоративтік сайт",
    proj_1_tech: "Laravel • Vue.js • Tailwind CSS",
    proj_1_desc: "Өнімдер каталогы мен өтінімдер жүйесі бар ірі нан-тоқаш комбинатының ақпараттық визитка-сайты.",
    proj_2_category: "Процестерді автоматтандыру",
    proj_2_tech: "React • Node.js • PostgreSQL",
    proj_2_desc: "Өтінімдерді есепке алу, сатуды автоматтандыру және жеткізу логистикасын қадағалауға арналған ішкі CRM жүйесі.",
    proj_3_category: "Білім беру платформасы",
    proj_3_tech: "Vue.js • Firebase • Node.js",
    proj_3_desc: "Студенттің интерактивті жеке кабинеті, вебинарлар және тестілеу бар білім беру орталығының сайты.",
    proj_view: "Толығырақ",
    partners_title: "Серіктестеріміз бен Клиенттеріміз",
    team_tag: "Команда",
    team_title: "Өз ісінің мамандары",
    team_subtitle: "Сіздің бизнесіңіз үшін сапалы бағдарламалық шешімдер жасайтын әзірлеушілер командасы.",
    contacts_tag: "Байланыс",
    contacts_title: "Бізбен Байланысыңыз",
    contacts_subtitle: "Өтінім қалдырыңыз, телефон соғыңыз немесе кеңсемізге келіңіз. Біздің кеңсеміз жаңа идеялар мен серіктестік үшін әрқашан ашық.",
    contact_phone_title: "Телефон",
    contact_email_title: "Электрондық пошта",
    contact_address_title: "Кеңсеміз",
    contact_address_desc: "Қазақстан, Астана қ., Түркістан көшесі, 10",
    socials_title: "Әлеуметтік желілеріміз",
    map_open: "2ГИС ашу",
    form_title: "Өтінім қалдыру",
    form_subtitle: "Мәліметтеріңізді қалдырыңыз, біздің менеджер толық кеңес беру үшін 15 минут ішінде сізбен байланысады.",
    form_label_name: "Атыңыз",
    form_label_phone: "Телефон",
    form_label_msg: "Сұрағыңыз немесе жобаңыз",
    form_submit: "Өтінімді жіберу",
    footer_brand_desc: "Бизнеске арналған заманауи технологиялық шешімдерді әзірлеу және IT саласындағы жоғары білікті мамандарды даярлау.",
    footer_nav_title: "Навигация",
    footer_contacts_title: "Байланыс",
    footer_copyright: "&copy; 2026 IT HUB. Барлық құқықтар қорғалған. | Alavkhanov әзірледі",
    toast_success_title: "Сәтті!",
    toast_success_desc: "Өтінішіңіз қабылданды. Менеджер сізбен байланысады."
  },
  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_academy: "Academy",
    nav_projects: "Projects",
    nav_team: "Team",
    nav_contacts: "Contacts",
    cta_consult: "Consultation",
    hero_tagline: "Innovative IT Solutions & Training",
    hero_title: "Shaping the Future <br>of Kazakhstan's IT",
    hero_desc: "IT HUB is a synergy of advanced web technologies and modern education. We develop software for businesses and train professional IT specialists.",
    hero_cta_academy: "Academy Portal",
    hero_cta_services: "Our Services",
    stat_projects: "Projects Delivered",
    stat_students: "Graduates",
    stat_courses: "IT Directions",
    stat_satisfaction: "Satisfied Clients",
    about_tag: "About Us",
    about_title: "We solve your business challenges through technology",
    about_desc_1: "IT HUB is a professional team of IT developers and trainers. We combine practical experience in building large web projects and automation systems with a passion for teaching.",
    about_desc_2: "Our training center prepares qualified specialists who are ready to join real projects immediately after graduation. And our IT division creates world-class digital solutions for companies in Kazakhstan.",
    about_badge_exp: "Years of IT Experience",
    feat_1_title: "Individual Approach",
    feat_1_desc: "Both in teaching and developing tailored software solutions.",
    feat_2_title: "Practicing Experts",
    feat_2_desc: "We only teach what we use ourselves in commercial development.",
    services_tag: "Our Services",
    services_title: "Solutions for Your Business",
    services_subtitle: "We help automate processes, attract customers, and scale business in the digital environment.",
    serv_1_title: "Website Development",
    serv_1_desc: "Turnkey website development: from landing pages to major corporate portals and e-commerce platforms.",
    serv_2_title: "Mobile Apps",
    serv_2_desc: "Development of cross-platform and native mobile applications for iOS and Android of any complexity.",
    serv_3_title: "Business Automation",
    serv_3_desc: "CRM, ERP implementation, integrations setup, and custom software development matching your business processes.",
    serv_4_title: "Website Support",
    serv_4_desc: "Technical support, content updates, security monitoring, and regular updates to keep your systems running smoothly.",
    serv_cta: "Order Now",
    academy_tag: "Training Center",
    academy_title: "Master a High-Demand IT Career",
    academy_subtitle: "Courses from a team of practicing professionals with a personalized approach, flexible schedules, and employment assistance.",
    course_filter_all: "All Courses",
    course_filter_prog: "Programming",
    course_filter_design: "Design",
    course_filter_kids: "For Kids",
    badge_hit: "Hit",
    badge_popular: "Popular",
    badge_kids: "Kids",
    level_beginner: "Beginner",
    course_frontend_desc: "Learn how to build interactive user interfaces for websites and web applications. Create 5 projects for your portfolio.",
    course_backend_desc: "Master server logic, databases, and API development. Learn the basics of designing complex system architectures.",
    course_design_desc: "Design user-friendly interfaces for websites and mobile apps. Learn how to conduct user research, map CJMs, and build wireframes.",
    course_kids_desc: "Programming in a playful way: create first games on Scratch, get acquainted with HTML/CSS, and develop logical thinking.",
    course_enroll: "Enroll",
    projects_tag: "Our Projects",
    projects_title: "Portfolio of Completed Works",
    projects_subtitle: "Realized projects developed by our team for businesses in Kazakhstan and CIS.",
    proj_1_category: "Corporate Website",
    proj_1_tech: "Laravel • Vue.js • Tailwind CSS",
    proj_1_desc: "Informational website for a large bakery concern featuring a dynamic product catalog and order system.",
    proj_2_category: "Process Automation",
    proj_2_tech: "React • Node.js • PostgreSQL",
    proj_2_desc: "Internal CRM system for managing leads, automating sales funnels, and tracking delivery logistics.",
    proj_3_category: "Educational Portal",
    proj_3_tech: "Vue.js • Firebase • Node.js",
    proj_3_desc: "Website for an educational center with an interactive student portal, webinars, and testing modules.",
    proj_view: "Details",
    partners_title: "Our Partners & Clients",
    team_tag: "Our Team",
    team_title: "Professionals in Action",
    team_subtitle: "The development team behind reliable, top-tier digital products for your business.",
    contacts_tag: "Contacts",
    contacts_title: "Get In Touch",
    contacts_subtitle: "Leave a request, call us, or visit our office. We are always open to new ideas and collaborations.",
    contact_phone_title: "Phone",
    contact_email_title: "Email",
    contact_address_title: "Our Office",
    contact_address_desc: "Kazakhstan, Astana, Turkestan street, 10",
    socials_title: "Social Networks",
    map_open: "Open 2GIS",
    form_title: "Leave Request",
    form_subtitle: "Leave your details, and our manager will contact you within 15 minutes for a detailed consultation.",
    form_label_name: "Name",
    form_label_phone: "Phone",
    form_label_msg: "Your question or project",
    form_submit: "Submit Request",
    footer_brand_desc: "Development of modern tech solutions for businesses and high-level education in IT.",
    footer_nav_title: "Navigation",
    footer_contacts_title: "Contacts",
    footer_copyright: "&copy; 2026 IT HUB. All rights reserved. | Developed by Alavkhanov",
    toast_success_title: "Success!",
    toast_success_desc: "Your request has been received. Our manager will contact you."
  }
};

// Course Curriculum Details for Modal
const courseDetails = {
  frontend: {
    title: "Frontend Разработка (HTML, CSS, JS, Vue/React)",
    subtitle: "Курс веб-разработки для начинающих",
    desc: "Frontend-разработчик создает интерфейсы, с которыми взаимодействуют пользователи. Вы научитесь верстать сайты с нуля, программировать их интерактивность и работать с современным фреймворком Vue или React.",
    syllabus: [
      "Основы HTML5 и семантическая верстка",
      "CSS3: флексы, гриды, адаптивный дизайн и анимации",
      "Основы JavaScript (переменные, функции, массивы, объекты)",
      "Работа с DOM-деревом и обработка событий пользователя",
      "Асинхронные запросы (Fetch API, AJAX) и работа с внешними API",
      "Основы Git, GitHub и командная разработка",
      "Разработка SPA на React/Vue (компоненты, роутинг, состояния)"
    ],
    price: "45 000 ₸ / мес."
  },
  backend: {
    title: "Backend Разработка на Python (Django, FastAPI)",
    subtitle: "Курс серверной разработки",
    desc: "Backend-разработчик отвечает за внутреннюю логику сайтов, работу баз данных, интеграции и безопасность. Вы освоите самый популярный язык Python, научитесь создавать серверную логику и проектировать API.",
    syllabus: [
      "Язык программирования Python: от синтаксиса до ООП",
      "Работа с реляционными базами данных (PostgreSQL, SQLite) и SQL",
      "Проектирование баз данных и ORM (Django ORM, SQLAlchemy)",
      "Веб-разработка на фреймворке Django: архитектура MVC",
      "Создание современных REST API на FastAPI и Django REST Framework",
      "Авторизация пользователей (JWT токены, OAuth)",
      "Контейнеризация приложений (Docker) и деплой на Linux сервер"
    ],
    price: "50 000 ₸ / мес."
  },
  design: {
    title: "UI/UX Дизайн в Figma (Веб & Мобильные)",
    subtitle: "Курс проектирования интерфейсов",
    desc: "UI/UX-дизайнер проектирует внешний вид цифровых продуктов, делая их удобными и красивыми. Вы изучите все тонкости UX-исследований, правила веб-типографики, цвета и создание адаптивных прототипов в Figma.",
    syllabus: [
      "Введение в UI/UX: разница между визуальным стилем и юзабилити",
      "Инструментарий Figma: фреймы, автолейауты, компоненты",
      "Основы типографики, композиции и подбор цветовых палитр",
      "Создание интерактивных прототипов и микровзаимодействий",
      "Проектирование пользовательских сценариев (User Flow, CJM)",
      "Адаптивный дизайн для мобильных устройств, планшетов и десктопов",
      "Подготовка дизайн-макета к передаче в команду разработки"
    ],
    price: "40 000 ₸ / мес."
  },
  kids: {
    title: "Основы IT & Scratch для школьников",
    subtitle: "Компьютерные курсы для детей 10-15 лет",
    desc: "Курс развивает алгоритмическое и логическое мышление у детей. Мы учим программированию в игровой форме на платформе Scratch, создавая игры и мультфильмы, а также знакомим с основами устройства веба.",
    syllabus: [
      "Введение в алгоритмы: что такое код и как думает компьютер",
      "Основы визуального программирования в среде Scratch",
      "Создание первых игр: управление персонажами, счетчики, уровни",
      "Разработка интерактивной анимации и мультиков",
      "Основы компьютерной грамотности и безопасного интернета",
      "Знакомство со структурой сайтов: простейшая верстка HTML/CSS",
      "Презентация и защита собственных проектов перед родителями"
    ],
    price: "30 000 ₸ / мес."
  }
};

// State Variables
let currentLanguage = 'ru';
let currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
let marqueePosition = 0;
let marqueeSetWidth = 0;
let marqueeCardStep = 0;
let marqueeHovering = false;
let marqueeJumping = false;
let marqueeRAF = null;

// DOMContentLoaded Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Preloader removal
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('fade-out');
      setTimeout(() => loader.remove(), 600);
    }
  }, 1200);

  // Initialize Header Scroll Effects
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Initialize Custom Trailing Cursor
  initCustomCursor();

  // Initialize Flat Partners Logo Marquee
  initPartnersMarquee();

  // Handle Initial Route (if any hash exists)
  handleInitialRoute();

  // Initialize Counter Animations
  initCounterAnimations();

  // Sync theme toggle icon/label with current theme
  applyThemeUI();
});

// Custom Cursor Trail Logic
function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const follower = document.querySelector('.custom-cursor-follower');
  
  if (!cursor || !follower) return;

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Instant dot movement
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  // Smooth trail animation loop for follower
  function updateFollower() {
    // Linear interpolation
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;
    
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    
    requestAnimationFrame(updateFollower);
  }
  updateFollower();

  // Add scale states on hoverable items
  const hoverables = document.querySelectorAll('a, button, .service-card, .course-card, .project-card, .team-card, .logo-card, .lang-btn, .form-control');
  hoverables.forEach(item => {
    item.addEventListener('mouseenter', () => {
      cursor.classList.add('active');
      follower.classList.add('active');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('active');
      follower.classList.remove('active');
    });
  });
}

// SPA Routing and Page Toggling
function showPage(pageId) {
  // Hide active menu
  closeMobileMenu();

  // Close dynamic modals if open
  closeDynamicModal();

  // Remove active state from all sections
  const sections = document.querySelectorAll('.page-section');
  sections.forEach(sec => {
    sec.classList.remove('active');
  });

  // Remove active state from all nav links
  const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    // If link matches the pageId
    if (link.getAttribute('href') === `#${pageId}`) {
      link.classList.add('active');
    }
  });

  // Show selected section
  const targetSection = document.getElementById(`page-${pageId}`);
  if (targetSection) {
    targetSection.classList.add('active');
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Trigger counters count-up if home is activated
  if (pageId === 'home') {
    initCounterAnimations();
  }
}

function handleInitialRoute() {
  const hash = window.location.hash.substring(1);
  const validPages = ['home', 'services', 'academy', 'projects', 'team', 'contacts'];
  if (hash && validPages.includes(hash)) {
    showPage(hash);
  } else {
    showPage('home');
  }
}

// Mobile Menu toggling
function toggleMobileMenu() {
  const hamburger = document.querySelector('.hamburger-btn');
  const menu = document.getElementById('mobileMenu');
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
}

function closeMobileMenu() {
  const hamburger = document.querySelector('.hamburger-btn');
  const menu = document.getElementById('mobileMenu');
  if (hamburger && menu) {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  }
}

// Multi-language Logic
function changeLang(langCode) {
  currentLanguage = langCode;

  // Update language switcher buttons
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.classList.remove('active');
    // Check if innerHTML matches langCode in uppercase
    if (btn.innerHTML.toLowerCase() === langCode) {
      btn.classList.add('active');
    }
  });

  // Update HTML Lang tag
  document.documentElement.lang = langCode;

  // Translate all DOM elements with data-key
  const translatableElements = document.querySelectorAll('[data-key]');
  translatableElements.forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[langCode] && translations[langCode][key]) {
      // If it's an input or textarea placeholder
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[langCode][key];
      } else {
        el.innerHTML = translations[langCode][key];
      }
    }
  });

  // Keep theme toggle label (mobile) in sync with the new language
  applyThemeUI();
}

// Dark / Light Theme Toggle
function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  try {
    localStorage.setItem('ithub-theme', currentTheme);
  } catch (e) {
    /* localStorage unavailable - theme just won't persist across visits */
  }
  applyThemeUI();
}

function applyThemeUI() {
  const isDark = currentTheme === 'dark';
  const iconClass = isDark ? 'fas fa-sun' : 'fas fa-moon';

  const icon = document.getElementById('themeToggleIcon');
  const iconMobile = document.getElementById('themeToggleIconMobile');
  if (icon) icon.className = iconClass;
  if (iconMobile) iconMobile.className = iconClass;

  const labelMobile = document.getElementById('themeToggleLabelMobile');
  if (labelMobile) {
    const labels = {
      ru: isDark ? 'Светлая тема' : 'Тёмная тема',
      kk: isDark ? 'Жарық тема' : 'Қараңғы тема',
      en: isDark ? 'Light theme' : 'Dark theme'
    };
    labelMobile.textContent = labels[currentLanguage] || labels.ru;
  }
}

// Course Filter
function filterCourses(category) {
  // Update active state of filter buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');

  // Filter course cards
  const cards = document.querySelectorAll('.course-card');
  cards.forEach(card => {
    if (category === 'all') {
      card.style.display = 'flex';
    } else {
      const cardCat = card.getAttribute('data-category');
      if (cardCat === category) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    }
  });
}

// Dynamic Popups Logic
function openDynamicModal(contentHtml) {
  const modal = document.getElementById('dynamicModal');
  const content = document.getElementById('modalDynamicContent');
  content.innerHTML = contentHtml;
  modal.classList.add('open');

  // Reinitialize Vanilla-Tilt on any new buttons in modal
  if (window.VanillaTilt) {
    window.VanillaTilt.init(document.querySelectorAll('.modal-dynamic-box button'));
  }
}

function closeDynamicModal() {
  const modal = document.getElementById('dynamicModal');
  if (modal) {
    modal.classList.remove('open');
  }
}

// Closes modal when overlay clicked
document.getElementById('dynamicModal').addEventListener('click', (e) => {
  if (e.target.id === 'dynamicModal') {
    closeDynamicModal();
  }
});

// Course Modal Details Builder
function openCourseModal(courseType) {
  const course = courseDetails[courseType];
  if (!course) return;

  const localText = translations[currentLanguage];

  let syllabusHtml = '';
  course.syllabus.forEach(item => {
    syllabusHtml += `<li><i class="fas fa-check-circle"></i> ${item}</li>`;
  });

  const contentHtml = `
    <h2 class="modal-title-main">${course.title}</h2>
    <div class="modal-subtitle-main">${course.subtitle}</div>
    <p class="modal-desc-text">${course.desc}</p>
    <h3 style="font-family: var(--font-title); font-size: 1.1rem; margin-bottom: 0.75rem;">Программа курса:</h3>
    <ul class="modal-syllabus-list">${syllabusHtml}</ul>
    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 1.5rem; margin-top: 1.5rem;">
      <span style="font-family: var(--font-title); font-size: 1.3rem; font-weight: 800; color: var(--text-main);">${course.price}</span>
      <button class="btn btn-primary" onclick="enrollFromModal('${course.title}')">${localText.course_enroll}</button>
    </div>
  `;
  openDynamicModal(contentHtml);
}

// Enroll logic
function enrollFromModal(courseName) {
  closeDynamicModal();
  showPage('contacts');
  // Fill the textarea with course registration prompt
  const messageArea = document.getElementById('userMessage');
  if (messageArea) {
    if (currentLanguage === 'ru') {
      messageArea.value = `Здравствуйте! Хочу записаться на курс: "${courseName}".`;
    } else if (currentLanguage === 'kk') {
      messageArea.value = `Сәлеметсіз бе! Мен мына курсқа жазылғым келеді: "${courseName}".`;
    } else {
      messageArea.value = `Hello! I would like to enroll in the course: "${courseName}".`;
    }
  }
}

// Project Details builder
function openProjectDetails(projectType) {
  let contentHtml = '';
  const localText = translations[currentLanguage];

  if (projectType === 'sairam') {
    contentHtml = `
      <h2 class="modal-title-main">Сайрам Нан</h2>
      <div class="modal-subtitle-main">Хлебопекарный Комбинат • Веб-сайт</div>
      <p class="modal-desc-text">Сайрам Нан — один из крупнейших производителей хлебобулочных изделий на юге Казахстана. Наша команда разработала современный веб-сайт компании с полноценным каталогом продукции, описанием рецептур, историей завода и формой заказа поставок.</p>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem;">
        <div style="background: var(--bg-soft); padding: 1rem; border-radius: 10px; border: 1px solid var(--border-color);">
          <strong style="display:block; font-size:0.8rem; color:var(--text-light);">ТЕХНОЛОГИИ</strong>
          <span style="font-size:0.95rem; font-weight:600;">Vue.js, Laravel, Tailwind</span>
        </div>
        <div style="background: var(--bg-soft); padding: 1rem; border-radius: 10px; border: 1px solid var(--border-color);">
          <strong style="display:block; font-size:0.8rem; color:var(--text-light);">РЕЗУЛЬТАТ</strong>
          <span style="font-size:0.95rem; font-weight:600;">Рост оптовых заказов на 24%</span>
        </div>
      </div>
      <button class="btn btn-primary" onclick="closeDynamicModal()">${currentLanguage === 'ru' ? 'Закрыть' : currentLanguage === 'kk' ? 'Жабу' : 'Close'}</button>
    `;
  } else if (projectType === 'adgroup') {
    contentHtml = `
      <h2 class="modal-title-main">AD Group CRM</h2>
      <div class="modal-subtitle-main">Строительно-Логистическая Компания • CRM</div>
      <p class="modal-desc-text">Для холдинга AD Group была спроектирована и внедрена специализированная CRM-система. Она позволяет координировать работу менеджеров по продажам, вести учет строительных объектов, отслеживать поставки материалов на склады и формировать детальную финансовую отчетность.</p>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem;">
        <div style="background: var(--bg-soft); padding: 1rem; border-radius: 10px; border: 1px solid var(--border-color);">
          <strong style="display:block; font-size:0.8rem; color:var(--text-light);">ТЕХНОЛОГИИ</strong>
          <span style="font-size:0.95rem; font-weight:600;">React.js, Node.js, Express, PostgreSQL</span>
        </div>
        <div style="background: var(--bg-soft); padding: 1rem; border-radius: 10px; border: 1px solid var(--border-color);">
          <strong style="display:block; font-size:0.8rem; color:var(--text-light);">РЕЗУЛЬТАТ</strong>
          <span style="font-size:0.95rem; font-weight:600;">Сокращение времени обработки на 40%</span>
        </div>
      </div>
      <button class="btn btn-primary" onclick="closeDynamicModal()">${currentLanguage === 'ru' ? 'Закрыть' : currentLanguage === 'kk' ? 'Жабу' : 'Close'}</button>
    `;
  } else if (projectType === 'ges') {
    contentHtml = `
      <h2 class="modal-title-main">GES Sayram Portal</h2>
      <div class="modal-subtitle-main">Образовательный Центр • LMS</div>
      <p class="modal-desc-text">Global Education Sayram (GES) — международный образовательный центр. Для них мы разработали интерактивный личный кабинет студента. Студенты могут просматривать видеоуроки, сдавать тесты, отслеживать успеваемость и общаться с кураторами, а администраторы — управлять группами и счетами.</p>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem;">
        <div style="background: var(--bg-soft); padding: 1rem; border-radius: 10px; border: 1px solid var(--border-color);">
          <strong style="display:block; font-size:0.8rem; color:var(--text-light);">ТЕХНОЛОГИИ</strong>
          <span style="font-size:0.95rem; font-weight:600;">Vue.js, Firebase, Cloud Functions</span>
        </div>
        <div style="background: var(--bg-soft); padding: 1rem; border-radius: 10px; border: 1px solid var(--border-color);">
          <strong style="display:block; font-size:0.8rem; color:var(--text-light);">РЕЗУЛЬТАТ</strong>
          <span style="font-size:0.95rem; font-weight:600;">Обучено онлайн более 1200 студентов</span>
        </div>
      </div>
      <button class="btn btn-primary" onclick="closeDynamicModal()">${currentLanguage === 'ru' ? 'Закрыть' : currentLanguage === 'kk' ? 'Жабу' : 'Close'}</button>
    `;
  }
  openDynamicModal(contentHtml);
}

// Flat Partners Logo Marquee — continuous smooth horizontal slide (no rotation, no 3D)
function initPartnersMarquee() {
  const viewport = document.getElementById('partnersMarquee');
  const track = document.getElementById('partnersTrack');

  if (!viewport || !track) return;

  measureMarquee();

  // Constant speed forward motion — like traffic flowing steadily down a road
  const speed = 0.6; // pixels per animation frame

  function step() {
    if (!marqueeHovering && !marqueeJumping && marqueeSetWidth > 0) {
      marqueePosition -= speed;
      // Once a full set has scrolled by, snap back by that exact width so the loop is invisible
      if (Math.abs(marqueePosition) >= marqueeSetWidth) {
        marqueePosition += marqueeSetWidth;
      }
      track.style.transform = `translateX(${marqueePosition}px)`;
    }
    marqueeRAF = requestAnimationFrame(step);
  }
  marqueeRAF = requestAnimationFrame(step);

  // Pause on hover, resume on mouse leave
  viewport.addEventListener('mouseenter', () => { marqueeHovering = true; });
  viewport.addEventListener('mouseleave', () => { marqueeHovering = false; });

  // Re-measure if the layout changes (responsive breakpoints, window resize)
  window.addEventListener('resize', measureMarquee);
}

// Measures the pixel distance for one full seamless loop and for a single card-step
function measureMarquee() {
  const track = document.getElementById('partnersTrack');
  if (!track) return;

  const cards = track.querySelectorAll('.logo-card');
  const half = cards.length / 2;
  if (half < 1) return;

  // Distance from the first card to its duplicate further down the track = exactly one full loop
  const firstRect = cards[0].getBoundingClientRect();
  const duplicateRect = cards[half].getBoundingClientRect();
  marqueeSetWidth = duplicateRect.left - firstRect.left;

  // Distance between two neighboring cards = one manual step
  if (cards.length > 1) {
    const secondRect = cards[1].getBoundingClientRect();
    marqueeCardStep = secondRect.left - firstRect.left;
  } else {
    marqueeCardStep = marqueeSetWidth;
  }
}

// Prev/Next buttons: briefly pause the auto-slide, ease one card-step over, then resume
function shiftMarquee(direction) {
  const track = document.getElementById('partnersTrack');
  if (!track || marqueeSetWidth === 0) return;

  marqueeJumping = true;
  track.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';

  marqueePosition += (direction === 'next') ? -marqueeCardStep : marqueeCardStep;

  // Keep the position normalized within a single loop's width so it never drifts out of range
  if (marqueePosition <= -marqueeSetWidth) marqueePosition += marqueeSetWidth;
  if (marqueePosition > 0) marqueePosition -= marqueeSetWidth;

  track.style.transform = `translateX(${marqueePosition}px)`;

  setTimeout(() => {
    track.style.transition = 'none';
    marqueeJumping = false;
  }, 600);
}

// Counter count-up animations for statistics
function initCounterAnimations() {
  animateCounter('count-projects', 50, '+');
  animateCounter('count-students', 1000, '+');
  animateCounter('count-courses', 10, '+');
  animateCounter('count-satisfaction', 98, '%');
}

function animateCounter(elementId, targetValue, suffix = '') {
  const el = document.getElementById(elementId);
  if (!el) return;

  let current = 0;
  // Speed settings based on target size
  const step = targetValue > 100 ? Math.ceil(targetValue / 40) : 1;
  const duration = 15; // Interval duration in ms

  const timer = setInterval(() => {
    current += step;
    if (current >= targetValue) {
      current = targetValue;
      clearInterval(timer);
    }
    el.innerHTML = current + suffix;
  }, duration);
}

// Contact Form submission handler
function handleFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('userName').value;
  const phone = document.getElementById('userPhone').value;
  const message = document.getElementById('userMessage').value;

  // Print request into console for tracking/validation
  console.log('--- IT HUB LEAD RECEIVED ---');
  console.log('Name:', name);
  console.log('Phone:', phone);
  console.log('Message:', message);

  // Trigger Notification Toast
  showToast();

  // Reset form
  document.getElementById('contactForm').reset();
}

function showToast() {
  const toast = document.getElementById('successToast');
  if (!toast) return;

  toast.classList.add('active');

  // Automatically close toast after 4 seconds
  setTimeout(() => {
    toast.classList.remove('active');
  }, 4000);
}