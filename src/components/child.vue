<template>
 
  <div class="hello">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data:function() {
    return {
      currentPage: '',
      show: true,
      msg: "dd"
    }
  },
  methods: {
    transPage(page) {
      this.currentPage = page;
    },
    toggle() {
      this.show = false;
    }
  }
}
</script>


<style>
.red{
  background-color: red;
}


</style>