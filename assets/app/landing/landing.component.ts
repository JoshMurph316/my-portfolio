import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";

@Component({
    selector: 'app-landing',
    templateUrl: 'landing.component.html',
    styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {

    view: string = 'landing';
    
    constructor() { }

    ngOnInit() {
        
    }

    onSwitch(newView: string) {
        this.view = newView
    }
}