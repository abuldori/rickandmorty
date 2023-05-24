import React, { useState } from "react";
import validation from "./Validation";
import style from "./Form.module.css";
import axios from "axios";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const handlerChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const aux = Object.keys(errors);
    // console.log("submit");
    if (aux.length === 0) {
    axios.post("http://localhost:3001/rickandmorty/login/register", {
          password: userData.password,
          email: userData.email,
          id: 1,
        })
        .then(({ data }) => {
          console.log(data);
        });
      login(userData);
      setUserData({
        email: "",
        password: "",
      });
      setErrors({
        email: "",
        password: "",
      });
    } else {
      return alert("Error");
    }
  }
  
  

  // ! esta es la validacion desde el front- y la tengo hecha tambien desde el back
  // const handlerSubmit = (e) => {
  //   e.preventDefault();
  //   const errors = validation(userData); // realiza validación adicional
  //   if (Object.keys(errors).length === 0) {
  //     // si no hay errores de validación, verifica las credenciales
  //     if (userData.email === email && userData.password === password) {
  //       // si las credenciales son correctas, llama a la función de inicio de sesión
  //       login(userData);
  //     } else {
  //       // si las credenciales son incorrectas, muestra un mensaje de error
  //       setErrors({ email: "Usuario o contraseña incorrectos", password: "Usuario o contraseña incorrectos" });
  //     }
  //   } else {
  //     // si hay errores de validación, actualiza el estado de los errores
  //     setErrors(errors);
  //   }
  // };
  


  return (
    <div>
      <form onSubmit={handleSubmit} className={style.form}>
        <label className={style.label}>
          <span className={style.description}>Email</span>
          <input
            type="text"
            name="email"
            placeholder="email.."
            value={userData.email}
            onChange={handlerChange}
            className={style.input}
          />
          {errors.email && (
            <p className={style.danger}>{errors.email}</p>
          )}
        </label>
        <label className={style.label}>
          <span className={style.description}>Password</span>
          <input
            type="password"
            name="password"
            placeholder="Password.."
            value={userData.password}
            onChange={handlerChange}
            className={style.input}
          />
          {errors.password && (
            <p className={style.danger}>{errors.password}</p>
          )}
        </label>
        <button className={style.button}>Login</button>
      </form>
    </div>
  );
};

export default Form;
