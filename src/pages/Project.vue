<template>
  <ProjectLayout>
    <Section
      class="container mx-auto px-4 flex sm:items-center justify-around flex-col sm:flex-row pt-32 sm:pt-24"
    >
      <div class="pt-32 justify-start w-full pb-24">
        <h3 class="text-2xl font-bold py-5">recent projects</h3>
        <div class="px-2">
          <div class="flex -mx-2 flex-wrap sm:flex-row flex-col">
            <div v-for="portfolio in $page.portfolios.edges" :key="portfolio.id"  class="w-full sm:w-1/4 px-2 mb-10 sm:mb-4">
              <div class="w-full rounded overflow-hidden shadow-lg ">
                <img
                  class="w-full h-56 object-cover"
                  :src="portfolio.node.featuredImage"
                  alt=""
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{{portfolio.node.title}}</div>
                  <p class="text-gray-700 text-base my-4">
                    {{portfolio.node.description}}
                  </p>
                  <div class="flex justify-between">
                    <a class="" :href="portfolio.node.url"
                      ><svg
                        class="stroke-current hover:text-teal-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"
                        ></path>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                      </svg>
                    </a>
                    <div class="hover:text-teal-500">
                      <a :href="portfolio.node.url">visit the project</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div class="text-center py-4">
            <button
              class="bg-teal-500 text-xs text-white py-2 px-4 rounded hover:bg-teal-700"
            >
              view more
            </button>
          </div>
        </div>
      </div>
    </Section>
  </ProjectLayout>
</template>

<page-query>
  query Portfolios {
  portfolios: allPortfolio{
    edges{
      node{
        id
        url
        title
        description
        featuredImage
      }	
    }
  }
}
</page-query>

<script>
  import ProjectLayout from "~/layouts/Project";

  export default {
    components: {
      ProjectLayout
    },
    metaInfo: {
      title: "Projects"
    }
  };
</script>
