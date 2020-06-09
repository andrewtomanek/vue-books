import Vue from "vue";
import Vuex from "vuex";
import bookData from "./data/booksArray.json";

const books = () => {
  let alphaSorted = bookData.sort(function(a, b) {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });
  return alphaSorted;
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
        const queryStrring = state.query.toLowerCase();
        if (state.enabledRegex) {
          const regex = RegExp(queryStrring, "g");
          return regex.test(str);
        } else {
          return str.includes(state.query);
        }
      }

      let books = state.books;
      if (state.query.length > 0) {
        switch (state.selected) {
          case "Name":
            return books.filter((book) => testExistence(book.name));
          case "Author":
            return books.filter((book) => testExistence(book.author));
          case "Category":
            return books.filter((book) => testExistence(book.category));
          case "All": {
            let categorySearch = books.filter((book) =>
              testExistence(book.category)
            );
            let nameSearch = books.filter((book) => testExistence(book.name));
            let authorSearch = books.filter((book) =>
              testExistence(book.author)
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
