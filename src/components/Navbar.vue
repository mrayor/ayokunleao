<template>
  <div>
    <nav
      class=" container mx-auto flex sm:flex-row flex-col justify-center sm:justify-between items-center py-4"
    >
      <g-link to="/"><img src="../../static/logo.svg" alt="logo"/></g-link>
      <ul class="lowercase flex items-center">
        <li class="m-4 sm:mr-16">
          <g-link
            to="/blog"
            class="hover:text-teal-500 text-lg"
            active-class="text-teal-500"
            >blog</g-link
          >
        </li>
        <li class="m-4 sm:mr-16">
          <g-link
            to="/project"
            class="hover:text-teal-500 text-lg"
            active-class="text-teal-500"
            >project</g-link
          >
        </li>
        <li class="m-4 sm:mr-16">
          <a
            href="mailto:me@ayokunleao.dev?Subject=Hello%20Ayokunle"
            class="hover:text-teal-500 text-lg"
            >contact</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "Navbar"
  };
</script>
