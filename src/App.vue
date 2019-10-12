<template>
  <div id="app">
    <Navbar />
    <div class="main">
      <b-container fluid>
        <router-view>
          <sui-container text />
        </router-view>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
  name: 'app',
  components: {
    Navbar, Footer,
  }
}
</script>


<style lang="css" src="./assets/style/css/app.css"></style>
