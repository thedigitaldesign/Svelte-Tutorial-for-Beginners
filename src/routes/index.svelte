<!-- <script context="module" lang="ts"> is a SSR (Server Side Render) module -->
<script context="module" lang="ts">
  /// API Key
  /**
   * 7e1af67d95da889535e6fa84e56a36b1
   */

  /// Example API Request
  /**
   * https://api.themoviedb.org/3/movie/550?api_key=7e1af67d95da889535e6fa84e56a36b1
   */

  export async function load<fetch>() {
    // const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${}&language=en-US&page=1`)
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7e1af67d95da889535e6fa84e56a36b1&language=en-US&page=1`)
    const data = await response.json()

    if (response.ok) {
      return {
        props: {
          popularMovies: data.results
        }
      }
    }
  }
</script>

<script lang="ts">
  import type { Movie } from '../models/Movies'
  import PopularMovies from '../components/PopularMovies.svelte'

  export let popularMovies: Movie[]
</script>

<template>
  <!-- <PopularMovies movies={popularMovies} /> -->
  <PopularMovies {popularMovies} />
</template>

<style lang="less">
</style>
