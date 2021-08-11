import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences-view',
  templateUrl: './experiences-view.component.html',
  styleUrls: ['./experiences-view.component.scss']
})
export class ExperiencesViewComponent implements OnInit {
  goHinge = false;
  constructor() { }

  ngOnInit(): void {
  }
  hinge(){
    this.goHinge = !this.goHinge;
  }

}
