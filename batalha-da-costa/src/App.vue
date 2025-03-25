<script setup>
</script>

<template>
  <header>
    <router-link v-for="link in links" :to="link.to">
      {{ link.text }}
    "></router-link>
  </header>

  <router-view>
    
  </router-view>

  <footer>
  </footer>
</template>

<style scoped>

</style>
