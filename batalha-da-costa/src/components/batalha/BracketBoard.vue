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
const semifinaisMatches = computed(() => props.bracketData?.chaves_batalha?.semifinais || []);
const finalMatch = computed(() => props.bracketData?.chaves_batalha?.final || []);

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
  if (roundIndex === 0) return "ga-1 ma-4";
  if (roundIndex === 1) return "ga-1 ma-8 align-self-center";
  if (roundIndex === 2) return "ga-1 ma-12 align-self-center";
  if (roundIndex === 3) return "ga-1 ma-16 align-self-center";
  return "ga-1 ma-4";
};

const getMatchSpacingClass = (roundIndex) => {
  if (roundIndex === 0) return "ga-1 ma-2";
  if (roundIndex === 1) return "ga-1 ma-4 align-items-center";
  if (roundIndex === 2) return "ga-1 ma-8 align-items-center";
  if (roundIndex === 3) return "ga-1 ma-12 align-items-center";
  return "ga-1 ma-2 align-items-center";
};

const getBracketColor = (roundIndex) => {
  if (roundIndex === 0) return "#e91e63";
  if (roundIndex === 1) return "#3f51b5";
  if (roundIndex === 2) return "#00897b";
  if (roundIndex === 3) return "#ffc107";
  return "primary";
};

const getBracketHeight = (roundIndex) => (roundIndex === 3 ? 70 : 35);
const getBracketWidth = (roundIndex) => (roundIndex === 3 ? 250 : 200);
</script>

<template>
  <v-container id="bracket-board" fluid>
    <div class="d-flex overflow-x-auto">
      <div
        v-for="(round, roundIndex) in visibleRounds"
        :key="roundIndex"
        :class="`d-flex flex-column ${getRoundSpacingClass(roundIndex)}`"
      >
        <h3>{{ round.label }}</h3>
        <div
          v-for="(match, matchIndex) in getRoundMatches(round.key)"
          :key="matchIndex"
          :class="`d-flex flex-column ${getMatchSpacingClass(roundIndex)}`"
        >
          <Bracket
            :mc_name="match.mc_A"
            :mc_points="match.placar ? match.placar.split('-')[0] : ''"
            :bracketColor="match.vencedor === match.mc_A ? 'success' : ''"
            :bracketHeight="getBracketHeight(roundIndex)"
            :bracketWidth="getBracketWidth(roundIndex)"
          />
          <Bracket
            :mc_name="match.mc_B"
            :mc_points="match.placar ? match.placar.split('-')[1] : ''"
            :bracketColor="match.vencedor === match.mc_B ? 'success' : ''"
            :bracketHeight="getBracketHeight(roundIndex)"
            :bracketWidth="getBracketWidth(roundIndex)"
          />
        </div>
      </div>
    </div>
  </v-container>
</template>