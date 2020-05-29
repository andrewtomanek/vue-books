<template>
  <footer>
    <p class="footer-text">
      Count of searched items: {{ books.length }} / {{ allBooks.length }}
    </p>
  </footer>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "footerContainer",
  computed: {
    ...mapState(["allBooks"]),
    ...mapGetters({ books: "filtersMovies" }),
  },
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

.footer-text {
  margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  color: white;
  grid-column: 1;
}
</style>
