<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import BracketBoard from "@/components/batalha/BracketBoard.vue";
import {
  getSelectedBattleData,
  getBattleEditions,
} from "../services/databaseService";

const selectedEdition = ref("Escolha uma edição");
const selectableEditions = ref([]);
const bracketData = ref({});

const loadBracketBoard = async () => {
  try {
    bracketData.value = [];
    if (selectedEdition.value === "Escolha uma edição") {
      return;
    }
    const data = await getSelectedBattleData(selectedEdition.value);
    bracketData.value = data;
  } catch (error) {
    console.log(error);
  }
};

const defineBattleEditions = async () => {
  selectableEditions.value = [];

  const editions = await getBattleEditions();

  selectableEditions.value = editions.map((e) => {
    return `Edição ${e.num_edicao} - ${e.data_edicao}`;
  });
};

const isMobile = ref(window.innerWidth < 768);

onMounted(() => {
  window.addEventListener("resize", handleResize);
  defineBattleEditions();
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const handleResize = () => {
  isMobile.value = window.innerWidth < 768;
};
</script>

<template>
  <section class="battle-board">
    <v-container
      class="d-flex flex-sm-row flex-column justify-center align-center ga-4 battle-board__container"
      fluid
    >
      <v-select
        class="battle-board__edition-select"
        v-model="selectedEdition"
        :items="selectableEditions"
        bg-color="white"
        max-width="500"
        clearable
      ></v-select>
      <v-btn
        v-show="selectedEdition !== 'Escolha uma edição'"
        color="primary"
        @click.prevent="loadBracketBoard()"
      >
        <font-awesome-icon :icon="['fas', 'arrows-rotate']" size="lg" />
      </v-btn>
    </v-container>

    <BracketBoard :bracketData="bracketData" />
  </section>
</template>

<style scoped lang="scss">
.battle-board {
  &__container {
    font-size: 1rem;

    &__edition-select {
    }
  }
}
</style>
