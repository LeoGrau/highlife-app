import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";

//Components from PrimeVue
import Menubar from "primevue/menubar";
import Button from "primevue/button";
import TieredMenu from "primevue/tieredmenu";
import Galleria from "primevue/galleria";

//Styles and icons
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, { ripple: true });

app.component("pv-menu-bar", Menubar);
app.component("pv-button", Button);
app.component("pv-tiered-menu", TieredMenu);
app.component("pv-galleria", Galleria);

app.mount("#app");
