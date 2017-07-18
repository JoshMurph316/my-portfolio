import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-progression',
    templateUrl: 'progression.component.html',
    styleUrls: ['./progression.component.css']
})

export class ProgressionComponent implements OnInit {
    front: string = 'list';
    back: string = 'list';
    devOps: string = 'list';

    constructor() { }

    ngOnInit() { }

    onAllSwitch() {
        this.front = 'info'
        this.back = 'info'
        this.devOps = 'info'
    }

    onFrontSwitch() {
        if (this.front === 'list') {
            this.front = 'info';
        } else {
            this.front = 'list';
        }
    }
    onBackSwitch() {
        if (this.back === 'list') {
            this.back = 'info';
        } else {
            this.back = 'list';
        }
    }
    onDevOpsSwitch() {
        if (this.devOps === 'list') {
            this.devOps = 'info';
        } else {
            this.devOps = 'list';
        }
    }
}