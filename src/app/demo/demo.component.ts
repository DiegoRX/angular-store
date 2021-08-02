import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.sass']
})
export class DemoComponent implements OnInit {

  constructor() { }


  title = 'angular-store';

  names =  ['Cholao', 'Raspi', 'Pixel', 'Fufa', 'Marce'];

  objeto = {}

  power = 10

  ngOnInit(){
    console.log('init')

  }  

  addItems(title: string) {
    this.names.push(title)
  }

  deleteItems(index: number) {
    this.names.splice(index, 1)
  }
}
