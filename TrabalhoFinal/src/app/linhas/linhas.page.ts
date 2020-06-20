import { Component, OnInit } from '@angular/core';
import { LinhasService } from '../services/linhas.service';
import { VeiculosService } from '../services/veiculos.service';
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
        private veiculoService: VeiculosService,
        private router: Router
        

    ) { }

    async ngOnInit() {
        this.linhas = await this.linhaService.getLinhas();
        return this.linhas;
    }

    async getLinhas(linhaId) {
        let resp = await this.veiculoService.getVeiculos(linhaId);
        console.log(resp);
        this.router.navigate(['/veiculos']);
    }

}
