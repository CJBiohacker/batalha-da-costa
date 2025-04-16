import { createApp } from "vue";
import { createVuetify } from "vuetify";
import { router } from "@/router/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faInstagram,
  faTiktok,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faArrowRight, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "@/App.vue";
import "@/assets/fonts/fonts.css";
import "vuetify/styles";

const vuetify = createVuetify({
  components,
  directives,
});

library.add(faInstagram, faTiktok, faFacebook, faLinkedin, faArrowLeft, faArrowRight, faArrowsRotate);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(vuetify)
  .mount("#app");
