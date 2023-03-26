import { UseUserService } from "@/hooks/useUserService";
import { useLoginService } from "@/hooks/useLoginService";

const UserGreeting = () => {
  const username = UseUserService("username$");
  const isLoggedIn = useLoginService("isLoggedIn$");
  const isLoadingAuth = useLoginService("isLoadingAuth$");

  if (isLoadingAuth) {
    return null;
  }

  if (!isLoggedIn) {
    return (
      <h1>
        Please log in <small>(hint: use any name and password)</small>
      </h1>
    );
  }

  return <h1>Hello, {username}!</h1>;
};

export default UserGreeting;
