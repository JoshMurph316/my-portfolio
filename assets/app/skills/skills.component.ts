import { Component, OnInit, trigger, state, style } from '@angular/core';

@Component({
    selector: 'app-skills',
    templateUrl: 'skills.component.html',
    styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
    currentView = 'front-end';
    
    constructor() { }

    ngOnInit() { }

    onFrontClick() {
        this.currentView = 'front-end'
    }

   onProgressClick() {
        this.currentView = 'progress'
    }

    onDevClick() {
        this.currentView = 'dev-ops'
    }

    onBackClick() {
        this.currentView = 'back-end'
    }
}