<template>
  <Layout>
    <Section
      class="container mx-auto px-4 flex sm:items-center justify-around flex-col sm:flex-row pt-32 sm:pt-24"
    >
      <div>
        <img src="../../static/undraw_not_found_60pq.svg" alt="" />
      </div>
      <div class="text-center sm:text-left">
        <p class="text-3xl font-medium tracking-wide">404</p>
        <h3 class="text-5xl font-bold tracking-widest">Lost in the woods</h3>
        <p class="tracking-wide text-2xl">
          Looks like there's nothing out here
        </p>
        <div class="my-10">
          <g-link
            to="/"
            class="bg-teal-500 text-xs text-white py-2 px-4 rounded hover:bg-teal-700"
          >
            go home
          </g-link>
        </div>
      </div>
    </Section>
  </Layout>
</template>
