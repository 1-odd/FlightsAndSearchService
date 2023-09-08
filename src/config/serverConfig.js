const dotenv = require('dotenv');

// this file is for creating your Environment variable and export it to other file so they can use these 

dotenv.config();
module.exports = {
    PORT: process.env.PORT
}