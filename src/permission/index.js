import router from '../router'
router.beforeEach(function (to, from, next) {
  if (to.path !== '/login') {
    let token = window.localStorage.getItem('uesr_token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
