import { Observable, Service } from "react-services";

@Service({
  providers: []
})
class UserService {
  username$ = new Observable("");
}

export default UserService;
