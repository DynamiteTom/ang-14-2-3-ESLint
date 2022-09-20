import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf],
  template: `<h1>Hi Angular 14.2.3</h1>
  
  <button (click)="toggle()">toggle<button>
  <br/>
  <p *ngIf="show">Toggled</p>
  `,
})
export class AppComponent {
  title = 'ang-14-2-3-ESLint';
  show = false;

  toggle(){
    this.show = !this.show;
  }
}
