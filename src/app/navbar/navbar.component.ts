import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  id: number[];


  constructor(private route: ActivatedRoute) {
    this.id = [21, 22, 23, 24, 25, 26, 27];
  }
}
