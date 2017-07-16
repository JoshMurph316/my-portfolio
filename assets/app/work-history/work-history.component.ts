import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-work-history',
    templateUrl: 'work-history.component.html',
    styleUrls: ['./work-history.component.css']
})

export class WorkHistoryComponent implements OnInit {
    history = 'projects';
    image = '';

    constructor() { }

    ngOnInit() { }

    onWorkSwitch() {
        if (this.history === 'projects') {
            this.history = 'work'
        } else {
            this.history = 'projects'
        }
    }
    onImage(pic) {
        this.image = pic;
    }
}