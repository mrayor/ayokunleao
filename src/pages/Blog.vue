<template>
  <BlogLayout>
    <Section
      class="container mx-auto px-4 flex sm:items-center justify-around flex-col sm:flex-row sm:pt-16"
    >
      <div class="justify-start w-full">
        <h3 class="text-2xl font-bold py-5">recent blog post</h3>
        <div v-for="post in $page.posts.edges" :key="post.id">
          <div class="py-4">
            <a :href="post.node.path"
              ><h1 class="hover:text-teal-500 font-medium">
                {{ post.node.title }}
              </h1></a
            >
            <p class="text-sm truncate">{{ post.node.excerpt }}</p>

            <span class="text-xs font-bold text-red-500">{{post.node.date | formatDate}}</span>
          </div>
        </div>
      </div>
    </Section>
    <div class="text-center py-8">
        <Pager linkClass="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded-full sm:mx-4 mx-2" :info="$page.posts.pageInfo" range="3"/>
        <p v-if="$page.posts.pageInfo.totalPages > 1" class="py-4 text-red-500">page {{$page.posts.pageInfo.currentPage}} of {{$page.posts.pageInfo.totalPages}}</p>
    </div>
  </BlogLayout>
</template>

<page-query>
    query Posts($page: Int) { 
      posts: allPost(perPage: 10, page: $page sortBy:"date") @paginate{
        pageInfo {
          totalPages
          currentPage
        }
        edges{
          node{ 
            id 
            path 
            title 
            date
            excerpt 
          } 
        } 
      } 
    }</page-query>

<script>
  import { Pager } from 'gridsome'
  import BlogLayout from "~/layouts/Blog";
  export default {
    components: {
      BlogLayout,
      Pager
    },
    metaInfo: {
      title: "Blog",
      meta: [
      { key: 'description', name: 'Blog', content: 'Tech talk and other interesting things' }
    ]
    }
  };
</script>
