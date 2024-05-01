import {Injectable, signal} from '@angular/core';
import {HttpService} from "@services/http/http.service";
import RequestSignUp from "@app/payload/RequestSignUp";
import RequestSignIn from "@app/payload/RequestSignIn";
import RequestSignInUseCode from "@app/payload/RequestSignInUseCode";
import {toObservable} from '@angular/core/rxjs-interop';
import AuthInfo from "@app/models/AuthInfo";
import {User} from "@app/interfaces/ApiInterface";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private Urls = {
        login: "/session/login",
        loginForCode: "/session/login-for-sms",
        register: "/session/register",
        logout: "/session/logout",
        user: "/session/user",
    }

    authInfo = signal<User | null>(null);

    authInfo$ = toObservable(this.authInfo);

    constructor(
        private httpService: HttpService,
    ) {
    }

    public login<T>(data: RequestSignIn) {
        return this.httpService.post<T>(this.Urls.login, data);
    }

    public loginForCode<T>(data: RequestSignInUseCode) {
        return this.httpService.post<T>(this.Urls.loginForCode, data);
    }

    public register<T>(data: RequestSignUp) {
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
            this.authInfo.set(user);
        }
    }

    public removeAuthInfo() {
        localStorage.removeItem("accessToken");
        this.authInfo.set(null);
    }

    public getAuthUser() {
        return this.httpService.get<User>(this.Urls.user);
    }
}
