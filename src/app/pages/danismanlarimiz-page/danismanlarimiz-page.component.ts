import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-danismanlarimiz-page',
  templateUrl: './danismanlarimiz-page.component.html',
  styleUrls: ['./danismanlarimiz-page.component.css'],
  imports: [CommonModule]
})
export class DanismanlarimizPageComponent {
  circleSize = 150; // Size of the circular container (in pixels)
  imgWidthPercent = 100; // Image width percentage
  imgHeightPercent = 100; // Image height percentage

  danismanlar = [
    {
      photo: 'images/person.png',
      name: 'Ahmet Yılmaz',
      emlakOfisi: 'XYZ Emlak',
      role: 'Saha Direktörü',
    },
    {
      photo: 'images/person.png',
      name: 'Elif Demir',
      emlakOfisi: 'ABC Realty',
      role: 'Broker Owner',
    },
    {
      photo: 'images/person.png',
      name: 'Mehmet Çelik',
      emlakOfisi: 'Mega Emlak',
      role: 'Gayrimenkul Danışmanı',
    },
  ];
}
