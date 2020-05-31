import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RotasService {



    constructor(private http: HttpClient) { }

<<<<<<< HEAD
    async getVeiculos(linha) {
        
=======
    async getVeiculos() {
>>>>>>> f2c437863095e1b0cb1a574326ebcbe704e3202e
        let response = await this.http.get("https://my-json-server.typicode.com/vinisouzapq/TrabalhoFinalDesenvolvimentoMobile/linhas/"+linha+"/veiculos").toPromise();
        //console.log(response);
        return response;
    } 
}
