import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";

@Component({
    selector: 'app-landing',
    templateUrl: 'landing.component.html',
    styleUrls: ['./landing.component.css'],
    providers: [AppService]
})

export class LandingComponent implements OnInit {

    view: string = 'landing';
    
    constructor(private appService: AppService) { }

    ngOnInit() {
        
    }

    onSwitch(newView: string) {
        this.appService.onContactViewChange(newView);
        this.view = this.appService.contactView;
    }
}