<template>
  <Layout>
    <div>
      <h1>Character Detail</h1>

      <div class="w-72 mx-auto rounded overflow-hidden shadow-lg mb-4 mt-4">
        <g-image class="w-full" :src="$page.blogPosts.image" :alt="$page.blogPosts.name" />
        <div class="px-6 py-4">
          <h2 class="text-center">{{ $page.blogPosts.name }}</h2>
        </div>
        <div class="px-6 py-4 text-center">
          <h2>Episodes</h2>
          <ul v-for="(ep, index ) in $page.blogPosts.episode" :key="index">
            <li>Episode: {{ index + 1}}</li>
          </ul>
        </div>
        <div class="px-6 py-4 text-center">
          <span
            class="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >{{ $page.blogPosts.status}}</span>
          <span
            class="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >{{ $page.blogPosts.species}}</span>
          <span
            class="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
          >{{ $page.blogPosts.gender}}</span>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Character"
  }
};
</script>
<page-query>
query BlogPost($path: String) {
  blogPosts(path: $path) {
    id
    name
    status
    species
    type
    gender
    origin {
      name
      url
    }
    location {
      name
      url
    }
    image
    episode
    url
    created
  }
}

</page-query>