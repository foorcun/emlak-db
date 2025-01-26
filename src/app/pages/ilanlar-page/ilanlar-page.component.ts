import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ILANLAR } from '../../../../public/ilanlar/ilanlar';

@Component({
  selector: 'app-ilanlar-page',
  templateUrl: './ilanlar-page.component.html',
  styleUrls: ['./ilanlar-page.component.scss'],
  imports: [CommonModule]
})
export class IlanlarPageComponent {
ilanlar = ILANLAR;
}
