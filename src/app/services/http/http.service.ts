import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {SnackBarService} from '@services/snack-bar/snack-bar.service';
import {environment} from "@environments/environment";
import {Platform} from "@angular/cdk/platform";
import {ViolationReport} from "@app/interfaces";
import {AuthService} from "@services/auth/auth.service";

type HttpResult<T> = {
    currentPageNumber: number
    lastPageNumber: number
    pageSize: number
    totalRecords: number
    message: string
    code: number
    records: T
}


@Injectable({
    providedIn: 'root'
})
export abstract class HttpService {
    private headers: Record<string, any> = {
        'Content-Type': 'application/json',
    }

    protected constructor(
        private platform: Platform,
        private http: HttpClient,
        private snackBar: SnackBarService
    ) {
        if (this.platform.isBrowser) {
            const accessToken = localStorage.getItem('accessToken');
            if (accessToken && accessToken.length > 0) {
                this.headers['Authorization'] = `Bearer ${accessToken}`;
            }
        }
    }

    private getUrl(url: string) {
        const uri = new URL([environment.api, url].join("/"));
        const path = uri.pathname.replaceAll('//', '/');
        return `${uri.origin}${path}${uri.search}`;
    }

    private handleError(res: HttpErrorResponse & {error: ViolationReport}) {
        if (res.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            this.snackBar.message({message: `An error occurred: ${res.error.message}`});
            console.log(`An error occurred:`, res.error.message)
        } else if(res.error) {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            if(res.error.exception) {
                this.snackBar.message({message: res.error.exception});
                console.log(`Backend returned code ${res.status}, body was: `, res.error.exception);
            } else if(res.error.parameterViolations.length > 0) {
                const name = res.error.parameterViolations[0].path.split('.').pop();
                const firstParams = res.error.parameterViolations[0];
                this.snackBar.message({message: `${name}: ${firstParams.message}`});
            } else if(res.error.propertyViolations.length > 0) {
                const name = res.error.propertyViolations[0].path.split('.').pop();
                const firstParams = res.error.propertyViolations[0];
                this.snackBar.message({message: `${name}: ${firstParams.message}`});
            } else {
                this.snackBar.message({message: `Backend returned code ${res.status}`});
            }
        } else if(res.status === 401) {
            this.snackBar.message({message: "登录信息失效, 请先登录."});
        } else {
            this.snackBar.message({message: res.message});
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }

    public get<T>(url: string, params?: HttpParams) {
        return this.http.get<T extends Array<any> ? HttpResult<T> : T>(this.getUrl(url), {
            headers: this.headers,
            observe: 'response',
            responseType: 'json',
            params: params || {},
        }).pipe(
            catchError(this.handleError.bind(this))
        )
    }

    public post<T>(url: string, body: any | null, params?: HttpParams) {
        return this.http.post<T extends Array<any> ? HttpResult<T> : T>(this.getUrl(url), body, {
            headers: this.headers,
            observe: 'response',
            responseType: 'json',
            params: params || {}
        }).pipe(
            catchError(this.handleError.bind(this))
        );
    }

    public put<T>(url: string, body: any | null, params?: HttpParams) {
        return this.http.put<T extends Array<any> ? HttpResult<T> : T>(this.getUrl(url), body, {
            headers: this.headers,
            observe: 'response',
            responseType: 'json',
            params: params || {}
        }).pipe(
            catchError(this.handleError.bind(this))
        )
    }

    public delete<T>(url: string, params?: HttpParams) {
        return this.http.delete<T extends Array<any> ? HttpResult<T> : T>(this.getUrl(url), {
            headers: this.headers,
            observe: 'response',
            responseType: 'json',
            params: params || {}
        }).pipe(
            catchError(this.handleError.bind(this))
        )
    }

}
