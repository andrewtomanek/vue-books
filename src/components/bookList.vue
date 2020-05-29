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

article {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  background-color: var(--tile, skyblue);
  border: solid 0.1rem var(--tile, skyblue);
  transform: scale(1);
  transition: all 1200ms cubic-bezier(0.215, 0.61, 0.355, 1);
}

article:hover {
  transform: scale(1.01);
  border: solid 0.1rem var(--secondary, red);
  transition: all 400ms cubic-bezier(0.215, 0.61, 0.355, 1);
}

article:focus {
  grid-column: 1 /-1;
  height: 100%;
}

article:focus var {
  display: block;
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
