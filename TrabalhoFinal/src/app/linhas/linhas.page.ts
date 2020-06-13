import { Component, OnInit } from '@angular/core';
import { Linhas } from '../models/linhas.model';
import { LinhasService } from '../services/linhas.service';

@Component({
  selector: 'app-linhas',
  templateUrl: './linhas.page.html',
  styleUrls: ['./linhas.page.scss'],
})
export class LinhasPage implements OnInit {

    linhas: Linhas;
    linhaArray: Linhas[];
    response: any

    constructor(private linhaService: LinhasService) { }

    async ngOnInit() {
        this.response = await this.linhas.itinerario;
        this.linhaArray = this.response;

  }

}
