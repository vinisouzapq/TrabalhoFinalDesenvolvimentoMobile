import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { VeiculosService } from '../services/veiculos.service';


@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.page.html',
  styleUrls: ['./veiculos.page.scss'],
})

export class VeiculosPage implements OnInit {

    veiculos: any;

    constructor(
        private route: ActivatedRoute,
        private veiculosService: VeiculosService,
    ) { }

    async ngOnInit() {
        this.veiculos = await this.veiculosService.getVeiculos(this.route.snapshot.paramMap.get("id"));
        return this.veiculos;
    }

 
    }
   


