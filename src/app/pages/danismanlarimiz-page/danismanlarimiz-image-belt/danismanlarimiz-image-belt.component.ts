import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-danismanlarimiz-image-belt',
  imports: [],
  templateUrl: './danismanlarimiz-image-belt.component.html',
  styleUrl: './danismanlarimiz-image-belt.component.scss'
})
export class DanismanlarimizImageBeltComponent {
  @Input() photo!: string; // Image source URL
  @Input() circleSize = 150; // Circle size (default: 150px)
}
