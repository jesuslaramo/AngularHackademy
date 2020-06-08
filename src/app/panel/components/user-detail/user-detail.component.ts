import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

    id: any;
    user: any;

    constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');
        this.getUser(this.id);
    }

    getUser(id) {
        this.userService.getUser(id).subscribe(res => {
            this.user = res;
            console.log(res);
        }, error => {
            this.router.navigateByUrl('/panel/users');
        })
    }

}
