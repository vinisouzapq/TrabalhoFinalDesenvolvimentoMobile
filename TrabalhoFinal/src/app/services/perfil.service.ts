import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PerfilService {

    constructor(private http: HttpClient) { }

    async getUser(id) {
        let response = await this.http.get("https://my-json-server.typicode.com/vinisouzapq/TrabalhoFinalDesenvolvimentoMobile").toPromise();
        //console.log(response);
        return response;
    }
}
