import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class LinhasService {

    private linhas = 'https://app.fakejson.com/q/8q2DNYap?token=cuehZHISeknWTxr0H6oHrg';

    constructor(private http: HttpClient) { }

    async Linhas() {
        let response = await this.http.get(this.linhas).toPromise();
        return response;
    }
    async getLinhasById(id) {
        let response = await this.http.get(this.linhas + id).toPromise();
        return response
    }
    async Post(object) {
        let response = await this.http.post(this.linhas, object, { observe: 'response' }).toPromise();
        return response;
    } 
}
