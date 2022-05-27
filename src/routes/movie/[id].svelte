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
    const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=7e1af67d95da889535e6fa84e56a36b1&language=en-US&page=1`)
    const data = await response.json()

    if (response.ok) {
      return {
        props: {
          details: data
        }
      }
    }
  }
</script>

<script lang="ts">
  import type { MovieDetails } from '../../models/Movies'

  export let details: MovieDetails
</script>

<template>
  <div class="movie-details">
    <div class="poster-container">
      <img src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`} alt={details.title} />
    </div>

    <div class="details-container">
      <h1 class="text-4xl mt-4 mb-2">{details.title}</h1>
      <p class="mb-8">{details.overview}</p>

      <h2 class="text-2xl mb-2">Movie details</h2>
      <ul>
        <li>
          <span class="font-bold">Release date:</span>
          {details.release_date}
        </li>
        <li>
          <span class="font-bold">Budget:</span>
          {details.budget}
        </li>
        <li>
          <span class="font-bold">Rating:</span>
          {details.vote_average}
        </li>
        <li>
          <span class="font-bold">Runtime:</span>
          {details.runtime}mins
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less">
  .details-container {
    > ul > li {
      @apply mb-1;
    }
  }
</style>
