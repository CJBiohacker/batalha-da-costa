<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import BracketBoard from "@/components/batalha/BracketBoard.vue";

const props = defineProps({
  tournamentData: {
    type: Object,
    required: true,
  },
});

const mockTournamentData = {
  chaves_batalha: {
    eliminatorias: [
      { mc_A: "MC AZAM", mc_B: "MC LAVOR", placar: "2-1", vencedor: "MC AZAM" },
      { mc_A: "MC KANYA", mc_B: "MC IVAN", placar: "3-0", vencedor: "MC IVAN" },
      { mc_A: "MC REVENANT", mc_B: "MC OKÁ", placar: "1-2", vencedor: "MC REVENANT" },
      { mc_A: "MC LEWANDUS", mc_B: "MC NACI", placar: "0-3", vencedor: "MC LEWANDUS" },
      { mc_A: "MC VENERADO", mc_B: "MC GIGANTE", placar: "2-1", vencedor: "MC VENERADO" },
      { mc_A: "MC ULAK", mc_B: "MC MAKAL", placar: "3-0", vencedor: "MC MAKAL" },
      { mc_A: "MC DEFENSOR", mc_B: "MC JUSTICEIRO", placar: "1-2", vencedor: "MC JUSTICEIRO" },
      { mc_A: "MC PARRADO", mc_B: "MC VINHETA", placar: "0-3", vencedor: "MC PARRADO" },
    ],
    quartas_de_final: [
      { mc_A: "MC AZAM", mc_B: "MC IVAN", placar: "2-1", vencedor: "MC AZAM" },
      { mc_A: "MC REVENANT", mc_B: "MC LEWANDUS", placar: "3-0", vencedor: "MC LEWANDUS" },
      { mc_A: "MC VENERADO", mc_B: "MC MAKAL", placar: "1-2", vencedor: "MC MAKAL" },
      { mc_A: "MC PARRADO", mc_B: "MC JUSTICEIRO", placar: "0-3", vencedor: "MC JUSTICEIRO" },
    ],
    semifinais: [
      { mc_A: "MC AZAM", mc_B: "MC LEWANDUS", placar: "2-1", vencedor: "MC AZAM" },
      { mc_A: "MC MAKAL", mc_B: "MC JUSTICEIRO", placar: "3-0", vencedor: "MC JUSTICEIRO" },
    ],
    final: [{ mc_A: "MC AZAM", mc_B: "MC JUSTICEIRO", placar: "2-1", vencedor: "MC AZAM" }],
  },
  data_edicao: "2023-10-02",
  num_edicao: "55",
};

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

<style scoped lang="scss"></style>
