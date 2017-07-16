import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bio',
    templateUrl: 'bio.component.html',
    styleUrls: ['./bio.component.css']
})

export class BioComponent implements OnInit {
    about = 'bio';

    constructor() { }

    ngOnInit() { }

    onBioSwitch() {
        if (this.about === 'bio') {
            this.about = 'education';
        } else {
            this.about = 'bio'
        }
    }
}