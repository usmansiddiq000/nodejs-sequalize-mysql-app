# nodejs-sequalize-mysql-app
Created by Muhammad Usman Siddiq

```
git clone https://github.com/usmansiddiq000/nodejs-sequalize-mysql-app.git
```

## Available Scripts

In the project directory, you can run:

```npm install```



```npm start```

Runs the app in the development mode.<br>
Open [http://localhost:3000/users/add-user]

## Integrating Sequalize with express(node) steps for mysqli database

```npm install --save sequelize mysql2``` 

```npm install -g sequelize-cli```

```sequelize init```

It will initialize folder for models, config, etc

```sequelize model:create --name User --attributes name:string```

This command will create models "Users" with attributes name, updatedAt, createdAt, id

```sequelize db:migrate```

migrating models 

```sequelize migration:create --name User```

Create migration (Adding column etc) e.g..

```
up: async (queryInterface, Sequelize) => {
    return Promise.all([
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
  }
````
then

```sequelize db:migrate```

To undo migration most recent migration

```sequelize db:migrate:undo```

To run procedure (test is db name)

```mysql -u 'root' -p test < sql_scripts/userProcedure.sql(Path to .sql file)  ```

