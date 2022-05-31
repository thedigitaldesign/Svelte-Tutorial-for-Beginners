<script lang="ts">
  import type { Movie } from '../models/Movies'

  export let movie: Movie
</script>

<template>
  <div class="movie-card">
    <a href={`/movie/` + movie.id.toString()} sveltekit:prefetch sveltekit:noscroll>
      <img src={`https://image.tmdb.org/t/p/w500` + movie.poster_path} alt={movie.title + `poster`} />
      <div class="movie-description">
        <h2 class="text-xl font-bold">{movie.title}</h2>
        <p>{movie.release_date}</p>
      </div>
    </a>
  </div>
</template>

<style lang="less">
  .movie-card {
    @apply flex flex-col justify-around p-2;

    img {
      @apply max-w-full object-fill rounded-lg mb-4;
      max-height: 30vh;
    }
  }
</style>
