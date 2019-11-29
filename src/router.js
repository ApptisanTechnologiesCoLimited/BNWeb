const routes = [
  {
    path: '/',
    component: () => import('./views/Dashboard.vue'),
    meta: {
      title: 'My Dashboard'
    }
  },
  {
    path: '/myartworks',
    component: () => import('./views/Myartworks.vue'),
    meta: {
      title: 'My Artworks'
    }
  },
  {
    path: '/artwork/:id',
    component: () => import('./views/Artwork.vue'),
    meta: {
      title: 'My Artworks'
    }
  },
  {
    path: '/about',
    component: () => import('./views/About.vue'),
    meta: {
      title: 'My Artworks'
    }
  },
  {
    path: '/myprojects',
    component: () => import('./views/Myprojects.vue'),
    meta: {
      title: 'My Projects'
    }
  },
  {
    path: '/project/:id',
    component: () => import('./views/Project.vue'),
    meta: {
      title: 'My Projects'
    }
  },
  {
    path: '/roomtype/:id/',
    component: () => import('./views/Roomtype.vue'),
    meta: {
      title: 'My Roomtypes'
    }
  },
  {
    path: '/addproduct-keypad/:id/',
    component: () => import('./views/Addproduct-EA.vue'),
    meta: {
      title: 'Add a New Product'
    }
  },
  {
    path: '/addproduct-sockets/:id/',
    component: () => import('./views/Addproduct-SK.vue'),
    meta: {
      title: 'Add a New Product'
    }
  },
  {
    path: '/dashboard/',
    component: () => import('./views/Dashboard.vue'),
    meta: {
      title: 'Dashboard'
    }
  },
  {
    path: '/sales/',
    component: () => import('./views/Dashboard-sales.vue'),
    meta: {
      title: 'Dashboard'
    }
  },
  {
    path: '/collection-ab/',
    component: () => import('./views/Collection-AB.vue'),
    meta: {
      title: 'Add a Collection'
    }
  },
  // {
  //   path: '/collection-ar/',
  //   component: () => import('./views/Collection-AR.vue'),
  //   meta: {
  //     title: 'Add a Collection'
  //   }
  // },
  {
    path: '/alba/step',
    component: () => import('./views/Collection-AB-step.vue'),
    meta: {
      title: 'Add a Collection'
    }
  }
]

export default routes
