import {Injectable, signal} from '@angular/core';
import {HttpService} from "@services/http/http.service";
import {toObservable} from '@angular/core/rxjs-interop';
import {LoginBody, RegisterBody, User} from "@app/interfaces/ApiInterface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private Urls = {
    login: "/session/login",
    loginForCode: "/session/login-for-sms",
    register: "/session/register",
    logout: "/session/logout",
    authUser: "/session/user",
  }

  authInfo = signal<User | undefined>(undefined);

  authInfo$ = toObservable(this.authInfo);

  constructor(
    private httpService: HttpService,
  ) {
  }

  public login<T>(data: LoginBody) {
    return this.httpService.post<T>(this.Urls.login, data);
  }

  public loginForCode<T>(data: Pick<LoginBody, 'phoneNumber' | 'countryCode' | 'code'>) {
    return this.httpService.post<T>(this.Urls.loginForCode, data);
  }

  public register<T>(data: RegisterBody) {
    return this.httpService.post<T>(this.Urls.register, data);
  }

  public logout<T>(data: any) {
    return this.httpService.post<T>(this.Urls.logout, data);
  }

  public resetPassword() {
  }

  public persistAuth(user: User) {
    if (user && user.token?.token) {
      localStorage.setItem("accessToken", user.token.token);
    }
    this.authInfo.set(user);
  }

  public removeAuthInfo() {
    localStorage.removeItem("accessToken");
    this.authInfo.set(undefined);
  }

  public getAuthUser() {
    return this.httpService.get<User>(this.Urls.authUser);
  }
}
