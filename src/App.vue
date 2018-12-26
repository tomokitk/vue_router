<template>
<div id='home'>
   <nav>
    <div class="tabs is-right">
      <ul>
        <li class="is-active">
        <router-link to="/intro">
          スタート
        </router-link></li>

        <li><router-link to="/npm">
        npmインストール
        </router-link></li>

        <li><router-link to="/directly">
            ディレクトリ作成
            </router-link></li>
        <li><router-link to="/vuejs">
          Vue.jsインストール
            </router-link></li>
        <li><router-link to="/deploy"> 
            デプロイ
            </router-link></li>
      </ul>
    </div>
  </nav>

  <div style="margin:0% 30% 0% 30%">
   <router-view />  
  </div>
</div>
</template> 

<script>

import router from './router.js'


export default {
  name: 'App',
  router,
  render: h => h(App),
  data:function () {
    return {
     show: true,
    }
  },
  methods: {
    toggle() {
      this.show = false;
    }
  }
}
</script>

<style>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


 .terminal{
   background-color: #2c3e50;
   color: #ffffff;

 }
</style>
