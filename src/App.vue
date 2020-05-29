<template>
  <div id="app">
    <searchBooks class="mt-5"> </searchBooks>
  </div>
</template>

<script>
import searchBooks from "./components/searchBooks.vue";

export default {
  name: "App",
  components: {
    searchBooks,
  },
};
</script>

<style>
:root {
  font-size: calc(1vw + 1vh + 0.3vmin);
  --header: hsla(200, 10%, 10%, 1);
  --grey: hsla(200, 30%, 90%, 1);
  --tile: hsla(200, 60%, 80%, 1);
  --primary: hsla(46, 91%, 42%, 1);
  --secondary: hsla(200, 80%, 60%, 1);
  --text: hsla(46, 82%, 28%, 1);
  --footer: hsla(16, 82%, 28%, 1);
  --alert: hsla(13, 77%, 52%, 1);
}

body {
  margin: 0;
  padding: 0;
  font-family: Helvetica, Arial, Verdana;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
