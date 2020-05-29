<template>
  <div class="main-content">
    <section class="items-list">
      <article contenteditable v-for="book in books" :key="book.indexId">
        <bookDetail :book="book"></bookDetail>
      </article>
    </section>
  </div>
</template>

<script>
import bookDetail from "./bookDetail";
import { mapGetters } from "vuex";

export default {
  name: "bookList",
  components: {
    bookDetail,
  },
  computed: Object.assign(
    {},
    {
      ...mapGetters({ books: "filtersMovies" }),
    }
  ),
};
</script>

<style scoped>
.main-content {
  position: absolute;
  left: 0;
  top: 20vh;
  display: grid;
  margin: 0;
  grid-auto-flow: row;
  align-items: center;
  justify-content: center;
}

a {
  font-family: Helvetica, Arial, Verdana;
}

button {
  font-family: Helvetica, Arial, Verdana;
  padding: 0.2rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  border: 0.1rem solid var(--tile, blue);
  background-color: var(--secondary, blue);
  color: white;
}

h1 {
  font-family: Helvetica, Arial, Verdana;
  color: white;
  text-align: center;
  padding: 0.5rem 0.2rem;
  font-size: 1.2rem;
  font-weight: 800;
  background-color: var(--header, black);
  margin: 0;
}

.items-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 0.5rem;
  padding: 0.5rem 0.2rem;
  height: 100%;
  width: 100%;
  justify-content: center;
  background-color: var(--grey, lightgrey);
}
</style>
