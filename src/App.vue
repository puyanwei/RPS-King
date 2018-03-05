<template>
  <div id="app">
    <hello></hello>
  </div>
</template>

<script>
import Hello from "./components/hello.vue";

export default {
  components: {
    hello: Hello
  },
  data() {
    return {};
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
