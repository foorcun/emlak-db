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
  danismanTitle: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.danismanTitle = params.get('title');
    });
  }
}
