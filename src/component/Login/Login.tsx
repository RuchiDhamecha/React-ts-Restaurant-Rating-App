import Navbar from "../Navbar/Navbar.tsx";
import styles from "./Login.module.scss";
import { LoginProps } from "./Login.types.ts";
import { useState } from "react";
import axios from "axios";
import Main from "../Restaurant/Main/Main.tsx";
import { login } from "../../services/loginAPI.ts";

const Login = ({}: LoginProps) => {
  const [retroPage, setRestroPage] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
     const response = await login({password, username})

      console.log("Login successful:", response.data.data.accessToken);
      localStorage.setItem("token", response.data.data.accessToken);
      alert("login successful!");

      setRestroPage(true);
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "Login failed");
      alert("login fail. Try Again!");
    }
  };

  return (
    <>
      {retroPage ? (
        <Main />
      ) : (
        <div className={styles.Body}>
          <Navbar />
          <div className={styles.Login}>
            <h2>Log-In</h2>
            <div>
              <form action="" onSubmit={handleSubmit}>
                <p>
                  <input
                    type="text"
                    placeholder="Enter Username:"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </p>
                <p>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter password:"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </p>

                <button>Sign-In</button>
              </form>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
