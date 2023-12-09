//conexion a bd
import express from "express";
import {sequelize} from "./database/database.js"


async function main(){
  await sequelize.sync({ alter: true })
  try{
    
    await sequelize.authenticate();
    console.log('Succesfuly connection');

    await sequelize.sync()

    const app = express()
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))


    const puerto = 3000; 
    app.listen(puerto, () => {
      console.log(`Servidor escuchando en el puerto ${puerto}`);
    });
    
  }catch(e){
    console.log("Error al conectar a la base de datos:", e);
  }
}

main();