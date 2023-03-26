import DateTime from "./components/DateTime";
import Login from "./components/Login";
import UserGreeting from "./components/UserGreeting";
import Logout from "./components/Logout";

export default function App() {
  return (
    <>
      <DateTime />
      <Login />
      <UserGreeting />
      <Logout />
    </>
  );
}
