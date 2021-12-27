import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  products : Product[]  = [
    { prod: 'Lipstick', brand: 'Chanel' },
    { prod: 'Eyeliner', brand: 'Sephora' },
    { prod: 'Mascara', brand: 'Loreal' },
    { prod: 'Rouge', brand: 'Gucci' },
    { prod: 'Nail Polish', brand: 'Loreal' }]
  ;
  selectedProduct?: Product;


  constructor() {}

  ngOnInit() {}
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}
