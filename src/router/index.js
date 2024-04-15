import { createRouter, createWebHistory } from 'vue-router'
import FormView from '../views/FormView.vue'
import ResultView from '../views/ResultView.vue'

const routes = [
  {
    path: '/',
    name: '/',
    component: FormView
  },
  {
    path: '/result',
    name: '/result',
    component: ResultView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
