<template>
  <div id="app">
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>
<script>
  import AppHeader from './components/Header';
  import AppFooter from './components/Footer';
  export default {
    components:{
      AppFooter,
      AppHeader
    }
  }
</script>
<style>
</style>
