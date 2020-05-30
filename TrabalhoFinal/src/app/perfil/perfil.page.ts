import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})

export class PerfilPage implements OnInit {


    constructor(private perfilService: PerfilService) {}

    async ngOnInit() {
        let response = await this.perfilService.getUser();
        return response;
  }

}
