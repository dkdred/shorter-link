import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-table',
  templateUrl: './click-table.component.html',
  styleUrls: ['./click-table.component.scss']
})
export class ClickTableComponent implements OnInit {

  constructor() { }

  dataSource: any;

  displayedColumns: string[] = ['']

  ngOnInit(): void {
  }

}
