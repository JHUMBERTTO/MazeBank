//conexion a bd
import express from "express";
import {sequelize} from "./database/database.js"
import router from "./routes/mazeBankRoutes.js";


async function main(){
  try{
    
    await sequelize.authenticate();
    console.log('Successfully connection');

    await sequelize.sync({ alter: true})

    const app = express()
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))

    app.use("/", express.static("src/public"));
    app.use("/", router)

    const port = 3000; 
    app.listen(port, () => {
      console.log(`Server listening ${port}`);
    });
    
  }catch(e){
    console.log("Error connection to db:", e);
  }
}

main();