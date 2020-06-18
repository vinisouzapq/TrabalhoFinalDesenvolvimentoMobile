import { Component, OnInit } from '@angular/core';
import { LinhasService } from '../services/linhas.service';
import { VeiculosService } from '../services/veiculos.service';

@Component({
  selector: 'app-linhas',
  templateUrl: './linhas.page.html',
  styleUrls: ['./linhas.page.scss'],
})
export class LinhasPage implements OnInit {

    linhas: any = [];

    constructor(private linhaService: LinhasService, private veiculoService: VeiculosService) { }

    async ngOnInit() {
        this.linhas = await this.linhaService.getLinhas();
        return this.linhas;
    }

    async getData(linhaId) {
        const resp = await this.veiculoService.getVeiculos(linhaId);
        return resp;
    }

}
