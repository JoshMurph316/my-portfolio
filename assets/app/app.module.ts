import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { routing } from './app.routing';

import { PopoverModule } from 'ng2-popover';


import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { BioComponent } from "./bio/bio.component";
import { LandingComponent } from "./landing/landing.component";
import { FooterComponent } from "./footer/footer.component";
import { WorkHistoryComponent } from "./work-history/work-history.component";
import { IntrestsComponent } from "./intrests/intrests.component";
import { AvailabilityComponent } from "./availability/availability.component";
import { SkillsComponent } from "./skills/skills.component";
import { HomeComponent } from "./home/home.component";
import { ExitComponent } from "./exit/exit.component";
import { DevOpsComponent } from "./skills/dev-ops/dev-ops.component";
import { BackEndComponent } from "./skills/back-end/back-end.component";
import { FrontEndComponent } from "./skills/front-end/front-end.component";
import { ProgressionComponent } from "./skills/progression/progression.component";
import { ContactFormComponent } from "./landing/contact-form/contact-form.component";
import { PastJobComponent } from "./work-history/past-job/past-job.component";
import { EducationComponent } from "./bio/education/education.component";
import { PaidProjectsComponent } from "./work-history/paid-projects/piad-projects.component";
import { SideProjectComponent } from "./side-projects/side-projects.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ExitComponent,
        NavbarComponent,
        BioComponent,
        AvailabilityComponent,
        IntrestsComponent,
        SkillsComponent,
        ContactFormComponent,
        LandingComponent,
        ProgressionComponent,
        FrontEndComponent,
        SideProjectComponent,
        EducationComponent,
        BackEndComponent,
        PastJobComponent,
        PaidProjectsComponent,
        DevOpsComponent,
        WorkHistoryComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        PopoverModule,
        routing
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}