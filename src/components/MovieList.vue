<script>
export default {
  props: {
    movies: { type: Array, default: [] },
    activeIndex: { type: Number, default: -1 },
  },
  emits: ["update:activeIndex"],
  methods: {
    updateActiveIndex(index) {
      this.$emit("update:activeIndex", index);
    },
  },
};
</script>

<!-- <template>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="(movie, index) in movies"
      :key="movie._id"
      :class="{ active: index === activeIndex }"
      @click="updateActiveIndex(index)"
    >
      {{ movie.name }}
    </li>
  </ul>
</template> -->

<template>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="(movie, index) in movies"
      :key="movie._id"
      :class="{ active: index === activeIndex }"
      @click="updateActiveIndex(index)"
    >
      <div>
        <img
          class="rounded mr-3"
          alt="avatar1"
          :src="movie.posterUrl"
          style="width: 70px"
        />
        <strong>{{ movie.name }} ({{ movie.year }})</strong>
      </div>
    </li>
  </ul>
</template>
