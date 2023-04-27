import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import TimetableView from '../views/TimetableView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_API_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { requiresAuth: true },
      component: HomeView,
    },
    {
      path: '/timetable',
      name: 'timetable',
      meta: { requiresAuth: true },
      component: TimetableView,
    },
    {
      path: '/login',
      name: 'login',
      meta: { hideForAuth: true },
      component: LoginView,
    },
  ]
})

router.beforeEach((to, from, next) => {
  const storeAuth = useAuthStore()
  const authUser = storeAuth.loggedInUser
  const reqAuth = to.matched.some((record) => record.meta.requiresAuth)
  const hideForAuth = to.matched.some((record) => record.meta.hideForAuth)
  const loginQuery = { path: '/login', query: { redirect: to.fullPath } }

  if (reqAuth && !authUser) {
    storeAuth.getAuthenticatedUserDetails().then(() => {
      if (!storeAuth.loggedInUser) next(loginQuery)
      else next()
    })
  } else if (!authUser && hideForAuth) {
    storeAuth.getAuthenticatedUserDetails().then(() => {
      if (!storeAuth.loggedInUser) next()
      else return next(from)
    })
  } else {
    next() // make sure to always call next()!
  }
})


export default router
