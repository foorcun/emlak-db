import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-belt',
  templateUrl: './button-belt.component.html',
  styleUrls: ['./button-belt.component.scss']
})
export class ButtonBeltComponent {
  @Output() contact = new EventEmitter<void>();
  @Output() share = new EventEmitter<void>();

  onContactClick(): void {
    this.contact.emit();
  }

  onShareClick(): void {
    this.share.emit();
  }
}
