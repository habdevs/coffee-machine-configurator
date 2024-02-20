<template>
  <div class="configurator-wrapper">
    <v-card-text class="configurator-size">
      <label>Размер устройства:</label>
      <v-select rounded="lg" v-model="size" :items="drinkOptions.map(option => option.size)"
        label="Выберите размер"></v-select>

      <v-img v-if="size === 'standard'" src="@/assets/standard-coffee-machine.png" alt="Стандартная кофемашина"
        height="100" width="100"></v-img>

      <v-img v-else-if="size === 'large'" src="@/assets/large-coffee-machine.png" alt="Увеличенная кофемашина"
        height="100" width="100"></v-img>
      <v-img v-else-if="size === 'veryLarge'" src="@/assets/very-coffee-machine.png" alt="Огромная кофемашина"
        height="100" width="100"></v-img>
    </v-card-text>


    <v-card-text class="configurator-drink-count">
      <label>Количество напитков:</label>
      <v-select rounded="lg" v-model="drinkCount" :items="drinkOptions.map(option => option.drinkCount)"
        label="Выберите количество"></v-select>
    </v-card-text>
    <v-btn @click="addToStorage">Добавить в хранилище</v-btn>
    <h2>Выбранные опции:</h2>
    <p>Размер: {{ size === "standard" ? "Стандартный" : "Увеличенный" }}</p>
    <p>Количество напитков: {{ drinkCount }}</p>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import axios from "axios";
const PORT = import.meta.env.COFFEE_BACKEND_PORT

import { useCoffeeMachineStore } from '@/store/coffeeMachine';

const coffeeMachineStore = useCoffeeMachineStore();

interface CoffeeMachineConfiguration {
  size: string;
  drinkCount: number;
}


const size = ref<string>("standard");
const drinkCount = ref<number | null>();
const drinkOptions = ref<CoffeeMachineConfiguration[]>([]);


onMounted(async () => {
  try {
    const response = await axios.post(`http://localhost:${PORT}/graphql`, {
      query: `
        query {
          getCoffeeMachineConfigurations {
            size
            drinkCount
          }
        }
      `,
    });

    if (response.status === 200) {
      drinkOptions.value = response.data.data.getCoffeeMachineConfigurations;
      console.log(drinkOptions.value);
    } else {
      console.error("Ошибка при получении данных:", response.statusText);
    }
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
  }
});

const addToStorage = () => {
  coffeeMachineStore.setSize(size.value);
  coffeeMachineStore.setDrinkCount(drinkCount.value || 0);
  console.log(`добавлено: ${size.value} and ${drinkCount.value}`);

  coffeeMachineStore.addToStorage({
    size: size.value,
    drinkCount: drinkCount.value || 0,
  });
};

</script>

<style scoped>
.configurator-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

.configurator-size,
.configurator-drink-count {
  width: 300px;
  margin-bottom: 20px;
}
</style>
