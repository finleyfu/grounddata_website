const i18n = {
    en: {
        'hero.title': 'Stay Ahead with Global AI News',
        'hero.subtitle': 'Aggregating the latest AI news from around the world, updated daily.',
        'hero.getStarted': 'Get Started',
        'hero.learnMore': 'Learn More',
        'features.title': 'Key Features',
        'features.global.title': 'Global Coverage',
        'features.global.desc': 'News from sources worldwide, all in one place.',
        'features.timezone.title': 'Local Time Support',
        'features.timezone.desc': 'Automatic timezone detection for users worldwide.',
        'features.skill.title': 'Skill Integration',
        'features.skill.desc': 'Seamless integration with Claude Code as a skill.',
        'features.archive.title': 'Historical Archive',
        'features.archive.desc': 'Access past news by date for trend analysis.',
        'values.title': 'Core Value',
        'values.description': 'Help AI application developers, AI PMs, and independent developers grasp key AI changes relevant to them in less time, reduce noise and missed information, and make decisions faster.',
        'values.point1': 'No generic AI news coverage',
        'values.point2': 'Do not predict the future for users',
        'values.point3': 'Do not pursue "large and comprehensive" content',
        'values.point4': 'Only organize high-signal, low-noise AI changes relevant to builders',
        'architecture.title': 'System Architecture',
        'architecture.l3': 'Client Skill',
        'architecture.l2': 'API Service',
        'architecture.l1': 'Data Pipeline',
        'cta.title': 'Ready to Start?',
        'cta.subtitle': 'Get the AI Daily News skill and stay updated with the latest in AI.',
        'cta.cta': 'Get AI Daily News Skill'
    },
    zh: {
        'hero.title': '全球 AI 新闻，一手掌握',
        'hero.subtitle': '聚合来自世界各地的最新 AI 新闻，每日更新。',
        'hero.getStarted': '立即开始',
        'hero.learnMore': '了解更多',
        'features.title': '核心功能',
        'features.global.title': '全球覆盖',
        'features.global.desc': '来自全球各地的新闻源，尽在一处。',
        'features.timezone.title': '本地时间支持',
        'features.timezone.desc': '自动时区检测，服务全球用户。',
        'features.skill.title': 'Skill 集成',
        'features.skill.desc': '作为 Skill 与 Claude Code 无缝集成。',
        'features.archive.title': '历史存档',
        'features.archive.desc': '按日期访问历史新闻，分析趋势。',
        'values.title': '核心价值',
        'values.description': '帮助 AI 应用开发者、AI PM、独立开发者，用更少时间掌握与自己相关的 AI 关键变化，减少噪音和漏看，更快形成下一步判断。',
        'values.point1': '不做泛 AI 资讯覆盖',
        'values.point2': '不替用户判断未来',
        'values.point3': '不追求“大而全”',
        'values.point4': '只做高信号、低噪音、与 builder 相关的 AI 变化组织',
        'architecture.title': '系统架构',
        'architecture.l3': '客户端 Skill',
        'architecture.l2': 'API 服务',
        'architecture.l1': '数据管道',
        'cta.title': '准备开始了吗？',
        'cta.subtitle': '获取 AI Daily News Skill，随时了解 AI 最新动态。',
        'cta.cta': '获取 AI Daily News Skill'
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang] && i18n[lang][key]) {
            el.textContent = i18n[lang][key];
        }
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('zh')) {
        setLanguage('zh');
    }

    // 滚动显示动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .arch-box, .value-card, .values-desc').forEach(el => {
        observer.observe(el);
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});