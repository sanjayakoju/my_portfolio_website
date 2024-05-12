import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {QualificationComponent} from "./components/qualification/qualification.component";
import {SkillComponent} from "./components/skill/skill.component";
import {BlogComponent} from "./components/blog/blog.component";
import {ContactComponent} from "./components/contact/contact.component";
import {HeaderComponent} from "./shared/header/header.component";
import {ProjectComponent} from "./components/project/project.component";

const routes: Routes = [
  {path: 'home', component: HeaderComponent},
  {path: 'about', component: AboutComponent},
  {path: 'qualification', component: QualificationComponent},
  {path: 'skill', component: SkillComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
