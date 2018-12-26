<template>
 <div>

 <section>
        <b-message title="デプロイするVueのプロジェクト専用ディレクトリを作成する"  type="is-danger">
             <div class="terminal">mkdir  (ディレクトリネーム)</div>
        </b-message>
  </section>


<b-switch  id="checkbox" v-model="checked">
{{resultResponce}}
</b-switch>

<div v-show="checked === true"><router-link to="/vuejs">次へ</router-link></div>
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