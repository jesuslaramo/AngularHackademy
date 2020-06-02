import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    toggleSidebar(){
        $(document).ready(function(){
            $('#sidebarCollapse').click(function(){
                $('#sidebar').toggleClass('active');
            })
        });
    }
}
