import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { async } from '@angular/core/testing';

@Injectable({
    providedIn: 'root'
})

export class LinhasService {
    private linhas = 'https://my-json-server.typicode.com/vinisouzapq/TrabalhoFinalDesenvolvimentoMobile/linhas';
    constructor(private http: HttpClient) { }

    ngOnInit() {
    }

    async getLinhas() {
        let response = await this.http.get(this.linhas).toPromise();
        return response;
    }
}