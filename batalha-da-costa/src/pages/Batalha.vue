<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { mockTournamentData } from "../utils/consts";
import BracketBoard from "@/components/batalha/BracketBoard.vue";

const props = defineProps({
  tournamentData: {
    type: Object,
    required: true,
  },
});

const bracketData = computed(() => {
  const data = props?.tournamentData;
  if (!data) {
    return mockTournamentData;
  }
  return data;
});

const isMobile = ref(window.innerWidth < 768);

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const handleResize = () => {
  isMobile.value = window.innerWidth < 768;
};
</script>

<template>
  <section id="battle-board">
    <BracketBoard :bracketData="bracketData" />
  </section>
</template>
