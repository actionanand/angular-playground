import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { ROUTES_URL as Urls } from '../../shared/constants/routes-urls.constants';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatMenuModule, MatButtonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly urls = Urls;
}
