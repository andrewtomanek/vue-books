<template>
  <div id="app">
    <img width="10%" src="./assets/logo.png" />
    <searchMovies class="mt-5"> </searchMovies>
  </div>
</template>

<script>
import searchMovies from "./components/searchMovies.vue";

export default {
  name: "App",
  components: {
    searchMovies,
  },
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
