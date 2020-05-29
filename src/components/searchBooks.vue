<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="offset-md-3 col-md-6 form-group">
          <input
            class="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            v-model="search"
            aria-label="Search"
          />
          <button
            class="btn btn-outline-success form-control mt-2"
            type="submit"
          >
            Search
          </button>
          <div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineRadio1"
                v-model="available"
                :value="true"
              />
              <label class="form-check-label" for="inlineRadio1"
                >Available</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineRadio2"
                v-model="available"
                :value="false"
              />
              <label class="form-check-label" for="inlineRadio2"
                >Not Available</label
              >
            </div>
          </div>
        </div>
      </div>
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
      <div class="row">
        <div
          class="col-md-3 card-group"
          v-for="book in books"
          :key="book.indexId"
        >
          <bookDetail :book="book"></bookDetail>
        </div>
      </div>
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
