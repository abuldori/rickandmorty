const { User } = require("../DB_connection");
//require('dotenv').config();
const DB_EMAIL = "andrea@gmail.com";
const DB_PASSWORD = "123andy"


const login = async (req, res) => {
    const { email, password } = req.query;
    try {
      if (!email || !password) {
         return res.status(400).json({ message: "Faltan datos" });
      }
      if (email === DB_EMAIL && password === DB_PASSWORD) {
        return res.status(200).json({ access: true });
      }
     
      } catch (error) {
        return res.status(404).json({ access: false });
      }
    }


  const register = async (req, res) => {
    const { password, email } = req.body;
    const { id } = req.params; 
    try {
      if (!password || !email) {
       return res.status(400).json({ message: "error" });
      }
    const user = await User.findOrCreate({ 
      where: { email }, 
      defaults: { password, id } 
    })
    return res.status(200).json(user);

      } catch (error) {
        return res.status(500).send({ message: "error" });
      }
    }

  // const register = async (req, res) => {
  //   const { email, password, id } = req.body;
    
  //   try {
  //     if (!email || !password) {
  //       return res.status(400).send("Faltan datos");
  //     }
  
  //     const user = await User.findOrCreate({ 
  //       where: { email }, 
  //       defaults: { password, id } 
  //     });
  
  //     return res.status(200).json(user);
  
  //   } catch (error) {
  //     console.error(error);
  //     return res.status(500).send("Ha ocurrido un error");
  //   }
  // };
  
  
  module.exports = {
    login,
    register

  }
  

 
