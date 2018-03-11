<template>
  <div id="app">
    <front-page></front-page>
  </div>
</template>

<script>
import FrontPage from "./components/FrontPage.vue";

export default {
  components: {
    "front-page": FrontPage#
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
