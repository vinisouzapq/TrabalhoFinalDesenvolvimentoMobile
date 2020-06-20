import { Component, OnInit, ViewChild} from '@angular/core';
import { LinhasService } from '../services/linhas.service';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';


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

    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            event.target.complete();

            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.linhas.length == 1000) {
                event.target.disabled = true;
            }
        }, 500);
    }

    

}
