const express = require('express');
// npm run dev : script
const {ServerConfig , Logger}=require('./config');
const apiRoutes=require('./routes/index')

const app=express();

app.use('/api',apiRoutes);
app.listen(ServerConfig.PORT,()=>{
    console.log(`successfully started server on PORT ${ServerConfig.PORT}`);
    Logger.info("successfully started the server ",{})
}); 