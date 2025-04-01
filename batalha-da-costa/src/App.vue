<script setup>
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

</script>

<template>
  <Header />

  <main>
    <router-view>
    </router-view>
  </main>

  <Footer />
</template>

<style lang="scss">
$primary-gradient: radial-gradient(circle, #fadea3, #FDCC04);
$header-footer-bg: #0012B0;
$text-light: #f1f1f1;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  font-family: 'Montserrat', sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  background: $primary-gradient;
}

main {
  padding: 2rem 1rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

@media (max-width: 767px) {
  main {
    padding: 1rem 0.5rem;
  }
}
</style>