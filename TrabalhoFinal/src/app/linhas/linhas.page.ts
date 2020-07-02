import { Component, OnInit, ViewChild} from '@angular/core';
import { LinhasService } from '../services/linhas.service';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import _ from 'lodash';


@Component({
    selector: 'app-linhas',
    templateUrl: './linhas.page.html',
    styleUrls: ['./linhas.page.scss'],
})
export class LinhasPage implements OnInit {
    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

    linhas: any = [];
    auxLinhas: any = [];

    constructor(
        private linhaService: LinhasService,
        private router: Router
    ) { }

    async ngOnInit() {
        this.linhas = await this.linhaService.getLinhas();
        this.auxLinhas = this.linhas;
        return this.linhas;   
    }
    async getLinhas(linhaId) {
        this.router.navigate(['/veiculos', linhaId]);
    }

    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            event.target.complete();

            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.linhas.length == 0) {
                event.target.disabled = true;
            }
        }, 500);
    }
    toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled
    }

    filtrarLinha(event) {
        const val = event.target.value;
        this.linhas = this.auxLinhas.filter((item) => {
            return (item.id.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
    }
}
