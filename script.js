document.addEventListener('DOMContentLoaded', function() {
    // 現在の年を自動的に更新
    const yearElement = document.querySelector('footer p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = yearElement.textContent.replace('2025', currentYear);
    }

    // リンクボタンにホバーエフェクトを追加
    const linkButtons = document.querySelectorAll('.link-button');
    
    linkButtons.forEach(button => {
        // ホバー時の処理
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
        
        // クリック時のフィードバック
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-5px)';
        });
    });

    // タッチデバイス用のホバー対策
    function handleTouchStart(e) {
        const link = e.target.closest('.link-button');
        if (link) {
            link.classList.add('touch-hover');
        }
    }

    function handleTouchEnd(e) {
        const link = e.target.closest('.link-button');
        if (link) {
            link.classList.remove('touch-hover');
        }
    }

    // タッチイベントのリッスン
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    document.addEventListener('touchcancel', handleTouchEnd, { passive: true });

    // プリロード用のフォント読み込み
    if ('fonts' in document) {
        document.fonts.ready.then(() => {
            document.documentElement.classList.add('fonts-loaded');
        });
    }
});

// スムーズスクロール
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // ページ内リンクの場合のみ処理
        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        }
    });
});
