import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router)

 export default new Router ({routes :  [
    {
        path: "/",
        name: "Coach",
        component: () => import(/* webpackChunkName: "coach" */ './views/Coach.vue')
    },
    {
        path: "/indicadores",
        name: "Indicadores",
        component: () => import(/* webpackChunkName: "indicadores" */ './views/Indicadores.vue')
    },
    {
        path: "/colaborator",
        name: "Colaborator",
        component: () => import(/* webpackChunkName: "colaborator" */ './views/Colaborator.vue')
    },

],
 })
// const router = new VueRouter({
//     mode: 'history',
//     base: process.env.BASE_URL,
//     routes
//   });
  
//   export default router