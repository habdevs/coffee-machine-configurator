import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

interface CoffeeMachineConfiguration {
  id: string;
  size: string;
  drinkCount: number;
}

export const useCoffeeMachineStore = defineStore('coffeeMachine', {
  state: () => ({
    size: 'standard',
    drinkCount: 0,
    storedItems: [] as CoffeeMachineConfiguration[], 
  }),
  persist: true,
  actions: {
    setSize(size: string) {
      this.size = size;
    },
    setDrinkCount(drinkCount: number) {
      this.drinkCount = drinkCount;
    },
    resetConfiguration() {
      this.size = 'standard';
      this.drinkCount = 0;
    },
    getStoredItems() {
      return this.storedItems;
    },
    addToStorage(item: Omit<CoffeeMachineConfiguration, 'id'>) {
      const newItem: CoffeeMachineConfiguration = {
        id: uuidv4(),
        size: item.size,
        drinkCount: item.drinkCount,
      };
      this.storedItems.push(newItem);
      console.log(`Добавлен элемент в хранилище:`, newItem);
    },
  },
})
