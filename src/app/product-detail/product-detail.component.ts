import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'

//Inyección de dependencias
import { ProductsService } from './../products.service'
import { Product } from './../product.model'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
    ) { }
    
  ngOnInit(){
    this.route.params.subscribe((params: Params) =>{
      const id = params.id;
      this.product = this.productService.getProduct(id)
    })
  }

}
