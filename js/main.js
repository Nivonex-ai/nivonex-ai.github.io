// Nivonex — i18n + Main Script

const i18n = {
    en: {
        nav_about: 'About',
        nav_strategies: 'Strategies',
        nav_research: 'Research',
        nav_contact: 'Contact',
        badge: 'Systematic Trading • AI-Driven',
        hero_title: 'Where <span class="gradient-text">Algorithms</span> Meet Intelligence',
        hero_sub: 'Institutional-grade algorithmic trading systems built with cutting-edge AI. We design, backtest, and deploy strategies that adapt to evolving markets.',
        hero_btn1: 'Explore Strategies',
        hero_btn2: 'Learn More',
        stat_strategies: 'Strategies',
        stat_markets: 'Markets',
        stat_automation: 'Automation',
        scroll: 'Scroll',
        section_about: 'About',
        about_title: 'Built for the <span class="gradient-text">Next Generation</span> of Trading',
        about_sub: 'Nivonex combines deep quantitative research with modern AI to create trading systems that operate across multiple asset classes and timeframes.',
        card1_title: 'Research-Driven',
        card1_text: 'Every strategy begins with rigorous statistical analysis and hypothesis testing before any capital is deployed.',
        card2_title: 'AI-Enhanced',
        card2_text: 'Machine learning models identify regime changes, optimize parameters, and validate edge preservation in real-time.',
        card3_title: 'Fully Automated',
        card3_text: 'From data ingestion to execution and risk management — our systems run 24/7 across global markets.',
        section_strategies: 'Strategies',
        strategies_title: 'Our <span class="gradient-text">Trading Systems</span>',
        strategies_sub: 'A diverse portfolio of strategies designed for different market conditions and risk profiles.',
        s1_type: 'Equities',
        s1_badge: 'Scalping',
        s1_title: 'VMO Momentum',
        s1_text: 'Volume-Momentum Oscillator strategy for intraday equity scalping with strict risk controls.',
        s1_metric1: 'Win Rate: 68%',
        s1_metric2: 'Sharpe: 2.1',
        s2_type: 'Crypto',
        s2_badge: 'Grid',
        s2_title: 'Reversal Grid',
        s2_text: 'Mean-reversion grid strategy for volatile crypto pairs with dynamic position sizing.',
        s2_metric1: 'Win Rate: 72%',
        s2_metric2: 'Sharpe: 1.8',
        s3_type: 'Multi-Asset',
        s3_badge: 'Arbitrage',
        s3_title: 'Spread Alpha',
        s3_text: 'Statistical arbitrage across correlated assets with real-time spread analysis.',
        s3_metric1: 'Win Rate: 65%',
        s3_metric2: 'Sharpe: 2.4',
        s4_type: 'Equities',
        s4_badge: 'Breakout',
        s4_title: 'Level-2 Momentum',
        s4_text: 'Order-book driven breakout strategy using Level-2 data for precision entries.',
        s4_metric1: 'Win Rate: 70%',
        s4_metric2: 'Sharpe: 2.0',
        section_research: 'Research',
        research_title: 'From <span class="gradient-text">Ideas</span> to Edge',
        research_sub: 'Our research process transforms market observations into quantifiable edges through systematic experimentation.',
        step1_title: 'Hypothesis',
        step1_text: 'Market pattern identification based on empirical observation and domain expertise.',
        step2_title: 'Backtest',
        step2_text: 'Historical validation across multiple market regimes with statistical rigor.',
        step3_title: 'Optimize',
        step3_text: 'Parameter space exploration with walk-forward analysis to prevent overfitting.',
        step4_title: 'Deploy',
        step4_text: 'Live execution with continuous monitoring and adaptive parameter tuning.',
        section_contact: 'Contact',
        contact_title: 'Get in <span class="gradient-text">Touch</span>',
        contact_sub: 'Interested in our research or looking for a custom trading solution? We\'d love to hear from you.',
        contact_email_label: 'Email',
        contact_email: 'hello@nivonex.ai',
        contact_location_label: 'Location',
        contact_location: 'Miami, FL',
        contact_markets_label: 'Markets',
        contact_markets: 'US Equities • Crypto • Forex',
        form_name: 'Name',
        form_email: 'Email',
        form_message: 'Message',
        form_send: 'Send Message',
        form_sent: 'Message Sent ✓',
        footer_tagline: 'Algorithmic trading, engineered.',
        footer_about: 'About',
        footer_strategies: 'Strategies',
        footer_research: 'Research',
        footer_contact: 'Contact',
        footer_copy: '© 2026 Nivonex. All rights reserved.',
    },
    ru: {
        nav_about: 'О нас',
        nav_strategies: 'Стратегии',
        nav_research: 'Исследования',
        nav_contact: 'Контакты',
        badge: 'Системный Трейдинг • ИИ',
        hero_title: 'Где <span class="gradient-text">Алгоритмы</span> Встречают Интеллект',
        hero_sub: 'Институциональные алгоритмические торговые системы на базе современного ИИ. Мы проектируем, тестируем и запускаем стратегии, адаптирующиеся к меняющимся рынкам.',
        hero_btn1: 'Изучить Стратегии',
        hero_btn2: 'Узнать Больше',
        stat_strategies: 'Стратегий',
        stat_markets: 'Рынков',
        stat_automation: 'Автоматизация',
        scroll: 'Вниз',
        section_about: 'О нас',
        about_title: 'Создано для <span class="gradient-text">Нового Поколения</span> Трейдинга',
        about_sub: 'Nivonex сочетает глубокие количественные исследования с современным ИИ для создания торговых систем, работающих на多个 классах активов и таймфреймах.',
        card1_title: 'Основано на Исследованиях',
        card1_text: 'Каждая стратегия начинается с тщательного статистического анализа и проверки гипотез перед запуском капитала.',
        card2_title: 'Усилено ИИ',
        card2_text: 'Модели машинного обучения определяют смену режимов рынка, оптимизируют параметры и сохраняют преимущество в реальном времени.',
        card3_title: 'Полная Автоматизация',
        card3_text: 'От сбора данных до исполнения и управления рисками — наши системы работают 24/7 на глобальных рынках.',
        section_strategies: 'Стратегии',
        strategies_title: 'Наши <span class="gradient-text">Торговые Системы</span>',
        strategies_sub: 'Диверсифицированный портфель стратегий для разных рыночных условий и профилей риска.',
        s1_type: 'Акции',
        s1_badge: 'Скальпинг',
        s1_title: 'VMO Momentum',
        s1_text: 'Стратегия внутридневного скальпинга на основе осциллятора объёма-момента с жестким контролем рисков.',
        s1_metric1: 'Винрейт: 68%',
        s1_metric2: 'Шарп: 2.1',
        s2_type: 'Крипто',
        s2_badge: 'Сетка',
        s2_title: 'Reversal Grid',
        s2_text: 'Сетевая стратегия на возврате к среднему для волатильных криптопар с динамическим размером позиции.',
        s2_metric1: 'Винрейт: 72%',
        s2_metric2: 'Шарп: 1.8',
        s3_type: 'Мульти-Актив',
        s3_badge: 'Арбитраж',
        s3_title: 'Spread Alpha',
        s3_text: 'Статистический арбитраж между коррелированными активами с анализом спредов в реальном времени.',
        s3_metric1: 'Винрейт: 65%',
        s3_metric2: 'Шарп: 2.4',
        s4_type: 'Акции',
        s4_badge: 'Пробой',
        s4_title: 'Level-2 Momentum',
        s4_text: 'Стратегия пробоев на основе книги ордеров с использованием Level-2 данных для точных входов.',
        s4_metric1: 'Винрейт: 70%',
        s4_metric2: 'Шарп: 2.0',
        section_research: 'Исследования',
        research_title: 'От <span class="gradient-text">Идей</span> к Преимуществу',
        research_sub: 'Наш исследовательский процесс превращает рыночные наблюдения в измеримые преимущества через систематические эксперименты.',
        step1_title: 'Гипотеза',
        step1_text: 'Выявление рыночных паттернов на основе эмпирических наблюдений и экспертного опыта.',
        step2_title: 'Тест',
        step2_text: 'Историческая валидация на различных рыночных режимах со статистической строгостью.',
        step3_title: 'Оптимизация',
        step3_text: 'Исследование пространства параметров с walk-forward анализом для предотвращения переобучения.',
        step4_title: 'Запуск',
        step4_text: 'Торговля в реальном времени с непрерывным мониторингом и адаптивной настройкой параметров.',
        section_contact: 'Контакты',
        contact_title: 'Свяжитесь <span class="gradient-text">с Нами</span>',
        contact_sub: 'Интересуют наши исследования или нужно кастомное торговое решение? Будем рады услышать вас.',
        contact_email_label: 'Email',
        contact_email: 'hello@nivonex.ai',
        contact_location_label: 'Локация',
        contact_location: 'Майами, Флорида',
        contact_markets_label: 'Рынки',
        contact_markets: 'Акции США • Крипто • Forex',
        form_name: 'Имя',
        form_email: 'Email',
        form_message: 'Сообщение',
        form_send: 'Отправить',
        form_sent: 'Отправлено ✓',
        footer_tagline: 'Алгоритмический трейдинг, спроектированный.',
        footer_about: 'О нас',
        footer_strategies: 'Стратегии',
        footer_research: 'Исследования',
        footer_contact: 'Контакты',
        footer_copy: '© 2026 Nivonex. Все права защищены.',
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // ---- Language Switcher ----
    const langToggle = document.querySelector('.lang-toggle');
    const html = document.documentElement;
    let currentLang = localStorage.getItem('nivonex-lang') || 'en';

    function applyLang(lang) {
        currentLang = lang;
        html.lang = lang;
        localStorage.setItem('nivonex-lang', lang);
        langToggle.textContent = lang === 'en' ? 'RU' : 'EN';
        langToggle.classList.toggle('active', lang !== 'en');

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[lang][key] !== undefined) {
                if (el.hasAttribute('data-i18n-html')) {
                    el.innerHTML = i18n[lang][key];
                } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = i18n[lang][key];
                } else {
                    el.textContent = i18n[lang][key];
                }
            }
        });
    }

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            applyLang(currentLang === 'en' ? 'ru' : 'en');
        });
    }

    applyLang(currentLang);

    // ---- Contact form handler ----
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('.btn');
            const sentKey = currentLang === 'en' ? 'form_sent' : 'form_sent';
            btn.textContent = i18n[currentLang].form_sent;
            btn.style.pointerEvents = 'none';
            setTimeout(() => {
                btn.textContent = i18n[currentLang].form_send;
                btn.style.pointerEvents = '';
                form.reset();
            }, 3000);
        });
    }

    // ---- Smooth scroll for nav links ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ---- Navbar background on scroll ----
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
            navbar.style.borderBottomColor = 'rgba(30, 30, 46, 0.8)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.85)';
            navbar.style.borderBottomColor = 'var(--border)';
        }
    });

    // ---- Intersection Observer for fade-in sections ----
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.about-card, .strategy-card, .pipeline-step').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});
