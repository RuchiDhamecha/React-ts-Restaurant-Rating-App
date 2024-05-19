import Navbar from "../Navbar/Navbar.tsx";
import styles from "./HomePage.module.scss";
import { HomePageProps } from "./HomePage.types.ts";
import homepageImg from "../../assets/homepage_img.png";
import { useContext, useState } from "react";
import Signup from "../Signup/Signup.tsx";
import Login from "../Login/Login.tsx";

const HomePage = ({}: HomePageProps) => {
  //   const { currentPage, setCurrentPage } = useContext(PageContext);
  const [loginPage, setLoginPage] = useState(false);
  const [signupPage, setSignupPage] = useState(false);

  const handleSignupClick = () => {
    setSignupPage(true);
  };

  const handleLoginClick = () => {
    setLoginPage(true);
  };

  return (
    <>
      {loginPage ? (
        <Login />
      ) : (
        <>
          {signupPage ? (
            <Signup />
          ) : (
            <>
              <Navbar />
              <div className={styles.Homepage}>
                <div>
                  <div>
                    <p>
                      This is ipsum dolor sit amet consectetur adipisicing elit.
                      Dolor, laboriosam!
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dignissimos enim dolors, nisi ipeprehenderit?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolor, laboriosam dolor sitm sit amet consectetur!
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolor, laboriosam!
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolor, laboriosam!
                    </p>
                    <p>
                      Lorem ipsum dolor sim dolor sitt amet consectetur
                      adipisicing elit. Dolor, laboriosam!
                    </p>
                  </div>
                  {/* {currentPage === "signup" && <Signup />}
          {currentPage === "login" && <Login />} */}
                  <div>
                    <button onClick={handleLoginClick}>Log In</button>
                    <button onClick={handleSignupClick}>Sign Up</button>
                  </div>
                </div>
                <div>
                  <img src={homepageImg} alt="" />
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default HomePage;
