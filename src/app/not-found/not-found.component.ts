import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  title: string = '404 not found';
  header: string = 'I have bad news for you';
  description: string = 'The page you are looking for might be removed or is temporarily unavailable';
  myName: string = 'Arkadiusz Szreiber';

  constructor() { }

  ngOnInit(): void {
  }

}
