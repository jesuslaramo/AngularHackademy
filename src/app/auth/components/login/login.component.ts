import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm = new FormGroup({
        email: new FormControl('eve.holt@reqres.in', [Validators.required, Validators.email]),
        password: new FormControl('cityslicka', Validators.required),
    });

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
    }

    login(){
        this.authService.login(this.loginForm.value).subscribe(res =>{
            localStorage.setItem('token', res['token']);
            this.router.navigateByUrl('/panel');
        }, () => {
            alert("Ha ocurrido un error!!!");
        })
    }

}
