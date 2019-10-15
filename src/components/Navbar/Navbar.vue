<template>
    <header id="header">
      <div class="wrap">
        <div id="hamburger" v-on:click="display_menu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h2 @click="home()" class="hover">Webb Trade Center</h2>
        <nav id="menu">
          <template v-for="view in views">
            <NavLink
              v-bind:key="view.id"
              v-bind:value="view.value"
              v-bind:url="view.url"
              v-bind:callback="display_menu"
              v-bind:className="view.className"
            />
          </template>
          <template v-if="token">
            <template v-for="online in onlineViews">
              <NavLink
                v-bind:key="online.id"
                v-bind:value="online.value"
                v-bind:url="online.url"
                v-bind:callback="display_menu"
                v-bind:className="online.className"
              />
            </template>
            <li @click="logout()">
              <i class="sign-out icon" /> <a>Logout</a>
            </li>
          </template>
          <template v-else>
            <template v-for="offline in offlineViews">
              <NavLink
                v-bind:key="offline.id"
                v-bind:value="offline.value"
                v-bind:url="offline.url"
                v-bind:callback="display_menu"
                v-bind:className="offline.className"
              />
            </template>
          </template>
        </nav>
      </div>
    </header>
</template>

<script>
import DefaultNavigation from '@/components/Navbar/Navbar.js'

export default {
  name: 'navigation',
  extends: DefaultNavigation,
}
</script>
<style>
.icon { background-color: transparent !important; }
</style>
<style lang="less" src="@/assets/style/less/navbar.less"></style>
