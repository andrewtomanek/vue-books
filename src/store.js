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
      function testExistence(bookContent) {
        const str = bookContent.toLowerCase();
        if (state.enabledRegex) {
          const regex = RegExp(state.query, "g");
          return regex.test(str);
        } else {
          return str.includes(state.query);
        }
      }

      let books = state.books;
      if (state.query.length > 2) {
        switch (state.selected) {
          case "Name":
            return books.filter((book) => testExistence(book.name));
          case "Author":
            return books.filter((book) => testExistence(book.author));
          case "Category":
            return books.filter((book) => testExistence(book.category));
          case "All": {
            let categorySearch = books.filter((book) =>
              testExistence(book.author)
            );
            let nameSearch = books.filter((book) => testExistence(book.name));
            let authorSearch = books.filter((book) =>
              testExistence(book.category)
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
