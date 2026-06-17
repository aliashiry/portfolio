const translations = {
  ar: {
    'meta.title': 'علي حسن علي — مطور Flutter & Full Stack .NET',
    'meta.description': 'بورتفوليو علي حسن علي — مطور Flutter وFull Stack .NET. تطبيقات موبايل منشورة على Google Play، ومشاريع ويب بـ ASP.NET Core وAngular.',
    'nav.toggle': 'فتح القائمة',
    'nav.langSwitch': 'تبديل اللغة',
    'nav.about': 'عني',
    'nav.stack': 'الأدوات',
    'nav.projects': 'المشاريع',
    'nav.experience': 'الخبرة',
    'nav.contact': 'تواصل معي',
    'nav.name': 'علي حسن',
    'hero.title1': 'أبني تطبيقات موبايل',
    'hero.title2': 'ومنصات ويب',
    'hero.title3': 'بـ Flutter و .NET',
    'hero.sub': '<strong>علي حسن علي</strong> — مطور <span class="hl">Flutter</span> و<span class="hl">Full Stack .NET</span> بخبرة عملية في بناء حلول متكاملة من الواجهة إلى قاعدة البيانات. أطبّق <span class="hl">Clean Architecture</span> و<span class="hl">BLoC/Cubit</span> في الموبايل، و<span class="hl">ASP.NET Core</span> و<span class="hl">Angular</span> في الويب، مع <span class="hl">CI/CD</span> عبر Azure DevOps.',
    'hero.cta.projects': 'استعرض المشاريع',
    'hero.cta.cvFlutter': 'سيرة Flutter ↓',
    'hero.cta.cvDotnet': 'سيرة .NET ↓',
    'about.title': 'نبذة عني',
    'about.p1': 'مطور <strong>Flutter</strong> بخبرة سنتين في بناء تطبيقات iOS وAndroid باستخدام <strong>BLoC/Cubit</strong> و<strong>Clean Architecture</strong>، مع تكامل RESTful APIs عبر Dio وFirebase للإشعارات والمصادقة. أربعة تطبيقات منشورة على Google Play في مجالات التعليم والتجارة والتوريد.',
    'about.p2': 'بالتوازي، أطوّر أنظمة ويب وخلفيات بـ <strong>ASP.NET Core Web API</strong> و<strong>Angular</strong> و<strong>Entity Framework Core</strong>، شاملة مشروع CRM عقاري ثنائي اللغة ومشروع تخرج بنظام MEP مدعوم بالذكاء الاصطناعي. أعمل حالياً في <strong>Forgotten Mines</strong> على تطبيقات Flutter Web وخدمات .NET مع خطوط CI/CD آلية.',
    'stat.apps': 'تطبيقات على Google Play',
    'stat.years': 'سنوات خبرة مهنية',
    'stat.fields': 'مجال: موبايل + ويب',
    'stat.projects': 'مشاريع منجزة',
    'stack.title': 'الحزمة التقنية',
    'stack.mobile': 'تطوير الموبايل',
    'stack.web': 'الويب والخلفية',
    'stack.devops': 'العمليات والتصميم',
    'projects.title': 'المشاريع',
    'projects.filterLabel': 'تصفية المشاريع',
    'projects.filterAll': 'الكل',
    'projects.filterMobile': 'موبايل',
    'projects.filterWeb': 'ويب وأنظمة',
    'projects.mobileGroup': 'تطبيقات الموبايل',
    'projects.webGroup': 'الويب والأنظمة',
    'meta.freelance': 'عمل حر',
    'proj.safety.desc': 'منصة تدريب وشهادات السلامة المهنية — دورات، امتحانات، شهادات قابلة للتحقق، ودعم عربي/إنجليزي مع Cubit وREST APIs.',
    'proj.imin.desc': 'منصة تعليمية — دورات متنوعة، مدربين خبراء، فرص عمل حرة، وإشعارات فورية عبر Firebase Cloud Messaging.',
    'proj.altqwa.title': 'التقوى',
    'proj.altqwa.desc': 'منصة B2B لتوريد الأغذية والمشروبات بالجملة للتجار — أكثر من ٣٠٠٠ منتج، كتالوج، إدارة طلبات، وخدمة عملاء.',
    'proj.eramo.desc': 'تطبيق تجارة إلكترونية إنتاجي — تصفح منتجات، سلة، دفع، ومصادقة مع BLoC وClean Architecture وواجهة متجاوبة.',
    'proj.crm.desc': 'نظام CRM عقاري ثنائي اللغة (عربي/إنجليزي) — إدارة العملاء المحتملين، الصفقات، المشاريع والمخزون، التذاكر، الإشعارات، وتقارير الإدارة. واجهة خلفية بـ ASP.NET Core (.NET 8, Clean Architecture, EF Core, JWT) وواجهة أمامية بـ Angular.',
    'proj.crm.tag': 'Full Stack',
    'proj.crm.link': 'عرض المشروع ↗',
    'proj.mep.tag': 'مشروع تخرج',
    'proj.mep.desc': 'نظام إدارة مواد MEP مع استخراج كميات بالذكاء الاصطناعي عبر OpenAI Vision API — ASP.NET Core، Angular، Python، وأتمتة Excel.',
    'proj.mep.meta': 'ITI — مشروع تخرج',
    'proj.war.desc': 'الموقع الترويجي الرسمي للعبة أركيد — تطبيق Flutter Web متجاوب بحركات تفاعلية سلسة ومتوافق مع المتصفحات.',
    'proj.war.tag': 'Flutter Web',
    'proj.war.link': 'wartothecore.com ↗',
    'exp.title': 'الخبرة والتعليم',
    'exp.fm.title': 'مطور Full Stack',
    'exp.fm.date': 'أكتوبر ٢٠٢٤ — الآن',
    'exp.fm.org': 'Forgotten Mines — عن بُعد',
    'exp.fm.1': 'تطوير تطبيقات Flutter Web مع التركيز على الأداء وتجربة المستخدم',
    'exp.fm.2': 'بناء ودمج خدمات ASP.NET Core Web API لضمان تدفق بيانات موثوق',
    'exp.fm.3': 'تصميم خطوط CI/CD عبر Azure DevOps لأتمتة البناء والاختبار والنشر',
    'exp.fm.4': 'العمل ضمن فريق Agile مع تخطيط السبرنتات والمراجعات الدورية',
    'exp.eramo.title': 'متدرب مطور Flutter',
    'exp.eramo.date': 'سبتمبر — أكتوبر ٢٠٢٤',
    'exp.eramo.org': 'e-RAMO For Digital Solutions',
    'exp.eramo.1': 'تطوير تطبيق تجارة إلكترونية كامل بـ Flutter وClean Architecture',
    'exp.eramo.2': 'تطبيق BLoC لفصل المنطق وضمان قابلية الاختبار',
    'exp.eramo.3': 'تكامل REST APIs والإشعارات والتعريب لمستخدمين متعددي اللغات',
    'exp.iti.title': 'تطوير ويب Full Stack — مسار .NET',
    'exp.iti.date': 'يوليو — ديسمبر ٢٠٢٥',
    'exp.iti.org': 'ITI — فرع المنيا',
    'exp.iti.1': 'برنامج تدريبي مكثف ٦ أشهر في .NET وAngular وSQL Server',
    'exp.iti.2': 'مشروع تخرج: MEP Management System مدعوم بالذكاء الاصطناعي',
    'exp.route.title': 'دبلومة تطوير Flutter',
    'exp.route.date': 'ديسمبر ٢٠٢٣ — أبريل ٢٠٢٤',
    'exp.route.org': 'Route IT Center',
    'exp.bsc.title': 'بكالوريوس علوم الحاسب',
    'exp.bsc.date': '٢٠١٨ — ٢٠٢٢',
    'exp.bsc.org': 'New Cairo Academy',
    'contact.title': 'تواصل معي',
    'contact.desc': 'يسعدني التواصل لمناقشة مشروع أو فكرة — راسلني عبر أي من القنوات أدناه.',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.linkedin': 'لينكدإن',
    'contact.github': 'جيتهاب',
    'footer.copy': '© 2026 علي حسن علي',
    'footer.top': 'للأعلى ↑',
  },
  en: {
    'meta.title': 'Ali Hassan Ali — Flutter & Full Stack .NET Developer',
    'meta.description': 'Portfolio of Ali Hassan Ali — Flutter and Full Stack .NET developer. Mobile apps on Google Play and web projects with ASP.NET Core and Angular.',
    'nav.toggle': 'Open menu',
    'nav.langSwitch': 'Switch language',
    'nav.about': 'About',
    'nav.stack': 'Stack',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.name': 'Ali Hassan',
    'hero.title1': 'I build mobile apps',
    'hero.title2': 'and web platforms',
    'hero.title3': 'with Flutter & .NET',
    'hero.sub': '<strong>Ali Hassan Ali</strong> — <span class="hl">Flutter</span> and <span class="hl">Full Stack .NET</span> developer with hands-on experience building end-to-end solutions from UI to database. I apply <span class="hl">Clean Architecture</span> and <span class="hl">BLoC/Cubit</span> on mobile, and <span class="hl">ASP.NET Core</span> with <span class="hl">Angular</span> on the web, plus <span class="hl">CI/CD</span> via Azure DevOps.',
    'hero.cta.projects': 'View Projects',
    'hero.cta.cvFlutter': 'Flutter CV ↓',
    'hero.cta.cvDotnet': '.NET CV ↓',
    'about.title': 'About Me',
    'about.p1': '<strong>Flutter</strong> developer with 2 years of experience building iOS and Android apps using <strong>BLoC/Cubit</strong> and <strong>Clean Architecture</strong>, with RESTful API integration via Dio and Firebase for notifications and authentication. Four apps published on Google Play across education, commerce, and supply chain.',
    'about.p2': 'I also build web systems and backends with <strong>ASP.NET Core Web API</strong>, <strong>Angular</strong>, and <strong>Entity Framework Core</strong>, including a bilingual real estate CRM and an AI-powered MEP graduation project. Currently at <strong>Forgotten Mines</strong> working on Flutter Web apps and .NET services with automated CI/CD pipelines.',
    'stat.apps': 'Apps on Google Play',
    'stat.years': 'Years of experience',
    'stat.fields': 'Mobile + Web',
    'stat.projects': 'Completed projects',
    'stack.title': 'Tech Stack',
    'stack.mobile': 'Mobile Development',
    'stack.web': 'Web & Backend',
    'stack.devops': 'DevOps & Design',
    'projects.title': 'Projects',
    'projects.filterLabel': 'Filter projects',
    'projects.filterAll': 'All',
    'projects.filterMobile': 'Mobile',
    'projects.filterWeb': 'Web & Systems',
    'projects.mobileGroup': 'Mobile Applications',
    'projects.webGroup': 'Web & Systems',
    'meta.freelance': 'Freelance',
    'proj.safety.desc': 'Professional safety training platform — courses, exams, verifiable certificates, and Arabic/English support with Cubit and REST APIs.',
    'proj.imin.desc': 'Educational platform — diverse courses, expert trainers, freelance opportunities, and real-time notifications via Firebase Cloud Messaging.',
    'proj.altqwa.title': 'Al-Taqwa',
    'proj.altqwa.desc': 'B2B wholesale food and beverage supply platform for retailers — 3,000+ products, catalog, order management, and customer service.',
    'proj.eramo.desc': 'Production e-commerce app — product browsing, cart, checkout, and authentication with BLoC, Clean Architecture, and responsive UI.',
    'proj.crm.desc': 'Bilingual real estate CRM (Arabic/English) — leads, deals, projects and inventory, tickets, notifications, and management reports. Backend with ASP.NET Core (.NET 8, Clean Architecture, EF Core, JWT) and Angular frontend.',
    'proj.crm.tag': 'Full Stack',
    'proj.crm.link': 'View Project ↗',
    'proj.mep.tag': 'Graduation Project',
    'proj.mep.desc': 'MEP materials management system with AI-powered quantity extraction via OpenAI Vision API — ASP.NET Core, Angular, Python, and Excel automation.',
    'proj.mep.meta': 'ITI — Graduation Project',
    'proj.war.desc': 'Official promotional website for an arcade game — responsive Flutter Web app with smooth interactive animations and cross-browser support.',
    'proj.war.tag': 'Flutter Web',
    'proj.war.link': 'wartothecore.com ↗',
    'exp.title': 'Experience & Education',
    'exp.fm.title': 'Full Stack Developer',
    'exp.fm.date': 'Oct 2024 — Present',
    'exp.fm.org': 'Forgotten Mines — Remote',
    'exp.fm.1': 'Develop Flutter Web applications focused on performance and user experience',
    'exp.fm.2': 'Build and integrate ASP.NET Core Web API services for reliable data flow',
    'exp.fm.3': 'Design CI/CD pipelines with Azure DevOps to automate build, test, and deployment',
    'exp.fm.4': 'Work in an Agile team with sprint planning and regular code reviews',
    'exp.eramo.title': 'Flutter Developer Intern',
    'exp.eramo.date': 'Sep — Oct 2024',
    'exp.eramo.org': 'e-RAMO For Digital Solutions',
    'exp.eramo.1': 'Developed a full e-commerce app with Flutter and Clean Architecture',
    'exp.eramo.2': 'Implemented BLoC for separation of concerns and testable logic',
    'exp.eramo.3': 'Integrated REST APIs, push notifications, and localization for multilingual users',
    'exp.iti.title': 'Full Stack Web Development — .NET Track',
    'exp.iti.date': 'Jul — Dec 2025',
    'exp.iti.org': 'ITI — Minia Branch',
    'exp.iti.1': 'Intensive 6-month program in .NET, Angular, and SQL Server',
    'exp.iti.2': 'Graduation project: AI-powered MEP Management System',
    'exp.route.title': 'Flutter Development Diploma',
    'exp.route.date': 'Dec 2023 — Apr 2024',
    'exp.route.org': 'Route IT Center',
    'exp.bsc.title': 'B.Sc. Computer Science',
    'exp.bsc.date': '2018 — 2022',
    'exp.bsc.org': 'New Cairo Academy',
    'contact.title': 'Get in Touch',
    'contact.desc': 'Feel free to reach out to discuss a project or idea — contact me through any channel below.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'footer.copy': '© 2026 Ali Hassan Ali',
    'footer.top': 'Back to top ↑',
  },
};

const STAT_NUMS = { ar: ['٤', '٢', '٢', '٦'], en: ['4', '2', '2', '6'] };

function getStoredLang() {
  const saved = localStorage.getItem('portfolio-lang');
  if (saved === 'ar' || saved === 'en') return saved;
  return document.documentElement.lang === 'ar' ? 'ar' : 'en';
}

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
  });

  document.querySelectorAll('.stat-num[data-stat-index]').forEach((el) => {
    const idx = Number(el.getAttribute('data-stat-index'));
    if (!Number.isNaN(idx) && STAT_NUMS[lang][idx]) {
      el.textContent = STAT_NUMS[lang][idx];
    }
  });

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict['meta.description']) {
    metaDesc.setAttribute('content', dict['meta.description']);
  }
  if (dict['meta.title']) document.title = dict['meta.title'];

  const navToggle = document.getElementById('navToggle');
  if (navToggle && dict['nav.toggle']) {
    navToggle.setAttribute('aria-label', dict['nav.toggle']);
  }

  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.textContent = lang === 'ar' ? 'EN' : 'AR';
    if (dict['nav.langSwitch']) {
      langBtn.setAttribute('aria-label', dict['nav.langSwitch']);
    }
  }

  const filterGroup = document.querySelector('.projects-filter');
  if (filterGroup && dict['projects.filterLabel']) {
    filterGroup.setAttribute('aria-label', dict['projects.filterLabel']);
  }

  localStorage.setItem('portfolio-lang', lang);
}

function initI18n() {
  const langBtn = document.getElementById('langToggle');
  let current = getStoredLang();
  applyLanguage(current);

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      current = current === 'ar' ? 'en' : 'ar';
      applyLanguage(current);
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
