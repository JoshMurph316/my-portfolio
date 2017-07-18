import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-back-end',
    templateUrl: 'back-end.component.html',
    styleUrls: ['./back-end.component.css']
})

export class BackEndComponent implements OnInit {
    allSwitch: string = 'basic';
    node:string = 'basic';
    express:string = 'basic';
    mongodb:string = 'basic';
    mocha:string = 'basic';
    rest:string = 'basic';
    auth:string = 'basic';

    constructor() { }

    ngOnInit() { }  

    onAllDetail() { 
    this.node = 'detail';
    this.express = 'detail';
    this.mongodb = 'detail';
    this.mocha = 'detail';
    this.rest = 'detail';
    this.auth = 'detail';
    this.allSwitch = 'detail';
    }

    onAllClose(){
        this.node = 'basic';
        this.express = 'basic';
        this.mongodb = 'basic';
        this.mocha = 'basic';
        this.rest = 'basic';
        this.auth = 'basic';
        this.allSwitch = 'basic';
    }
    
    onNodeDetails() { this.node = ( this.node === 'basic' ? 'detail' : 'basic')}
    onExpressDetails() { this.express = ( this.express === 'basic' ? 'detail' : 'basic')}
    onMongoDBDetails() { this.mongodb = ( this.mongodb === 'basic' ? 'detail' : 'basic')}
    onMochaDetails() { this.mocha = ( this.mocha === 'basic' ? 'detail' : 'basic')}
    onRestDetails() { this.rest = ( this.rest === 'basic' ? 'detail' : 'basic')}
    onAuthDetails() { this.auth = ( this.auth === 'basic' ? 'detail' : 'basic')}
}