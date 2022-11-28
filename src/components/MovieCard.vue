<script>
export default {
  props: {
    movie: { type: Object, required: true },
  },
};
</script>

<!-- <template>
  <div>
    <div class="p-1">
      <strong>Tên:</strong>
      {{ contact.name }}
    </div>
    <div class="p-1">
      <strong>E-mail:</strong>
      {{ contact.email }}
    </div>
    <div class="p-1">
      <strong>Địa chỉ:</strong>
      {{ contact.address }}
    </div>
    <div class="p-1">
      <strong>Điện thoại:</strong>
      {{ contact.phone }}
    </div>
    <div class="p-1">
      <strong>Liên hệ yêu thích:&nbsp;</strong>
      <i v-if="contact.favorite" class="fas fa-check"></i>
      <i v-else class="fas fa-times"></i>
    </div>
  </div>
</template> -->

<template>
  <div class="row mb-3">
    <h2 class="px-3">{{ movie.name }} ({{ movie.year }})</h2>
  </div>
  <div class="row">
    <div class="col-md-6">
      <img :src="movie.posterUrl" style="width: 100%" class="rounded" />
      <a
        type="button"
        class="btn btn-outline-danger btn-block mt-3"
        :href="movie.trailerUrl"
        target="_blank"
        rel="noopener noreferrer"
        ><i class="fa fa-play"></i> Watch Trailer</a
      >
      <button type="button" class="btn btn-info btn-block mt-3">
        <i class="fa fa-add"></i> Add to Favorites
      </button>
    </div>
    <div class="col-md-6">
      <span class="badge badge-warning mb-3" style="font-size: 200%">{{
        movie.rating
      }}</span>
      <div><Strong>Title: </Strong>{{ movie.name }}</div>
      <div><Strong>Release Year: </Strong>{{ movie.year }}</div>
      <div><Strong>Country: </Strong>{{ movie.country }}</div>
      <div><Strong>Rating: </Strong>{{ movie.rating }}/10</div>
      <div><Strong>Genre: </Strong>{{ movie.genre }}</div>
      <br />
      <div style="text-align: left">{{ movie.description }}</div>
    </div>
  </div>
</template>
