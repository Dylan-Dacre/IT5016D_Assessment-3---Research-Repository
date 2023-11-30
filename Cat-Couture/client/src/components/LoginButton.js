import { useAuth0 } from "@auth0/auth0-react";
import Loader from "./Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./LoginButton.css";

// This component is used to display the login button and handle the login and logout actions.
const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <button>
        <Loader />
      </button>
    );
  }

  if (isAuthenticated) {
    return (
      <button
        aria-label="Log Out"
        className="login-button"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        <div className="login-button-content">
          <span className="icon-user">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <span className="login-button-text">Log Out</span>
        </div>
      </button>
    );
  }

  return (
    <button
      aria-label="Log In"
      className="login-button"
      onClick={() => loginWithRedirect()}
    >
      {" "}
      <span className="login-button-content">
        <span className="icon-user">
          <FontAwesomeIcon icon={faUser} />
        </span>
        <span className="login-button-text">Log In</span>
      </span>
    </button>
  );
};

export default LoginButton;
