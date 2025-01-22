import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  isActive = false;

  toggleView() {
    this.isActive = !this.isActive;
    const container = document.getElementById('container');
    if (this.isActive) {
      container?.classList.add('active');
    } else {
      container?.classList.remove('active');
    }
  }
}
