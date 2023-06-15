// 厳格モードを有効にすることで、コードの品質や安全性を向上させます
'use strict'

// お役立ち情報
// DOMの読み込みが完了したとき
document.addEventListener('DOMContentLoaded', function() {
    // カルーセルのUL要素、スライド、現在のインデックス、ドットを定義します
    const ul = document.querySelector('.information-carousel ul');
    const slides = ul.children;
    let currentIndex = 0;
    const dots = [];

    // スライドの移動処理
    function moveSlides() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
    }

    // ドットの設定
    function setupDots() {
        // 各スライドに対応するドットを作成
        for (let i = 0; i < (slides.length - 4); i++) {
            const button = document.createElement('button');
            // ドットがクリックされたときのイベント
            button.addEventListener('click', () => {
                currentIndex = i;
                // すべてのドットからcurrentクラスを削除
                dots.forEach(dot => {
                    dot.classList.remove('current');
                });
                // クリックされたドットにcurrentクラスを追加
                dots[currentIndex].classList.add('current');
                // スライドを移動
                moveSlides();
            });
            // ドットを配列に追加
            dots.push(button);
            // ドットをナビゲーションエリアに追加
            document.getElementById("information-nav").appendChild(button);
        }
        dots[0].classList.add('current');
    }
    
    // ドットの設定を実行
    setupDots();
})
