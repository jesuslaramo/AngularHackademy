import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    apiUrl: string = environment.apiUrlAuth;

    constructor(private http: HttpClient) { }

    login(body){
        return this.http.post(`${this.apiUrl}login`, body);
    }
}
