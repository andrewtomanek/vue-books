<template>
  <div class="data-container">
    <h6>
      {{ book.name }}
    </h6>
    <div class="content-box" v-if="idOpen === book.indexId && isOpen">
      <div class="text-box">
        <p class="book-text" data-type="indexId">indexId: {{ book.indexId }}</p>
        <p class="book-text" data-type="author">author: {{ book.author }}</p>
        <p class="book-text" data-type="categoryId">
          categoryId: {{ book.categoryId }}
        </p>
        <p class="book-text" data-type="category">
          category: {{ book.category }}
        </p>
      </div>
      <figure>
        <img :src="book.imgUrl" :alt="book.caption" />
        <figcaption>{{ book.caption }}</figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "bookDetail",
  props: {
    book: {
      type: Object,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: true,
    },
    idOpen: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.data-container {
  display: grid;
  grid-auto-flow: row;
  justify-content: center;
  align-items: start;
  grid-gap: 0.2rem;
  padding: 0.1rem 0.6rem;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

.content-box {
  display: grid;
  grid-area: 2/1/3/1;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
  grid-gap: 0.2rem;
  padding: 0.3rem 0.2rem;
}

.text-box {
  display: grid;
  grid-area: 1/1/1/1;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  justify-content: center;
  align-content: space-around;
  padding: 0.1rem 0.2rem;
  grid-gap: 2rem;
}

h6 {
  grid-column: 1 /-1;
  grid-row: 1/1;
  text-align: center;
  padding: 0.3rem 0.2rem;
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: var(--primary, firebrick);
}

.book-text {
  margin: 0;
  padding: 0.2rem 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  color: var(--text, brown);
  grid-column: 1;
}

figure {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.2rem;
  grid-area: 1/2/2/3;
  z-index: 1;
  color: var(--primary, firebrick);
}

figcaption {
  margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  color: var(--text, brown);
  grid-area: 1/2/2/3;
}

img {
  width: 100%;
  grid-area: 1/1/1/1;
}
</style>
