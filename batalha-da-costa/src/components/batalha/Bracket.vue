<script setup>
defineProps({
  bracketColor: {
    type: String,
    default: "white",
  },
  bracketHeight: {
    type: Number,
    default: 35,
  },
  bracketWidth: {
    type: Number,
    default: 100,
  },
  mc_name: {
    type: String,
    default: "MC DELTARUNE",
  },
  mc_points: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <v-sheet
    class="pa-1 d-flex align-center justify-space-evenly"
    :elevation="10"
    :height="bracketHeight"
    :width="bracketWidth"
    :color="bracketColor"
    rounded
  >
    <v-sheet
      :color="bracketColor === 'success' ? 'success' : 'white'"
      :class="bracketColor === 'success' ? 'text-white' : 'text-black'"
      class="font-weight-bold"
    >
      {{ mc_name }}
    </v-sheet>
    <v-sheet
      :color="bracketColor === 'success' ? 'success' : 'white'"
      :class="bracketColor === 'success' ? 'text-white' : 'text-black'"
      class="font-weight-bold"
    >
      {{ mc_points }}
    </v-sheet>
  </v-sheet>
</template>
