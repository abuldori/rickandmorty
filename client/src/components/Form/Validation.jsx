const validation = (input) => {
    const regexEmail = /^[a-zA-Z0-9._%+-]{1,35}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
    const regexPassword = /^[a-zA-Z0-9]{6,10}$/
    const errors = {};

    if (!regexEmail.test(input.email)) {
        errors.email = 'Debe ser un correo electrónico';
      }
    if(!regexPassword.test(input.password)) {
        errors.password = "Ingresar contraseña";
  }
  return errors;
}

export default validation;