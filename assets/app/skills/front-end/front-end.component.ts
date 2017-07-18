import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-front-end',
    templateUrl: 'front-end.component.html',
    styleUrls: ['./front-end.component.css']
})

export class FrontEndComponent implements OnInit {
    allSwitch: string = 'basic';
    html:string = 'basic';
    angular:string = 'basic';
    css3:string = 'basic';
    bootstrap:string = 'basic';
    js:string = 'basic';
    jQuery:string = 'basic';

    constructor() { }

    ngOnInit() { }
    
    onAllDetail() { 
        this.html = 'detail';
        this.angular = 'detail';
        this.css3 = 'detail';
        this.bootstrap = 'detail';
        this.js = 'detail';
        this.jQuery = 'detail';
        this.allSwitch = 'detail';
    }
    onAllClose(){
        this.html = 'basic';
        this.angular = 'basic';
        this.css3 = 'basic';
        this.bootstrap = 'basic';
        this.js = 'basic';
        this.jQuery = 'basic';
        this.allSwitch = 'basic';
    }
    onHTMLDetails() { this.html = ( this.html === 'basic' ? 'detail' : 'basic')}
    onAngularDetails() { this.angular = ( this.angular === 'basic' ? 'detail' : 'basic')}
    onCSS3Details() { this.css3 = ( this.css3 === 'basic' ? 'detail' : 'basic')}
    onBootstrapDetails() { this.bootstrap = ( this.bootstrap === 'basic' ? 'detail' : 'basic')}
    onJSDetails() { this.js = ( this.js === 'basic' ? 'detail' : 'basic')}
    onjQueryDetails() { this.jQuery = ( this.jQuery === 'basic' ? 'detail' : 'basic')}
}