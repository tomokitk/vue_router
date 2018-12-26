<template>
<div>
  <section>
    <b-message title="vueのプロジェクトを先ほどのディレクトリに作成" type="is-warning">
      <b>*homebrew使用の場合</b>
      <div class="terminal">
        $brew install node<br>
        $npm install vue<br>
      </div><br><br>

      <b>vue-cliインストール</b>
      <div class="terminal">
        $npm install --global vue-cli<br>
        vue init webpack <プロジェクトネーム><br><br>

        ? Project name <プロジェクトネーム><br>
        ? Project description <プロジェクトの概要（任意）><br>
        ? Author <自分の名前><br>
        ? Vue build standalone<br>
        ? Install vue-router? Yes<br>
        ? Use ESLint to lint your code? No<br>
        ? Set up unit tests No<br>
        ? Setup e2e tests with Nightwatch? No<br>
        ? Should we run `npm install` for you after the project has been created? (recommended) npm<br><br>
      </div><br><br>

      <div class="terminal">
        上記設定後、cd <プロジェクトネーム>で、vue init によって作成された下のディレクトリに移動し、<br>
        npm install<br>
        npm run dev<br>
      </div>
    </b-message>
  </section>
  <b-switch  id="checkbox" v-model="checked">
    {{resultResponce}}
  </b-switch>
  <div v-show="checked === true"><router-link to="/deploy">次へ</router-link></div>
</div>
</template>

<script>
export default {
  data: function() {
    return {
        checked: 'false',
        result: '未完了',
    }
  },
  computed: {  
    resultResponce: function(){
      if(this.checked === true){
          return this.result = "完了";
        }else{
          return this.result = "未完了";
        }
    }
  }
}
</script>
