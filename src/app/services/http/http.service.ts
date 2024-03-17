import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {SnackBarService} from '@services/snack-bar/snack-bar.service';
import {environment} from "@environments/environment";
import {Platform} from "@angular/cdk/platform";

type HttpResponse<T> = {
    message: string;
    list: T[];
    code: number;
}


@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private headers: Record<string, any> = {
        'Content-Type': 'application/json',
    }

    constructor(
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
        const uri = new URL([environment.apiUrl, url].join("/"));
        const path = uri.pathname.replaceAll('//', '/');
        return `${uri.origin}${path}${uri.search}`;
    }

    private handleError(res: HttpErrorResponse) {
        if (res.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            this.snackBar.message({message: `An error occurred: ${res.error.message}`});
            console.log(`An error occurred:`, res.error.message)
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            this.snackBar.message({message: `Backend returned code ${res.status}, body was: ${res.error.message}`});
            console.log(`Backend returned code ${res.status}, body was: `, res.error.message);
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }

    public get<T>(url: string, params?: HttpParams) {
        return this.http.get<HttpResponse<T>>(this.getUrl(url), {
            headers: this.headers,
            observe: 'response',
            responseType: 'json',
            params: params || {},
        }).pipe(
            catchError(this.handleError.bind(this))
        )
    }

    public post<T>(url: string, body: any | null, params?: HttpParams) {
        return this.http.post<HttpResponse<T>>(this.getUrl(url), body, {
            headers: this.headers,
            observe: 'response',
            responseType: 'json',
            params: params || {}
        }).pipe(
            catchError(this.handleError.bind(this))
        )
    }

    public put<T>(url: string, body: any | null, params?: HttpParams) {
        return this.http.put<HttpResponse<T>>(this.getUrl(url), body, {
            headers: this.headers,
            observe: 'response',
            responseType: 'json',
            params: params || {}
        }).pipe(
            catchError(this.handleError.bind(this))
        )
    }

    public delete<T>(url: string, params?: HttpParams) {
        return this.http.delete<HttpResponse<T>>(this.getUrl(url), {
            headers: this.headers,
            observe: 'response',
            responseType: 'json',
            params: params || {}
        }).pipe(
            catchError(this.handleError.bind(this))
        )
    }

}
