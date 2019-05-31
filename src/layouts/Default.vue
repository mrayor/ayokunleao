<template>
  <div class="font-display flex flex-col min-h-screen antialiased ">
    <header class="border-t-8 border-teal-500 w-full fixed">
      <header class="fixed bg-white w-full ">
        <Navbar />
      </header>
      
    </header>
    <transition name="page-fade" >
    <main class="flex-grow">
      <div>
        <slot/>
      </div>
        
    </main>
    </transition>
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
<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

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
