<template>
  <div class="layout">
    <header class="container mx-auto flex py-2">
      <div class="brand flex-1">
        <strong>
          <g-link to="/">{{ $static.metaData.siteName }}</g-link>
        </strong>
      </div>
      <nav class="nav flex-1 text-right">
        <g-link class to="/">Home</g-link>
        <g-link class="ml-4" to="/about">About</g-link>
        <g-link class="ml-4" to="/characters">Characters</g-link>
      </nav>
    </header>
    <section class="container mx-auto h-full min-h-screen py-8 -mb-20">
      <slot />
    </section>
    <footer class="relative w-full">
      <div class="container mx-auto">
        <a
          class="mr-4"
          href="https://gridsome.org/docs"
          target="_blank"
          rel="noopener"
        >Gridsome Docs</a>
        <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style src="~/assets/css/main.css"></style>