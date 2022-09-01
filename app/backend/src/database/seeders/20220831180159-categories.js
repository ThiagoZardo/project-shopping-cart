module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'categories',
      [
        {
          name_category: 'Notebooks',
        },
        {
          name_category: 'Celulares',
        },
        {
          name_category: 'Smartwatches',
        }  
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('categories', null, {});
  },
};
