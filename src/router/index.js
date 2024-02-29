import { createRouter, createWebHistory } from 'vue-router'
import TableView from '../views/TableView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TableView,
      meta: {
        title: "qtp13's Double Time Table",
        metaTags: [
          {
            name: "bmstable",
            content: "/lr2-mypage/header.json"
          }
        ]
      }
    },
    {
      path: '/question',
      name: 'question',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/QuestionView.vue'),
      meta: {
        title: "???"
      }
    }
  ]
})

export default router
