# Welcome to flights services

## Project setup -:

- Clone the project on your local system
- Execute `npm install` at the same path of root directory.
- Create a `.env` file in root directory and add the following environment variable in the file -:

        - `PORT = 3000`

- Inside the `src/config` folder create a file `config.json` and add some details of your Database in this given peace of json file and add it

```

          {

  "development": {
  "username": "<Your_DB_LOGIN_NAME>",
  "password": "<YOUR_DB_PASSWORD>",
  "database": "Flights_Search_DB_Dev",
  "host": "127.0.0.1",
  "dialect": "mysql"
     }
  }

```

- Once you have added these details then go to `src` folder from your terminal and execute this command `npx sequelize db:create`


## Database Design

 - Airplane Table
 - Flights Table
 - Airport Table
 - City Table

 - A flight belongs to an airplane but one airplane can be used in multiple flights.
 - A city can have multiple airports but an airport belongs to a single city.
 - A airport can have multiple flights but a flight belongs to a single airport.