import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { routing } from './app.routing';

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { BioComponent } from "./bio/bio.component";
import { LandingComponent } from "./landing/landing.component";
import { FooterComponent } from "./footer/footer.component";
import { WorkHistoryComponent } from "./work-history/work-history.component";
import { IntrestsComponent } from "./intrests/intrests.component";
import { AvailabilityComponent } from "./availability/availability.componenet";
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
        EducationComponent,
        BackEndComponent,
        PastJobComponent,
        DevOpsComponent,
        WorkHistoryComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        routing
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}