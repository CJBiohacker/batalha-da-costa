<script setup>
import { ref } from "vue";
import { getUpdatedRankingData } from "../services/databaseService";
import { formatDateToDDMMYYYY } from "../utils/helpers";
import RankingBoard from "@/components/ranking/RankingBoard.vue";

const rankingData = ref("");
const lastUpdate = ref("");
const year = ref(null);
const season = ref(null);

const getRankingData = async () => {
  try {
    const data = await getUpdatedRankingData();

    rankingData.value = data;
    lastUpdate.value = formatDateToDDMMYYYY(data?.data_ranking);
    season.value = data.temporada?.periodo;
    year.value = data.temporada?.ano;
  } catch (error) {
    console.error("Error fetching ranking data:", error);
  }
};

getRankingData();
</script>

<template>
  <section id="ranking-container">
    <div class="ranking__title">
      <h1>Ranking</h1>
      <hr />
      <p>{{ `${season}ª Temporada de ${year}` }}</p>
    </div>

    <RankingBoard :participantes="rankingData.participantes" />

    <div class="ranking__update-msg">
      <p>Última atualização : {{ lastUpdate }} CI/CD</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#ranking-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;

  .ranking__title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 3.5rem;
      margin-bottom: 0;
    }

    hr {
      width: 100%;
    }

    p {
      font-size: 1.6rem;
      margin-top: 0;
    }
  }
}
</style>
