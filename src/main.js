import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import 'bootstrap'
import './assets/style.scss'

createApp(App)
  .use(router)
  .mount("#app");
