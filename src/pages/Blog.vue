<template>
  <BlogLayout>
    <Section
      class="container mx-auto px-4 flex sm:items-center justify-around flex-col sm:flex-row pt-32 sm:pt-24"
    >
      <div class="pt-32 justify-start w-full">
        <h3 class="text-2xl font-bold py-5">recent blog post</h3>
        <div v-for="post in $page.posts.edges" :key="post.id">
          <div class="py-4">
            <a :href="post.node.path"
              ><h1 class="hover:text-teal-500 font-medium">
                {{ post.node.title }}
              </h1></a
            >
            <p class="text-sm truncate">{{ post.node.excerpt }}</p>

            <span class="text-xs font-bold text-red-500">25, March 2019</span>
          </div>
        </div>
      </div>
    </Section>
    <div class="text-center py-4">
      <button
        class="bg-teal-500 text-xs text-white py-2 px-4 rounded hover:bg-teal-700"
      >
        view more
      </button>
    </div>
  </BlogLayout>
</template>

<page-query>
  query { posts: allPost{ edges{ node{ id path title excerpt } } } }
</page-query>

<script>
  import BlogLayout from "~/layouts/Blog";
  export default {
    components: {
      BlogLayout
    },
    metaInfo: {
      title: "Blog"
    }
  };
</script>
