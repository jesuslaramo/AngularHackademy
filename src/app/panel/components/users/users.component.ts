import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    id: any;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');

        if(this.id === '1'){
            this.router.navigateByUrl('/panel');
        }
    }

    goToProfile(){
        this.router.navigateByUrl('/panel/profile');
    }

}
