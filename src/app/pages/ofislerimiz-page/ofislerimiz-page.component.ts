import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Card {
  imageUrl: string;
  description: string;
}
@Component({
  selector: 'app-ofislerimiz-page',
  imports: [CommonModule],
  templateUrl: './ofislerimiz-page.component.html',
  styleUrl: './ofislerimiz-page.component.scss'
})
export class OfislerimizPageComponent {
  cards: Card[] = [
    { imageUrl: '/images/emlak-image.png', description: 'Orçun Emlak' },
    { imageUrl: '/images/emlak-image.png', description: 'Yuvam Gayrimenkul' },
    { imageUrl: '/images/emlak-image.png', description: 'Mutlu Evler Emlak' },
    { imageUrl: '/images/emlak-image.png', description: 'Başarı Emlak Ofisi' },
    { imageUrl: '/images/emlak-image.png', description: 'Elite Konut Danışmanlık' },
    { imageUrl: '/images/emlak-image.png', description: 'Huzur Evi Gayrimenkul' },
    { imageUrl: '/images/emlak-image.png', description: 'Vizyon Arsa ve Konut' },
    { imageUrl: '/images/emlak-image.png', description: 'Mega Emlakçılık' },
    { imageUrl: '/images/emlak-image.png', description: 'Yeni Hayat Emlak' },
    { imageUrl: '/images/emlak-image.png', description: 'Cennet Evim Gayrimenkul' },
  ];
  constructor(private router: Router) { }

  onCardClick(card: Card): void {
    // Navigate to the detail page with the description as a route parameter
    this.router.navigate(['/ofislerimiz-page', card.description]);
  }


}
