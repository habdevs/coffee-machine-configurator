<template>
  <div class="storage-wrapper">
    <h1>Хранимые элементы</h1>
    <div v-for="item in storedItems" :key="item.id">
      <h2>{{ item.size === 'standard' ? 'Стандартный' : 'Увеличенный' }}</h2>
      <p>Количество напитков: {{ item.drinkCount }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCoffeeMachineStore } from '@/store/coffeeMachine';

const coffeeMachineStore = useCoffeeMachineStore();

const storedItems = computed(() => coffeeMachineStore.storedItems);
console.log(storedItems.value);
</script>

<style scoped>
.storage-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}
</style>
