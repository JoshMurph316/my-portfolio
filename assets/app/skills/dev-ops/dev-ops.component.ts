import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dev-ops',
    templateUrl: 'dev-ops.component.html',
    styleUrls: ['./dev-ops.component.css']
})

export class DevOpsComponent implements OnInit {
    allSwitch: string = 'basic';
    aws:string = 'basic';
    git:string = 'basic';
    heroku:string = 'basic';
    docker:string = 'basic';
    kubernetes:string = 'basic';
    travisCI:string = 'basic';
    constructor() { }

    ngOnInit() { }

    onAllDetail() { 
        this.aws = 'detail';
        this.git = 'detail';
        this.heroku = 'detail';
        this.docker = 'detail';
        this.kubernetes = 'detail';
        this.travisCI = 'detail';
        this.allSwitch = 'detail';
    }
    
    onAllClose(){
        this.aws = 'basic';
        this.git = 'basic';
        this.heroku = 'basic';
        this.docker = 'basic';
        this.kubernetes = 'basic';
        this.travisCI = 'basic';
        this.allSwitch = 'basic';
    }

    onAWSDetails() { this.aws = ( this.aws === 'basic' ? 'detail' : 'basic')}
    onGitDetails() { this.git = ( this.git === 'basic' ? 'detail' : 'basic')}
    onHerokuDetails() { this.heroku = ( this.heroku === 'basic' ? 'detail' : 'basic')}
    onDockerDetails() { this.docker = ( this.docker === 'basic' ? 'detail' : 'basic')}
    onKubernetesDetails() { this.kubernetes = ( this.kubernetes === 'basic' ? 'detail' : 'basic')}
    onTravisCIDetails() { this.travisCI = ( this.travisCI === 'basic' ? 'detail' : 'basic')}
}