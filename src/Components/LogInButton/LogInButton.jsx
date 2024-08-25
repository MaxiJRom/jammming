import React from "react";
import "./LogInButton.css";

export function LogInButton({ logged, onLogIn }) {
  return (
    <button
      onClick={onLogIn}
      disabled={logged ? true : false}
      className={"log-in-button " + (logged ? "disabled" : "active")}
    >
      {logged ? "Log out" : "Log in"}
    </button>
  );
}
