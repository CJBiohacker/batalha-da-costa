<script setup>
import { computed } from "vue";
import Bracket from "@/components/batalha/Bracket.vue";

const props = defineProps({
  bracketData: {
    type: Object,
    required: true,
  },
  editions: {
    type: Array,
    default: () => [],
  },
});

const eliminatoriasMatches = computed(
  () => props.bracketData?.chaves_batalha?.eliminatorias || []
);
const quartasMatches = computed(
  () => props.bracketData?.chaves_batalha?.quartas_de_final || []
);
const semifinaisMatches = computed(
  () => props.bracketData?.chaves_batalha?.semifinais || []
);
const finalMatch = computed(
  () => props.bracketData?.chaves_batalha?.final || []
);

const visibleRounds = computed(() => {
  const numEliminatorias = eliminatoriasMatches.value.length;
  const rounds = [];

  rounds.push({
    key: "eliminatorias",
    label: "Eliminatórias",
    matches: numEliminatorias,
  });

  if (numEliminatorias === 8) {
    rounds.push({ key: "quartas_de_final", label: "Quartas", matches: 4 });
    rounds.push({ key: "semifinais", label: "Semifinais", matches: 2 });
    rounds.push({ key: "final", label: "Final", matches: 1 });
  } else if (numEliminatorias <= 4 && numEliminatorias > 0) {
    rounds.push({ key: "semifinais", label: "Semifinais", matches: 2 });
    rounds.push({ key: "final", label: "Final", matches: 1 });
  }

  return rounds;
});

const getRoundMatches = (key) => {
  switch (key) {
    case "eliminatorias":
      return eliminatoriasMatches.value;
    case "quartas_de_final":
      return quartasMatches.value;
    case "semifinais":
      return semifinaisMatches.value;
    case "final":
      return finalMatch.value;
    default:
      return [];
  }
};

const getRoundSpacingClass = (roundIndex) => {
  if (roundIndex === 0) return "ga-1 ma-4 ml-10";
  if (roundIndex === 1) return "ma-8 bracket-board__quarters-container";
  if (roundIndex === 2) return "ma-9 bracket-board__semifinals-container";
  if (roundIndex === 3) return "ma-10";
  return "ga-1 ma-4";
};

const getMatchSpacingClass = (roundIndex) => {
  if (roundIndex === 0) return "ga-1 ma-2";
  if (roundIndex === 1) return "ga-1 ma-4";
  if (roundIndex === 2) return "ga-1 my-8";
  if (roundIndex === 3) return "ga-1 my-12";
  return "ga-1 ma-2";
};

const getBracketHeight = (roundIndex) => (roundIndex === 3 ? 70 : 35);
const getBracketWidth = (roundIndex) => (roundIndex === 3 ? 250 : 200);
</script>

<template>
  <v-container fluid>
    <div class="d-flex overflow-x-auto bracket-board">
      <div
        v-for="(round, roundIndex) in visibleRounds"
        :key="roundIndex"
        :class="`d-flex flex-column justify-center ${getRoundSpacingClass(
          roundIndex
        )}`"
      >
        <div
          v-for="(match, matchIndex) in getRoundMatches(round.key)"
          :key="matchIndex"
          :class="`d-flex flex-column ${getMatchSpacingClass(roundIndex)}`"
        >
          <Bracket
            :mc_name="match.mc_A"
            :mc_points="match.vencedor === match.mc_A ? match.placar.split('-')[0] : match.placar.split('-')[1]"
            :bracketColor="match.vencedor === match.mc_A ? 'success' : ''"
            :bracketHeight="getBracketHeight(roundIndex)"
            :bracketWidth="getBracketWidth(roundIndex)"
          />
          <Bracket
            :mc_name="match.mc_B"
            :mc_points="match.vencedor === match.mc_B ? match.placar.split('-')[0] : match.placar.split('-')[1]"
            :bracketColor="match.vencedor === match.mc_B ? 'success' : ''"
            :bracketHeight="getBracketHeight(roundIndex)"
            :bracketWidth="getBracketWidth(roundIndex)"
          />
        </div>
      </div>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
.bracket-board {
  &__quarters-container {
    gap: 80px !important;
  }

  &__semifinals-container {
    gap: 220px !important;
  }
}
</style>
