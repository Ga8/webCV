import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './common/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { TargetViewComponent } from './views/target-view/target-view.component';
import { SkillsViewComponent } from './views/skills-view/skills-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { ContactViewComponent } from './views/contact-view/contact-view.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TagComponent } from './common/tag/tag.component';
import { EarthCanevaComponent } from './views/experiences-view/earth-caneva/earth-caneva.component';
import { ExperiencesViewComponent } from './views/experiences-view/experiences-view.component';
import { H1Component } from './common/h1/h1.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { SphereComponent } from './common/sphere/sphere.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TargetViewComponent,
    SkillsViewComponent,
    HomeViewComponent,
    ContactViewComponent,
    TagComponent,
    ExperiencesViewComponent,
    EarthCanevaComponent,
    H1Component,
    SphereComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
