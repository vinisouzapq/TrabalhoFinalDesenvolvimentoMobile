import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RotasService {



    constructor(private http: HttpClient) { }

    async getVeiculos(linha) {
        
        let response = await this.http.get("https://my-json-server.typicode.com/vinisouzapq/TrabalhoFinalDesenvolvimentoMobile/linhas/"+linha+"/veiculos").toPromise();
        //console.log(response);
        return response;
    } 
}
