const routes = [
  {
    path: '/',
    component: () => import('./views/Dashboard.vue')
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
    path: '/myprojects',
    component: () => import('./views/Myprojects.vue')
  },
  {
    path: '/project/:id',
    component: () => import('./views/Project.vue')
  },
  {
    path: '/roomtype/:id/',
    component: () => import('./views/Roomtype.vue')
  },
  {
    path: '/addproduct/:id/',
    component: () => import('./views/Addproduct.vue')
  },
  {
    path: '/dashboard/',
    component: () => import('./views/Dashboard.vue')
  },
  {
    path: '/sales/',
    component: () => import('./views/Dashboard-sales.vue')
  }
]

export default routes
