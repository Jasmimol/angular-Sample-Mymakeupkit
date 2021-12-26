import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  products =[{'prod':'Lipstick','brand':'Chanel'},{'prod':'Eyeliner','brand':'Sephora'},{'prod':'Mascara','brand':'Loreal'},{'prod':'Rogue','brand':'Gucci'},{'prod':'Nail Polish','brand':'Loreal'}]
  constructor() { }

  ngOnInit() {
  }

}