import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ILANLAR } from '../../../../public/ilanlar/ilanlar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ilanlar-page',
  templateUrl: './ilanlar-page.component.html',
  styleUrls: ['./ilanlar-page.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class IlanlarPageComponent {
  ilanlar = ILANLAR;
  filteredIlanlar = [...this.ilanlar]; // Initialize with all ilanlar
  filterCriteria = {
    city: '',
    district: '',
    maxPrice: '',
    search: '',
  };

  applyFilter() {
    this.filteredIlanlar = this.ilanlar.filter((ilan) => {
      const matchesCity =
        !this.filterCriteria.city ||
        ilan.adresIl.toLowerCase().includes(this.filterCriteria.city.toLowerCase());
      const matchesDistrict =
        !this.filterCriteria.district ||
        ilan.adresIlce.toLowerCase().includes(this.filterCriteria.district.toLowerCase());
      const matchesPrice =
        !this.filterCriteria.maxPrice ||
        parseFloat(ilan.price.replace(/,/g, '').replace(' TL', '')) <=
        parseFloat(this.filterCriteria.maxPrice);
      const matchesSearch =
        !this.filterCriteria.search ||
        ilan.description.toLowerCase().includes(this.filterCriteria.search.toLowerCase());

      return matchesCity && matchesDistrict && matchesPrice && matchesSearch;
    });
  }
}
