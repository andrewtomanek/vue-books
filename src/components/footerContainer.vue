<template>
  <footer>
    <p>Count of searched items{{ books.length }}</p>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "footerContainer",
  computed: Object.assign(
    {},
    {
      ...mapGetters({ books: "filtersMovies" }),
    }
  ),
};
</script>

<style>
footer {
  position: fixed;
  right: 0;
  bottom: 0;
  display: grid;
  height: 5vh;
  width: 100%;
  background-color: var(--footer, orange);
  z-index: 10;
}
</style>
