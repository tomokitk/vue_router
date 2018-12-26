<template>
 <div>
  <b-message title="fireBaseでデプロイする"  type="is-success">
    <img src="http://blue-bear.jp/kb/wp-content/uploads/2016/09/firebase-login.png" alt="サンプル" width="300" height="200">


  <div class="content">
  vue_CLIをインストールしたディレクトリで<br>
  firebaseを操作するためのコマンドを使えるようにします
  <p class=terminal>npm install -g firebase-tools</p>
  </div>


  <div class="content">
  firebaseにログインします。*googleアカウントが必要です
  <p class=terminal>firebase login</p>
  </div>


  <div class="content">
  現在のディレクトリとfirebaseを連携させます。
  <p class="terminal">firebase init</p>
  </div>

  <div class="content">
  -以下の選択肢から、Hostingをチョイスする

  <img scr="https://friends-hirata-soft.com/wp-content/uploads/2018/07/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88-2018-07-27-20.49.59-1.png" alt="sample" width="300" height="200">

  </div>
  <p>
  ＊選択するときに、半角スペースを押して、選択した項目を緑に発火させてから、エンターを押してください<br><br>

  -このディレクトリをfisebase内でのプロジェクトとして登録します。<br>
  今回は、create a new projectを選択<br>

  <div class="content">
  <div class="terminal">What do you want to use as your public directory?</div>
  </div>
  と聞かれるので、 <b>dist</b>を入力。<br>
  <b>(npm run buildでビルドされたファイルは、dist配下に保存されるためです。)<br>
  ＊そのままエンター押すとpublicになってしまい、ビルドしても何も画面に映りません<br>(あとで変更できますが、、)</b>
  </p>


  <div class="content">
    <div class="terminal">Configure as a single-page app (rewrite all urls to /index.html)?</div>
  </div>
    と聞かれるので、<b>yes</b>を選択します。<br>
  

  <div class="content">
  <h2>ついにデプロイ</h2>
  
  新規プロジェクトを作成<br>

  <a href="https://console.firebase.google.com/u/2/?hl=ja">この画面</a>に行くように言われるので、そのままプロジェクトを追加。<br>
  （素直に入力していけば大丈夫です。<br>
  </div>

  <b>作成したらターミナルに戻る</b><br>
  <p class=terminal>firebase use --add</p>
  を入力し、先ほど作成したプロジェクトを選択する。<br><br>

  <b>vue.jsをビルドする</b>
  <p class=terminal>npm run build</p>
  <p>*このとき、npm run dev　にするとローカルサーバーが立ちがって、ローカル環境で動作確認ができます。</p><br>

  <b>デプロイする</b>
  <p class=terminal>firebase deploy</p><br>
  
  -生成されたURLを開く
  vue.jsのプロジェクトのデフォルト画面が映るはずです！
  <img src="https://cdn-ak.f.st-hatena.com/images/fotolife/b/bp-core/20180410/20180410145801.png" width="100%" height="200"><br>

</b-message>
</div>
</div>




</template>

<style>
.content{
  margin-top: 5%;
}
</style>
