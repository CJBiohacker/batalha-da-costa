import { createApp } from "vue";
import { router } from "@/router/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faInstagram,
  faTiktok,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import App from "@/App.vue";
import "@/assets/fonts/fonts.css";

library.add(faInstagram, faTiktok, faFacebook, faLinkedin);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
