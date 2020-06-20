import { Component, OnInit } from '@angular/core';
import { LinhasService } from '../services/linhas.service';
import { Router } from '@angular/router';
import { Veiculos } from '../models/veiculos.model';

@Component({
  selector: 'app-linhas',
  templateUrl: './linhas.page.html',
  styleUrls: ['./linhas.page.scss'],
})
export class LinhasPage implements OnInit {

    linhas: any = [];

    constructor(
        private linhaService: LinhasService,
        private router: Router
    ) { }

    async ngOnInit() {
        this.linhas = await this.linhaService.getLinhas();
        return this.linhas;
    }

    async getLinhas(linhaId) {
        this.router.navigate(['/veiculos',linhaId]);
    }

}
