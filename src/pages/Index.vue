<template>
  <Layout>
    <Section
      class="container mx-auto px-4 flex sm:items-center justify-around flex-col sm:flex-row pt-32 sm:pt-24"
    >
      <div class="flex-none text-center sm:text-left">
        <div class="text-4xl sm:text-5xl">Hello,</div>
        <div class="text-2xl sm:text-3xl">It is nice to meet you. I am</div>
        <div
          class="text-4xl sm:text-5xl font-semibold tracking-widest text-teal-500"
        >
          Ayokunle AO.
        </div>
        <div class="border-t border-gray-800">
          <p class="text-lg my-2">Software Developer and Creative Designer.</p>
        </div>
        <div>
          <ul class="flex flex-wrap justify-center sm:justify-start">
            <li class="mr-2 flex">
              <img src="../../static/linkedin-brands.svg" alt="linkedin" />
              <a
                href="https://www.linkedin.com/in/ayokunle-adesanya-2a217b89/"
                class="hover:text-teal-500 mx-2"
                target="__blank"
                >LinkedIn
              </a>
            </li>
            <li class="mx-2 flex">
              <img src="../../static/github-square-brands.svg" alt="github" />
              <a
                href="https://github.com/mrayor"
                class="hover:text-teal-500 mx-2"
                target="__blank"
                >Github
              </a>
            </li>
            <li class="mx-2 flex">
              <img src="../../static/medium-brands.svg" alt="medium" />
              <a
                href="https://medium.com/@adesanyaayokunle"
                class="hover:text-teal-500 mx-2"
                target="__blank"
                >Medium
              </a>
            </li>
            <li class="mx-2 flex justify-center">
              <img src="../../static/envelope-square-solid.svg" alt="mail" />
              <a
                href="mailto:me@ayokunleao.dev?Subject=Hello%20Ayokunle"
                class="hover:text-teal-500 mx-2"
                >me@ayokunleao.dev
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="py-4">
        <img src="../../static/undraw_laravel_and_vue_59tp.svg" alt="hero" />
      </div>
    </Section>
    <section
      class="container mx-auto flex flex-col sm:flex-row  justify-between py-6"
    >
      <div>
        <h3 class="text-xl font-medium py-5">blog post</h3>
        <div v-for="post in $page.posts.edges" :key="post.id">
          <div class="py-1">
            <g-link :to="post.node.path"
              ><h1 class="hover:text-teal-500 truncate">
                {{ post.node.title }}
              </h1></g-link
            >
            <span class="text-xs font-bold">{{ post.node.date | formatDate }}</span>
          </div>
        </div>
        <g-link to="/blog" class="hover:text-teal-500 text-sm py-2"
          >view more >></g-link
        >
      </div>

      <div>
        <h3 class="text-xl font-medium py-5">recent projects</h3>
        <div v-for="portfolio in $page.portfolios.edges" :key="portfolio.id">
          <div class="py-1">
            <a :href="portfolio.node.url" target="_blank"
              ><h1 class="hover:text-teal-500 truncate">
                {{ portfolio.node.title }}
              </h1></a
            >
            <span class="text-xs font-bold">{{ portfolio.node.date | formatDate }}</span>
          </div>
        </div>
        <g-link to="/project" class="hover:text-teal-500 text-sm py-2"
          >view more >></g-link
        >
      </div>
      <div>
        <h3 class="text-xl font-medium py-5">recent pictures</h3>
        <div v-for="portfolio in $page.portfolios.edges" :key="portfolio.id">
          <div class="py-1">
            <a :href="portfolio.node.featuredImage" target="_blank"
              ><h1 class="hover:text-teal-500 truncate">
                {{ portfolio.node.imageName }}
              </h1></a
            >
            <span class="text-xs font-bold">{{ portfolio.node.date | formatDate }}</span>
          </div>
        </div>
        <g-link to="/project" class="hover:text-teal-500 text-sm py-2"
          >view more >></g-link
        >
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query post($page: Int) { posts: allPost(perPage: 3, page: $page,
  sortBy:"date"){ edges{ node{ id path title date} } } portfolios:
  allPortfolio(perPage: 3, page: $page, sortBy:"date"){ edges{ node{ id title
  url featuredImage imageName date } } } }
</page-query>

<script>
  export default {
    metaInfo: {
      title: "Home",
      meta: [
        {
          key: "description",
          name: "Home",
          content:
            "My name is Ayokunle, I am a designer from Nigeria. Welcome to my portfolio"
        }
      ]
    }
  };
</script>
