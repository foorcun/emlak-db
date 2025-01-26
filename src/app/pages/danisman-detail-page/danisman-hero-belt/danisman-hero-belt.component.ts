import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-danisman-hero-belt',
  imports: [],
  templateUrl: './danisman-hero-belt.component.html',
  styleUrl: './danisman-hero-belt.component.scss'
})
export class DanismanHeroBeltComponent {
  @Input() danismanName: string = '';
  @Input() danismanSubtitle: string = '';
  danismanExperience: number = 10; // Years of experience
}
