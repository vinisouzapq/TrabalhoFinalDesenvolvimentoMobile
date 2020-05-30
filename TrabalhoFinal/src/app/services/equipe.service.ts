import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EquipeService {

    constructor(private http: HttpClient) { }

    async getEquipe() {
        let response = await this.http.get("https://my-json-server.typicode.com/vinisouzapq/TrabalhoFinalDesenvolvimentoMobile/db").toPromise();
        //console.log(response);
        return response;
    }
}
