import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { QualificationComponent } from './components/qualification/qualification.component';
import { SkillComponent } from './components/skill/skill.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { VideoComponent } from './shared/video/video.component';
import { ProjectComponent } from './components/project/project.component';
import { WayPointDirectiveDirective } from './core/way-point-directive.directive';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    QualificationComponent,
    SkillComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    VideoComponent,
    ProjectComponent,
    WayPointDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
