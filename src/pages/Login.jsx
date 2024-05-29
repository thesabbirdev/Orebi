import React, { useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Breadcrumb from "../components/Breadcrumb";
import Paragraph from "../components/Paragraph";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Bounce, ToastContainer, toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passShow, setPassShow] = useState(false);
  const [error, setError] = useState("");
  const [emailErr, setEmailErr] = useState("");
  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
    setError("");
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
    setError("");
  };
  const auth = getAuth();
  let handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setError("");
        toast("🦄 You are Successfully logged in, Congrats!", {
          position: "top-left",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (!email) {
          setEmailErr("Please fill it with your Email");
        } else if (
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        ) {
          setEmailErr("Please enter the valid email");
        } else {
          setError("Wrong information.! Please Check Your Email and Password");
        }
      });
  };
  let handleResetPasword = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        toast("🦄 Sent a reset email, Please Check!", {
          position: "bottom-left",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError("Firstly, Enter your valid email")
      });
  };

  return (
    <section className="mt-[124px] mb-[140px]">
      <Container>
        <Heading text="Login" className="text-5xl font-bold text-primary" />
        <Breadcrumb />
        <Paragraph
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
          className="text-third text-base font-normal mb-[62px] w-[644px] leading-[30px]"
        />
        <ToastContainer
            position="bottom-left"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition:Bounce
          />
        <hr />
        <Heading
          text="Returning Customer"
          className="text-[39px] font-bold text-primary mt-[57px] mb-[42px]"
        />
        <form action="">
          <div className="grid grid-cols-3 gap-10 mb-7">
            <div>
              <Input
                onchange={handleEmail}
                inputype="email"
                labelname="Email Address"
                inputph="company@domain.com"
              />
              {emailErr && (
                <p className="font-dmsans text-base text-red-600">{emailErr}</p>
              )}
            </div>
            <div className="relative">
              <Input
                onchange={handlePassword}
                inputype={passShow ? "text" : "password"}
                labelname="Password"
                inputph="minimum 8 digits"
              />
              <div
                onClick={() => setPassShow(!passShow)}
                className="absolute top-10 right-0 cursor-pointer"
              >
                {passShow ? <FaRegEyeSlash /> : <FaRegEye />}
              </div>
            </div>
          </div>
          {error && (
            <p className="font-dmsans text-base text-red-600">{error}</p>
          )}
          <Button
            text="Log in"
            onClick={handleLogin}
            className="text-primary bg-transparent border-2 py-4 ps-[77px] pe-[83px] hover:bg-primary hover:text-white duration-300"
          />
          <Button
            text="Forget pasword"
            onClick={handleResetPasword}
            className="text-primary bg-transparent border-2 py-4 ms-2 ps-[77px] pe-[83px] hover:bg-primary hover:text-white duration-300"
          />
        </form>
        <hr className="mb-[57px] mt-[70px]" />
        <Heading
          text="New Customer"
          className="text-[39px] font-bold text-primary mt-[] mb-[42px]"
        />

        <Paragraph
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
          className="text-third text-base font-normal mb-[41px] mt-[38px] w-[644px] leading-[30px]"
        />
        <Link to={`/sign-up`}>
          <Button className="py-4 ps-[65px] pe-[71px]" text="Sign Up" />
        </Link>
      </Container>
    </section>
  );
}

export default Login;
