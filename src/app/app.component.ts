import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = '';
  password = '';

  logins: { name: string; password: string }[] = [];

  login() {
    this.logins.push({
      name: this.name,
      password: this.password
    });

    
    this.name = '';
    this.password = '';
  }
}
