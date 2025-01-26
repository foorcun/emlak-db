import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-konum',
  templateUrl: './konum.component.html',
  styleUrls: ['./konum.component.scss'],
})
export class KonumComponent {
  @Input() adresDetay: string = '';
  @Input() adresIl: string = '';
  @Input() adresIlce: string = '';
}

