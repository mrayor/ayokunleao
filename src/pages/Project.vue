<template>
  <ProjectLayout>
    <Section
      class="container mx-auto px-4 flex sm:items-center justify-around flex-col sm:flex-row sm:pt-16"
    >
      <div class=" justify-start w-full pb-24">
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
                    <a class="" :href="portfolio.node.url" target="__blank" rel="noopener"
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
                      <a :href="portfolio.node.url" target="__blank" rel="noopener">visit the project</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div class="text-center py-8">
              <Pager linkClass="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded-full sm:mx-4 mx-2" :info="$page.portfolios.pageInfo" range="3"/>
              <p v-if="$page.portfolios.pageInfo.totalPages > 1" class="py-4 text-red-500">page {{$page.portfolios.pageInfo.currentPage}} of {{$page.portfolios.pageInfo.totalPages}}</p>
          </div>
        </div>
      </div>
    </Section>
  </ProjectLayout>
</template>

<page-query>
    query Portfolios($page: Int) {
      portfolios: allPortfolio(perPage: 8, page: $page sortBy:"date")  @paginate {
        pageInfo {
          totalPages
          currentPage
        }
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
  import { Pager } from 'gridsome'
  import ProjectLayout from "~/layouts/Project";

  export default {
    components: {
      ProjectLayout, 
      Pager
    },
    metaInfo: {
      title: "Projects",
      meta: [
      { key: 'description', name: 'Recent Projects', content: 'My Creative Personal Portfolio' }
    ]
    }
  };
</script>
