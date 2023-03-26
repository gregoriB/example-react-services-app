import UserService from "@/services/UserService";
import { Observable, Service } from "react-services";

/**
 * Chose to use a class for services because that's what I'm used
 * to in Angular, but you could use other approachs for managing observable
 * states and doing API calls.
 */
@Service({
  providers: [UserService]
})
class LoginService {
  isLoggedIn$ = new Observable(false);
  private _isLoadingAuth$ = new Observable(false);

  constructor(public userService: UserService) {}

  get isLoadingAuth$() {
    return this._isLoadingAuth$;
  }

  login = async ({ name }: { name: string }): Promise<any> => {
    this.isLoadingAuth$.next(true);
    await new Promise((resolve: (val?: any) => any) => {
      setTimeout(() => resolve(), 1500);
    });
    this.isLoadingAuth$.next(false);
    this.isLoggedIn$.next(true);
    this.userService.username$.next(name); // Pretend this data comes from API response data
  };

  logout = (): void => {
    this.isLoggedIn$.next(false);
    this.userService.username$.next("");
  };
}

export default LoginService;
