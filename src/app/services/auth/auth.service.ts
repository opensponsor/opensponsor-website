import {Injectable, signal} from '@angular/core';
import {HttpService} from "@services/http/http.service";
import RequestSignUp from "@app/payload/RequestSignUp";
import RequestSignIn from "@app/payload/RequestSignIn";
import RequestSignInUseCode from "@app/payload/RequestSignInUseCode";
import {toObservable} from '@angular/core/rxjs-interop';
import AuthInfo from "@app/models/AuthInfo";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private Urls = {
        signIn: "/auth/sign-in",
        signInUseCode: "/auth/sign-in-sms",
        signUp: "/auth/sign-up",
        signOut: "/auth/sign-out",
    }

    authInfo = signal<AuthInfo | null>(null);

    authInfo$ = toObservable(this.authInfo);

    constructor(
        private httpService: HttpService,
    ) {
    }

    public signIn<T>(data: RequestSignIn) {
        return this.httpService.post<T>(this.Urls.signIn, data);
    }

    public signInUseCode<T>(data: RequestSignInUseCode) {
        return this.httpService.post<T>(this.Urls.signInUseCode, data);
    }

    public signUp<T>(data: RequestSignUp) {
        return this.httpService.post<T>(this.Urls.signUp, data);
    }

    public signOut<T>(data: any) {
        return this.httpService.post<T>(this.Urls.signOut, data);
    }

    public resetPassword() {
    }

    public saveAuthInfo(authInfo: AuthInfo | null) {
        if (authInfo) {
            localStorage.setItem("accessToken", authInfo.accessToken);
            this.authInfo.set(authInfo);
        }
    }

    public removeAuthInfo() {
        localStorage.removeItem("accessToken");
        this.authInfo.set(null);
    }
}
