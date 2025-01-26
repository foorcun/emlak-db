import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-danisman-detail-page',
  templateUrl: './danisman-detail-page.component.html',
  styleUrls: ['./danisman-detail-page.component.css'],
  imports: [CommonModule]
})
export class DanismanDetailPageComponent implements OnInit {
  danismanId: number | null = null;
  danisman: any = null;

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.danismanId = id ? +id : null;

      // Find the consultant by id
      this.danisman = this.danismanlar.find(d => d.id === this.danismanId);
    });
  }
}
