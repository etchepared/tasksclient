import React from "react";
import { SiGmail } from "react-icons/si";

const Login = () => {
  return (
    <div>
      <h1>Ingresa a Task Manager</h1>
      <div class="inputs-container">
        <div>
          <input type="text" placeholder="usuario..." />
        </div>
        <div>
          <input type="password" placeholder="contraseña..." />
        </div>
        <button type="submit">Ingresar</button>
      </div>
      <hr />
      <div>
        <button>
          Ingreso con <SiGmail />
        </button>
      </div>
    </div>
  );
};

export default Login;
