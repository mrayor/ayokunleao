<template>
  <div>
    <footer class="bg-cream">
      <div
        class="container mx-auto flex flex-col sm:flex-row items-center justify-between py-6"
      >
        <ul class="flex items-center">
          <li class="mx-4 sm:mr-12">
            <a
              href="https://wa.me/2348034387186?text=Hello%20Ayokunle"
              target="__blank"
              ><img src="../../static/whatsapp.svg" alt="whatsapp"
            /></a>
          </li>
          <li class="mx-4 sm:mr-12">
            <a href="https://www.instagram.com/mrayor/" target="__blank"
              ><img src="../../static/instagram.svg" alt="instagram"
            /></a>
          </li>
          <li class="mx-4 sm:mr-12">
            <a href="https://twitter.com/Haryorkunle" target="-_blank"
              ><img src="../../static/twitter.svg" alt="twitter"
            /></a>
          </li>
          <li class="mx-4 sm:mr-12">
            <a
              href="https://facebook.com/haryorkunle.hardehsanyah"
              target="__blank"
              ><img src="../../static/facebook.svg" alt="facebook"
            /></a>
          </li>
        </ul>
        <div class="mt-4 sm:mt-0 text-sm">
          Copyright © {{ new Date().getFullYear() }}. All rights reserved
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  };
</script>
