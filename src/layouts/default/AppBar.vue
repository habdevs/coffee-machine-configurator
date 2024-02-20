<template>
  <v-app-bar id="header-wrapper">
    <v-list-item class="d-none d-md-block" v-for="(item, index) in menuItems" link :key="index" :title="item.label"
      :href="item.routeName"></v-list-item>
    <template v-slot:prepend>
      <router-link to="/">
        <img src="@/assets/aisa-logo.svg" alt="Logo" height="100" width="100" />
      </router-link>
    </template>
    <v-app-bar-nav-icon class="d-block d-md-none" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  </v-app-bar>
  <v-navigation-drawer class="d-block d-md-none" v-model="drawer" location="left" temporary>
    <v-list-item v-for="(item, index) in menuItems" link :key="index" :title="item.label"
      :href="item.routeName"></v-list-item>
  </v-navigation-drawer>
</template>

<script setup lang='ts'>
import { ref } from "vue";

const drawer = ref(false);
const menuItems = ref([
  { label: "Выбор напитка", routeName: "/" },
  { label: "Список позиций", routeName: "services" },
]);
</script>

<style>
#header-wrapper {
  position: relative !important;
  margin: 0 auto !important;
}
</style>
