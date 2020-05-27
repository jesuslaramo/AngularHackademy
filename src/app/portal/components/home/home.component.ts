import { Component, OnInit } from '@angular/core';
import { imagesArray } from './images';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    images: any = imagesArray;

    constructor() { }

    ngOnInit(): void {}
}
