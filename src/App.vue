<template>
  <div id="app">
    <appNav/>
    <router-view/>
  </div>
</template>

<script>
import appNav from '@components/content/appNav'
export default {
  name: 'App',
  components: {
    appNav
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
