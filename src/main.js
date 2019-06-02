// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "./assets/css/tailwind.css";
import VueDisqus from "vue-disqus";
import DefaultLayout from "~/layouts/Default.vue";
import moment from 'moment'

export default function(Vue, { router, head, isClient, appOptions }) {
  Vue.use(VueDisqus);
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Raleway:400,500,600,700&display=swap"
  });
  Vue.filter('formatDate', function(value) {
    if (value) {
      return moment(String(value)).format('LLL')
    }
  });
  head.htmlAttrs = { lang: "en" };
  head.meta.push({
    name: "keywords",
    content:
      "HTML,CSS,PHP,JavaScript,Creative,Designer,Developer,Nigeria,Laravel,Freelance,Vuejs,Gridsome,Nuxt,Application,Website,Graphics,Video,Animation"
  });
  appOptions.render = h =>
    h(
      "transition",
      { props: { name: "slide-fade", mode: "out-in" } },
      // The router-view component as defined in 0.5.4
      [h("router-view", { attrs: { id: "app" } })]
    );
}
