import { ChangeEvent, useState } from "react";
import { useLoginService } from "../hooks/useLoginService";

const Login = () => {
  const login = useLoginService("login");
  const isLoggedIn = useLoginService("isLoggedIn$");
  const isLoadingAuth = useLoginService("isLoadingAuth$");

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !password) return;
    login({ name, password });
    setName("");
    setPassword("");
  };

  if (isLoadingAuth) {
    return <div className="loader" />;
  }

  if (isLoggedIn) {
    return null;
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input placeholder="name" value={name} onChange={onNameChange} />
      </div>
      <div>
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={onPasswordChange}
        />
      </div>
      <button>LOGIN</button>
    </form>
  );
};

export default Login;
