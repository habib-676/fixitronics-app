import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase_sdk/firebase.init";
import { AuthContext } from "./AuthContext";
import Swal from "sweetalert2";
import axios from "axios";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google
  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  //   logout :
  const logOutUser = () => {
    return signOut(auth)
      .then(() => {
        axios
          .post(
            `${import.meta.env.VITE_hostUrl}/logout`,
            {},
            { withCredentials: true }
          )
          .then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Sign-Out successful",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      })
      .catch(() => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "An error oc",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  // observer :
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // JWt token
      if (currentUser?.email) {
        axios
          .post(
            `${import.meta.env.VITE_hostUrl}/jwt`,
            {
              email: currentUser?.email,
            },
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res.data);
          });
      }

      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authData = {
    createUser,
    googleSignIn,
    logOutUser,
    signInUser,
    user,
    loading,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
