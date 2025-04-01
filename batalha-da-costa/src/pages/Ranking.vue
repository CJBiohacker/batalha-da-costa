<script setup>
import { ref } from 'vue';
import RankingBoard from '@/components/ranking/RankingBoard.vue';

const rankingData = ref({
    data_ranking: new Date(),
    participantes: [
        {
            nome: "Perigo",
            pontos: "6",
            vitoria_2x0: "1",
        },
        {
            nome: "Exodia",
            pontos: "5",
            vitoria_2x0: "2",
        },
        {
            nome: "Brancão",
            pontos: "2",
            vitoria_2x0: "1",
        },
        {
            nome: "Fuze",
            pontos: "2",
            vitoria_2x0: "1",
        },
    ],
    temporada: {
        ano: "2025",
        periodo: "2",
    }
})

</script>

<template>
    <section id="ranking-container">
        <div class="ranking__title">
            <h1>Ranking Batalha da Costa</h1>
            <hr>
            <p>{{ `${rankingData.temporada.periodo}ª Temporada de ${rankingData.temporada.ano}` }}</p>
        </div>
        
        <RankingBoard :participantes="rankingData.participantes" />

        <div class="ranking__update-msg">

        </div>
    </section>
</template>

<style lang="scss" scoped>
#ranking-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

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
            font-size: 1.5rem;
            margin-top: 0;
        }
    }

    .ranking__table {
        table {
            width: 100%;            

            th {
                background-color: #f2f2f2;
                border: 1px solid #ddd;
                padding: 25px;
                text-align: center;
            }

            td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: center;
            }

            tr:nth-child(even) {
                background-color: #f2f2f2;
            }

            tr:hover {
                background-color: #f2f2f2;
            }
        }
    }
}
</style>