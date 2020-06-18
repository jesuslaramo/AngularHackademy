import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
    selector: 'app-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    toggleSidebar(){
        $(document).ready(function(){
            $('#sidebarCollapse').click(function(){
                $('#sidebar').toggleClass('active');
            })
        });
    }

    logout(){
        localStorage.removeItem('token');
        this.router.navigateByUrl('/auth');
    }   
}
