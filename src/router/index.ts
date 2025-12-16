import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home-view/home-view.vue'
import ArchiveView from '@/views/archive-view/archive-view.vue'
import BookView from '@/views/book-view/book-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/archive',
      name: 'archive',
      component: ArchiveView,
    },
    {
      path: '/archive/books/:id',
      name: 'book',
      component: BookView,
    },
  ],
})

export default router
