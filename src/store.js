import Vue from "vue";
import Vuex from "vuex";
import bookData from "./data/booksArray.json";

const books = () => {
  return bookData;
};

console.log(books());

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    books: books(),
    filter: {
      query: "",
      available: true,
    },
  },
  mutations: {
    setQuery(state, query) {
      state.filter.query = query;
    },
    setAvailable(state) {
      state.filter.available = !state.filter.available;
    },
  },
  getters: {
    filtersMovies(state) {
      console.log(state.filter.query);
      let books = state.books;
      if (state.filter.query.length > 2) {
        return books.filter((book) =>
          book.name.toLowerCase().includes(state.filter.query)
        );
      } else {
        return state.books;
      }
    },
  },
});

export default store;
