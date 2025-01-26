import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ilan-bilgileri-component',
  imports: [CommonModule],
  templateUrl: './ilan-bilgileri-component.component.html',
  styleUrl: './ilan-bilgileri-component.component.scss'
})
export class IlanBilgileriComponentComponent {
  @Input() ilan: any; // Input property to accept ilan data

}
