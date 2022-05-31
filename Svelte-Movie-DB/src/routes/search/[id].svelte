<script context="module" lang="ts">
  /// API Key
  /**
   * 7e1af67d95da889535e6fa84e56a36b1
   */

  /// Example API Request
  /**
   * https://api.themoviedb.org/3/movie/550?api_key=7e1af67d95da889535e6fa84e56a36b1
   */

  // export async function load({ fetch: any, params: any }) {
  export const load = async ({ fetch, params }) => {
    // const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${}&language=en-US&page=1`)
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=7e1af67d95da889535e6fa84e56a36b1&language=en-US&query=${params.id}&page=1`)
    const data = await response.json()

    if (response.ok) {
      return {
        props: {
          results: data.results
        }
      }
    }
  }
</script>

<script lang="ts">
  import MovieCard from '../../components/MovieCard.svelte';
  import type { MovieDetails } from '../../models/Movies'

  export let results: MovieDetails
</script>

<template>
  <div class="searched-movies">
    {#each results as movie}
      <MovieCard {movie} />
    {/each}
  </div>
</template>

<style lang="less">
  .searched-movies {
    @apply grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
  }
</style>
