import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    // console.log(e);
  }


  goHinge = false;
  constructor() { }


  ngOnInit(): void {
  }
  hinge() {
    this.goHinge = !this.goHinge;
  }
}
