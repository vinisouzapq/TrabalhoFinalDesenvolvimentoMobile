import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HorariosService {

    constructor(private http: HttpClient) { }

    async getHorarios() {
        let response = await this.http.get("https://my-json-server.typicode.com/vinisouzapq/TrabalhoFinalDesenvolvimentoMobile/db").toPromise();
        //console.log(response);
        return response;
    }
}
