/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  extendRoutes: (routes) => setupLayouts(routes),
})

router.beforeEach((to)=>{
  // beforeEach => 
  // TO => Mostra a rota da qual estou indo.
  // FROM => Mostra a rota da qual estou vindo.
  if(to.meta?.auth){
    console.log(to.name);
  }
  })
  
  export default router 