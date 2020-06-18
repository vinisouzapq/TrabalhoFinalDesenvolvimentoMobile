import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

    private veiculos = 'https://my-json-server.typicode.com/vinisouzapq/TrabalhoFinalDesenvolvimentoMobile/veiculos';

    constructor(private http: HttpClient, ) { }

    async getVeiculos(linha) {
        let response = await this.http.get(this.veiculos + "?linhaId=" + linha).toPromise();
        return response;
    }  
}
