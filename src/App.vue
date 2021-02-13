<template>
  <div id="app">
    <InboxScreen />
  </div>
</template>

<script>
import store from './store'
import InboxScreen from './components/InboxScreen'

export default {
  name: "App",
  store,
  components: {
    InboxScreen
  }
}
</script>

<style>
@import "./index.css";
</style>
