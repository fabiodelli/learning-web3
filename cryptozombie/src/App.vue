<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <div class="wrapper">
    <Header></Header>
    <main class="container_main">
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
@use './style/general.scss';
</style>
