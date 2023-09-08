const express = require('express');

const {PORT} = require('./config/serverConfig');


const setupAndStartServer = async ()=>{
    
    // Create a new Express application.
    const app = express();
    app.listen(PORT,()=>{
        console.log(`Server has started at port ${PORT}`);
      
    });
}

setupAndStartServer();