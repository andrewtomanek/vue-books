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
      <div class="row">
        <div
          class="col-md-3 card-group"
          v-for="movie in books"
          :key="movie.indexId"
        >
          <h5 class="card-title">{{ movie.name }}</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 card-group" v-for="movie in books" :key="movie.id">
          <movieList :movie="movie"></movieList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import movieList from "./movieList";
import { mapGetters } from "vuex";

export default {
  name: "searchMovies",
  components: {
    movieList,
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
