const translations = {
    en: {
        about_me_p1: "<strong>Agile software engineer</strong> <br />converting rapid learning into hands-on execution.",
        about_me_p2: "Orchestrating development across the <strong>full stack</strong> — from <br />intuitive UIs with <strong>React</strong>/<strong>TypeScript</strong> to robust backends using <strong>Python</strong>/<strong>Go</strong>, <br />and scalable verification environments via <strong>Container technology</strong>. <br />I bridge the gap between <strong>frontend</strong> and <strong>infrastructure</strong> <br />to optimize the entire system.",
        about_me_p3: "Prioritizing <strong>scalability</strong> and <strong>automation</strong> over just \"working code\".<br /> Armed with a deep curiosity for protocols and data structures,<br /> I dissect complex errors and navigate uncharted technical territories <br />to deliver <strong>logical</strong>, <strong>root-cause solutions</strong>.",

        // ... add other English keys here
    },
    jp: {
        about_me_p1: "変化の激しい開発環境において、迅速に技術をキャッチアップし、<br />実装へと落とし込む<strong>実走型エンジニア</strong>。",

        about_me_p2: "<strong>React</strong>/<strong>TypeScript</strong>によるUI構築から<strong>Python</strong>/<strong>Go</strong>を用いたバックエンド処理、<br /><strong>コンテナ技術</strong>を活用した検証環境の構築まで、領域を問わず開発をリード。<br /><strong>フロントエンド</strong>から<strong>インフラ</strong>までを横断し、システムの全体最適を追求する。",

        about_me_p3: "単に<strong>「動くコード」</strong>を書くだけでなく、運用を見据えた<strong>自動化</strong>や、<strong>スケーラビリティ</strong>を考慮した設計・実装に強いこだわりを持つ。表面的な実装にとどまらず、プロトコルやデータ構造の深層まで掘り下げる<strong>探究心</strong>を武器に、複雑なエラーや未知の技術領域に対しても論理的なアプローチで<strong>本質的な解決策</strong>を導き出す。",
    }
};

// 1. We create the logic ONCE here
function updateText() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key]; // Use innerHTML for tags
        }
    });

    const btn = document.getElementById('lang-toggle');
    if (btn) {
        btn.innerText = currentLang === 'en' ? 'JP' : 'EN';
    }
}

let currentLang = localStorage.getItem('preferredLang') || 'en';

function toggleLanguage() {
    // Switch the language variable
    currentLang = currentLang === 'en' ? 'jp' : 'en';

    // Update the text on the page
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });

    // Update the button text to show the OTHER language option
    const btn = document.getElementById('lang-toggle');
    btn.innerText = currentLang === 'en' ? 'JP' : 'EN';

    // Save preference
    localStorage.setItem('preferredLang', currentLang);
    updateText();
}

// Run on page load to set the initial state
window.onload = () => {
    updateText();
};