import { createRouter } from 'vue-router'
import HallTV from '../views/HallTV.vue'
import TerminadAburutuent from '../views/TerminadAburutuent.vue'
import TerminadCommission from '../views/TerminadCommission.vue'


const router = createRouter({
  routes: [
    {
      path: '/HallTV',
      name: 'HallTV',
      component: HallTV
    },
    {
      path: '/TerminadAburutuent',
      name: 'TerminadAburutuent',
      component: TerminadAburutuent
    },
    {
      path: '/TerminadCommission',
      name: 'TerminadCommission',
      component: TerminadCommission
    },
  ]
})

export default router
