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

  // export async function load<fetch>() {
  export const load = async ({ fetch }) => {
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
  // Models
  import type { Movie } from '../models/Movies'

  // Components
  import PopularMovies from '../components/PopularMovies.svelte'

  // Run Time
  import { fly } from 'svelte/transition'

  export let popularMovies: Movie[]
</script>

<section in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
  <PopularMovies {popularMovies} />
</section>

<style lang="less">
</style>
