import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aciklama',
  imports: [],
  templateUrl: './aciklama.component.html',
  styleUrl: './aciklama.component.scss'
})
export class AciklamaComponent {
  @Input() description: string = ''; // Input for description

}
