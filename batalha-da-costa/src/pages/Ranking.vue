<script setup>
import { ref } from 'vue';
import { mockRankingData } from '../utils/consts';
import RankingBoard from '@/components/ranking/RankingBoard.vue';

const rankingData = ref(mockRankingData);

</script>

<template>
    <section id="ranking-container">
        <div class="ranking__title">
            <h1>Ranking</h1>
            <hr>
            <p>{{ `${rankingData.temporada.periodo}ª Temporada de ${rankingData.temporada.ano}` }}</p>
        </div>
        
        <RankingBoard :participantes="rankingData.participantes" />

        <div class="ranking__update-msg">
            <p>Última atualização : {{ rankingData.data_ranking.toLocaleDateString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' }) }}</p>
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