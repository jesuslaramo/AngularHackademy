import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    apiUrl: string = environment.apiUrlAuth;

    constructor(private http: HttpClient, private router: Router) { }

    login(body){
        return this.http.post(`${this.apiUrl}login`, body);
    }

    logout(){
        localStorage.removeItem('token');
        this.router.navigateByUrl('/auth');
    }   

    isAuth(): boolean{
        if(localStorage.getItem('token')){
            return true;
        }else{
            return false;
        }
    }
}
