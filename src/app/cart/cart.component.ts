import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  itemList: string;

  constructor() { }

  ngOnInit(): void {
    console.log('init')
  }

}
