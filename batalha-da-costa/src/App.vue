<script setup>
import Header from '@/components/general/Header.vue';
import Footer from '@/components/general/Footer.vue';

</script>

<template>
  <Header />

  <main>
    <router-view>
    </router-view>
  </main>

  <Footer />
</template>