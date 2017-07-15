import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: 'landing.component.html',
    styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {
    view = 'landing';
    

    constructor() { }

    ngOnInit() { }

    onSwitch() {
        if (this.view === 'landing') {
            this.view = 'hire'
        } else {
            this.view = 'landing'
        }
    }
}