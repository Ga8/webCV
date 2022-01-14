import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { FormMailType } from 'src/app/model/forms';


@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss']
})
export class ContactViewComponent implements OnInit {

  formMail: FormMailType = {
    name: 'test',
    object: '',
    email: '',
    message: ''
  };
  constructor() { }

  ngOnInit(): void {
  }
  send(form: Form) {

    console.log({ form })
  }
}
