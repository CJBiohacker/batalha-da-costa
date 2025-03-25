<script setup>

import { icon } from '@fortawesome/fontawesome-svg-core';

const contacts = [
    {
        link: 'https://www.instagram.com/batalhadacosta_/',
        icon: ['fab', 'instagram']
    },
    {
        link: 'https://www.instagram.com/batalhadacosta/',
        icon: ['fab', 'tiktok']
    },
    {
        link: 'https://www.instagram.com/batalhadacosta/',
        icon: ['fab', 'facebook']
    }
]

const footerText = `© ${new Date().getFullYear()} CJ Dev. Todos os direitos reservados.`;

</script>

<template>
    <footer id="footer-container">
        <div class="footer__text">
            {{ footerText }}
        </div>
        <div class="footer__contact">
            <a v-for="contact in contacts" :href="contact.link" target="_blank">
                <font-awesome-icon :icon="contact.icon" />
            </a>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
#footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    font-size: 1rem;

    .footer__text {
    }

    .footer__contact {
        display: flex;
        gap: 1rem;

        > a {
            color: black;
        }
    }
}

</style>