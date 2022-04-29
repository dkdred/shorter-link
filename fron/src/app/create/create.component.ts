import { Component, OnInit } from '@angular/core';
import { ConnectService } from "../connect.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  dest_url = '';
  campaign_name = '';
  src = '';
  shorted_url = '';
  isLoading = false;


  constructor(
      private connect: ConnectService,
      private router: Router,
  ) { }

  ngOnInit(): void {
    this.connect.getAllCampaign().subscribe(res => {
    });

  }

  createShorURL(){
    const body = {
      dest_url : this.dest_url,
      campaign_name : this.campaign_name,
      src : this.src,
      shorted_url : this.shorted_url,
    }
    console.log(body);
    this.connect.createURL(body)
        .subscribe((res: any) => {
          localStorage.setItem('shortUrl', res.shorted_url)
          this.router.navigate(['success']);
        })
  }

}
