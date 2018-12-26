<template>
<div>
   <h1><b>fireBaseでvueのプロジェクトをデプロイする！</b></h1>
      <section>
          <button class="button block" @click="isActive = !isActive">始める</button>
          <b-message title="大まかな手順" :active.sync="isActive">
           <router-link to="/npm">
            ①npmをインストール<br>
          </router-link>
          <router-link to="/directly">
            ②今回のスライド作成用のディレクトリを作成する（mkdir ディレクトリ名)<br>
          </router-link>
          <router-link to="/vuejs">
            ③②で作成したディレクトリにvue.jsにVue.jsをインストールする<br>
          </router-link>
          <router-link to="/deploy"> 
            ④firebaseでデプロイする<br>
          </router-link>
          </b-message>
      </section>
</div>
</template>


<script>
    export default {
      data() {
          return {
              isActive: false
          }
      }
    }
</script>