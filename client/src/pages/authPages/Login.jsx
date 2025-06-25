import React, { use } from "react";
import { BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import signInAnimation from "../../lotties/sign-in-lottie.json";

const Login = () => {
  const { signInUser, googleSignIn } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully signed in <3",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        Swal.fire({
          icon: "error",
          title: errorCode,
          text: errorMessage,
        });
      });
  };

  const handleGoogle = () => {
    googleSignIn()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully signed Up <3",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        const errMsg = error.message;
        const errorCode = error.code;

        Swal.fire({
          icon: "error",
          title: errorCode,
          text: errMsg,
        });
        navigate("/");
      });
  };
  return (
    <div className="mb-20 text-primary-content ">
      <Helmet>
        <title>Log In to Your Account | Fixitronics</title>
      </Helmet>
      <h3 className="font-bold text-3xl text-center mt-10">Sign in Now</h3>
      <div className="flex items-center flex-col-reverse justify-center">
        <div className="card bg-base-200 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
        <div className="card-body bg-base-200 border">
          <form className="fieldset" onSubmit={handleSignIn}>
            <label className="label">Email</label>
            <input
              type="email"
              className="input border-accent-content"
              placeholder="Email"
              name="email"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input border-accent-content"
              placeholder="Password"
              name="password"
              required
            />
            <div>
              <p>
                Don't have any account?{" "}
                <Link
                  className="link link-hover text-blue-400"
                  to={"/auth/sign-up"}
                >
                  Sign Up
                </Link>
              </p>
            </div>
            <input className="btn btn-primary" type="submit" value="Sign In" />
          </form>
          <button
            onClick={handleGoogle}
            className="btn btn-primary flex items-center gap-2"
          >
            <BsGoogle></BsGoogle>
            <span>Sign in using Google</span>
          </button>
        </div>
      </div>
      <div className="w-sm">
        <Lottie animationData={signInAnimation} loop={true} ></Lottie>
      </div>
      </div>
    </div>
  );
};

export default Login;
