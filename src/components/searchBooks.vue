<template>
  <header>
    <h1>Web library <br /></h1>
    <div class="search-wrapper">
      <form @submit.prevent="submitSearch">
        <input
          type="text"
          v-model="search"
          aria-label="Search"
          name="focus"
          class="search-box"
          placeholder="Enter search term"
        />
        <select v-model="selected" name="searchCategory" class="search-select">
          <option
            class="search-option"
            v-for="option in options"
            :value="option.value"
            :key="option.text"
          >
            {{ option.text }}
          </option>
        </select>
        <input
          class="check-input"
          type="checkbox"
          v-model="toggleRegex"
          :value="false"
        />
        <label for="toggle">Use regex</label>
        <button class="search-button" type="submit">Search</button>
      </form>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "searchBooks",
  data: function() {
    return {
      search: "",
      options: [
        { text: "Name", value: "Name" },
        { text: "Author", value: "Author" },
        { text: "Category", value: "Category" },
        { text: "All", value: "All" },
      ],
    };
  },
  methods: {
    submitSearch() {
      this.$store.commit("submitSearch", this.search);
    },
  },
  computed: {
    ...mapGetters({ books: "filtersBooks" }),
    selected: {
      get() {
        return this.$store.state.selected;
      },
      set(selected) {
        return this.$store.commit("setSelected", selected);
      },
    },
    toggleRegex: {
      get() {
        return this.$store.state.enabledRegex;
      },
      set() {
        return this.$store.commit("setRegex");
      },
    },
  },
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

button {
  font-family: Helvetica, Arial, Verdana;
  padding: 0.2rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  border: 0.1rem solid var(--tile, blue);
  background-color: var(--secondary, blue);
  transition: all 200ms cubic-bezier(0.215, 0.61, 0.355, 1);
  color: white;
}

button:hover {
  background-color: white;
  color: var(--secondary, blue);
}

h1 {
  font-family: Helvetica, Arial, Verdana;
  color: white;
  text-align: center;
  padding: 0.3rem 0.2rem;
  font-size: 1.5rem;
  font-weight: 800;
  background-color: var(--header, black);
  margin: 0;
}

form {
  display: grid;
  justify-content: space-around;
  align-items: center;
  grid-gap: 2rem;
  grid-template-columns: 2fr 1fr 1vw 1fr 1fr;
  grid-template-rows: 1fr;
}

.search-wrapper {
  display: grid;
  align-items: center;
  margin: 0;
  padding: 0.3rem 0.6rem;
}
.search-box {
  width: 100%;
  border: 0.1rem solid #ccc;
  outline: 0;
  margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 700;
  text-align: left;
  color: var(--header, brown);
}

.search-box:focus {
  box-shadow: 0 0 15px 5px var(--grey, grey);
  border: 0.1rem solid var(--secondary, blue);
}

.check-input {
  width: 100%;
  height: 100%;
  border: 0.1rem solid #ccc;
  outline: 0;
  margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 2rem;
  font-weight: 900;
  cursor: pointer;
}

.search-select {
  width: 100%;
  height: 100%;
  border: 0.1rem solid #ccc;
  outline: 0;
  margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
}

.search-option {
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 700;
  text-align: left;
}

label {
  display: block;
  padding: 0.1rem 0.3rem;
  color: white;
}
</style>
