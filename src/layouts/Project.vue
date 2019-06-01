<template>
  <div class="font-display flex flex-col min-h-screen antialiased ">
    <header class="border-t-8 border-teal-500 w-full fixed">
      <header class="fixed bg-white w-full ">
        <Navbar />
      </header>
    </header>
    <header class="mt-32 sm:mt-24">
      <div class="bg-cream">
        <h1 class="text-2xl sm:text-3xl font-bold py-4 text-center">Some interesting <br>projects i have worked on</h1>
      </div>
    </header>
    <main class="flex-grow">
      <div>
        <slot/>
      </div>
        
    </main>
<Footer/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
}
</script>