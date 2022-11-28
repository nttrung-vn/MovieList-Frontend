<template>
  <div class="row">
    <div class="col-md-6">
      <div class="col">
        <InputSearch v-model="searchText" />
      </div>

      <div class="mt-3 col">
        <h4>
          Movies
          <i class="fa fa-film"></i>
        </h4>

        <div class="justify-content-around align-items-center mb-3">
          <button class="btn btn-sm btn-primary" @click="refreshList()">
            <i class="fas fa-redo"></i> Refresh
          </button>
        </div>

        <MovieList
          v-if="filteredMoviesCount > 0"
          :movies="filteredMovies"
          v-model:activeIndex="activeIndex"
        />
        <p v-else>No movies found.</p>
      </div>
    </div>

    <div class="mt-3 col-md-6">
      <!-- <div v-if="activeMovie">
        <ContactCard :movie="activeMovie" />
      </div> -->
    </div>
  </div>
</template>

<script>
// import MovieCard from "@/components/MovieCard.vue";
import InputSearch from "@/components/InputSearch.vue";
import MovieList from "@/components/MovieList.vue";
import MovieService from "@/services/movie.service";

export default {
  components: {
    // MovieCard,
    InputSearch,
    MovieList,
  },
  // Đoạn mã xử lý đầy đủ
  data() {
    return {
      movies: [],
      activeIndex: -1,
      searchText: "",
    };
  },
  watch: {
    // Giám sát các thay đổi của biến searchText.
    // Bỏ chọn phần tử đang được chọn trong danh sách.
    searchText() {
      this.activeIndex = -1;
    },
  },
  computed: {
    // Chuyển các đối tượng movie thành chuỗi để tiện cho tìm kiếm.
    movieStrings() {
      return this.movies.map((movie) => {
        const { name, genre, country, year } = movie;
        return [name, genre, country, year].join("");
      });
    },
    // Trả về các movie có chứa thông tin cần tìm kiếm.
    filteredMovies() {
      if (!this.searchText) return this.movies;
      return this.movies.filter((_movie, index) =>
        this.movieStrings[index]
          .toLocaleLowerCase()
          .includes(this.searchText.toLocaleLowerCase())
      );
    },
    activeMovie() {
      if (this.activeIndex < 0) return null;
      return this.filteredMovies[this.activeIndex];
    },
    filteredMoviesCount() {
      return this.filteredMovies.length;
    },
  },
  methods: {
    async retrieveMovies() {
      try {
        this.movies = await MovieService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
    refreshList() {
      this.retrieveMovies();
      this.activeIndex = -1;
    },
  },
  mounted() {
    this.refreshList();
  },
};
</script>

<style scoped>
.page {
  text-align: left;
  max-width: 750px;
}
</style>
