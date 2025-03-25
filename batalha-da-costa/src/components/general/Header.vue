<script setup>
import { RouterLink } from 'vue-router';

const links = [
    { text: 'Início', path: '/' },
    { text: 'Sobre', path: '/sobre' },
    { text: 'Batalhas', path: '/batalhas' },
    { text: 'Ranking', path: '/ranking' },
];

</script>

<template>
    <header id="header-container">
        <router-link v-for="link in links" :to="link.path" class="header__link">
            {{ link.text }}
        </router-link>
    </header>
</template>

<style lang="scss" scoped>
#header-container {
    display: flex;
    justify-content: space-around;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: white;

    &.header__link {
        color: white;
        text-decoration: none;

        &:hover {
            cursor: pointer;
        }
    }
}
</style>