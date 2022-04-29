import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor( private http: HttpClient) { }

  getAllCampaign(){
    return this.http.get('campaign/getCampaign');
  }

  createURL(body: any){
      return this.http.post('campaign/create', body);
  }
}
