<template>
 <div>
  <section>
      <b-message title="npmを入れましょう。すでに入っていれば無視"   type="is-info">
        <div class="terminal">npm -v</div><br>
        で、npm not found　が出る場合はnpmをインストールしましょう<br>
        <a href="https://qiita.com/Alex_mht_code/items/422f5ce10d9c9d5729b7">homebrewがあれば、この記事参照に</a><br>
      </b-message>
  </section>



    <b-switch  id="checkbox" v-model="checked">
    {{resultResponce}}
    </b-switch>


    <div v-show="checked === true"><router-link to="/directly">次へ</router-link></div>
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

