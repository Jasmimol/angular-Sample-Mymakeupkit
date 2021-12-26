import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 {
    font-family:  Verdana, Geneva, Tahoma, sans-serif;
    color:  brown;
    font-size: small;
    font-display:  initial;
    font-style: oblique;
  }`]
})
export class HelloComponent  {
  @Input() name: string;
}
