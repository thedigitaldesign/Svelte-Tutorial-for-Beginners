<script lang="ts">
  import type { Movie } from '../models/Movies'
  import MovieCard from './MovieCard.svelte'

  export let popularMovies: Movie[]
  export let sectionTitle: string = `Popular Movies`
</script>

<template>
  <h1 class="text-2xl mb-4 font-bold">{sectionTitle}</h1>

  <div class="popular-movies">
    {#each popularMovies as movie}
      <!-- content here -->
      <MovieCard {movie} />
    {/each}
  </div>
</template>

<style lang="less">
  .popular-movies {
    @apply grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
  }
</style>
