import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DanismanlarimizImageBeltComponent } from './danismanlarimiz-image-belt/danismanlarimiz-image-belt.component';

@Component({
  selector: 'app-danismanlarimiz-page',
  templateUrl: './danismanlarimiz-page.component.html',
  styleUrls: ['./danismanlarimiz-page.component.css'],
  imports: [CommonModule, DanismanlarimizImageBeltComponent]
})
export class DanismanlarimizPageComponent {
circleSize = 150; // Size of the circular container

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
