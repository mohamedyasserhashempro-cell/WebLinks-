// =====================================================
// DATA - TOOLS
// =====================================================
const toolsData = [
  // ============ DESIGN ============
  {
    name:"Canva",
    category:"design",
    rating:9.2,
    price:"freemium",
    link:"https://canva.com",
    favicon:"canva.com",
    desc:"منصة تصميم شاملة للمبتدئين والمحترفين بقوالب جاهزة ومتنوعة",
    platforms:["ويب","iOS","Android","Desktop"],
    ratings:{google:4.7,appstore:4.8,trustpilot:4.4,g2:4.7}
  },
  {
    name:"Figma",
    category:"design",
    rating:9.5,
    price:"freemium",
    link:"https://figma.com",
    favicon:"figma.com",
    desc:"افضل اداة تصميم UI/UX للفرق والمصممين المحترفين",
    platforms:["ويب","Desktop","iOS","Android"],
    ratings:{google:4.8,appstore:4.7,trustpilot:4.5,g2:4.7}
  },
  {
    name:"Adobe XD",
    category:"design",
    rating:8.8,
    price:"paid",
    link:"https://adobe.com/products/xd",
    favicon:"adobe.com",
    desc:"اداة Adobe لتصميم واحتجاج تجربة المستخدم",
    platforms:["Windows","macOS"],
    ratings:{google:4.3,appstore:4.4,trustpilot:4.0,g2:4.3}
  },
  {
    name:"Adobe Photoshop",
    category:"design",
    rating:9.3,
    price:"paid",
    link:"https://adobe.com/products/photoshop",
    favicon:"adobe.com",
    desc:"الاداة الاشهر في تحرير الصور والتصميم الجرافيكي منذ عقود",
    platforms:["Windows","macOS","iPad"],
    ratings:{google:4.5,appstore:4.6,trustpilot:4.1,g2:4.6}
  },
  {
    name:"Adobe Illustrator",
    category:"design",
    rating:9.1,
    price:"paid",
    link:"https://adobe.com/products/illustrator",
    favicon:"adobe.com",
    desc:"الاداة الاحترافية لانشاء الرسوميات المتجهة والشعارات",
    platforms:["Windows","macOS","iPad"],
    ratings:{google:4.5,appstore:4.5,trustpilot:4.0,g2:4.5}
  },
  {
    name:"Sketch",
    category:"design",
    rating:8.5,
    price:"paid",
    link:"https://sketch.com",
    favicon:"sketch.com",
    desc:"اداة تصميم UI/UX حصرية لنظام macOS مع مكتبات ضخمة",
    platforms:["macOS"],
    ratings:{google:4.4,appstore:4.5,trustpilot:4.2,g2:4.4}
  },
  {
    name:"Penpot",
    category:"design",
    rating:8.0,
    price:"free",
    link:"https://penpot.app",
    favicon:"penpot.app",
    desc:"بديل مفتوح المصدر لـ Figma مجاني بالكامل",
    platforms:["ويب","Self-hosted"],
    ratings:{google:4.3,appstore:null,trustpilot:4.0,g2:4.3}
  },
  {
    name:"Framer",
    category:"design",
    rating:8.7,
    price:"freemium",
    link:"https://framer.com",
    favicon:"framer.com",
    desc:"تصميم وبناء مواقع تفاعلية بدون كود بشكل احترافي",
    platforms:["ويب","macOS"],
    ratings:{google:4.5,appstore:null,trustpilot:4.3,g2:4.5}
  },
  {
    name:"Spline",
    category:"design",
    rating:8.3,
    price:"freemium",
    link:"https://spline.design",
    favicon:"spline.design",
    desc:"تصميم ثلاثي الابعاد تفاعلي للويب بسهولة تامة",
    platforms:["ويب","macOS","Windows"],
    ratings:{google:4.4,appstore:null,trustpilot:4.1,g2:4.2}
  },
  {
    name:"Behance",
    category:"design",
    rating:8.2,
    price:"free",
    link:"https://behance.net",
    favicon:"behance.net",
    desc:"منصة Adobe لعرض اعمال المصممين والاحتراف في التسويق",
    platforms:["ويب","iOS","Android"],
    ratings:{google:4.2,appstore:4.3,trustpilot:3.9,g2:4.1}
  },
  {
    name:"Dribbble",
    category:"design",
    rating:8.0,
    price:"freemium",
    link:"https://dribbble.com",
    favicon:"dribbble.com",
    desc:"مجتمع المصممين لعرض الاعمال والتوظيف والإلهام",
    platforms:["ويب","iOS","Android"],
    ratings:{google:4.0,appstore:4.2,trustpilot:3.7,g2:4.0}
  },
  {
    name:"Vectornator",
    category:"design",
    rating:8.4,
    price:"free",
    link:"https://linearity.io",
    favicon:"linearity.io",
    desc:"تطبيق تصميم متجه احترافي للايباد والايفون",
    platforms:["iOS","macOS"],
    ratings:{google:null,appstore:4.7,trustpilot:4.1,g2:4.3}
  },
  {
    name:"Procreate",
    category:"design",
    rating:9.4,
    price:"paid",
    link:"https://procreate.com",
    favicon:"procreate.com",
    desc:"افضل تطبيق رسم رقمي على الاطلاق للفنانين على iPad",
    platforms:["iOS"],
    ratings:{google:null,appstore:4.9,trustpilot:4.6,g2:4.7}
  },
  {
    name:"Midjourney",
    category:"design",
    rating:9.0,
    price:"paid",
    link:"https://midjourney.com",
    favicon:"midjourney.com",
    desc:"توليد صور فنية مذهلة بالذكاء الاصطناعي عبر Discord",
    platforms:["ويب","Discord"],
    ratings:{google:4.5,appstore:null,trustpilot:4.3,g2:4.5}
  },
  {
    name:"DALL-E",
    category:"design",
    rating:8.8,
    price:"freemium",
    link:"https://openai.com/dall-e-3",
    favicon:"openai.com",
    desc:"نموذج OpenAI لتوليد الصور من النص بجودة عالية",
    platforms:["ويب","API"],
    ratings:{google:4.4,appstore:null,trustpilot:4.2,g2:4.4}
  },
  {
    name:"Stable Diffusion",
    category:"design",
    rating:8.6,
    price:"free",
    link:"https://stability.ai",
    favicon:"stability.ai",
    desc:"نموذج مفتوح المصدر لتوليد الصور بالذكاء الاصطناعي",
    platforms:["Local","ويب","API"],
    ratings:{google:4.3,appstore:null,trustpilot:4.0,g2:4.2}
  },
  {
    name:"Coolors",
    category:"design",
    rating:8.5,
    price:"freemium",
    link:"https://coolors.co",
    favicon:"coolors.co",
    desc:"مولد لوحات الالوان الاحترافية للمصممين",
    platforms:["ويب","iOS","Android","Figma"],
    ratings:{google:4.5,appstore:4.6,trustpilot:4.2,g2:4.4}
  },
  {
    name:"Locofy",
    category:"design",
    rating:7.8,
    price:"freemium",
    link:"https://locofy.ai",
    favicon:"locofy.ai",
    desc:"تحويل تصميمات Figma الى كود React/HTML تلقائيا",
    platforms:["ويب","Figma Plugin"],
    ratings:{google:4.1,appstore:null,trustpilot:3.9,g2:4.0}
  },

  // ============ VIDEO ============
  {
    name:"CapCut",
    category:"video",
    rating:8.8,
    price:"freemium",
    link:"https://capcut.com",
    favicon:"capcut.com",
    desc:"تطبيق مونتاج سهل وسريع مع مؤثرات AI متطورة",
    platforms:["iOS","Android","ويب","Desktop"],
    ratings:{google:4.7,appstore:4.8,trustpilot:4.3,g2:4.6}
  },
  {
    name:"DaVinci Resolve",
    category:"video",
    rating:9.5,
    price:"freemium",
    link:"https://blackmagicdesign.com/products/davinciresolve",
    favicon:"blackmagicdesign.com",
    desc:"برنامج مونتاج احترافي مجاني يستخدمه المحترفون في هوليوود",
    platforms:["Windows","macOS","Linux"],
    ratings:{google:4.7,appstore:4.6,trustpilot:4.5,g2:4.7}
  },
  {
    name:"Adobe Premiere Pro",
    category:"video",
    rating:9.2,
    price:"paid",
    link:"https://adobe.com/products/premiere",
    favicon:"adobe.com",
    desc:"المعيار الصناعي في مونتاج الفيديو الاحترافي",
    platforms:["Windows","macOS"],
    ratings:{google:4.5,appstore:4.4,trustpilot:4.2,g2:4.6}
  },
  {
    name:"Final Cut Pro",
    category:"video",
    rating:9.1,
    price:"paid",
    link:"https://apple.com/final-cut-pro",
    favicon:"apple.com",
    desc:"برنامج مونتاج Apple الاحترافي المتفوق في الاداء",
    platforms:["macOS"],
    ratings:{google:null,appstore:4.7,trustpilot:4.4,g2:4.6}
  },
  {
    name:"InShot",
    category:"video",
    rating:8.5,
    price:"freemium",
    link:"https://inshot.com",
    favicon:"inshot.com",
    desc:"تطبيق مونتاج الجوال الاكثر شعبية لمحتوى السوشيال ميديا",
    platforms:["iOS","Android"],
    ratings:{google:4.8,appstore:4.8,trustpilot:4.1,g2:4.2}
  },
  {
    name:"Filmora",
    category:"video",
    rating:8.7,
    price:"freemium",
    link:"https://filmora.wondershare.com",
    favicon:"filmora.wondershare.com",
    desc:"مونتاج فيديو سهل مع مؤثرات وقوالب احترافية",
    platforms:["Windows","macOS","iOS","Android"],
    ratings:{google:4.5,appstore:4.6,trustpilot:4.0,g2:4.4}
  },
  {
    name:"After Effects",
    category:"video",
    rating:9.2,
    price:"paid",
    link:"https://adobe.com/products/aftereffects",
    favicon:"adobe.com",
    desc:"برنامج الموشن جرافيك والمؤثرات البصرية الاحترافي",
    platforms:["Windows","macOS"],
    ratings:{google:4.5,appstore:null,trustpilot:4.3,g2:4.6}
  },
  {
    name:"Runway ML",
    category:"video",
    rating:8.9,
    price:"freemium",
    link:"https://runwayml.com",
    favicon:"runwayml.com",
    desc:"توليد وتحرير الفيديو بالذكاء الاصطناعي بجودة سينمائية",
    platforms:["ويب"],
    ratings:{google:4.4,appstore:null,trustpilot:4.2,g2:4.4}
  },
  {
    name:"Pika Labs",
    category:"video",
    rating:8.4,
    price:"freemium",
    link:"https://pika.art",
    favicon:"pika.art",
    desc:"توليد مقاطع فيديو ابداعية من النص والصور بالذكاء الاصطناعي",
    platforms:["ويب","Discord"],
    ratings:{google:4.2,appstore:null,trustpilot:4.0,g2:4.1}
  },
  {
    name:"HeyGen",
    category:"video",
    rating:8.7,
    price:"freemium",
    link:"https://heygen.com",
    favicon:"heygen.com",
    desc:"انشاء فيديوهات بأفاتار AI تتحدث بصوتك وشكلك",
    platforms:["ويب"],
    ratings:{google:4.5,appstore:null,trustpilot:4.3,g2:4.5}
  },
  {
    name:"Descript",
    category:"video",
    rating:8.6,
    price:"freemium",
    link:"https://descript.com",
    favicon:"descript.com",
    desc:"مونتاج الفيديو عن طريق تحرير النص فقط - ثورة حقيقية",
    platforms:["Windows","macOS","ويب"],
    ratings:{google:4.4,appstore:4.3,trustpilot:4.2,g2:4.5}
  },
  {
    name:"OBS Studio",
    category:"video",
    rating:9.0,
    price:"free",
    link:"https://obsproject.com",
    favicon:"obsproject.com",
    desc:"برنامج البث المباشر والتسجيل الاقوى والمجاني",
    platforms:["Windows","macOS","Linux"],
    ratings:{google:4.7,appstore:null,trustpilot:4.5,g2:4.6}
  },
  {
    name:"Loom",
    category:"video",
    rating:8.5,
    price:"freemium",
    link:"https://loom.com",
    favicon:"loom.com",
    desc:"تسجيل ومشاركة الشاشة بسهولة للتواصل والشرح",
    platforms:["ويب","Desktop","iOS","Android"],
    ratings:{google:4.5,appstore:4.5,trustpilot:4.3,g2:4.7}
  },
  {
    name:"Canva Video",
    category:"video",
    rating:8.2,
    price:"freemium",
    link:"https://canva.com/video-editor",
    favicon:"canva.com",
    desc:"محرر فيديو بسيط ومتكامل داخل منصة Canva",
    platforms:["ويب","iOS","Android"],
    ratings:{google:4.5,appstore:4.7,trustpilot:4.3,g2:4.5}
  },
  {
    name:"Kinemaster",
    category:"video",
    rating:8.3,
    price:"freemium",
    link:"https://kinemaster.com",
    favicon:"kinemaster.com",
    desc:"مونتاج فيديو احترافي على الجوال مع طبقات متعددة",
    platforms:["iOS","Android"],
    ratings:{google:4.5,appstore:4.6,trustpilot:4.0,g2:4.1}
  },

  // ============ WEB / PROGRAMMING ============
  {
    name:"WordPress",
    category:"web",
    rating:8.5,
    price:"mixed",
    link:"https://wordpress.com",
    favicon:"wordpress.com",
    desc:"اشهر منصة CMS في العالم تشغل 43% من الانترنت",
    platforms:["ويب","iOS","Android"],
    ratings:{google:4.2,appstore:4.4,trustpilot:4.0,g2:4.3}
  },
  {
    name:"VS Code",
    category:"web",
    rating:9.6,
    price:"free",
    link:"https://code.visualstudio.com",
    favicon:"code.visualstudio.com",
    desc:"محرر الكود الاشهر في العالم من Microsoft مع آلاف الاضافات",
    platforms:["Windows","macOS","Linux","ويب"],
    ratings:{google:4.7,appstore:null,trustpilot:4.6,g2:4.8}
  },
  {
    name:"GitHub",
    category:"web",
    rating:9.4,
    price:"freemium",
    link:"https://github.com",
    favicon:"github.com",
    desc:"منصة حفظ ومشاركة الكود والتعاون بين المطورين عالميا",
    platforms:["ويب","iOS","Android","Desktop"],
    ratings:{google:4.6,appstore:4.5,trustpilot:4.4,g2:4.7}
  },
  {
    name:"Vercel",
    category:"web",
    rating:9.2,
    price:"freemium",
    link:"https://vercel.com",
    favicon:"vercel.com",
    desc:"منصة نشر تطبيقات الويب الاسرع والاسهل للمطورين",
    platforms:["ويب","CLI"],
    ratings:{google:4.6,appstore:null,trustpilot:4.4,g2:4.7}
  },
  {
    name:"Replit",
    category:"web",
    rating:8.8,
    price:"freemium",
    link:"https://replit.com",
    favicon:"replit.com",
    desc:"بيئة برمجة سحابية كاملة تعمل في المتصفح بدون تثبيت",
    platforms:["ويب","iOS","Android"],
    ratings:{google:4.4,appstore:4.5,trustpilot:4.1,g2:4.4}
  },
  {
    name:"Netlify",
    category:"web",
    rating:9.0,
    price:"freemium",
    link:"https://netlify.com",
    favicon:"netlify.com",
    desc:"نشر مواقع الويب الثابتة والتطبيقات بسهولة وسرعة",
    platforms:["ويب","CLI"],
    ratings:{google:4.5,appstore:null,trustpilot:4.3,g2:4.6}
  },
  {
    name:"Supabase",
    category:"web",
    rating:9.1,
    price:"freemium",
    link:"https://supabase.com",
    favicon:"supabase.com",
    desc:"بديل Firebase مفتوح المصدر مع قاعدة بيانات PostgreSQL",
    platforms:["ويب","CLI","SDK"],
    ratings:{google:4.6,appstore:null,trustpilot:4.4,g2:4.7}
  },
  {
    name:"Firebase",
    category:"web",
    rating:8.9,
    price:"freemium",
    link:"https://firebase.google.com",
    favicon:"firebase.google.com",
    desc:"منصة Google لبناء تطبيقات الويب والجوال بقاعدة بيانات real-time",
    platforms:["ويب","SDK"],
    ratings:{google:4.5,appstore:null,trustpilot:4.2,g2:4.4}
  },
  {
    name:"Docker",
    category:"web",
    rating:9.3,
    price:"freemium",
    link:"https://docker.com",
    favicon:"docker.com",
    desc:"حاويات التطبيقات الاشهر في العالم لنشر البيئات البرمجية",
    platforms:["Windows","macOS","Linux"],
    ratings:{google:4.5,appstore:null,trustpilot:4.3,g2:4.7}
  },
  {
    name:"Postman",
    category:"web",
    rating:9.0,
    price:"freemium",
    link:"https://postman.com",
    favicon:"postman.com",
    desc:"اختبار وتوثيق API بطريقة احترافية وسهلة",
    platforms:["Windows","macOS","Linux","ويب"],
    ratings:{google:4.6,appstore:null,trustpilot:4.4,g2:4.6}
  },
  {
    name:"Figma Dev",
    category:"web",
    rating:8.8,
    price:"freemium",
    link:"https://figma.com/developers",
    favicon:"figma.com",
    desc:"استخراج الكود من التصاميم مباشرة لمطوري الواجهات",
    platforms:["ويب","Desktop"],
    ratings:{google:4.6,appstore:null,trustpilot:4.4,g2:4.6}
  },
  {
    name:"Cursor",
    category:"web",
    rating:9.3,
    price:"freemium",
    link:"https://cursor.sh",
    favicon:"cursor.sh",
    desc:"محرر كود بالذكاء الاصطناعي يكتب الكود معك بشكل سحري",
    platforms:["Windows","macOS","Linux"],
    ratings:{google:4.7,appstore:null,trustpilot:4.5,g2:4.7}
  },
  {
    name:"Wix",
    category:"web",
    rating:8.0,
    price:"mixed",
    link:"https://wix.com",
    favicon:"wix.com",
    desc:"منصة بناء مواقع بدون كود بتصميمات جاهزة ومتنوعة",
    platforms:["ويب"],
    ratings:{google:4.2,appstore:null,trustpilot:3.9,g2:4.2}
  },
  {
    name:"Webflow",
    category:"web",
    rating:9.0,
    price:"mixed",
    link:"https://webflow.com",
    favicon:"webflow.com",
    desc:"بناء مواقع ويب احترافية بصرياً مع كود نظيف تلقائياً",
    platforms:["ويب"],
    ratings:{google:4.5,appstore:null,trustpilot:4.3,g2:4.6}
  },
  {
    name:"Bubble",
    category:"web",
    rating:8.5,
    price:"freemium",
    link:"https://bubble.io",
    favicon:"bubble.io",
    desc:"بناء تطبيقات ويب كاملة بدون كود مع قواعد بيانات",
    platforms:["ويب"],
    ratings:{google:4.4,appstore:null,trustpilot:4.1,g2:4.3}
  },
  {
    name:"MongoDB",
    category:"web",
    rating:8.9,
    price:"freemium",
    link:"https://mongodb.com",
    favicon:"mongodb.com",
    desc:"قاعدة بيانات NoSQL الاشهر للتطبيقات الحديثة والسحابية",
    platforms:["ويب","Local","Cloud"],
    ratings:{google:4.4,appstore:null,trustpilot:4.2,g2:4.5}
  },

  // ============ TRAINING ============
  {
    name:"freeCodeCamp",
    category:"training",
    rating:9.5,
    price:"free",
    link:"https://freecodecamp.org",
    favicon:"freecodecamp.org",
    desc:"تعلم البرمجة مجاناً مع شهادات معتمدة في HTML CSS JS Python",
    platforms:["ويب"],
    languages:["html","css","js","py","react","node","sql"],
    ratings:{google:4.8,appstore:null,trustpilot:4.7,g2:4.9}
  },
  {
    name:"The Odin Project",
    category:"training",
    rating:9.3,
    price:"free",
    link:"https://theodinproject.com",
    favicon:"theodinproject.com",
    desc:"مسار تعلم مجاني شامل لتطوير الويب من الصفر للاحتراف",
    platforms:["ويب"],
    languages:["html","css","js","node","react"],
    ratings:{google:4.7,appstore:null,trustpilot:4.6,g2:4.8}
  },
  {
    name:"Coursera",
    category:"training",
    rating:8.8,
    price:"mixed",
    link:"https://coursera.org",
    favicon:"coursera.org",
    desc:"دورات من افضل الجامعات العالمية مع شهادات معتمدة",
    platforms:["ويب","iOS","Android"],
    languages:["py","js","java","cpp","sql","all"],
    ratings:{google:4.5,appstore:4.6,trustpilot:4.2,g2:4.5}
  },
  {
    name:"Udemy",
    category:"training",
    rating:8.7,
    price:"paid",
    link:"https://udemy.com",
    favicon:"udemy.com",
    desc:"اكبر منصة دورات اونلاين بملايين الدورات بالعربي والانجليزي",
    platforms:["ويب","iOS","Android"],
    languages:["py","js","java","cpp","cs","php","all"],
    ratings:{google:4.5,appstore:4.7,trustpilot:4.1,g2:4.3}
  },
  {
    name:"Codecademy",
    category:"training",
    rating:8.6,
    price:"freemium",
    link:"https://codecademy.com",
    favicon:"codecademy.com",
    desc:"تعلم البرمجة بطريقة تفاعلية داخل المتصفح مع مشاريع حقيقية",
    platforms:["ويب","iOS","Android"],
    languages:["py","js","html","css","sql","go","rust"],
    ratings:{google:4.4,appstore:4.5,trustpilot:4.0,g2:4.4}
  },
  {
    name:"LeetCode",
    category:"training",
    rating:9.2,
    price:"freemium",
    link:"https://leetcode.com",
    favicon:"leetcode.com",
    desc:"منصة تدريب على المسائل البرمجية لاجتياز مقابلات الشركات الكبري",
    platforms:["ويب","iOS","Android"],
    languages:["py","js","java","cpp","cs","ts","go","rust"],
    ratings:{google:4.6,appstore:4.7,trustpilot:4.4,g2:4.6}
  },
  {
    name:"HackerRank",
    category:"training",
    rating:8.8,
    price:"freemium",
    link:"https://hackerrank.com",
    favicon:"hackerrank.com",
    desc:"تحديات برمجية ومسابقات لتحسين مهاراتك وملفك التعريفي",
    platforms:["ويب"],
    languages:["py","js","java","cpp","cs","sql","go"],
    ratings:{google:4.4,appstore:null,trustpilot:4.1,g2:4.3}
  },
  {
    name:"Khan Academy",
    category:"training",
    rating:9.0,
    price:"free",
    link:"https://khanacademy.org",
    favicon:"khanacademy.org",
    desc:"تعليم مجاني شامل يشمل البرمجة والرياضيات والعلوم",
    platforms:["ويب","iOS","Android"],
    languages:["js","html","css","sql","py"],
    ratings:{google:4.7,appstore:4.8,trustpilot:4.5,g2:4.7}
  },
  {
    name:"Pluralsight",
    category:"training",
    rating:8.5,
    price:"paid",
    link:"https://pluralsight.com",
    favicon:"pluralsight.com",
    desc:"دورات تقنية احترافية للمطورين ومهندسي الحوسبة السحابية",
    platforms:["ويب","iOS","Android"],
    languages:["py","js","java","cs","cpp","ts","node","react"],
    ratings:{google:4.3,appstore:4.4,trustpilot:4.0,g2:4.4}
  },
  {
    name:"LinkedIn Learning",
    category:"training",
    rating:8.4,
    price:"paid",
    link:"https://linkedin.com/learning",
    favicon:"linkedin.com",
    desc:"دورات مهنية متنوعة مرتبطة بحسابك على LinkedIn",
    platforms:["ويب","iOS","Android"],
    languages:["py","js","java","cs","sql","all"],
    ratings:{google:4.3,appstore:4.5,trustpilot:3.9,g2:4.2}
  },
  {
    name:"CS50 Harvard",
    category:"training",
    rating:9.6,
    price:"free",
    link:"https://cs50.harvard.edu",
    favicon:"harvard.edu",
    desc:"اشهر كورس برمجة في العالم من جامعة هارفارد مجاناً",
    platforms:["ويب"],
    languages:["c","py","js","sql","html","css"],
    ratings:{google:4.9,appstore:null,trustpilot:4.8,g2:5.0}
  },
  {
    name:"Scrimba",
    category:"training",
    rating:8.9,
    price:"freemium",
    link:"https://scrimba.com",
    favicon:"scrimba.com",
    desc:"تعلم البرمجة بطريقة تفاعلية حيث يمكنك تعديل الكود مباشرة في الفيديو",
    platforms:["ويب"],
    languages:["js","react","html","css","node","ts"],
    ratings:{google:4.6,appstore:null,trustpilot:4.4,g2:4.7}
  },
  {
    name:"Frontend Mentor",
    category:"training",
    rating:9.0,
    price:"freemium",
    link:"https://frontendmentor.io",
    favicon:"frontendmentor.io",
    desc:"تحديات تصميم حقيقية لبناء بورتفوليو قوي في تطوير الواجهات",
    platforms:["ويب"],
    languages:["html","css","js","react","ts"],
    ratings:{google:4.7,appstore:null,trustpilot:4.5,g2:4.8}
  },
  {
    name:"MIT OpenCourseWare",
    category:"training",
    rating:9.1,
    price:"free",
    link:"https://ocw.mit.edu",
    favicon:"mit.edu",
    desc:"محتوى اكاديمي مجاني من معهد MIT للعلوم والتقنية",
    platforms:["ويب"],
    languages:["py","cpp","java","all"],
    ratings:{google:4.6,appstore:null,trustpilot:4.5,g2:4.7}
  },
  {
    name:"Exercism",
    category:"training",
    rating:8.8,
    price:"free",
    link:"https://exercism.org",
    favicon:"exercism.org",
    desc:"تمارين عملية في 67 لغة برمجة مع مراجعات من متطوعين محترفين",
    platforms:["ويب"],
    languages:["py","js","rust","go","cpp","java","ts","cs"],
    ratings:{google:4.6,appstore:null,trustpilot:4.5,g2:4.7}
  },
  {
    name:"Roadmap.sh",
    category:"training",
    rating:9.2,
    price:"free",
    link:"https://roadmap.sh",
    favicon:"roadmap.sh",
    desc:"خرائط طريق بصرية لتعلم اي تخصص برمجي خطوة بخطوة",
    platforms:["ويب"],
    languages:["all","js","py","react","node","go","java"],
    ratings:{google:4.7,appstore:null,trustpilot:4.5,g2:4.8}
  },
  {
    name:"W3Schools",
    category:"training",
    rating:8.3,
    price:"freemium",
    link:"https://w3schools.com",
    favicon:"w3schools.com",
    desc:"مرجع واسع لتعلم تقنيات الويب مع امثلة تفاعلية",
    platforms:["ويب"],
    languages:["html","css","js","py","sql","php","java"],
    ratings:{google:4.4,appstore:null,trustpilot:4.0,g2:4.2}
  },
  {
    name:"MDN Web Docs",
    category:"training",
    rating:9.3,
    price:"free",
    link:"https://developer.mozilla.org",
    favicon:"developer.mozilla.org",
    desc:"التوثيق الرسمي والمرجع الاول لتقنيات الويب من Mozilla",
    platforms:["ويب"],
    languages:["html","css","js","ts"],
    ratings:{google:4.7,appstore:null,trustpilot:4.6,g2:4.8}
  },
  {
    name:"Sololearn",
    category:"training",
    rating:8.4,
    price:"freemium",
    link:"https://sololearn.com",
    favicon:"sololearn.com",
    desc:"تعلم البرمجة على الجوال بطريقة ممتعة وتنافسية",
    platforms:["iOS","Android","ويب"],
    languages:["py","js","java","cpp","cs","html","css","sql"],
    ratings:{google:4.6,appstore:4.6,trustpilot:4.0,g2:4.2}
  }
];

// =====================================================
// STATE
// =====================================================
let currentCat = "all";
let currentSort = "rating";
let currentSearch = "";

// =====================================================
// UTILS
// =====================================================
function getFavicon(domain){
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
}

function getPriceClass(price){
  if(price==="free") return "price-free";
  if(price==="paid") return "price-paid";
  if(price==="mixed") return "price-mixed";
  return "price-freemium";
}
function getPriceLabel(price){
  const map={free:"مجاني",paid:"مدفوع",mixed:"مجاني / مدفوع",freemium:"مجاني مع مميزات"};
  return map[price]||price;
}

function getBtnClass(cat){
  const map={design:"btn-design",video:"btn-video",web:"btn-web",training:"btn-training"};
  return map[cat]||"btn-web";
}

function getStarBar(val,maxVal,colorClass){
  if(!val) return "";
  const pct = (val/maxVal)*100;
  return `
    <div class="rating-bar">
      <div class="rating-fill ${colorClass}" style="width:${pct}%"></div>
    </div>
    <div class="rating-val">${val}</div>
  `;
}

function getLangLabel(l){
  const map={
    html:"HTML",css:"CSS",js:"JavaScript",py:"Python",
    react:"React",node:"Node.js",sql:"SQL",cpp:"C++",
    java:"Java",cs:"C#",php:"PHP",ts:"TypeScript",
    rust:"Rust",go:"Go",all:"الكل",c:"C"
  };
  return map[l]||l;
}

function getLangClass(l){
  const map={
    html:"lang-html",css:"lang-css",js:"lang-js",py:"lang-py",
    react:"lang-react",node:"lang-node",sql:"lang-sql",cpp:"lang-cpp",
    java:"lang-java",cs:"lang-cs",php:"lang-php",ts:"lang-ts",
    rust:"lang-rust",go:"lang-go",all:"lang-all",c:"lang-cpp"
  };
  return map[l]||"lang-all";
}

function buildCard(tool, idx){
  const animDelay = (idx%12)*0.05;
  const scoreColor = tool.rating>=9?"#10b981":tool.rating>=8?"#06b6d4":"#f59e0b";
  const circumference = 2*Math.PI*18;
  const dashOffset = circumference - (tool.rating/10)*circumference;

  // rating rows
  const rKeys = Object.keys(tool.ratings).filter(k=>tool.ratings[k]!==null);
  const rColors = {google:"fill-gold",appstore:"fill-blue",trustpilot:"fill-green",g2:"fill-red"};
  const rLabels = {google:"Google",appstore:"App Store",trustpilot:"Trustpilot",g2:"G2"};
  const rMax = {google:5,appstore:5,trustpilot:5,g2:5};
  const ratingRows = rKeys.map(k=>`
    <div class="rating-row">
      <div class="rating-source">${rLabels[k]}</div>
      ${getStarBar(tool.ratings[k],rMax[k],rColors[k])}
    </div>
  `).join("");

  // lang pills
  const langHtml = tool.languages ? `
    <div class="lang-pills">
      ${tool.languages.map(l=>`<span class="lang-pill ${getLangClass(l)}">${getLangLabel(l)}</span>`).join("")}
    </div>
  ` : "";

  // platforms
  const platHtml = tool.platforms ? `
    <div class="platform-row">
      ${tool.platforms.map(p=>`<span class="plat">${p}</span>`).join("")}
    </div>
  ` : "";

  return `
    <div class="card" data-cat="${tool.category}" style="animation-delay:${animDelay}s">
      <div class="card-head">
        <div class="logo-wrap">
          <img src="${getFavicon(tool.favicon)}" alt="${tool.name}" 
               onerror="this.style.display='none';this.parentNode.querySelector('.logo-fallback').style.display='flex'"/>
          <div class="logo-fallback" style="display:none;background:linear-gradient(135deg,${scoreColor}22,${scoreColor}44);color:${scoreColor}">
            ${tool.name.substring(0,2).toUpperCase()}
          </div>
        </div>
        <div class="card-info">
          <h3>${tool.name}</h3>
          <div class="desc">${tool.desc}</div>
          ${platHtml}
        </div>
      </div>

      ${langHtml}

      <div class="ratings-block">
        <div class="ratings-title">التقييمات</div>
        ${ratingRows}
      </div>

      <div class="overall-row">
        <div class="score-ring">
          <svg width="48" height="48" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="18" fill="none" stroke="rgba(255,255,255,.07)" stroke-width="4"/>
            <circle cx="24" cy="24" r="18" fill="none" stroke="${scoreColor}" stroke-width="4"
              stroke-dasharray="${circumference}" stroke-dashoffset="${dashOffset}"
              stroke-linecap="round"/>
          </svg>
          <div class="score-text" style="color:${scoreColor}">${tool.rating}</div>
        </div>
        <div class="score-meta">
          <div class="score-label">التقييم العام</div>
          <div class="score-value" style="color:${scoreColor}">${tool.rating}/10</div>
        </div>
        <div>
          <span class="price-tag ${getPriceClass(tool.price)}">${getPriceLabel(tool.price)}</span>
        </div>
      </div>

      <a href="${tool.link}" target="_blank" class="visit-btn ${getBtnClass(tool.category)}">
        زيارة ${tool.name}
      </a>
    </div>
  `;
}

function buildSection(title, cat, badgeClass, tools){
  if(tools.length===0) return "";
  const labels = {design:"تصميم جرافيك",video:"مونتاج وفيديو",web:"برمجة ومواقع",training:"تدريب ولغات"};
  return `
    <div class="section-title">
      <h2>${labels[cat]||title}</h2>
      <div class="line"></div>
      <span class="badge ${badgeClass}">${tools.length} اداة</span>
    </div>
    <div class="grid-wrap">
      ${tools.map((t,i)=>buildCard(t,i)).join("")}
    </div>
  `;
}

// =====================================================
// RENDER
// =====================================================
function getFiltered(){
  let data = toolsData;
  if(currentCat!=="all") data=data.filter(t=>t.category===currentCat);
  if(currentSearch) data=data.filter(t=>
    t.name.toLowerCase().includes(currentSearch)||
    t.desc.toLowerCase().includes(currentSearch)
  );
  data=[...data].sort((a,b)=>{
    if(currentSort==="rating") return b.rating-a.rating;
    if(currentSort==="name") return a.name.localeCompare(b.name);
    if(currentSort==="price"){
      const order={free:0,freemium:1,mixed:2,paid:3};
      return (order[a.price]||2)-(order[b.price]||2);
    }
    return 0;
  });
  return data;
}

function render(){
  const data = getFiltered();
  const main = document.getElementById("main-content");

  // stats
  document.getElementById("cnt-design").textContent=toolsData.filter(t=>t.category==="design").length;
  document.getElementById("cnt-video").textContent=toolsData.filter(t=>t.category==="video").length;
  document.getElementById("cnt-web").textContent=toolsData.filter(t=>t.category==="web").length;
  document.getElementById("cnt-training").textContent=toolsData.filter(t=>t.category==="training").length;

  // results count
  document.getElementById("results-count").innerHTML=`<strong>${data.length}</strong> اداة`;

  if(data.length===0){
    main.innerHTML=`<div class="grid-wrap"><div class="empty"><h3>لا توجد نتائج</h3><p>جرب كلمة بحث مختلفة</p></div></div>`;
    return;
  }

  if(currentCat==="all" && !currentSearch){
    // Split by category sections
    const cats = [
      {cat:"design",badge:"badge-design"},
      {cat:"video",badge:"badge-video"},
      {cat:"web",badge:"badge-web"},
      {cat:"training",badge:"badge-training"}
    ];
    main.innerHTML = cats.map(({cat,badge})=>{
      const catData = data.filter(t=>t.category===cat);
      return buildSection(cat,cat,badge,catData);
    }).join("");
  } else {
    // Single section for filtered view
    const badge = {design:"badge-design",video:"badge-video",web:"badge-web",training:"badge-training"}[currentCat]||"badge-design";
    if(currentCat!=="all"){
      main.innerHTML = buildSection("",currentCat,badge,data);
    } else {
      // search across all - no section splits
      main.innerHTML = `<div class="grid-wrap">${data.map((t,i)=>buildCard(t,i)).join("")}</div>`;
    }
  }
}

// =====================================================
// EVENT LISTENERS
// =====================================================
function switchTab(cat,el){
  currentCat=cat;
  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  el.classList.add("active");
  render();
}

function sortBy(type,el){
  currentSort=type;
  document.querySelectorAll(".sort-btn").forEach(b=>b.classList.remove("active"));
  el.classList.add("active");
  render();
}

// original search (backwards compat)
document.getElementById("search").addEventListener("input",(e)=>{
  currentSearch=e.target.value.toLowerCase().trim();
  render();
});

// also support original filterCategory function
function filterCategory(cat){
  const tabs=document.querySelectorAll(".tab");
  tabs.forEach(t=>{if(t.dataset.cat===cat)switchTab(cat,t);});
}

// =====================================================
// INIT
// =====================================================
render();