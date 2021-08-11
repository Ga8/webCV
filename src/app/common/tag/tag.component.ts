import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

@Input('tag') tag : String;
@Input('isOpen') isOpen : Boolean;
@Input('ml') ml :String ;

  constructor() { }

  ngOnInit(): void {
  }

}
