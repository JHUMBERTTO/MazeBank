import app from "../firebaseConfig.js";
import initModels from "../models/init-models.js";
import { sequelize } from "../database/database.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"



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
    } catch (error) {
      console.error('Error when trying to singup a user on firebase:', error);
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
    

  } catch (error) {
    console.error("Error when validating user:", error);
    res.status(500).json({
      mensaje: "Internal server error",
      error: error.message,
    });
  }
}

//function login user
export const loginUser = async (req,res) =>{
  try {
    const { email, password } = req.body;
    let auth = getAuth(app)

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const firebaseUser = userCredential.user;
      
      let postgresUser = await models.user.findOne({ where: { email } });
      
      console.log('user signed in succesfully on firebase:', firebaseUser);

      res.status(200).json({
        message: "Login successful",
        user: {
          postgresUserId: postgresUser.id,
          firebaseUserId: firebaseUser.uid,
          email: firebaseUser.email,
        },
      });

    } catch (error) {
      console.error('Error when trying to singup a user on firebase:', error);
    }
  } catch (error) {
    console.error("Error when validating user:", error);
    res.status(500).json({
      mensaje: "Internal server error",
      error: error.message,
    });
  }
}

