import { useLoginService } from "../hooks/useLoginService";

const Logout = () => {
  const logout = useLoginService("logout");
  const isLoggedIn = useLoginService("isLoggedIn$");

  if (!isLoggedIn) {
    return null;
  }
  return <button onClick={logout}>LOGOUT</button>;
};

export default Logout;
