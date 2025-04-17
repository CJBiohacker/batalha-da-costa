<script setup>
import { ref } from 'vue';
import { mockCarouselImages } from '../utils/consts';

const items = ref(mockCarouselImages);
</script>

<template>
    <section>
      <v-carousel hide-delimiters show-arrows="hover" cycle>
        <template v-slot:prev="{ props }">
          <v-btn variant="elevated" @click="props.onClick">
            <font-awesome-icon :icon="['fas', 'arrow-left']" color="dark" />
          </v-btn>
        </template>
        <template v-slot:next="{ props }">
          <v-btn variant="elevated" @click="props.onClick">
            <font-awesome-icon :icon="['fas', 'arrow-right']" color="dark"
          /></v-btn>
        </template>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          cover
        ></v-carousel-item>
      </v-carousel>
    </section>
</template>

<style lang="scss" scoped></style>
