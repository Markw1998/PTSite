import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor() {
    $('#submitForm').on('click', function() {
      $('#contact-form').submit();
    });
  }

  ngOnInit() {}
}
