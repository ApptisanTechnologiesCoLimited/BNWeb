const routes = [
  {
    path: '/',
    component: () => import('./views/Myartworks.vue')
  },
  {
    path: '/myartworks',
    component: () => import('./views/Myartworks.vue')
  },
  {
    path: '/artwork/:id',
    component: () => import('./views/Artwork.vue')
  },
  {
    path: '/about',
    component: () => import('./views/About.vue')
  },
  {
    path: '/myproject',
    component: () => import('./views/Myprojects.vue')
  },
  {
    path: '/project/:id',
    component: () => import('./views/Project.vue')
  }
]

export default routes
