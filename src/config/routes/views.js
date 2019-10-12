export default {
  views: [
    {
      value: 'Home',
      url: '/',
      className: 'home icon',
    },
    {
      value: 'About Us',
      url: '/about',
      className: 'info circle icon',
    }
  ],
  onlineViews: [
    {
      value: 'My Account',
      url: '/account',
      className: 'user circle icon',
    },
    {
      value: 'Shop',
      url: '/shop',
      className: 'shopping cart icon',
    },
  ],
  offlineViews: [
    {
      value: 'Login',
      url: '/login',
      className: 'sign in alternate icon',
    },
    {
      value: 'Sign Up',
      url: '/register',
      className: 'registered outline icon',
    }
  ]
}
