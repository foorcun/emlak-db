import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-ofislerimiz-detail-page',
  imports: [],
  templateUrl: './ofislerimiz-detail-page.component.html',
  styleUrl: './ofislerimiz-detail-page.component.scss'
})
export class OfislerimizDetailPageComponent {
  title: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.title = this.route.snapshot.paramMap.get('title');
  }

  goBack(): void {
    this.location.back();
  }
}
