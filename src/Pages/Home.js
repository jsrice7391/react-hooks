import React, { useState } from "react";

export const Home = () => {
  const [developerName, setDeveloperName] = useState({ userName: "Justin" });

  const [developerState, setDeveloperState] = useState({
    password: "",
    color: "black"
  });

  const _handlePasswordChange = e => {
    setDeveloperState({
      color: developerState.password.length >= 6 ? "green" : "black",
      password: e.target.value
    });
  };
  return (
    <div>
      <h1>Here is the username: {developerName.userName}</h1>
      <h2 style={{ color: developerState.color }}>
        Password is: {developerState.password.length > 6 ? "valid" : "invalid"}
      </h2>
      <p>Username</p>
      <input onChange={e => setDeveloperName({ userName: e.target.value })} />
      <p />
      <p>Password</p>
      <input type="password" onChange={e => _handlePasswordChange(e)} />
      <p />
      <button
        onClick={() =>
          setDeveloperState({
            ...developerState,
            isCold: !developerState.isCold
          })
        }
      >
        Cold
      </button>
    </div>
  );
};
