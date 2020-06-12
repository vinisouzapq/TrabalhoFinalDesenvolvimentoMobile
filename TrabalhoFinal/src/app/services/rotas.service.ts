import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RotasService {



    constructor(private http: HttpClient) { }


    async getVeiculos() {
        let response = await this.http.get("").toPromise();
        console.log(response);
        //return response;
    } 
}
