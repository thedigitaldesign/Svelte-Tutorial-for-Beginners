<script lang="ts">
  import { goto } from '$app/navigation'
  let searchValue: string

  const submitSearch = () => {
    goto(`/search/${searchValue}`)
  }
</script>

<template>
  <div class="mt-10 sm:mt-12">
    <form on:submit|preventDefault={submitSearch} class="sm:max-w-xl sm:mx-auto lg:mx-0">
      <div class="sm:flex">
        <div class="min-w-0 flex-1">
          <label for="search_movie" class="sr-only">Search movies</label>
          <input
            type="text"
            bind:value={searchValue}
            name="search_movie"
            placeholder="Search movies"
            autocomplete="off"
            class="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
          />
        </div>
        <div class="mt-3 sm:mt-0 sm:ml-3">
          <button
            type="submit"
            class="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
            >Search</button
          >
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="less">
</style>
