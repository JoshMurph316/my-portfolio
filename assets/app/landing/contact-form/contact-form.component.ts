import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact-form',
    templateUrl: 'contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {
    radio = 'project';

    constructor() { }

    ngOnInit() { }

    onRadio(radioInfo) {
        this.radio = radioInfo;
        
    }
    onContact() {

    }
}