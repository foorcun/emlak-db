import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DanismanHeroBeltComponent } from './danisman-hero-belt/danisman-hero-belt.component';

@Component({
  selector: 'app-danisman-detail-page',
  templateUrl: './danisman-detail-page.component.html',
  styleUrls: ['./danisman-detail-page.component.css'],
  imports: [CommonModule, DanismanHeroBeltComponent]
})
export class DanismanDetailPageComponent implements OnInit {
  selectedDanisman: any;

  danismanlar = [
    {
      id: 1,
      photo: 'images/person.png',
      name: 'Ahmet Yılmaz',
      emlakOfisi: 'XYZ Emlak',
      role: 'Saha Direktörü',
    },
    {
      id: 2,
      photo: 'images/person.png',
      name: 'Elif Demir',
      emlakOfisi: 'ABC Realty',
      role: 'Broker Owner',
    },
    {
      id: 3,
      photo: 'images/person.png',
      name: 'Mehmet Çelik',
      emlakOfisi: 'Mega Emlak',
      role: 'Gayrimenkul Danışmanı',
    },
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.selectedDanisman = this.danismanlar.find(d => d.id === +id);
    } else {
      this.selectedDanisman = null;
    }
  }
}
