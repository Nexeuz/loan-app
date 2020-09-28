import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zib-loan-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent implements OnInit {
  links = [
    {
      url: '',
      icon: 'home',
      description: 'Pagina principal'
    },
    {
      url: 'request-loan-list',
      icon: 'request_quote',
      description: 'Lista de solicitudes de préstamo'
    },
    {
      url: 'user-list',
      icon: 'people',
      description: 'Lista de usuarios'

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
