import NavLink from '@/components/Link/NavLink.vue'
import TokenService from '@/api/TokenService'
import Navigations from '@/config/routes/views'

export default {
  name: 'DefaultNavigation',
  components: { NavLink },

  data() {
    return {
      token: TokenService.getUserToken(),
      views: Navigations.views,
      onlineViews: Navigations.onlineViews,
      offlineViews: Navigations.offlineViews,
      body: document.getElementsByTagName("body")[0],
    }
  },

  methods: {
    home() { window.location.assign('/') },

    logout() {
      TokenService.removeUserToken()
      this.home()
    },

    show_menu() { this.body.classList.add('display_menu') },
    hide_menu() { this.body.classList.remove('display_menu') },

    display_menu() {
      const body = this.body

      !body.classList.contains("display_menu")
        ? this.show_menu()
        : this.hide_menu()
    },

    loaded() {
      this.body.style.overflowY = "hidden"
      this.load = true
    },

    handleResize() { this.hide_menu() },
    ready() { window.addEventListener('resize', this.handleResize) },
    beforeDestroy() { window.removeEventListener('resize', this.handleResize) },
  }
}
