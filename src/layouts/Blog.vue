<template>
  <div class="font-display flex flex-col min-h-screen antialiased ">
    <header class="border-t-8 border-teal-500 w-full fixed">
      <header class="fixed bg-white w-full ">
        <Navbar />
      </header>
    </header>
    <header class="mt-32 sm:mt-24">
      <div class="bg-cream">
        <h1 class="text-2xl sm:text-3xl font-bold py-4 text-center">Tech talk <br>and other interesting things</h1>
      </div>
    </header>
    <main class="flex-grow">
      <div>
        <slot/>
      </div>
        
    </main>
    <footer class="bg-cream">
      <div class="container mx-auto flex flex-col sm:flex-row items-center justify-between py-6">
        <ul class="flex items-center">
          <li class="mx-4 sm:mr-12"><a href="#"><img src="../../static/whatsapp.svg" alt="logo"></a></li>
          <li class="mx-4 sm:mr-12"><a href="#"><img src="../../static/instagram.svg" alt="logo"></a></li>
          <li class="mx-4 sm:mr-12"><a href="#"><img src="../../static/twitter.svg" alt="logo"></a></li>
          <li class="mx-4 sm:mr-12"><a href="#"><img src="../../static/facebook.svg" alt="logo"></a></li>
        </ul>
        <div class="mt-4 sm:mt-0 text-sm">Copyright © {{ new Date().getFullYear() }}. All rights reserved</div>
      </div>  
    </footer>
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

export default {
  components: {
    Navbar
  },
}
</script>