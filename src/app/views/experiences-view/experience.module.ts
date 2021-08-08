import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencesViewComponent } from './experiences-view.component';
import { EarthCanevaComponent } from './earth-caneva/earth-caneva.component';



@NgModule({
  declarations: [ExperiencesViewComponent, 
    EarthCanevaComponent],
  imports: [
    CommonModule

  ]
})
export class ExperienceModule { }
