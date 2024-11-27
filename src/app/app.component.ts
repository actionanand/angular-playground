import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { WrapComponent } from './components/wrap/wrap.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, WrapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
