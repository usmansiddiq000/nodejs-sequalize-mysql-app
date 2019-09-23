'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addColumn('Users', 'gender', {
        type: Sequelize.STRING
      });
      await queryInterface.addColumn('Users', 'nickname', {
        type: Sequelize.STRING
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },

  /**
   * we can Use 
   * 
   * return Promise.all([
      queryInterface.addColumn(
        'Users',
        'gender',
         {
        type: Sequelize.STRING
        }
       ),
      queryInterface.addColumn(
        'Users',
        'nikname',
        {
        type: Sequelize.STRING
        }
      )
    ]);

    OR

    return queryInterface.addColumn(
        'Users',
        'gender',
        {
        type: Sequelize.STRING
        }
       )
      .then(() => {
          return queryInterface.addColumn(
            'Users',
            'nikname',
            {
              type: Sequelize.STRING
            }
          )
        })
   */

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.removeColumn('Users', 'gender');
      await queryInterface.removeColumn('Users', 'nickname');
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }
};
