<script>
</script>

<template>
  <div class="header_" >
    
    <router-link class="nav-link" :to="{ 'name': 'home' }" aria-current="page"><h1 class="ps-2">Cryptozombie</h1></router-link>
    <div>    
      <router-link class="nav-link active text-white" :to="{ 'name': 'army' }" aria-current="page">Army</router-link>
    </div>
  </div>
</template>

<style lang="scss">
@use '../style/general.scss';
</style>
