/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
import { mdiLaptop, mdiClose, mdiPhone, mdiArrowUpThick } from "@mdi/js";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases: {
      ...aliases,
      laptop: mdiLaptop,
      close: mdiClose,
      phone: mdiPhone,
      arrowUp: mdiArrowUpThick,
    },
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "dark",
  },
});
