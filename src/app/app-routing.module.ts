import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactViewComponent } from './views/contact-view/contact-view.component';
import { ExperiencesViewComponent } from './views/experiences-view/experiences-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { SkillsViewComponent } from './views/skills-view/skills-view.component';
import { TargetViewComponent } from './views/target-view/target-view.component';


const routes: Routes = [
  { path: 'home', component: HomeViewComponent },
  { path: 'experiences', component: ExperiencesViewComponent },
  { path: 'skills', component: SkillsViewComponent },
  { path: 'target', component: TargetViewComponent },
  { path: 'contact', component:  ContactViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule {

 
 }
