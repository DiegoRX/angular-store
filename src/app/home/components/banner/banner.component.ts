import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})
export class BannerComponent implements OnInit {

  images: string[] = [
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/216cfd109591501.5fd78c925414a.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6745f381761821.5d094044ee335.png'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
