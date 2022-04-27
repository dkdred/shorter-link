import { Component, OnInit } from '@angular/core';
import { ConnectService } from "../connect.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(
      private connect: ConnectService,
  ) { }

  ngOnInit(): void {
    this.connect.getAllCampaign().subscribe(res => {
      console.log(res);
    });

  }

}
