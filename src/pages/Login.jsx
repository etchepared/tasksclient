import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Task Manager Login</h1>
      <div class="inputs-container">
        <div>
          <input type="text" placeholder="usuario..." />
        </div>
        <div>
          <input type="password" placeholder="contraseña..." />
        </div>
        <button type="submit">Ingresar</button>
      </div>
    </div>
  );
};

export default Login;
