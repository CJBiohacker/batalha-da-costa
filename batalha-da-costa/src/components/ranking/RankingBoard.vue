<script setup>
const props = defineProps({
    participantes: {
        type: Array,
        required: true,
        default: () => [],
    },
});

const participantesOrdenados = () => {
    return [...props.participantes].sort((a, b) => {
        if (b.pontos !== a.pontos) {
            return b.pontos - a.pontos;
        }
        return b.vitoria_2x0 - a.vitoria_2x0;
    });
};

</script>

<template>
    <div class="ranking__table">
        <div class="ranking__table-header">
            <p>__Posicao__</p>
            <p>___Nome___</p>
            <p>__Pontos__</p>
            <p>___2x0___</p>
        </div>
        <div class="ranking__table-body">
            <div v-for="(participante, index) in participantesOrdenados()" :key="index" class="ranking__row">
                    <p class="ranking__position">{{ index + 1 }}</p>
                    <p class="ranking__name">{{ participante.nome }}</p>
                    <p class="ranking__points">{{ participante.pontos }}</p>
                    <p class="ranking__wins">{{ participante.vitoria_2x0 }}</p>
                </div>
        </div>
    </div>

    
</template>

<style lang="scss" scoped>
@font-face {
  font-family: 'Scoreboard';
  src: url('../../assets/fonts/scoreboard-font/SCOREBOARD.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.ranking__table {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 4fr;
    font-family: 'Scoreboard', system-ui, Avenir, Helvetica, Arial, sans-serif; ;
    font-size: 2rem;

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

        div {
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
</style>