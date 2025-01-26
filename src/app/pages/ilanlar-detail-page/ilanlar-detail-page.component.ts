import { Component } from '@angular/core';
import { ILANLAR } from '../../../../public/ilanlar/ilanlar';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ilanlar-detail-page',
  imports: [CommonModule],
  templateUrl: './ilanlar-detail-page.component.html',
  styleUrl: './ilanlar-detail-page.component.scss'
})
export class IlanlarDetailPageComponent {

  ilan: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const ilanId = +this.route.snapshot.paramMap.get('id')!; // Get the ID from the route
    this.ilan = ILANLAR.find((i) => i.id === ilanId); // Find the ilan by ID
  }
}