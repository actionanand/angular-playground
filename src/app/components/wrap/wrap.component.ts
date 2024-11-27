import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-wrap',
  imports: [MatCardModule, NgClass],
  templateUrl: './wrap.component.html',
  styleUrl: './wrap.component.scss',
})
export class WrapComponent {
  removePadding = input<boolean>(false);
}
