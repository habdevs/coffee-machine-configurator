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
    editStorageItem(itemId: string, newDrinkCount: number) {
      const itemIndex = this.storedItems.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1) {
        this.storedItems[itemIndex].drinkCount = newDrinkCount;
        console.log(`Изменено количество напитков для элемента с id ${itemId}: ${newDrinkCount}`);
      }
    },
    removeStorageItem(itemId: string) {
    this.storedItems = this.storedItems.filter(item => item.id !== itemId);
    console.log(`Элемент с id ${itemId} удален из хранилища`);
  },
  },
})
