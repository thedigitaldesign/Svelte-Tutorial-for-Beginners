<script lang="ts">
  import type { Movie } from '../models/Movies'
  import MovieCard from './MovieCard.svelte'

  export let popularMovies: Movie[]
</script>

<template>
  <div>Popular Movies</div>

  {#each popularMovies as movie}
    <!-- content here -->
    <MovieCard {movie} />
  {/each}
</template>

<style lang="less">
</style>
