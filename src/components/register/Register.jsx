// import { observer } from "mobx-react-lite";
// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Context } from "../../index";
// import { registration } from "../../http/userAPI";
// import "./register.styles.css";

// const Register = observer(() => {
//   const { user } = useContext(Context);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [reppass, setReppass] = useState("");
//   const [name, setName] = useState("");
//   const [surname, setSurname] = useState("");

//   const navigate = useNavigate();

//   const click = async () => {
//     try {
//       if (password !== reppass) {
//         return;
//       }

//       let data = await registration(email, password, name, surname);

//       user.setUser(data);
//       user.setIsAuth(true);
//     } catch (e) {
//       return;
//     }
//     if (user.isAuth) {
//       navigate("/login");
//     }
//   };
//   const checkEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   return (
//     <form className="login-form">
//       <input
//         required
//         type="text"
//         placeholder="Имя"
//         className="input-field"
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         required
//         type="text"
//         placeholder="Фамилия"
//         className="input-field"
//         onChange={(e) => setSurname(e.target.value)}
//       />
//       <input
//         required
//         type="text"
//         pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
//         placeholder="Email"
//         className="input-field"
//         onChange={(e) => checkEmail(e)}
//       />
//       <input
//         required
//         type="password"
//         placeholder="Пароль"
//         className="input-field"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <input
//         required
//         type="password"
//         placeholder="Повторите пароль"
//         className="input-field"
//         onChange={(e) => setReppass(e.target.value)}
//       />
//       <span type="submit" className="button-auth-log">
//         Регистрация
//       </span>
//     </form>
//   );
// });
// export default Register;

import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../index";
import { registration } from "../../http/userAPI";
import "./register.styles.css";

const Register = observer(() => {
  const { user } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reppass, setReppass] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const navigate = useNavigate();

  const click = async () => {
    try {
      if (password !== reppass) {
        return;
      }
      let data = await registration(email, password, name, surname);

      user.setUser(data);
      user.setIsAuth(true);
    } catch (e) {
      return;
    }
    if (user.isAuth) {
      navigate("/login");
    }
  };

  return (
    <form className="login-form">
      <input
        type="text"
        placeholder="Имя"
        className="input-field"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Фамилия"
        className="input-field"
        onChange={(e) => setSurname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        className="input-field"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        className="input-field"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Повторите пароль"
        className="input-field"
        onChange={(e) => setReppass(e.target.value)}
      />
      <div className="button-auth-reg" onClick={click}>
        <span className="button-auth-reg__text">Регистрация</span>
      </div>
    </form>
  );
});
export default Register;
