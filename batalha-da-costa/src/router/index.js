import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/Home.vue')
    },
    {
        path: '/sobre',
        name: 'Sobre',
        component: () => import('@/pages/About.vue')
    },
    {
        path: '/batalhas',
        name: 'Batalha',
        component: () => import('@/pages/Batalha.vue')
    },
    {
        path: '/ranking',
        name: 'Ranking',
        component: () => import('@/pages/Ranking.vue')
    }
  ]
})
