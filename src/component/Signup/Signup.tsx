import Navbar from "../Navbar/Navbar.tsx";
import styles from "./Signup.module.scss";
import { useState } from "react";
import axios from 'axios';
import { SignupProps } from "./Signup.types.ts";
import Main from "../Restaurant/Main/Main.tsx";

const Signup = () => {
  const [retroPage, setRestroPage] = useState(false)

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
  
const handleSubmit = async (e:any) => {

    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}api/auth/signup`, { username, email, password });
      console.log('Signup successful:', response.data);
      alert("signup successful!");
      setRestroPage(true)

    } catch (error:any) {
      setErrorMessage(error.response?.data?.message );
      alert("SignUp fail. Try Again!");

    }
  };
  return (
    <>
    
    {retroPage?(<Main/>)
        :
    <>
      <Navbar />

      <div className={styles.Body} >
        <div className={styles.Signup}>
          <h2>Sign-Up</h2>
          <div>
            <form action=""  onSubmit={handleSubmit}>
              <p>
                <input
                  type="text"
                  placeholder="Enter Username:"
                  name="username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                    required
                />
              </p>
              <p>
                <input
                  type="email"
                  placeholder="Enter email:"
                  name="email"
                  id="email"
                  value={email} onChange={(e) => setEmail(e.target.value)}required
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
                  required
                />
              </p>
              {/* <p>
                <input
                  type="password"
                  name="con_password"
                  id="con_password"
                  placeholder="Confirm password:"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </p> */}

                <button type="submit">Sign-Up</button>
            </form>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
          
        </div>
      </div>
      </>
}
    </>
  );
};

export default Signup;
