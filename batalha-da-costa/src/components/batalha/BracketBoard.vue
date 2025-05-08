<script setup>
import { computed } from "vue";
import Bracket from "@/components/batalha/Bracket.vue";

const roundsConfig = {
  eliminatorias: {
    label: "Eliminatórias",
    matches: (matches) => matches.length,
    spacingClass: "ga-1 ma-4 ml-10",
    matchSpacingClass: "ga-1 ma-2",
    bracketHeight: 35,
    bracketWidth: 200,
  },
  quartas_de_final: {
    label: "Quartas",
    matches: 4,
    spacingClass: "ma-8 bracket-board__quarters-container",
    matchSpacingClass: "ga-1 ma-4",
    bracketHeight: 35,
    bracketWidth: 200,
  },
  semifinais: {
    label: "Semifinais",
    matches: 2,
    spacingClass: "ma-9 bracket-board__semifinals-container",
    matchSpacingClass: "ga-1 my-8",
    bracketHeight: 35,
    bracketWidth: 200,
  },
  final: {
    label: "Final",
    matches: 1,
    spacingClass: "ma-10",
    matchSpacingClass: "ga-1 my-12",
    bracketHeight: 70,
    bracketWidth: 250,
  },
};

const roundMatches = {
  eliminatorias: (props) => props.chaves_batalha?.eliminatorias || [],
  quartas_de_final: (props) => props.chaves_batalha?.quartas_de_final || [],
  semifinais: (props) => props.chaves_batalha?.semifinais || [],
  final: (props) => props.chaves_batalha?.final || [],
};

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

const bracketDataComputed = computed(() => props.bracketData?.chaves_batalha || {});

const visibleRounds = computed(() => {
  const numEliminatorias = bracketDataComputed.value?.eliminatorias?.length || 0;

  const availableRounds = Object.keys(roundsConfig).filter((key) => {
    if (key === "eliminatorias") return numEliminatorias > 0;
    if (key === "quartas_de_final") return numEliminatorias === 8;
    if (key === "semifinais") return numEliminatorias > 0;
    if (key === "final") return numEliminatorias > 0;
    return false;
  });

  return availableRounds.map((key) => ({
    key,
    label: roundsConfig[key].label,
    matches:
      typeof roundsConfig[key].matches === "function"
        ? roundsConfig[key].matches(bracketDataComputed.value)
        : roundsConfig[key].matches,
  }));
});

const getMcPoints = (match, mc) => {
  const [pointsA, pointsB] = match.placar.split("-");
  return match.vencedor === mc ? pointsA : pointsB;
};

const getRoundMatches = (key) => {
  return roundMatches[key]?.(bracketDataComputed.value) || [];
};

const getRoundSpacingClass = (roundKey) => {
  return roundsConfig[roundKey]?.spacingClass || "ga-1 ma-4";
};

const getMatchSpacingClass = (roundKey) => roundsConfig[roundKey]?.matchSpacingClass || "ga-1 ma-2";
const getBracketHeight = (roundKey) => roundsConfig[roundKey]?.bracketHeight || 35;
const getBracketWidth = (roundKey) => roundsConfig[roundKey]?.bracketWidth || 200;
</script>

<template>
  <v-container fluid>
    <div class="d-flex overflow-x-auto bracket-board">
      <div
        v-for="(round, roundIndex) in visibleRounds"
        :key="round.key"
        :class="`d-flex flex-column justify-center ${getRoundSpacingClass(round.key)}`"
      >
        <div
          v-for="(match, matchIndex) in getRoundMatches(round.key)"
          :key="matchIndex"
          :class="`d-flex flex-column ${getMatchSpacingClass(round.key)}`"
        >
            <Bracket v-for="mc in ['mc_A', 'mc_B']"
              :key="mc"
              :mc_name="match[mc]"
              :mc_points="getMcPoints(match, match[mc])"
              :bracketColor="match.vencedor === match[mc] ? 'success' : ''"
              :bracketHeight="getBracketHeight(round.key)"
              :bracketWidth="getBracketWidth(round.key)"
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
