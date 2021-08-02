import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      id: '1',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b582fc38451919.5761fc5627f33.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/532be736866027.572bdb861e05d.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/87c27c36866027.572bdb861ee54.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ab367152253975.590a31551d71d.jpg',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aaddaa52253975.590a31551d01e.jpg',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  clickProduct(id:number){
    console.log('product')
    console.log(id)
  }

}
