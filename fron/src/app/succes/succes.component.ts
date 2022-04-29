import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-succes',
  templateUrl: './succes.component.html',
  styleUrls: ['./succes.component.scss']
})
export class SuccesComponent implements OnInit {

  constructor() { }
  isShorted = localStorage.getItem('shortUrl');
  shorted_url = 'http://localhost:3000/' + this.isShorted

  ngOnInit(): void {
  }

}
