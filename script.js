// =============================================
// DOM Elements & Global Variables
// =============================================

// Navigation & Menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('.header');

// Theme & Language
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');
const langSwitch = document.getElementById('langSwitch');
const body = document.body;

// Hero Elements (for typewriter)
const heroTitle = document.querySelector('.hero-title');
const heroTagline = document.querySelector('.hero-tagline');

// Scroll Elements
const scrollTopBtn = document.querySelector('.scroll-top');
const fadeElements = document.querySelectorAll('.fade-in');

// Contact Form
const contactForm = document.getElementById('contactForm');

// Counter Elements
const yearCounter = document.querySelector('.year-counter');

// Operator Names (for typewriter)
const operatorNames = document.querySelectorAll('.operator-name');

// Current States
let currentLang = localStorage.getItem('language') || 'en';
let currentTheme = localStorage.getItem('theme') || 'light';

// =============================================
// Complete Translation Object (English ↔ Urdu)
// =============================================

const translations = {
    en: {
        // Navigation
        home: "Home",
        about: "About Us",
        products: "Products",
        services: "Services",
        digitalHelp: "Digital Help",
        contact: "Contact Us",
        storeName: "CH Afzal Grocery Store",
        tagline: "Fresh Quality, Affordable Prices",
        
        // Hero Section
        viewProducts: "View Products",
        contactUs: "Contact Us",
        callNow: "Call Now",
        since: "Since 2010",
        servingCommunity: "Serving the community",
        location: "Location",
        address: "Basti Samandri, Kotli Nijabat",
        businessHours: "Business Hours",
        
        // About Section
        aboutUs: "About Us",
        aboutText1: "CH Afzal Grocery Store has been proudly serving the community of Basti Samandri, Kotli Nijabat since 2010. We are your trusted neighborhood grocery destination, committed to providing quality products at fair prices.",
        aboutText2: "We offer a wide selection of daily essentials including rice, lentils, cooking oil, ghee, spices (including garam masala, saunf, zeera), tea, snacks, dried peanuts, personal care items, and much more. Our goal is to make your shopping experience convenient and satisfying.",
        aboutText3: "In addition to grocery items, we also provide JazzCash and EasyPaisa money transfer services for your convenience. We now offer FREE digital assistance services to help our community with Google accounts, social media issues, and general tech support.",
        aboutText4: "Whether you need household essentials, financial services, or digital help, CH Afzal Grocery Store is here to serve you. Visit us today and experience quality service and competitive prices!",
        yearEstablished: "Year Established",
        productCategories: "Product Categories",
        serviceTypes: "Service Types",
        customerSatisfaction: "Customer Satisfaction",
        
        // Products Section
        ourProducts: "Our Products",
        qualityProducts: "Quality products for your daily needs",
        riceGrains: "Rice & Grains",
        riceDescription: "All types of quality rice and grains",
        dalLentils: "Dal & Lentils",
        dalDescription: "Masoor, Moong, Chana, Chickpeas",
        cookingOil: "Cooking Oil",
        oilDescription: "Premium quality cooking oils",
        ghee: "Ghee",
        gheeDescription: "Pure desi ghee",
        sugarSalt: "Sugar & Salt",
        sugarDescription: "Essential kitchen staples",
        spicesMasalas: "Spices & Masalas",
        spicesDescription: "Garam Masala, Saunf, Zeera, and more",
        tea: "Tea",
        teaDescription: "Various premium tea brands",
        coldDrinks: "Cold Drinks",
        drinksDescription: "Refreshing beverages",
        snacksBiscuits: "Snacks & Biscuits",
        snacksDescription: "Wide variety of snacks",
        biscuits: "Biscuits",
        biscuitsDescription: "Assorted biscuits and cookies",
        candies: "Candies",
        candiesDescription: "Sweet treats for everyone",
        driedPeanuts: "Dried Peanuts",
        peanutsDescription: "Fresh roasted peanuts",
        shampoo: "Shampoo",
        shampooDescription: "Personal care products",
        soap: "Soap",
        soapDescription: "Quality bath soaps",
        detergents: "Detergents",
        detergentDescription: "Household cleaning products",
        
        // Services Section
        ourServices: "Our Services",
        servicesSubtitle: "Beyond groceries - we're here to help",
        jazzcash: "JazzCash Money Transfer",
        jazzcashDescription: "Send and receive money easily",
        easypaisa: "EasyPaisa Money Transfer",
        easypaisaDescription: "Quick and secure transactions",
        wholesale: "Wholesale Service",
        wholesaleDescription: "Bulk orders at discounted rates",
        operators: "Operators",
        operator: "Operator",
        bulkOrders: "Bulk orders accepted",
        discountedPrices: "Discounted prices",
        doorDelivery: "Door delivery available",
        customOrders: "Custom orders welcome",
        inquireNow: "Inquire Now",
        
        // Digital Assistance Section
        digitalAssistance: "Free Digital Assistance Services",
        digitalSubtitle: "We're here to help beyond groceries!",
        googleServices: "Google Account Services",
        createGmail: "Create new Gmail accounts",
        recoverPassword: "Recover forgotten passwords",
        fixLogin: "Fix login issues",
        accountSecurity: "Account security setup",
        socialMediaAssistance: "Social Media Assistance",
        facebookHelp: "Facebook account help",
        whatsappSetup: "WhatsApp setup",
        instagramHelp: "Instagram assistance",
        profileManagement: "Profile management",
        generalDigitalSupport: "General Digital Support",
        mobileSettings: "Mobile phone settings",
        appInstallations: "App installations",
        basicTroubleshooting: "Basic troubleshooting",
        digitalPaymentsHelp: "Digital payments help",
        freeService: "FREE SERVICE",
        ctaDigital: "Need digital help? Visit our store and we'll assist you for FREE!",
        contactForHelp: "Contact Us for Help",
        
        // Why Choose Us
        whyChooseUs: "Why Choose Us?",
        since2010: "Since 2010",
        experienceTrust: "14+ years of trusted service in the community",
        qualityProducts: "Quality Products",
        qualityDescription: "Fresh and authentic products guaranteed",
        affordablePrices: "Affordable Prices",
        pricesDescription: "Competitive prices for all budgets",
        customerSupport: "Customer Support",
        supportDescription: "Friendly and helpful service always",
        convenientHours: "Convenient Hours",
        hoursDescription: "Open 7 AM to 7 PM, 7 days a week",
        extraServices: "Extra Services",
        extraServicesDesc: "JazzCash, EasyPaisa & FREE digital help",
        
        // Payment Methods
        paymentMethods: "Payment Methods Accepted",
        cash: "Cash",
        cashDescription: "Traditional cash payments",
        jazzcashPayment: "Mobile money transfer",
        easypaisaPayment: "Digital wallet payments",
        bankTransfer: "Bank Transfer",
        bankDescription: "Direct bank transfers",
        
        // Contact Section
        getInTouch: "Get in Touch",
        storeAddress: "Store Address",
        phoneNumbers: "Phone Numbers",
        sendMessage: "Send us a Message",
        formSubtitle: "Fill the form and we'll contact you on WhatsApp",
        name: "Name *",
        phone: "Phone Number *",
        email: "Email (Optional)",
        message: "Message *",
        sendWhatsapp: "Send via WhatsApp",
        formNote: "Note: This will open WhatsApp with your message. Just tap send!",
        
        // Footer
        quickLinks: "Quick Links",
        copyright: "© 2025 CH Afzal Grocery Store. All rights reserved.",
        developedBy: "Developed by Imran"
    },
    
    ur: {
        // Navigation
        home: "ہوم",
        about: "ہمارے بارے میں",
        products: "مصنوعات",
        services: "خدمات",
        digitalHelp: "ڈیجیٹل مدد",
        contact: "رابطہ کریں",
        storeName: "سی ایچ افضل گروسری سٹور",
        tagline: "تازہ معیار، سستی قیمتیں",
        
        // Hero Section
        viewProducts: "مصنوعات دیکھیں",
        contactUs: "رابطہ کریں",
        callNow: "ابھی کال کریں",
        since: "2010 سے",
        servingCommunity: "کمیونٹی کی خدمت",
        location: "مقام",
        address: "بستی سماںدری، کوٹلی نیاز بٹ",
        businessHours: "کاروباری اوقات",
        
        // About Section
        aboutUs: "ہمارے بارے میں",
        aboutText1: "سی ایچ افضل گروسری سٹور 2010 سے فخریہ بستی سماںدری، کوٹلی نیاز بٹ کی کمیونٹی کی خدمت کر رہا ہے۔ ہم آپ کا قابل اعتماد مقامی گروسری مقصد ہیں، معیاری مصنوعات مناسب قیمتوں پر فراہم کرنے کے لیے پرعزم ہیں۔",
        aboutText2: "ہم روزمرہ کی ضروریات کی وسیع انتخاب پیش کرتے ہیں جس میں چاول، دال، کھانے کا تیل، گھی، مصالحے (گرم مسالہ، سونف، زیرہ شامل ہیں)، چائے، نمکین، خشک مونگ پھلی، ذاتی نگہداشت کی اشیاء، اور بہت کچھ شامل ہیں۔ ہمارا مقصد آپ کے خریداری کے تجربے کو آسان اور مطمئن کرنا ہے۔",
        aboutText3: "گروسری آئٹمز کے علاوہ، ہم آپ کی سہولت کے لیے جاز کیش اور ایزی پیسہ منی ٹرانسفر خدمات بھی فراہم کرتے ہیں۔ ہم اب مفت ڈیجیٹل مدد کی خدمات پیش کرتے ہیں تاکہ ہماری کمیونٹی کو گوگل اکاؤنٹس، سوشل میڈیا مسائل، اور عام ٹیک سپورٹ میں مدد مل سکے۔",
        aboutText4: "چاہے آپ کو گھریلو ضروریات، مالی خدمات، یا ڈیجیٹل مدد کی ضرورت ہو، سی ایچ افضل گروسری سٹور آپ کی خدمت کے لیے موجود ہے۔ آج ہی ہمارے پاس آئیں اور معیاری سروس اور مسابقتی قیمتوں کا تجربہ کریں!",
        yearEstablished: "سال قائم",
        productCategories: "مصنوعات کی اقسام",
        serviceTypes: "خدمات کی اقسام",
        customerSatisfaction: "گاہک کی اطمینان",
        
        // Products Section
        ourProducts: "ہماری مصنوعات",
        qualityProducts: "آپ کی روزمرہ کی ضروریات کے لیے معیاری مصنوعات",
        riceGrains: "چاول اور اناج",
        riceDescription: "ہر قسم کے معیاری چاول اور اناج",
        dalLentils: "دال اور مسور",
        dalDescription: "مسور، مونگ، چنا، چنے",
        cookingOil: "کھانے کا تیل",
        oilDescription: "اعلیٰ معیار کا کھانے کا تیل",
        ghee: "گھی",
        gheeDescription: "خالص دیسی گھی",
        sugarSalt: "چینی اور نمک",
        sugarDescription: "ضروری باورچی خانے کے بنیادی اجزاء",
        spicesMasalas: "مصالحے اور مسالے",
        spicesDescription: "گرم مسالہ، سونف، زیرہ، اور مزید",
        tea: "چائے",
        teaDescription: "مختلف پریمیم چائے برانڈز",
        coldDrinks: "ٹھنڈے مشروبات",
        drinksDescription: "تازگی بخش مشروبات",
        snacksBiscuits: "نمکین اور بسکٹ",
        snacksDescription: "نمکین کی وسیع اقسام",
        biscuits: "بسکٹ",
        biscuitsDescription: "مختلف قسم کے بسکٹ اور کوکیز",
        candies: "ٹافیاں",
        candiesDescription: "سب کے لیے میٹھے ٹریٹ",
        driedPeanuts: "خشک مونگ پھلی",
        peanutsDescription: "تازہ بھنی ہوئی مونگ پھلی",
        shampoo: "شیمپو",
        shampooDescription: "ذاتی نگہداشت کی مصنوعات",
        soap: "صابن",
        soapDescription: "معیاری باتھ صابن",
        detergents: "ڈٹرجنٹ",
        detergentDescription: "گھریلو صفائی کی مصنوعات",
        
        // Services Section
        ourServices: "ہماری خدمات",
        servicesSubtitle: "گروسری سے آگے - ہم مدد کے لیے موجود ہیں",
        jazzcash: "جاز کیش منی ٹرانسفر",
        jazzcashDescription: "آسانی سے پیسے بھیجیں اور وصول کریں",
        easypaisa: "ایزی پیسہ منی ٹرانسفر",
        easypaisaDescription: "تیز اور محفوظ لین دین",
        wholesale: "تھوک خدمت",
        wholesaleDescription: "رعایتی نرخوں پر بڑے آرڈر",
        operators: "آپریٹرز",
        operator: "آپریٹر",
        bulkOrders: "بڑے آرڈر قبول",
        discountedPrices: "رعایتی قیمتیں",
        doorDelivery: "دروازے پر ڈیلیوری دستیاب",
        customOrders: "خصوصی آرڈر خوش آمدید",
        inquireNow: "ابھی پوچھیں",
        
        // Digital Assistance Section
        digitalAssistance: "مفت ڈیجیٹل مدد کی خدمات",
        digitalSubtitle: "ہم گروسری سے آگے مدد کے لیے موجود ہیں!",
        googleServices: "گوگل اکاؤنٹ خدمات",
        createGmail: "نیا جی میل اکاؤنٹ بنائیں",
        recoverPassword: "بھولا ہوا پاس ورڈ بازیافت کریں",
        fixLogin: "لاگ ان مسائل درست کریں",
        accountSecurity: "اکاؤنٹ سیکورٹی سیٹ اپ",
        socialMediaAssistance: "سوشل میڈیا مدد",
        facebookHelp: "فیس بک اکاؤنٹ مدد",
        whatsappSetup: "واٹس ایپ سیٹ اپ",
        instagramHelp: "انسٹاگرام مدد",
        profileManagement: "پروفائل مینجمنٹ",
        generalDigitalSupport: "عام ڈیجیٹل سپورٹ",
        mobileSettings: "موبائل فون کی ترتیبات",
        appInstallations: "ایپ انسٹالیشن",
        basicTroubleshooting: "بنیادی ٹربل شوٹنگ",
        digitalPaymentsHelp: "ڈیجیٹل ادائیگیوں میں مدد",
        freeService: "مفت خدمت",
        ctaDigital: "ڈیجیٹل مدد چاہیے؟ ہمارے سٹور پر آئیں اور ہم آپ کی مفت مدد کریں گے!",
        contactForHelp: "مدد کے لیے رابطہ کریں",
        
        // Why Choose Us
        whyChooseUs: "ہمیں کیوں منتخب کریں؟",
        since2010: "2010 سے",
        experienceTrust: "کمیونٹی میں 14+ سال کا قابل اعتماد سروس",
        qualityProducts: "معیاری مصنوعات",
        qualityDescription: "تازہ اور معتبر مصنوعات کی ضمانت",
        affordablePrices: "قابل برداشت قیمتیں",
        pricesDescription: "سب بجٹ کے لیے مسابقتی قیمتیں",
        customerSupport: "کسٹمر سپورٹ",
        supportDescription: "ہمیشہ دوستانہ اور مددگار سروس",
        convenientHours: "آسان اوقات",
        hoursDescription: "صبح 7 بجے سے شام 7 بجے تک کھلا، ہفتے کے 7 دن",
        extraServices: "اضافی خدمات",
        extraServicesDesc: "جاز کیش، ایزی پیسہ اور مفت ڈیجیٹل مدد",
        
        // Payment Methods
        paymentMethods: "قبول کردہ ادائیگی کے طریقے",
        cash: "نقد",
        cashDescription: "روایتی نقد ادائیگی",
        jazzcashPayment: "موبائل منی ٹرانسفر",
        easypaisaPayment: "ڈیجیٹل والٹ ادائیگی",
        bankTransfer: "بینک ٹرانسفر",
        bankDescription: "براہ راست بینک ٹرانسفر",
        
        // Contact Section
        getInTouch: "رابطہ کریں",
        storeAddress: "سٹور کا پتہ",
        phoneNumbers: "فون نمبرز",
        sendMessage: "ہمیں پیغام بھیجیں",
        formSubtitle: "فارم پُر کریں اور ہم آپ سے واٹس ایپ پر رابطہ کریں گے",
        name: "نام *",
        phone: "فون نمبر *",
        email: "ای میل (اختیاری)",
        message: "پیغام *",
        sendWhatsapp: "واٹس ایپ کے ذریعے بھیجیں",
        formNote: "نوٹ: یہ آپ کے پیغام کے ساتھ واٹس ایپ کھولے گا۔ بس سینڈ پر ٹیپ کریں!",
        
        // Footer
        quickLinks: "فوری لنکس",
        copyright: "© 2025 سی ایچ افضل گروسری سٹور۔ تمام حقوق محفوظ ہیں۔",
        developedBy: "عمران نے تیار کیا"
    }
};

// =============================================
// Mobile Menu Toggle
// =============================================

function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    const menuIcon = menuToggle.querySelector('i');
    
    if (navMenu.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
        document.body.style.overflow = 'auto';
    }
}

menuToggle.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});

// =============================================
// Sticky Header on Scroll
// =============================================

function handleScroll() {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
        scrollTopBtn.classList.add('visible');
    } else {
        header.classList.remove('scrolled');
        scrollTopBtn.classList.remove('visible');
    }
    
    // Trigger scroll animations
    triggerScrollAnimations();
}

window.addEventListener('scroll', handleScroll);

// =============================================
// Smooth Scrolling for Navigation Links
// =============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
            
            // Smooth scroll to target
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// =============================================
// Scroll to Top Button
// =============================================

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// =============================================
// Typewriter Animation Function
// =============================================

function typeWriter(element, text, speed = 100, callback = null) {
    element.classList.add('typing');
    
    let i = 0;
    const textArray = text.split('');
    element.textContent = '';
    
    function type() {
        if (i < textArray.length) {
            element.textContent += textArray[i];
            i++;
            setTimeout(type, speed);
        } else {
            element.classList.remove('typing');
            element.classList.add('typing-complete');
            if (callback && typeof callback === 'function') {
                callback();
            }
        }
    }
    
    type();
}

// Typewriter for Hero Section
function initHeroTypewriter() {
    const titleText = translations[currentLang].storeName;
    const taglineText = translations[currentLang].tagline;
    
    // Clear any existing text
    heroTitle.textContent = '';
    heroTagline.textContent = '';
    
    // Type title first
    typeWriter(heroTitle, titleText, 100, () => {
        // After title is done, wait 500ms and type tagline
        setTimeout(() => {
            typeWriter(heroTagline, taglineText, 80);
        }, 500);
    });
}

// Typewriter for Operator Names
function typeOperatorNames() {
    operatorNames.forEach((operator, index) => {
        const text = operator.getAttribute('data-text');
        operator.textContent = '';
        
        // Delay each operator name typing
        setTimeout(() => {
            typeWriter(operator, text, 50);
        }, index * 1000); // 1 second delay between each name
    });
}

// =============================================
// Scroll Animations (Fade-in Effect)
// =============================================

function triggerScrollAnimations() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// =============================================
// Counter Animation (Since 2010)
// =============================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// =============================================
// Dark/Light Mode Toggle
// =============================================

function toggleTheme() {
    body.classList.toggle('dark-mode');
    
    // Update icon
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        currentTheme = 'dark';
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        currentTheme = 'light';
    }
    
    // Save preference to localStorage
    localStorage.setItem('theme', currentTheme);
}

themeToggle.addEventListener('click', toggleTheme);

// =============================================
// Language Switcher (English ↔ Urdu)
// =============================================

function switchLanguage() {
    currentLang = currentLang === 'en' ? 'ur' : 'en';
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    
    // Update form placeholders
    updateFormPlaceholders();
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
    
    // Update body direction for RTL
    if (currentLang === 'ur') {
        body.setAttribute('dir', 'rtl');
        body.classList.add('rtl');
    } else {
        body.setAttribute('dir', 'ltr');
        body.classList.remove('rtl');
    }
    
    // Update language button text
    const langEn = document.querySelector('.lang-en');
    const langUr = document.querySelector('.lang-ur');
    
    if (currentLang === 'ur') {
        langEn.style.display = 'none';
        langUr.style.display = 'inline';
    } else {
        langEn.style.display = 'inline';
        langUr.style.display = 'none';
    }
    
    // Save preference to localStorage
    localStorage.setItem('language', currentLang);
    
    // Re-run hero typewriter with new language
    initHeroTypewriter();
}

langSwitch.addEventListener('click', switchLanguage);

// Update form input placeholders based on language
function updateFormPlaceholders() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    if (currentLang === 'ur') {
        nameInput.placeholder = "آپ کا نام";
        phoneInput.placeholder = "03XX-XXXXXXX";
        emailInput.placeholder = "آپ کا ای میل";
        messageInput.placeholder = "آپ کا پیغام...";
    } else {
        nameInput.placeholder = "Your name";
        phoneInput.placeholder = "03XX-XXXXXXX";
        emailInput.placeholder = "your@email.com";
        messageInput.placeholder = "Your message...";
    }
}

// =============================================
// WhatsApp Form Integration (NO Backend)
// =============================================

function handleWhatsAppForm(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Basic validation
    if (!name || !phone || !message) {
        alert(currentLang === 'ur' ? 'براہ کرم ضروری فیلڈز پُر کریں' : 'Please fill in required fields');
        return;
    }
    
    // Format message for WhatsApp
    let whatsappMessage = '';
    
    if (currentLang === 'ur') {
        whatsappMessage = `*نیا رابطہ فارم جمع کرائیں*%0A%0A`;
        whatsappMessage += `*نام:* ${encodeURIComponent(name)}%0A`;
        whatsappMessage += `*فون:* ${encodeURIComponent(phone)}%0A`;
        
        if (email) {
            whatsappMessage += `*ای میل:* ${encodeURIComponent(email)}%0A`;
        }
        
        whatsappMessage += `%0A*پیغام:*%0A${encodeURIComponent(message)}`;
    } else {
        whatsappMessage = `*New Contact Form Submission*%0A%0A`;
        whatsappMessage += `*Name:* ${encodeURIComponent(name)}%0A`;
        whatsappMessage += `*Phone:* ${encodeURIComponent(phone)}%0A`;
        
        if (email) {
            whatsappMessage += `*Email:* ${encodeURIComponent(email)}%0A`;
        }
        
        whatsappMessage += `%0A*Message:*%0A${encodeURIComponent(message)}`;
    }
    
    // WhatsApp number (Muhammad Imran's primary number)
    const whatsappNumber = '923133801788';
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Show success message
    alert(
        currentLang === 'ur' 
        ? 'واٹس ایپ کھل رہا ہے... براہ کرم وہاں سے پیغام بھیجیں۔' 
        : 'Opening WhatsApp... Please send the message from there.'
    );
    
    // Reset form
    contactForm.reset();
}

contactForm.addEventListener('submit', handleWhatsAppForm);

// =============================================
// Observer for Operator Names Typewriter
// =============================================

const operatorObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            typeOperatorNames();
            operatorObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
});

// Observe services section for operator names
const servicesSection = document.querySelector('.services-section');
if (servicesSection) {
    operatorObserver.observe(servicesSection);
}

// =============================================
// Observer for Year Counter Animation
// =============================================

const yearObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && yearCounter) {
            animateCounter(yearCounter, 2010, 1500);
            yearObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

// Observe about section for year counter
const aboutSection = document.querySelector('.about-section');
if (aboutSection && yearCounter) {
    yearObserver.observe(aboutSection);
}

// =============================================
// Initialize Everything on Page Load
// =============================================

function initializeWebsite() {
    // Apply saved theme preference
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
    
    // Apply saved language preference
    if (currentLang === 'ur') {
        switchLanguage(); // This will apply Urdu translations
    } else {
        // Update language button to show English
        const langEn = document.querySelector('.lang-en');
        const langUr = document.querySelector('.lang-ur');
        langEn.style.display = 'inline';
        langUr.style.display = 'none';
    }
    
    // Initialize hero typewriter
    initHeroTypewriter();
    
    // Trigger initial scroll animations
    triggerScrollAnimations();
    
    // Add hover effects for product cards
    initHoverEffects();
    
    // Update form placeholders
    updateFormPlaceholders();
    
    // Initialize scroll position
    handleScroll();
}

// =============================================
// Hover Effects for Cards & Icons
// =============================================

function initHoverEffects() {
    // Add hover effects to product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.icon-circle');
            if (icon) {
                icon.style.transform = 'scale(1.15) rotate(15deg)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.icon-circle');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0)';
            }
        });
    });
    
    // Add click animation to all buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

// =============================================
// Performance Optimization
// =============================================

// Debounce scroll events for performance
let scrollTimer;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(handleScroll, 10);
});

// =============================================
// Initialize on DOM Content Loaded
// =============================================

document.addEventListener('DOMContentLoaded', initializeWebsite);

// =============================================
// Service Worker Registration (Optional - PWA)
// =============================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(
            registration => {
                console.log('ServiceWorker registration successful');
            },
            error => {
                console.log('ServiceWorker registration failed: ', error);
            }
        );
    });
}

// =============================================
// Keyboard Navigation Support
// =============================================

document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        toggleMobileMenu();
    }
    
    // Space/Enter key triggers button presses
    if (e.key === 'Enter' || e.key === ' ') {
        const activeElement = document.activeElement;
        if (activeElement.classList.contains('btn') || 
            activeElement.classList.contains('nav-link') ||
            activeElement.id === 'themeToggle' ||
            activeElement.id === 'langSwitch') {
            e.preventDefault();
            activeElement.click();
        }
    }
});

// =============================================
// Load Font Awesome Icons Dynamically (Fallback)
// =============================================

function checkFontAwesome() {
    const testIcon = document.createElement('i');
    testIcon.className = 'fa-solid fa-check';
    document.body.appendChild(testIcon);
    
    setTimeout(() => {
        const computedStyle = window.getComputedStyle(testIcon);
        const fontFamily = computedStyle.fontFamily;
        
        if (!fontFamily.includes('Font Awesome')) {
            console.warn('Font Awesome not loaded, loading fallback...');
            // You could load a local fallback here if needed
        }
        
        document.body.removeChild(testIcon);
    }, 100);
}

// Check after page loads
window.addEventListener('load', checkFontAwesome);

// =============================================
// Export Functions for Global Access (if needed)
// =============================================

window.CHAfzalStore = {
    toggleTheme,
    switchLanguage,
    typeWriter,
    animateCounter
};