<template>
  <div>
    <header>
      <h1>Web library <br /></h1>
      <div class="search-wrapper">
        <form>
          <input
            type="text"
            v-model="search"
            aria-label="Search"
            name="focus"
            required
            class="search-box"
            placeholder="Enter search term"
          />

          <label for="search-select">Select category</label>
          <select name="searchCategory" id="search-select">
            <option value="">--Please choose an option--</option>
            <option value="All">All</option>
            <option value="Author">Author</option>
            <option value="Author and name">Author and name</option>
            <option value="parrot">Category</option>
          </select>
          <input type="checkbox" id="toggle" />
          <label for="toggle">Use regex</label>
          <button class="search-button" type="submit">Search</button>
        </form>
      </div>
    </header>
    <div class="main-content">
      <section class="items-list">
        <article contenteditable v-for="book in books" :key="book.indexId">
          <bookDetail :book="book"></bookDetail>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
import bookDetail from "./bookDetail";
import { mapGetters } from "vuex";

export default {
  name: "searchBooks",
  components: {
    bookDetail,
  },
  computed: Object.assign(
    {},
    {
      ...mapGetters({ books: "filtersMovies" }),
      search: {
        get() {
          return this.$store.state.filter.query;
        },
        set(val) {
          this.$store.commit("setQuery", val);
        },
      },
      available: {
        get() {
          return this.$store.state.filter.available;
        },
        set() {
          return this.$store.commit("setAvailable");
        },
      },
    }
  ),
};
</script>

<style scoped>
header {
  display: grid;
  position: fixed;
  left: 0;
  top: 0;
  display: grid;
  height: 20vh;
  width: 100%;
  background-color: var(--header, black);
  z-index: 9;
}

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

.layout-container {
  height: 100%;
  width: 100%;
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

form {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 1rem;
  grid-template-columns: 2fr 1fr 1fr 1vw 1fr 1fr;
  grid-template-rows: 1fr;
}

.search-wrapper {
  margin: 0;
  padding: 0.3rem 0.6rem;
  justify-content: center;
  align-items: center;
}
.search-box {
  width: 100%;
  border: 0.1rem solid #ccc;
  outline: 0;
  margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  color: var(--header, brown);
}
.search-box:focus {
  box-shadow: 0 0 15px 5px var(--grey, grey);
  border: 0.1rem solid var(--secondary, blue);
}

label {
  display: block;
  padding: 0.1rem 0.3rem;
  color: white;
}
</style>
