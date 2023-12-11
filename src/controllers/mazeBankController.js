import app from "../firebaseConfig.js";
import initModels from "../models/init-models.js";
import { sequelize } from "../database/database.js";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"


let models  = initModels(sequelize);
//function register user

export const createUserAndAccount = async (req, res) =>{
  try {
    const { email, password, name, lastname, phone } = req.body;
    console.log(req.body)
    let user;
    let auth = getAuth(app)

    //create user in my db
    const newUser = await models.user.create({
      email,
      password,
      name,
      lastname,
      phone,
    });

    //register user in firebase auth
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const firebaseUser = userCredential.user;
      console.log('user singup succesfully on firebase:', firebaseUser);
    } catch (e) {
      console.error('Error when trying to singup a user on firebase:', e);
    }
    
    
    user = await models.user.findOne({
      where: {
        email: email,
        password: password,
      },
    });
    
    const user_id = user.id;
    const balance = 0
    
    const newAccount = await models.account.create({
      balance,
      user_id
    })
    
    res.status(201).json({
      mensage: "user and account was succesfully created",
      user: newUser,
      account: newAccount,
    });
    

  } catch (e) {
    console.error('Error:', e);
  }
}