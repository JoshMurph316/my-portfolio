import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-work-history',
    templateUrl: 'work-history.component.html',
    styleUrls: ['./work-history.component.css']
})

export class WorkHistoryComponent implements OnInit {
    history = 'projects';

    constructor() { }

    ngOnInit() { }

    onWorkSwitch() {
        this.history = (this.history === 'projects' ? 'work' : 'projects');
    }
}