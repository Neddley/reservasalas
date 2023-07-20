import React, { useState } from "react";
import logo from "../images/logo_black_utem.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica para enviar el correo electrónico y contraseña al servidor para la autenticación
  };

  return (
    <>
      <div className="login-box">
        <img src={logo} alt="Logo UTEM" />
        <p className="instrucciones">
          Por favor ingresa con tus credenciales de Pasaporte.UTEM.
        </p>
        <form>
          <div className="user-box">
            <input required="" name="" type="text" />
            <label>Usuario o email</label>
          </div>
          <div className="user-box">
            <input required="" name="" type="password" />
            <label>Constraseña</label>
          </div>
          <a className="olvidar-password">¿Olvidó su contraseña</a>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Ingresar
          </a>
          <a className="cambiar-password">Cambiar su contraseña</a>

          <div className="soporte">
            <p>
              Si no recuerda su Pasaporte Institucional, favor envíe su
              solicitud a <span>soporte.sisei@utem.cl</span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
