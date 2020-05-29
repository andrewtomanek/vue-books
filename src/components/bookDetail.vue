<template>
  <div class="data-box">
    <figure>
      <img :src="book.imgUrl" :alt="book.caption" />
      <figcaption>{{ book.caption }}</figcaption>
    </figure>
    <h6>
      {{ book.name }}
    </h6>
    <p class="book-text" data-type="indexId">{{ book.indexId }}</p>
    <p class="book-text" data-type="author">{{ book.author }}</p>
    <p class="book-text" data-type="categoryId">{{ book.categoryId }}</p>
    <p class="book-text" data-type="category">{{ book.category }}</p>
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
  },
};
</script>

<style scoped>
.data-box {
  display: grid;
  justify-content: center;
  align-items: start;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-area: 1/1/3/3;
  height: 100%;
  width: 100%;
}

article:focus .data-box {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 10vh repeat(4, 5vh);
}

h6 {
  grid-column: 1 /-1;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  color: var(--primary, firebrick);
  height: auto;
}

article:focus h6 {
  height: 50%;
}

.book-text {
  display: none;
  margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  color: var(--text, brown);
  grid-column: 1;
}

.book-text::before {
  content: attr(data-type) ": ";
  color: var(--secondary, blue);
  padding: 1rem;
}

article:focus p {
  display: block;
}

article:focus figure {
  display: grid;
}

figure {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  display: none;
  justify-content: center;
  align-items: center;
  grid-area: 2/2/3/3;
  z-index: 1;
  color: var(--primary, firebrick);
}

img {
  width: 50%;
}
</style>
