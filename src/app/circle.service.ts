import { Injectable } from '@angular/core';
import {Circle} from './circle/circle';
import { Http,Headers } from '@angular/http';

@Injectable()
export class CircleService {

    private CIRCLE_SERVICE_BASE_URL = "http://localhost:8082/api/";
    private ApiUrl= 'circle/';
    private ServerWithApiUrl;
    headerObj=new Headers({
        'Authorization': 'Bearer '+localStorage.getItem('token')
    });

    constructor(private http: Http) {
    }

    getCircles() {
      this.ApiUrl = 'getCircles';
        this.ServerWithApiUrl = this.CIRCLE_SERVICE_BASE_URL + this.ApiUrl;
        console.log("In service");
        return this.http.get(this.ServerWithApiUrl,{headers:this.headerObj});
    }
    registercircle(form)
    {
        this.ApiUrl = 'circle';
        this.ServerWithApiUrl = this.CIRCLE_SERVICE_BASE_URL + this.ApiUrl;
        return this.http.post(this.ServerWithApiUrl,form.value,{headers:this.headerObj});
    }
    
}