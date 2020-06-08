import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

declare var $: any;

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    usersList: any;
    user: any;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.getUsers();
    }
    
    getUsers(){
        this.userService.getUsers().subscribe(res => {
            this.usersList = res;
        }, error => {
            console.error(error);
        });
    }
    
    getUser(id){
        this.userService.getUser(id).subscribe(res => {
            this.user = res;
        }, error => {
            console.error(error);
        })
    }

}
