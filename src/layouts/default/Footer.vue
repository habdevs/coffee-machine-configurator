<template>
  <v-footer elevation="5" id="footer-wrapper">
    <div class="bg-teal d-flex w-100 align-center px-4">
      <strong>Get connected with us on social networks!</strong>

      <v-spacer></v-spacer>

    </div>

    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
</script>

<style>
#footer-wrapper {
  position: relative !important;
  bottom: 116px !important;
  left: 0 !important;
}
</style>
