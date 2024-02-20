const coffeeMachines = [
  {
    size: "standard",
    drinkCount: 6,
  },
  {
    size: "large",
    drinkCount: 8,
  },
  {
    size: "veryLarge",
    drinkCount: 12,
  },
];

const resolvers = {
  Query: {
    getCoffeeMachineConfigurations: () => coffeeMachines,
  },
  Mutation: {
    addToStorage: (_, { size, drinkCount }) => {
      const newCoffeeMachine = { size, drinkCount };
      coffeeMachines.push(newCoffeeMachine);
      return newCoffeeMachine;
    },
  },
};

export default resolvers;
