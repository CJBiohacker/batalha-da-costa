<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const contacts = [
  {
    link: "https://www.instagram.com/batalhadacosta_/",
    icon: ["fab", "instagram"],
  },
  {
    link: "https://www.instagram.com/batalhadacosta_/",
    icon: ["fab", "tiktok"],
  },
  {
    link: "https://www.instagram.com/batalhadacosta_/",
    icon: ["fab", "facebook"],
  },
];

const footerText = `© ${new Date().getFullYear()} - Desenvolvido por Carlos de Lima Junior. Todos os direitos reservados.`;

const iconSize = ref("xl");

const updateIconSize = () => {
  iconSize.value = window.innerWidth <= 767 ? "2xl" : "xl";
  console.log(iconSize.value);
};

onMounted(() => {
  updateIconSize();
  window.addEventListener("resize", updateIconSize);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateIconSize);
});
</script>

<template>
  <footer id="footer-container">
    <div class="footer__text">
      {{ footerText }}
    </div>
    <div class="footer__contact">
      <a v-for="contact in contacts" :href="contact.link" target="_blank">
        <font-awesome-icon
          :icon="contact.icon"
          color="white"
          :size="iconSize"
        />
      </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
$primary-gradient: radial-gradient(circle, #fadea3, #fdcc04);
$header-footer-bg: #0012b0;
$text-light: #f1f1f1;

#footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-size: 1rem;
  background-color: $header-footer-bg;
  color: $text-light;
  margin: 0 auto;
  width: 100%;

  .footer__text {
  }

  .footer__contact {
    display: flex;
    gap: 1.5rem;

    > a {
      color: black;
    }
  }
}

@media (max-width: 767px) {
  #footer-container {
    flex-direction: column-reverse;
    height: 115px;
    padding: 0.5rem;
    text-align: center;

    .footer__text {
      margin: 0.5rem 0;
    }

    .footer__contact {
      gap: 4rem;
    }
  }
}
</style>
