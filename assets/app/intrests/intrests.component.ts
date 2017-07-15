import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-intrests',
    templateUrl: 'intrests.component.html',
    styleUrls: ['./intrests.component.css']
})

export class IntrestsComponent implements OnInit {
    intrests = 'professional'

    constructor() { }

    ngOnInit() { }

    onIntrestSwitch() {
        if (this.intrests === 'professional') {
            this.intrests = 'personal'
        } else {
            this.intrests = 'professional';
        }
    }
}