import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Download, Mail, ArrowRight, Briefcase, Code2, Moon, Sun, Globe, Menu, X, Award } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

/**
 * Modern Appealing Design System:
 * - Gradient colors (purple to pink) for modern appeal
 * - Smooth animations and transitions
 * - Dark/Light theme toggle
 * - Arabic language support with RTL layout
 * - Enhanced hover effects and micro-interactions
 */

interface Project {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  technologies: string[];
  highlightsEn: string[];
  highlightsAr: string[];
  repoUrl?: string;
  featured?: boolean;
}

interface Skill {
  categoryEn: string;
  categoryAr: string;
  items: string[];
}

interface Experience {
  id: string;
  companyEn: string;
  companyAr: string;
  roleEn: string;
  roleAr: string;
  period: string;
  location?: string;
  highlightsEn: string[];
  highlightsAr: string[];
}

interface Certificate {
  id: string;
  titleEn: string;
  titleAr: string;
  issuerEn: string;
  issuerAr: string;
  descriptionEn: string;
  descriptionAr: string;
}

const projects: Project[] = [
  {
    id: "1",
    titleEn: "Freedom Road",
    titleAr: "Freedom Road",
    descriptionEn: "Full-stack interior decoration platform with admin dashboard, JWT authentication, and image optimization.",
    descriptionAr: "منصة تصميم داخلي كاملة مع لوحة تحكم، مصادقة JWT، وتحسين الصور.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
    highlightsEn: [
      "Independently developed a full-stack interior decoration platform using MERN stack",
      "Built responsive admin dashboard with complete CRUD functionality for products, orders, and users",
      "Integrated Cloudinary for optimized image management and secure media handling",
      "Designed scalable backend APIs with Node.js and Express.js leveraging MongoDB for real-time data operations",
    ],
    highlightsAr: [
      "طورت منصة تصميم داخلي كاملة باستخدام مكدس MERN",
      "بنيت لوحة تحكم سريعة الاستجابة مع وظائف CRUD كاملة للمنتجات والطلبات والمستخدمين",
      "دمجت Cloudinary لإدارة الصور المحسنة والتعامل الآمن مع الوسائط",
      "صممت واجهات برمجية قابلة للتوسع باستخدام Node.js و Express.js مع MongoDB",
    ],
    featured: true,
  },
  {
    id: "2",
    titleEn: "AI-Joud",
    titleAr: "AI-Joud",
    descriptionEn: "Dynamic web application with role-based authentication, AI-driven features, and interactive chatbot.",
    descriptionAr: "تطبيق ويب ديناميكي مع مصادقة قائمة على الأدوار وميزات مدفوعة بالذكاء الاصطناعي.",
    technologies: ["React.js", "Tailwind CSS", "PostgreSQL", "React Router", "React Redux"],
    highlightsEn: [
      "Developed responsive web application with modern UI for donors, beneficiaries, and administrators",
      "Integrated secure role-based authentication with PostgreSQL for personalized access",
      "Incorporated AI-driven features including automated donation tax reports and interactive chatbot",
      "Leveraged PostgreSQL for robust data management and enhanced user assistance",
    ],
    highlightsAr: [
      "طورت تطبيق ويب سريع الاستجابة مع واجهة حديثة للمتبرعين والمستفيدين والمسؤولين",
      "دمجت مصادقة آمنة قائمة على الأدوار مع PostgreSQL للوصول الشخصي",
      "دمجت ميزات مدفوعة بالذكاء الاصطناعي بما في ذلك تقارير الضرائب المؤتمتة",
      "استخدمت PostgreSQL لإدارة البيانات القوية والمساعدة المحسنة للمستخدمين",
    ],
    featured: true,
  },
];

const experiences: Experience[] = [
  {
    id: "1",
    companyEn: "Doumind",
    companyAr: "Doumind",
    roleEn: "Software Engineer (Creatio Developer)",
    roleAr: "مهندس برمجيات (مطور Creatio)",
    period: "01/2026 – Present",
    location: "Remote",
    highlightsEn: [
      "Developed and customized business processes, objects, and pages within the Creatio platform to meet client requirements",
      "Configured access rights, roles, and object permissions to ensure secure and role-based data visibility",
      "Implemented business process automation using Creatio BPM tools, improving workflow efficiency and reducing manual tasks",
      "Integrated Creatio with external systems via APIs and handled data management within SQL databases",
    ],
    highlightsAr: [
      "طورت وخصصت العمليات التجارية والكائنات والصفحات داخل منصة Creatio",
      "كونت حقوق الوصول والأدوار وأذونات الكائنات لضمان الأمان",
      "طبقت أتمتة العمليات التجارية باستخدام أدوات Creatio BPM",
      "دمجت Creatio مع الأنظمة الخارجية عبر واجهات برمجية",
    ],
  },
  {
    id: "2",
    companyEn: "Codexal",
    companyAr: "Codexal",
    roleEn: "Full Stack Developer (PART TIME)",
    roleAr: "مطور Full Stack (بدوام جزئي)",
    period: "10/2025 – 11/2025",
    location: "Remote",
    highlightsEn: [
      "Developed dynamic front-end components using React and optimized back-end services with Node.js",
      "Deployed two key web applications to production, ensuring smooth delivery and high availability",
      "Utilized MongoDB for database management, optimizing queries and ensuring data integrity",
    ],
    highlightsAr: [
      "طورت مكونات واجهة ديناميكية باستخدام React وخدمات خلفية محسنة",
      "نشرت تطبيقات ويب رئيسية في الإنتاج",
      "استخدمت MongoDB لإدارة قاعدة البيانات وتحسين الاستعلامات",
    ],
  },
  {
    id: "3",
    companyEn: "Specialized Leasing Company",
    companyAr: "شركة المتخصصة للتأجير",
    roleEn: "IT Employee",
    roleAr: "موظف تقنية معلومات",
    period: "08/2025 – 11/2025",
    location: "Amman, Jordan",
    highlightsEn: [
      "Led backup operations and disaster recovery planning, implementing robust data management solutions",
      "Provided technical support for web and mobile banking applications, enhancing digital service functionality",
      "Administered core banking systems, ensuring high availability, performance, and reliability for data warehouse and SQL databases",
    ],
    highlightsAr: [
      "قادت عمليات النسخ الاحتياطي وتخطيط استرجاع الكوارث",
      "قدمت الدعم الفني لتطبيقات الخدمات المصرفية",
      "أدارت أنظمة البنوك الأساسية لضمان التوفر العالي والأداء",
    ],
  },
  {
    id: "4",
    companyEn: "Mount Seir Tech",
    companyAr: "Mount Seir Tech",
    roleEn: "Full Stack Web Developer (PART TIME)",
    roleAr: "مطور Full Stack (بدوام جزئي)",
    period: "05/2025 - 06/2025",
    location: "Amman, Jordan · Remote",
    highlightsEn: [
      "Developed dynamic front-end components with Svelte, enhancing performance and responsiveness across multiple projects",
      "Delivered a production-grade responsive website using Svelte and Tailwind CSS, optimized for clean UI and user accessibility",
      "Collaborated with designers to convert Figma mockups into fully functional, accessible web interfaces",
    ],
    highlightsAr: [
      "طورت مكونات واجهة ديناميكية باستخدام Svelte لتحسين الأداء",
      "سلمت موقع ويب سريع الاستجابة من درجة الإنتاج باستخدام Svelte و Tailwind CSS",
      "تعاونت مع المصممين لتحويل نماذج Figma إلى واجهات ويب وظيفية",
    ],
  },
  {
    id: "5",
    companyEn: "Orange Coding Academy",
    companyAr: "أكاديمية Orange للبرمجة",
    roleEn: "Full-Stack Web Development Trainee",
    roleAr: "متدرب في تطوير Full Stack",
    period: "12/2024 – 05/2025",
    location: "Remote",
    highlightsEn: [
      "Successfully delivered 10 Full-Stack projects using modern technologies",
      "Led product development and Scrum processes, ensuring effective project management and delivery",
      "Gained hands-on expertise in React, Node.js, MongoDB, PostgreSQL, and Express.js through daily coding sprints",
      "Utilized Git and GitHub for version control and streamlined collaboration across project teams",
    ],
    highlightsAr: [
      "سلمت 10 مشاريع Full-Stack باستخدام التقنيات الحديثة",
      "قادت تطوير المنتجات وعمليات Scrum",
      "اكتسبت خبرة عملية في React و Node.js و MongoDB و PostgreSQL",
      "استخدمت Git و GitHub للتحكم في الإصدارات",
    ],
  },
  {
    id: "6",
    companyEn: "Mafateeh IT & Media Solutions",
    companyAr: "Mafateeh IT & Media Solutions",
    roleEn: "Frontend Web Development Trainee",
    roleAr: "متدرب في تطوير Frontend",
    period: "03/2024 - 05/2024",
    location: "Amman, Jordan · On-site",
    highlightsEn: [
      "Collaborated on multiple projects to build dynamic and responsive user interfaces using React.js",
      "Completed a two-month intensive React.js training, developing robust web applications",
      "Gained hands-on experience in frontend web development at Mafateeh IT & Media Solutions",
    ],
    highlightsAr: [
      "تعاونت في مشاريع متعددة لبناء واجهات مستخدم ديناميكية باستخدام React.js",
      "أكملت تدريب React.js المكثف لمدة شهرين",
      "اكتسبت خبرة عملية في تطوير Frontend",
    ],
  },
];

const skills: Skill[] = [
  {
    categoryEn: "Frontend",
    categoryAr: "Frontend",
    items: ["React.js", "Svelte", "Tailwind CSS", "Bootstrap"],
  },
  {
    categoryEn: "Backend",
    categoryAr: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    categoryEn: "Tools & Platforms",
    categoryAr: "الأدوات والمنصات",
    items: ["Git", "GitHub", "Figma", "Odoo CMS", "Cursor", "Claude"],
  },
  {
    categoryEn: "Soft Skills",
    categoryAr: "المهارات الناعمة",
    items: ["Leadership", "Communication", "Problem-Solving", "Teamwork", "Critical Thinking", "Creativity", "Vibe Coding"],
  },
];

// Animation component
const FadeInOnScroll = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref) observer.observe(ref);
    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, delay]);

  return (
    <div
      ref={setRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const certificates: Certificate[] = [
  {
    id: "1",
    titleEn: "The Complete Full-Stack Web Development Bootcamp",
    titleAr: "برنامج Full-Stack Web Development الكامل",
    issuerEn: "Dr. Angela Yu - Udemy",
    issuerAr: "د. أنجيلا يو - Udemy",
    descriptionEn: "Completed a full-stack web development program covering HTML, CSS, JavaScript, React, Node.js, and databases, with hands-on project experience in front-end and back-end development.",
    descriptionAr: "أكملت برنامج تطوير Full-Stack يغطي HTML و CSS و JavaScript و React و Node.js وقواعد البيانات، مع خبرة عملية في تطوير Frontend و Backend.",
  },
  {
    id: "2",
    titleEn: "Version Control",
    titleAr: "التحكم في الإصدارات",
    issuerEn: "Meta - Coursera",
    issuerAr: "Meta - Coursera",
    descriptionEn: "Competent in shell commands for efficient development workflows and experienced with version control systems, including GitHub, for code management and collaboration.",
    descriptionAr: "كفؤ في أوامر shell لسير العمل الفعال وذو خبرة في أنظمة التحكم في الإصدارات بما في ذلك GitHub لإدارة الأكواد والتعاون.",
  },
  {
    id: "3",
    titleEn: "Principles of UI/UX Design",
    titleAr: "مبادئ تصميم UI/UX",
    issuerEn: "Meta - Coursera",
    issuerAr: "Meta - Coursera",
    descriptionEn: "Acquired foundational knowledge in UX design and research—emphasizing accessibility and user empathy—and developed practical skills in wireframing and prototyping with Figma, enhancing front-end development and design.",
    descriptionAr: "اكتسبت معرفة أساسية في تصميم UX والبحث مع التركيز على إمكانية الوصول وتعاطف المستخدم، وطورت مهارات عملية في wireframing و prototyping مع Figma.",
  },
  {
    id: "4",
    titleEn: "Introduction to Front-End Development",
    titleAr: "مقدمة في تطوير Frontend",
    issuerEn: "Meta - Coursera",
    issuerAr: "Meta - Coursera",
    descriptionEn: "Proficient in front-end development with HTML, CSS, and responsive design; knowledgeable about front-end, back-end, and full-stack roles; and experienced using UI frameworks for efficient development and enhanced user experience.",
    descriptionAr: "ماهر في تطوير Frontend مع HTML و CSS والتصميم المتجاوب؛ ملم بأدوار Frontend و Backend و Full-Stack؛ وذو خبرة في استخدام أطر عمل UI للتطوير الفعال وتحسين تجربة المستخدم.",
  },
];

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, isArabic } = useLanguage();
  const t = translations[language];
  
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setMessage("");
      setSubmitted(false);
    }, 3000);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-background text-foreground transition-colors duration-300 ${isArabic ? 'rtl' : 'ltr'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold gradient-text">RZ</div>
          
          {/* Desktop Menu */}
          <div className={`hidden md:flex gap-8 text-sm ${isArabic ? 'flex-row-reverse' : ''}`}>
            <button onClick={() => { scrollToSection('projects'); setMobileMenuOpen(false); }} className="text-foreground/70 hover:text-accent transition-all duration-300 pb-1 border-b-2 border-transparent hover:border-accent">
              {t.projects}
            </button>
            <button onClick={() => { scrollToSection('experience'); setMobileMenuOpen(false); }} className="text-foreground/70 hover:text-accent transition-all duration-300 pb-1 border-b-2 border-transparent hover:border-accent">
              {t.experience}
            </button>
            <button onClick={() => { scrollToSection('skills'); setMobileMenuOpen(false); }} className="text-foreground/70 hover:text-accent transition-all duration-300 pb-1 border-b-2 border-transparent hover:border-accent">
              {t.skills}
            </button>
            <button onClick={() => { scrollToSection('contact'); setMobileMenuOpen(false); }} className="text-foreground/70 hover:text-accent transition-all duration-300 pb-1 border-b-2 border-transparent hover:border-accent">
              {t.contact}
            </button>
          </div>

          <div className={`flex gap-3 items-center ${isArabic ? 'flex-row-reverse' : ''}`}>
            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1jX6ARydHlqpgv6NJTqWYKNUC-ZYouTaf/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300"
            >
              <Download size={16} />
              <span className="hidden sm:inline text-sm">{t.contact}</span>
            </a>

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(isArabic ? 'en' : 'ar')}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300"
              title="Toggle Language"
            >
              <Globe size={16} />
              <span className="text-sm">{isArabic ? 'EN' : 'AR'}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className={`container py-4 space-y-3 flex flex-col ${isArabic ? 'items-end' : 'items-start'}`}>
              <button onClick={() => { scrollToSection('projects'); setMobileMenuOpen(false); }} className="text-foreground/70 hover:text-accent transition-colors text-sm w-full text-left">
                {t.projects}
              </button>
              <button onClick={() => { scrollToSection('experience'); setMobileMenuOpen(false); }} className="text-foreground/70 hover:text-accent transition-colors text-sm w-full text-left">
                {t.experience}
              </button>
              <button onClick={() => { scrollToSection('skills'); setMobileMenuOpen(false); }} className="text-foreground/70 hover:text-accent transition-colors text-sm w-full text-left">
                {t.skills}
              </button>
              <button onClick={() => { scrollToSection('contact'); setMobileMenuOpen(false); }} className="text-foreground/70 hover:text-accent transition-colors text-sm w-full text-left">
                {t.contact}
              </button>
              <div className={`flex gap-2 pt-2 ${isArabic ? 'flex-row-reverse' : ''}`}>
                <button
                  onClick={() => setLanguage(isArabic ? 'en' : 'ar')}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 text-xs"
                >
                  <Globe size={14} />
                  {isArabic ? 'EN' : 'AR'}
                </button>
                <button
                  onClick={toggleTheme}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300"
                >
                  {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-between pt-20 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-accent to-accent/20 rounded-full blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }} />

        <div className={`container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isArabic ? 'rtl' : ''}`}>
          {/* Left: Name and intro */}
          <FadeInOnScroll>
            <div className="space-y-8">
              <div>
                <h1 className="text-6xl lg:text-7xl font-bold mb-4 tracking-tighter">
                  <span className="text-foreground">Ramzi</span>
                  <br />
                  <span className="gradient-text">Ahmad Zamil</span>
                </h1>
                <p className="text-xl text-foreground/70 font-light">{t.fullStackDeveloper}</p>
              </div>

              <p className="text-foreground/70 max-w-md leading-relaxed text-sm">
                {t.heroDescription}
              </p>

              <div className={`flex gap-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
                <a
                  href="https://github.com/RamziZamil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 text-sm font-medium group"
                >
                  <Github size={18} className="group-hover:scale-110 transition-transform" />
                  {t.github}
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-btn text-white hover:shadow-lg transition-all duration-300 text-sm font-medium group"
                >
                  {t.getInTouch}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Right: Tech stack icons */}
          <FadeInOnScroll delay={200}>
            <div className="hidden lg:grid grid-cols-2 gap-6">
              {[
                { name: "React", icon: "⚛️" },
                { name: "Vibe Coding", icon: "✨" },
                { name: "Node.js", icon: "🟢" },
                { name: "PostgreSQL", icon: "🐘" },
                { name: "MongoDB", icon: "🍃" },
                { name: "Express.js", icon: "⚡" },
                { name: "Tailwind CSS", icon: "🎨" },
                { name: "Git", icon: "🔗" },
              ].map((tech, idx) => (
                <div
                  key={tech.name}
                  className="p-6 rounded-lg border border-border hover:border-accent bg-card hover:bg-accent/5 transition-all group cursor-pointer card-hover"
                  style={{
                    animation: `slideIn 0.6s ease-out ${idx * 100}ms backwards`,
                  }}
                >
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{tech.icon}</div>
                  <p className="text-xs text-foreground/60 group-hover:text-accent transition-colors">{tech.name}</p>
                </div>
              ))}
            </div>
          </FadeInOnScroll>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-foreground/50 text-xs">Scroll to explore</div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 border-t border-border">
        <div className="container">
          <FadeInOnScroll>
            <div className="mb-16">
              <div className="h-1 w-12 bg-gradient-to-r from-accent to-transparent mb-4" />
              <h2 className="text-4xl font-bold mb-2">{t.featuredProjects}</h2>
              <p className="text-foreground/60 text-sm">{t.showcasingProjects}</p>
            </div>
          </FadeInOnScroll>

          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${isArabic ? 'rtl' : ''}`}>
            {projects.map((project, idx) => (
              <FadeInOnScroll key={project.id} delay={idx * 150}>
                <div className="group border border-border rounded-lg hover:border-accent bg-card transition-all duration-300 overflow-hidden card-hover h-full flex flex-col">
                  <div className="p-8 space-y-4 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                      {isArabic ? project.titleAr : project.titleEn}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {isArabic ? project.descriptionAr : project.descriptionEn}
                    </p>

                    <div>
                      <p className="text-xs text-foreground/50 mb-2">{t.technologies}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-accent/10 text-accent border border-accent/30 rounded hover:border-accent transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-border">
                      {(isArabic ? project.highlightsAr : project.highlightsEn).map((highlight, i) => (
                        <p key={i} className="text-foreground/70 text-xs leading-relaxed flex gap-2">
                          <span className="text-accent flex-shrink-0">▸</span>
                          <span>{highlight}</span>
                        </p>
                      ))}
                    </div>

                    {project.repoUrl && (
                      <div className="flex gap-4 pt-4 border-t border-border">
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm"
                        >
                          <Github size={16} />
                          {t.repository}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 border-t border-border">
        <div className="container max-w-7xl">
          <FadeInOnScroll>
            <div className="mb-16">
              <div className="h-1 w-12 bg-gradient-to-r from-accent to-transparent mb-4" />
              <h2 className="text-4xl font-bold mb-2">{t.professionalExperience}</h2>
              <p className="text-foreground/60 text-sm">{t.experienceDescription}</p>
            </div>
          </FadeInOnScroll>

          <div className={`space-y-8 ${isArabic ? 'rtl' : ''}`}>
            {experiences.map((exp, idx) => (
              <FadeInOnScroll key={exp.id} delay={idx * 100}>
                <div className="group border-l-2 border-border hover:border-accent transition-all pl-8 py-4 relative card-hover rounded-lg">
                  {/* Timeline dot */}
                  <div className="absolute -left-3 top-6 w-4 h-4 bg-card border-2 border-border group-hover:border-accent group-hover:shadow-lg group-hover:shadow-accent/50 rounded-full transition-all" />

                  <div className="space-y-3">
                    <div className={`flex items-start justify-between gap-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
                      <div>
                        <h3 className="text-lg font-bold group-hover:text-accent transition-colors">
                          {isArabic ? exp.companyAr : exp.companyEn}
                        </h3>
                        <p className="text-accent text-sm">{isArabic ? exp.roleAr : exp.roleEn}</p>
                        {exp.location && <p className="text-foreground/50 text-xs mt-1">{exp.location}</p>}
                      </div>
                      <span className="text-xs text-foreground/50 flex-shrink-0">{exp.period}</span>
                    </div>

                    <div className="space-y-2">
                      {(isArabic ? exp.highlightsAr : exp.highlightsEn).map((highlight, i) => (
                        <p key={i} className="text-foreground/70 text-sm leading-relaxed flex gap-2">
                          <span className="text-accent flex-shrink-0">▸</span>
                          <span>{highlight}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 border-t border-border">
        <div className="container max-w-7xl">
          <FadeInOnScroll>
            <div className="mb-16">
              <div className="h-1 w-12 bg-gradient-to-r from-accent to-transparent mb-4" />
              <h2 className="text-4xl font-bold mb-2">{t.technicalSkills}</h2>
              <p className="text-foreground/60 text-sm">{t.skillsDescription}</p>
            </div>
          </FadeInOnScroll>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 ${isArabic ? 'rtl' : ''}`}>
            {skills.map((skillGroup, idx) => (
              <FadeInOnScroll key={skillGroup.categoryEn} delay={idx * 100}>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-accent">{isArabic ? skillGroup.categoryAr : skillGroup.categoryEn}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs bg-accent/10 border border-accent/30 text-foreground rounded hover:border-accent hover:text-accent transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-24 border-t border-border">
        <div className="container max-w-7xl">
          <FadeInOnScroll>
            <div className="mb-16">
              <div className="h-1 w-12 bg-gradient-to-r from-accent to-transparent mb-4" />
              <h2 className="text-4xl font-bold mb-2">Certificates</h2>
              <p className="text-foreground/60 text-sm">Professional certifications and training programs</p>
            </div>
          </FadeInOnScroll>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${isArabic ? 'rtl' : ''}`}>
            {certificates.map((cert, idx) => (
              <FadeInOnScroll key={cert.id} delay={idx * 100}>
                <div className="group border border-border rounded-lg hover:border-accent bg-card transition-all duration-300 overflow-hidden card-hover p-6 space-y-4 h-full flex flex-col">
                  <div className="flex items-start gap-3">
                    <Award className="text-accent flex-shrink-0 mt-1" size={20} />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold group-hover:text-accent transition-colors">
                        {isArabic ? cert.titleAr : cert.titleEn}
                      </h3>
                      <p className="text-accent text-sm">{isArabic ? cert.issuerAr : cert.issuerEn}</p>
                    </div>
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {isArabic ? cert.descriptionAr : cert.descriptionEn}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-border">
        <div className="container max-w-7xl">
          <FadeInOnScroll>
            <div className="mb-12">
              <div className="h-1 w-12 bg-gradient-to-r from-accent to-transparent mb-4" />
              <h2 className="text-4xl font-bold mb-2">{t.getInTouchTitle}</h2>
              <p className="text-foreground/60 text-sm">{t.contactDescription}</p>
            </div>
          </FadeInOnScroll>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${isArabic ? 'rtl' : ''}`}>
            {/* Contact info */}
            <FadeInOnScroll>
              <div className="space-y-6">
                <div>
                  <p className="text-foreground/50 text-sm mb-2 flex items-center gap-2">
                    <Mail size={16} />
                    {t.email}
                  </p>
                  <a href="mailto:ramzizamill@gmail.com" className="text-accent hover:text-accent/80 transition-colors text-sm">
                    ramzizamill@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-foreground/50 text-sm mb-2 flex items-center gap-2">
                    <Briefcase size={16} />
                    {t.phone}
                  </p>
                  <a href="tel:+962796981362" className="text-accent hover:text-accent/80 transition-colors text-sm">
                    +962-796981362
                  </a>
                </div>
                <div>
                  <p className="text-foreground/50 text-sm mb-2 flex items-center gap-2">
                    <Code2 size={16} />
                    GitHub
                  </p>
                  <a
                    href="https://github.com/RamziZamil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors text-sm"
                  >
                    github.com/RamziZamil
                  </a>
                </div>
                <div>
                  <p className="text-foreground/50 text-sm mb-2 flex items-center gap-2">
                    <Briefcase size={16} />
                    {t.linkedIn}
                  </p>
                  <a
                    href="https://linkedin.com/in/RamziZamil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors text-sm"
                  >
                    linkedin.com/in/RamziZamil
                  </a>
                </div>
              </div>
            </FadeInOnScroll>

            {/* Contact form */}
            <FadeInOnScroll delay={150}>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder={t.yourEmail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-accent outline-none transition-colors text-sm text-foreground placeholder-foreground/50"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder={t.yourMessage}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-accent outline-none transition-colors text-sm text-foreground placeholder-foreground/50 resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg gradient-btn text-white font-bold hover:shadow-lg transition-all duration-300 text-sm"
                >
                  {submitted ? t.messageSent : t.sendMessage}
                </button>
              </form>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/50">
        <div className={`container flex flex-col md:flex-row items-center justify-between gap-4 text-foreground/50 text-xs ${isArabic ? 'rtl' : ''}`}>
          <p>&copy; 2025 Ramzi Ahmad Zamil. {t.allRightsReserved}</p>
          <div className={`flex gap-6 ${isArabic ? 'flex-row-reverse' : ''}`}>
            <a href="https://github.com/RamziZamil" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/RamziZamil" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              {t.linkedIn}
            </a>
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
