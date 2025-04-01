<script setup>
import { RouterLink } from "vue-router";
import { onMounted, onBeforeUnmount, ref } from "vue";

const links = [
  { text: "Início", path: "/" },
  { text: "Sobre", path: "/sobre" },
  { text: "Batalhas", path: "/batalhas" },
  { text: "Ranking", path: "/ranking" },
];

const isMobile = ref(false);
const updateMedia = () => {
  isMobile.value = window.innerWidth <= 767;
};
onMounted(() => {
  updateMedia();
  window.addEventListener("resize", updateMedia);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateMedia);
});
</script>

<template>
  <header id="header-container">
    <figure v-if="!isMobile" class="header__logo">
      <img
        src="@/assets/images/BDC-logo.svg"
        alt="Logo"
        width="100"
      />
    </figure>
    <router-link v-for="link in links" :to="link.path" class="header__link">
      {{ link.text }}
    </router-link>
  </header>
</template>

<style lang="scss" scoped>
$primary-gradient: radial-gradient(circle, #fadea3, #fdcc04);
$header-footer-bg: #0012b0;
$text-light: #f1f1f1;

#header-container {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  background-color: $header-footer-bg;
  width: 100dvw;

  .header__logo {
    margin: 0;
  }

  .header__link {
    text-decoration: none;
    color: $text-light;
    font-size: 1.5rem;
    font-family: "Bebas Neue", sans-serif;
    transition: opacity 0.3s;

    :hover {
      cursor: pointer;
    }
  }
}

@media (max-width: 767px) {
  #header-container {
    height: 115px;
    padding: 0.5rem;
    gap: 1rem;

    .header__link {
      font-size: 1.3rem;
    }
  }
}
</style>
