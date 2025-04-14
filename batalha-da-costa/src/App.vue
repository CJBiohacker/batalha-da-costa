<script setup>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
</script>

<template>
  <Header />

  <main>
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in" appear>
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </main>

  <Footer />
</template>

<style lang="scss">
$primary-gradient: radial-gradient(circle, #fadea3, #fdcc04);
$header-footer-bg: #0012b0;
$text-light: #f1f1f1;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  font-family: "Montserrat", sans-serif;
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
  width: 100dvw;
  max-width: 1400px;
  margin: 0 auto;
  align-self: center;
}

@media (max-width: 767px) {
  main {
    padding: 1rem 0.5rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease; /* Adjust duration as needed */
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

/* Style for initial load fade-in */
.fade-appear-from {
  opacity: 0;
}

.fade-appear-to {
  opacity: 1;
}

.fade-appear-active {
  transition: opacity 0.5s ease; /* Adjust initial fade-in duration */
}
</style>
