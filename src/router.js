import { createRouter, createWebHistory } from 'vue-router'
import WindowTV from './views/WindowTV.vue';
import TerminalKiosk from './views/TerminalKiosk.vue';
import TerminalStaff from './views/TerminalStaff.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/TV',
      name: 'TV',
      component: WindowTV
    },
    {
      path: '/kiosk',
      name: 'kiosk',
      component: TerminalKiosk
    },
    {
      path: '/staff',
      name: 'staff',
      component: TerminalStaff
    },
  ]
})

export default router
