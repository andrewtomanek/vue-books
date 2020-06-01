import Vue from "vue";
import Vuex from "vuex";
import bookData from "./data/booksArray.json";

const books = () => {
  return bookData;
};

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    allBooks: bookData,
    books: books(),
    query: "",
    selected: "Name",
  },
  mutations: {
    setQuery(state, query) {
      state.query = query;
    },
    setSelected(state, selected) {
      state.selected = selected;
    },
  },
  getters: {
    filtersBooks(state) {
      let books = state.books;
      if (state.query.length > 2) {
        switch (state.selected) {
          case "Name":
            return books.filter((book) =>
              book.name.toLowerCase().includes(state.query)
            );
          case "Author":
            return books.filter((book) =>
              book.author.toLowerCase().includes(state.query)
            );
          case "Category":
            return books.filter((book) =>
              book.category.toLowerCase().includes(state.query)
            );
          case "All": {
            let categorySearch = books.filter((book) =>
              book.author.toLowerCase().includes(state.query)
            );
            let nameSearch = books.filter((book) =>
              book.name.toLowerCase().includes(state.query)
            );
            let authorSearch = books.filter((book) =>
              book.category.toLowerCase().includes(state.query)
            );
            return [
              ...new Set([...nameSearch, ...authorSearch, ...categorySearch]),
            ];
          }
          default:
            return state.books;
        }
      } else {
        return state.books;
      }
    },
  },
});

export default store;
