import Vue from "vue";
import Vuex from "vuex";
import bookData from "./data/booksArray.json";
import { sortAlpha, confirmExistence, sortInputFirst } from "./utils/helpers";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    allBooks: bookData,
    books: sortAlpha(bookData),
    query: "",
    selected: "Name",
    enabledRegex: false,
  },
  mutations: {
    submitSearch(state, query) {
      state.query = query;
    },
    setQuery(state, query) {
      state.query = query;
    },
    setSelected(state, selected) {
      state.selected = selected;
    },
    setRegex(state) {
      state.enabledRegex = !state.enabledRegex;
    },
  },
  getters: {
    filtersBooks(state) {
      const queryString = state.query.toLowerCase();
      function testExistence(bookContent) {
        return confirmExistence(bookContent, queryString, state.enabledRegex);
      }

      let books = state.books;
      if (state.query.length > 0) {
        switch (state.selected) {
          case "Name": {
            let filteredArray = books.filter((book) =>
              testExistence(book.name)
            );
            return sortInputFirst(queryString, filteredArray, "name");
          }
          case "Author": {
            let filteredArray = books.filter((book) =>
              testExistence(book.author)
            );
            return sortInputFirst(queryString, filteredArray, "author");
          }
          case "Category": {
            let filteredArray = books.filter((book) =>
              testExistence(book.category)
            );
            return sortInputFirst(queryString, filteredArray, "category");
          }
          case "All": {
            let nameSearch = books.filter((book) => testExistence(book.name));
            let authorSearch = books.filter((book) =>
              testExistence(book.author)
            );
            let categorySearch = books.filter((book) =>
              testExistence(book.category)
            );
            return [
              ...new Set([
                ...sortInputFirst(queryString, nameSearch, "name"),
                ...sortInputFirst(queryString, authorSearch, "author"),
                ...sortInputFirst(queryString, categorySearch, "category"),
              ]),
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
