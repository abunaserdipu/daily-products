import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebaseConfig from "./firebaseConfig";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { UserContext } from "../../App";
import { Link, useHistory, useLocation } from "react-router-dom";

const LogIn = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        var { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <Link style={{ textDecoration: "none", color: "blue" }} to="/">
        <h4>Daily Products</h4>
      </Link>
      <div className="container">
        <div
          class="card justify-content-center my-5"
          style={{
            width: "18rem",
            height: "18rem",
            backgroundColor: "skyBlue",
            marginLeft: "350px",
          }}
        >
          <button className="btn btn-outline-dark" onClick={handleGoogleSignIn}>
            {" "}
            <FontAwesomeIcon icon={faGoogle} /> Google Sign-In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
