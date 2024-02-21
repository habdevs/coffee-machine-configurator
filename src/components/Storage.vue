<template>
  <div class="storage-wrapper">
    <h1>Хранимые элементы</h1>
    <div v-for="item in storedItems" :key="item.id">
      <h2>{{ item.size === 'standard' ? 'Стандартный' : 'Увеличенный' }}</h2>
      <p>Количество напитков: {{ item.drinkCount }}</p>
      <button @click="editDrinkCount(item.id, 'increment')" class='custom-button'>+</button>
      <button @click="editDrinkCount(item.id, 'decrement')" class='custom-button'>-</button>
      <button @click="removeItem(item.id)" class="custom-button">Удалить</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCoffeeMachineStore } from '@/store/coffeeMachine';

const coffeeMachineStore = useCoffeeMachineStore();

const storedItems = computed(() => coffeeMachineStore.storedItems);
console.log(storedItems.value);

const editDrinkCount = (itemId: string, action: string) => {
  const currentItem = storedItems.value.find(item => item.id === itemId);
  if (currentItem) {
    const newDrinkCount = action === 'increment'
      ? currentItem.drinkCount + 1
      : currentItem.drinkCount - 1;

    coffeeMachineStore.editStorageItem(itemId, newDrinkCount);
  }
};

const removeItem = (itemId: any) => {
  coffeeMachineStore.removeStorageItem(itemId);
};

</script>

<style scoped>
.storage-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

.custom-button {
  max-width: 200px;
  width: 100%;
  background-color: inherit;
  color: white;
  margin: 5px;
  padding: 5px;
  border: 1px solid white;
  cursor: pointer;
  border-radius: 8px;
}

.custom-button:hover {
  background-color: gray;
  color: white;
}
</style>
