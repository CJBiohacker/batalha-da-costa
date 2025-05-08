<script setup>
import { computed } from "vue";
import { useResponsive } from "@/composables/useResponsive";

const { isMobile } = useResponsive();

const props = defineProps({
  participantes: {
    type: Array,
    required: true,
  },
});

const sortedParticipants = computed(() => {
  return [...props.participantes].sort(
    (a, b) => b.pontos - a.pontos || b.wins_2x0 - a.wins_2x0
  );
});

const getFormatedName = computed(() => {
  return (name) => name.replace(/ /g, "_");
});

const rankingLabels = {
  position: "Posicao",
  name: "Nome",
  points: "Pontos",
  wins: "2x0",
};
</script>

<template>
  <div class="ranking">
    <div v-if="!isMobile" class="ranking__table ranking__card-container">
      <div class="ranking__table-header">
        <p>Posicao</p>
        <p>Nome</p>
        <p>Pontos</p>
        <p>2x0</p>
      </div>
      <div class="ranking__table-body">
        <div v-for="(participante, index) in sortedParticipants" :key="index" class="ranking__row">
          <p class="ranking__position">{{ index + 1 }}</p>
          <p class="ranking__name">
            {{
              getFormatedName(participante.nome)
            }}
          </p>


          <p class="ranking__points">{{ participante.pontos }}</p>
          <p class="ranking__wins">{{ participante.vitoria_2x0 }}</p>
        </div>
      </div>
    </div>
    <div v-else class="ranking__cards">
      <div
        v-for="(participante, index) in sortedParticipants" :key="'mobile-' + index" class="ranking__card ranking__card-container"
      >
        <div class="ranking__card-header">
          <span class="ranking__card-position">{{ index + 1 }}</span>
          <h3 class="ranking__card-name">
            {{ getFormatedName(participante.nome) }}
          </h3>
        </div>

        <div class="ranking__card-stats">
          <div class="ranking__card-stat">
            <span>Pontos</span>
            <strong>{{ participante.pontos }}</strong>
          </div>
          <div class="ranking__card-stat">
            <span>Vitórias 2x0</span>
            <strong>{{ participante.vitoria_2x0 }}</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: "Scoreboard";
  src: url("../../assets/fonts/scoreboard-font/SCOREBOARD.ttf")
    format("truetype");
  font-weight: normal;
  font-style: normal;
}

.ranking {
  font-family: "Scoreboard", system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 2.5rem; /* Default font size for larger screens */
}

.ranking__card-container {
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;
}

.ranking__table {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 4fr;

  .ranking__table-header {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    grid-template-rows: 1fr;
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid #000;

    p {
      font-weight: bold;
      margin: 0 10px;
      justify-self: center;
    }
  }

  .ranking__table-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .ranking__row {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr 1fr;
      grid-template-rows: 1fr;
      width: 100%;
      padding: 10px 0;
      border-bottom: 1px solid #000;

      p {
        text-align: center;
      }
    }
  }
}

.ranking__cards {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  width: 75dvw;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.ranking__card-header {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 1.8rem;

  .ranking__card-position {
    background-color: #ddd;
    border-radius: 50%;
    padding: 8px 12px;
  }

  .ranking__card-name {
    font-weight: bold;
    margin: 0;
  }
}

.ranking__card-stats {
  display: flex;
  flex-direction: column;
  gap: 8px;

  .ranking__card-stat {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.7rem;

    span {
    }

    strong {
      font-weight: bold;
    }
  }
}

/* Mobile Specific Styles */
@media (max-width: 767px) {
  .ranking {
    font-size: 1.5rem; /* Adjust font size for mobile */
  }

  .ranking__table {
    display: none; /* Hide table on mobile */
  }
}

/* Desktop Specific Styles (can be adjusted) */
@media (min-width: 768px) {
  .ranking__cards {
    display: none; /* Hide cards on desktop */
  }
}
</style>
