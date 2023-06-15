// 厳格モードを有効にすることで、コードの品質や安全性を向上させます
'use strict';

// ポップに表示する画像
let imgs = [
  "drawable/android.png",
  "drawable/aws.png",
  "drawable/css3.png",
  "drawable/html5.png",
  "drawable/ios.png",
  "drawable/javascript.png",
  "drawable/android.png",
  "drawable/aws.png"
]
// ポップのタイトル
let titles = [
  "ぽちゃもぐ",
  "Dofus",
  "Celulo",
  "Gundam Cross War",
  "Tiki Takoo",
  "Striker Arena",
  "Mage",
  "Axe Grinder"
]
// ポップの本文
let messages = [
  "サンリオキャラの新感覚かんたんパズルゲーム誕生！\n  ハローキティ、マイメロディ、けろけろけろっぴなど大人気の\nサンリオキャラクターが、かわいいぽちゃキャラになって登場するよ。\n遊び方はとってもかんたん、落ちてくるマカロンを3つ揃えるだけ♪\n  食いしん坊なぽちゃキャラたちに\n美味しいマカロンを食べさせてあげよう！",
  "欧州最大級MMORPG「DOFUS（ドフス）」の広大な世界と豊富なコンテンツがこの度タブレット版になって登場！\nユーモアとマンガをミックスした12の独特なファンタジー世界で、\n凄腕の戦士から最強の魔法使いまで15のクラスからキャラクターを選ぶことができ、\n数千ものアイテムと200段階のキャラクターレベルがあなた独自の体験に導きます。",
  "Celuloは難解でありながらもプレイヤーを夢中にするパズルゲームです。ゲームの名前にもなっているCeluloをひとつひとつつなぎあわせて、最終的に画面の端からもう一方の端をつなげた時にどれだけ長く複雑な回路を組むことをできるかがポイントまたはボーナス獲得のカギになります。",
  "ガンダム史上最高のカードゲームがここに！！\nルールはリアルもデジタルも同じ内容になっているので\nリアル対戦でもデジタル対戦でも白熱したバトルが展開される。\n君はガンダムの世界で最高のモビルスーツ部隊を指揮する艦長を目指せ！",
  "Tiki Takooはシンプルで癖になるパズルゲームです。画面上部に表示されるTikiと同じ組み合わせのTikiを画面の中から探し出し、順番通りにタッチして消していきます。ゲームが進むごとに、探しだすTikiの数は多くなり難易度が上がっていきます。コンボやパワーアップまたはフィーバーモードを発動させることによりボーナス得点を獲得することができます。",
  "UnityとWizcorpのMAGEエンジンを備えた完全3Dゲームは残忍なインドアフットボールバトルです。初回版はバイキングとグラディエーターを主題としておりますが、引き続き様々な部族が追加される予定です。",
  "MAGEを採用することにより、デベロッパーたちはこれまでの煩わしい作業から解放され、純粋なゲーム開発のみに注力することができます。\nMAGEにはソーシャルゲーム開発及びデプロイプロセスを容易にするために必須な要素が全て備わっています。",
  "あなたは過去何回かバイキングのように斧を投げつけたくなったことがありますね？　はい。このアプリを使えば実際に斧を投げる爽快感を味わえます。　日頃のイライラ、ムシャクシャ溜まった鬱憤を斧に込めて、木製の車輪に縛り付けられたグラディエーターめがけて投げつけて破壊してやりましょう！　コンボを発生させて高得点をたたき出したら、あなたが世界ランカーになれるかもしれませんよ？？"
]

// ページが完全に読み込まれた後に関数内のコードが実行されるようにします
window.onload = function () {
  // すべてのポートフォリオを取得し、modalBtnsに格納します
  const portfolios = document.querySelectorAll(".modal-toggle")
  // ポートフォリオ配列の各ポートフォリオに対して、関数を実行します
  portfolios.forEach((item, index) => {
    // 各ポートフォリオがクリックされたときに関数内のコードが実行されるようにします
    item.onclick = function () {
      // ポップアップへの文字や画像を動的にセット
      document.getElementById('modal-title').textContent = titles[index]
      document.getElementById('modal-img').src = imgs[index]
      document.getElementById('modal-message').textContent = messages[index]
      // IDの値をmodalとする要素（ポップアップウィンドウ）のdisplayスタイルをblockに設定し、表示させます
      document.getElementById('modal').style.display = "block"
    }
  })

  // modal-close Idを持つ要素を取得し、closeBtnに格納します
  const closeBtn = document.getElementById("modal-close")
  // closeBtnの要素（閉じるボタン）に対して、クリックイベントを実行します
  closeBtn.onclick = function () {
    // 閉じるボタンのmodal idを持つ要素（ポップアップウィンドウ）を取得し、modalに格納します
    var modal = document.getElementById('modal')
    // 閉じるボタンがクリックされたときに、ポップアップウィンドウのdisplayスタイルをnoneに設定し、非表示にします
    modal.style.display = "none"
  }

  // 画面をタップしたらポップアップを閉じる
  window.onclick = function (event) {
    if (event.target.id === "modal") {
      event.target.style.display = "none"
    }
  }
};
