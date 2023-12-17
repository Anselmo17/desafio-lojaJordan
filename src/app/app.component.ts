import { Component } from '@angular/core';
import { Itens } from './models/item.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loja-jordan';


  public list: Itens[] = [
    {
      title: 'Air Jordan 1 Mid Dutch Green',
      marca: 'Tênis Air Jordan',
      preco: '1.199,99',
      image: 'air-jordan-1-mid-dutch-green-1-400.svg'
    },
    {
      title: 'Air Jordan 1 Mid Dutch Green',
      marca: 'Tênis Air Jordan',
      preco: '1.049,99',
      image: 'air-jordan-1-high-zoom-cmft-tropical-twist-1-400.svg'
    },
    {
      title: 'Air Jordan 1 Mid Dutch Green',
      marca: 'Tênis Air Jordan',
      preco: '1.350,00',
      image: 'air-jordan-1-retro-high-court-purple-w-1-400.svg'
    },
    {
      title: 'Air Jordan 1 Mid GS Light Smoke Grey',
      marca: 'Tênis Air Jordan',
      preco: '1.585,00',
      image: 'air-jordan-1-mid-light-smoke-grey-gs-1-1000.svg'
    },
    {
      title: 'Air Jordan 1 Mid SE Brigth Citrus',
      marca: 'Tênis Air Jordan',
      preco: '949,99',
      image: 'air-jordan-1-mid-bright-citrus-1-1000 1.svg'
    },
    {
      title: 'Air Jordan 1 Mid Grey Camo',
      marca: 'Tênis Air Jordan',
      preco: '999,99',
      image: 'air-jordan-1-mid-grey-camo-1-1000 1.svg'
    }
  ]
}
