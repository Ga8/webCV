import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  title = 'GG Web CV ';
  showFiller= false;
  toggleControl = new FormControl(false);
  color= 'teal';
  darkModeOn=true;

  constructor( private overlay: OverlayContainer){

  }
  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe(  (darkMode) => {
      const darkClassName = 'darkMode';
      this.darkModeOn = darkMode ;
      console.log("dm : " +this.darkModeOn)
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    })
  }
}
