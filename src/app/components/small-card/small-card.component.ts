import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.sass'],
})
export class SmallCardComponent {
  @Input()
  photoCover: string = '';

  @Input()
  cardTitle: string = '';

  @Input()
  cardLink: string = '';
}
