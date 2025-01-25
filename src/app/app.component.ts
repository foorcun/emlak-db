import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarBootstrapComponent } from './common/navbar-bootstrap/navbar-bootstrap.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarBootstrapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'emlak-db';
}