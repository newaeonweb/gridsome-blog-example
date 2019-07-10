<template>
  <Layout>
    <div class="mb-8">
      <h1>Characters</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>

      <div class="flex flex-wrap -mx-2 mt-5">
        <div
          class="w-full sm:w-1/3 md:w-1/4 px-2"
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
        >
          <div class="rounded overflow-hidden shadow-lg mb-4">
            <g-image class="w-full" :src="edge.node.image" :alt="edge.node.image" srcset />
            <div class="px-6 py-4">
              <h2 class="text-center">
                <g-link
                  class="text-teal-500"
                  :to="`characters/${edge.node.id}`"
                >{{ edge.node.name }}</g-link>
              </h2>
            </div>
            <div class="px-6 py-4 text-center">
              <span
                class="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >{{ edge.node.status}}</span>
              <span
                class="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >{{ edge.node.species}}</span>
              <span
                class="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
              >{{ edge.node.gender}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Characters"
  }
};
</script>
<page-query>
query BlogPosts {
  posts: allBlogPosts (sortBy: "id", order: ASC) {
    edges {
      node { 
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
  }
}
</page-query>