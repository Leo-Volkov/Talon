import { createRouter, createWebHistory } from 'vue-router'
import WindowTV from './views/WindowTV.vue';
import TerminalStaff from './views/TerminalStaff.vue';
import TerminalKiosk from './views/Fiosk/TerminalKiosk.vue';
import TupeDock from './views/Fiosk/TupeDock.vue';
import PuchDock from './views/Fiosk/PuchDock.vue';
import GetTalon from './views/Fiosk/GetTalon.vue';
import AccordDock from './views/Fiosk/AccordDock.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/TV',
      name: 'TV',
      component: WindowTV
    },
    {
      path: '/staff',
      name: 'staff',
      component: TerminalStaff
    },
    {
      path: '/kiosk',
      name: 'kiosk',
      component: TerminalKiosk
    },
    {
      path: '/kiosk/TupeDock',
      name: 'TupeDock',
      component: TupeDock
    },
    {
      path: '/kiosk/AccordDock',
      name: 'AccordDock',
      component: AccordDock
    },
    {
      path: '/kiosk/GetTalon',
      name: 'GetTalon',
      component: GetTalon
    },
    {
      path: '/kiosk/PuchDock',
      name: 'PuchDock',
      component: PuchDock
    }
  ]
})

export default router
