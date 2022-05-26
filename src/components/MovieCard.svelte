<script lang="ts">
  import type { Movie } from '../models/Movies'
  
  export let movie: Movie
</script>

<template>
  <h1 class="text-2xl">{movie.title}</h1>
</template>

<style lang="less">
</style>
