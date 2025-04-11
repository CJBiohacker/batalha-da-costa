<script setup>
const items = [
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
  },
];
</script>

<template>
    <section>
      <v-carousel hide-delimiters show-arrows="hover" omte cycle>
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
