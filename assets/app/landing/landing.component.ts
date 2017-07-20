import { Component, OnInit } from '@angular/core';

import { ViewChangeService } from "../home/view-change.service";

@Component({
    selector: 'app-landing',
    templateUrl: 'landing.component.html',
    styleUrls: ['./landing.component.css'],
    providers: [ViewChangeService]
})

export class LandingComponent implements OnInit {

    view: string = 'landing';
    
    constructor(private viewChangeService: ViewChangeService) {
    }

    ngOnInit() {
        
    }

    onSwitch(newView: string) {
        this.view = newView
        this.viewChangeService.changeView(newView);
    }
}