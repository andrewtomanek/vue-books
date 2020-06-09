<template>
  <div class="main-content">
    <section class="items-list">
      <article
        class="article-wrap"
        :class="{ open: idOpen === book.indexId && isOpen }"
        @click="toggle(book.indexId)"
        contenteditable
        v-for="book in books"
        :key="book.indexId"
      >
        <bookDetail :book="book" :isOpen="isOpen" :idOpen="idOpen"></bookDetail>
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
  data: function() {
    return {
      isOpen: false,
      idOpen: "",
    };
  },
  methods: {
    toggle(id) {
      this.idOpen = id;
      this.isOpen = !this.isOpen;
    },
  },
  computed: {
    ...mapGetters({ books: "filtersBooks" }),
  },
};
</script>

<style scoped>
.main-content {
  position: absolute;
  left: 0;
  top: 20vh;
  display: grid;
  padding: 0.5rem 0.2rem;
  margin: 0;
  grid-auto-flow: row;
  align-items: center;
  justify-content: center;
}

.article-wrap {
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 0.1rem 0.2rem;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background-color: var(--tile, skyblue);
  border: solid 0.1rem var(--tile, skyblue);
  transform: scale(1);
  transition: all 500ms cubic-bezier(0.215, 0.61, 0.355, 1);
  cursor: pointer;
  overflow: hidden;
}

.article-wrap:hover {
  transform: scale(1.01);
  border: solid 0.1rem var(--secondary, red);
  transition: all 400ms cubic-bezier(0.215, 0.61, 0.355, 1);
}

.article-wrap.open {
  grid-column: 1 /-1;
}

.items-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 0.5rem;
  padding: 0.5rem 0.2rem;
  justify-content: center;
  background-color: var(--grey, lightgrey);
  overflow: hidden;
}
</style>
