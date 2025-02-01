import {Injectable, signal} from '@angular/core';
import {HttpService} from "@services/http/http.service";
import RequestRegister from "@app/payload/RequestRegister";
import RequestLogin from "@app/payload/RequestLogin";
import RequestSignInUseCode from "@app/payload/RequestSignInUseCode";
import {toObservable} from '@angular/core/rxjs-interop';
import AuthInfo from "@app/models/AuthInfo";
import {User} from "@app/interfaces/ApiInterface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private Urls = {
    login: "/user/login",
    loginForCode: "/user/login-for-sms",
    register: "/user/register",
    logout: "/session/logout",
    user: "/session/user",
  }

  authInfo = signal<User | undefined>(undefined);

  authInfo$ = toObservable(this.authInfo);

  constructor(
    private httpService: HttpService,
  ) {
  }

  public login<T>(data: RequestLogin) {
    return this.httpService.post<T>(this.Urls.login, data);
  }

  public loginForCode<T>(data: RequestSignInUseCode) {
    return this.httpService.post<T>(this.Urls.loginForCode, data);
  }

  public register<T>(data: RequestRegister) {
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
    return this.httpService.get<User>(this.Urls.user);
  }
}
