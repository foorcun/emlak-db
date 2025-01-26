import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ButtonBeltComponent } from './button-belt/button-belt.component';

@Component({
  selector: 'app-ofislerimiz-detail-page',
  templateUrl: './ofislerimiz-detail-page.component.html',
  styleUrls: ['./ofislerimiz-detail-page.component.scss'],
  imports: [ ButtonBeltComponent]
})
export class OfislerimizDetailPageComponent {
  title: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.title = this.route.snapshot.paramMap.get('title');
  }

  goBack(): void {
    this.location.back();
  }

  onContact(): void {
    console.log('Contact button clicked');
    // Add contact logic here
  }

  onShare(): void {
    console.log('Share button clicked');
    // Add share logic here
  }
}
