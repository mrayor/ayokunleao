<template>
  <Layout>
    <Section
      class="container mx-auto px-4 flex justify-around flex-col pt-40">
      <div class="xl:ml-40 ml-4"> <g-link to="/blog"
              class="bg-teal-500 text-xs text-white py-2 px-4 rounded hover:bg-teal-700"
            >
              visit blog
      </g-link></div>
      <div class="markdown-body">
        <h1>{{$page.post.title}}</h1>
        <img class="w-full h-auto object-cover" :src="$page.post.featuredImage" alt="blog">
        <div v-html="$page.post.content" />
        <span class="text-xs font-bold text-red-500">Published: {{$page.post.date | formatDate}}</span>
             


      </div> 
       <div class="sharethis-inline-share-buttons"></div>
      <vue-disqus class="mb-10" shortname="ayokunleao" :identifier="$page.post.title"></vue-disqus>
    </Section>
    </Layout>
</template>

<page-query>
  query Post ($path: String!) { post: post (path: $path){ title content featuredImage date } }
</page-query>

<style>
  .markdown-body {
    font-family: Raleway, Roboto, sans-serif;
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
  }

  @media (max-width: 767px) {
    .markdown-body {
      padding: 15px;
    }
  }
</style>

<script>
  import "../../node_modules/github-markdown-css/github-markdown.css";
  export default {
    metaInfo() {
      return {
        title: this.$page.post.title,
        key: 'description',
        name: this.$page.post.title,
        content: this.$page.post.content
      };
    }
  };
</script>
