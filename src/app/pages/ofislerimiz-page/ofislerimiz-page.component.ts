import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Card {
  imageUrl: string;
  name: string; // Emlak name
  address: string; // Emlak address
  tel: string; // Telephone number
}

@Component({
  selector: 'app-ofislerimiz-page',
  imports: [CommonModule],
  templateUrl: './ofislerimiz-page.component.html',
  styleUrl: './ofislerimiz-page.component.scss'
})
export class OfislerimizPageComponent {
  cards: Card[] = [
    {
      imageUrl: '/images/emlak-image.png',
      name: 'Orçun Emlak',
      address: '123 Main Street, Istanbul, Turkey',
      tel: '+90 123 456 78 90'
    },
    {
      imageUrl: '/images/emlak-image.png',
      name: 'Yuvam Gayrimenkul',
      address: '456 Elm Street, Ankara, Turkey',
      tel: '+90 312 345 67 89'
    },
    {
      imageUrl: '/images/emlak-image.png',
      name: 'Mutlu Evler Emlak',
      address: '789 Oak Avenue, Izmir, Turkey',
      tel: '+90 232 123 45 67'
    },
    {
      imageUrl: '/images/emlak-image.png',
      name: 'Başarı Emlak Ofisi',
      address: '101 Pine Road, Bursa, Turkey',
      tel: '+90 224 678 90 12'
    },
    {
      imageUrl: '/images/emlak-image.png',
      name: 'Elite Konut Danışmanlık',
      address: '202 Cedar Lane, Antalya, Turkey',
      tel: '+90 242 234 56 78'
    },
    {
      imageUrl: '/images/emlak-image.png',
      name: 'Huzur Evi Gayrimenkul',
      address: '303 Maple Court, Adana, Turkey',
      tel: '+90 322 456 78 90'
    },
    {
      imageUrl: '/images/emlak-image.png',
      name: 'Vizyon Arsa ve Konut',
      address: '404 Birch Boulevard, Gaziantep, Turkey',
      tel: '+90 342 123 45 67'
    },
    {
      imageUrl: '/images/emlak-image.png',
      name: 'Mega Emlakçılık',
      address: '505 Walnut Way, Konya, Turkey',
      tel: '+90 332 345 67 89'
    },
    {
      imageUrl: '/images/emlak-image.png',
      name: 'Yeni Hayat Emlak',
      address: '606 Aspen Alley, Samsun, Turkey',
      tel: '+90 362 567 89 01'
    },
    {
      imageUrl: '/images/emlak-image.png',
      name: 'Cennet Evim Gayrimenkul',
      address: '707 Redwood Rise, Trabzon, Turkey',
      tel: '+90 462 678 90 23'
    }
  ];

  constructor(private router: Router) {}

  onCardClick(card: Card): void {
    // Navigate to the detail page with the name as a route parameter
    this.router.navigate(['/ofislerimiz-page', card.name]);
  }
}
