import { Component } from '@angular/core';
import { ILANLAR } from '../../../../public/ilanlar/ilanlar';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IlanBilgileriComponentComponent } from './ilan-bilgileri-component/ilan-bilgileri-component.component';
import { AciklamaComponent } from './aciklama/aciklama.component';
import { KonumComponent } from './konum/konum.component';

@Component({
  selector: 'app-ilanlar-detail-page',
  imports: [CommonModule, IlanBilgileriComponentComponent, AciklamaComponent, KonumComponent],
  templateUrl: './ilanlar-detail-page.component.html',
  styleUrl: './ilanlar-detail-page.component.scss'
})
export class IlanlarDetailPageComponent {
  ilan: any;
  activeTab: string = 'info'; // Default active tab

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const ilanId = +this.route.snapshot.paramMap.get('id')!; // Get the ID from the route
    this.ilan = ILANLAR.find((i) => i.id === ilanId); // Find the ilan by ID
  }

  setActiveTab(tab: string) {
    this.activeTab = tab; // Set the active tab
  }
}