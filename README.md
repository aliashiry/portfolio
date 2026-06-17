# بورتفوليو علي حسن علي — Flutter & Full Stack .NET

موقع بورتفوليو شخصي يعرض المشاريع، الخبرة، والمهارات التقنية لمطور Flutter متخصص في Clean Architecture وBLoC، مع خلفية Full Stack .NET.

**🔗 شاهد الموقع مباشرة:** `https://<username>.github.io/<repo-name>/`
*(غيّر الرابط بعد رفع المشروع على GitHub Pages — راجع قسم النشر بالأسفل)*

---

## ✨ المميزات

- تصميم عربي كامل (RTL) بخط `IBM Plex Sans Arabic`
- واجهة بأسلوب "محرر كود" تعكس هوية المطور
- قسم مشاريع تفصيلي مع روابط Google Play وكود المصدر
- Timeline تفاعلي للخبرة والتعليم
- متجاوب بالكامل (Mobile / Tablet / Desktop)
- بدون أي مكتبات خارجية — HTML/CSS/JS خام بالكامل
- جاهز للنشر فوراً على GitHub Pages

---

## 📁 هيكل المشروع

```
portfolio/
├── index.html              # الصفحة الرئيسية
├── css/
│   └── style.css            # كل الأنماط والتصميم
├── js/
│   └── main.js               # تفاعلات الموقع (نافبار، سكرول، أنيميشن)
├── assets/
│   ├── CV_Ali_Arabic.pdf     # السيرة الذاتية (رابط تحميل في الموقع)
│   └── img/
│       └── projects/         # صور المشاريع (Placeholder حالياً)
└── README.md
```

---

## 🛠️ التشغيل محلياً

ملف HTML بسيط، تقدر تفتحه مباشرة بالمتصفح، أو تشغّل سيرفر محلي بسيط:

```bash
# باستخدام Python
python3 -m http.server 8000

# أو باستخدام Node
npx serve .
```

ثم افتح `http://localhost:8000` في المتصفح.

---

## 🌐 النشر على GitHub Pages

1. أنشئ مستودع (repository) جديد على GitHub، وارفع كل ملفات هذا المشروع.
2. من إعدادات المستودع (Settings) → اختر **Pages** من القائمة الجانبية.
3. تحت **Source** اختر الفرع `main` والمجلد `/ (root)`.
4. اضغط **Save**، وانتظر دقيقة أو اثنتين.
5. سيظهر رابط الموقع تلقائياً بالشكل: `https://<username>.github.io/<repo-name>/`

أو عبر سطر الأوامر:

```bash
git init
git add .
git commit -m "إضافة بورتفوليو شخصي"
git branch -M main
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```

---

## ✏️ التخصيص

### تحديث المعلومات الشخصية
كل النصوص موجودة مباشرة داخل `index.html` — غيّر البريد الإلكتروني، LinkedIn، GitHub في قسم `#contact` وفي الـ `<header>`.

### استبدال صور المشاريع
الصور الحالية في `assets/img/projects/` هي Placeholder بصيغة SVG. لاستبدالها:
1. احصل على لقطة شاشة حقيقية من كل تطبيق (مقاس مقترح: 600×400 أو أي نسبة 3:2).
2. ضعها في `assets/img/projects/` بنفس الاسم لكن بصيغة `.png` أو `.jpg`.
3. عدّل مسار `src` في `index.html` لكل `<img>` ليطابق الملف الجديد.

### إضافة مشروع جديد
انسخ بلوك `<article class="project-card">...</article>` كامل من `index.html`، وعدّل المحتوى والصورة والروابط.

### تغيير الألوان
كل الألوان معرّفة كمتغيرات CSS في أول ملف `css/style.css` تحت `:root` — غيّر القيم هناك وستنعكس على كل الموقع تلقائياً.

---

## 🎨 الهوية البصرية

| العنصر | القيمة |
|---|---|
| الخلفية | `#0B1220` |
| اللون المميز (Accent) | `#5EEAD4` |
| خط العناوين | Space Grotesk |
| خط النصوص العربية | IBM Plex Sans Arabic |
| خط الكود | JetBrains Mono |

---

## 📄 الترخيص

هذا المشروع للاستخدام الشخصي كبورتفوليو. عدّله بحرية كما تحتاج.
