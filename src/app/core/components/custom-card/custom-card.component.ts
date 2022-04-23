import { Component, Input } from '@angular/core';
import { CustomCards } from '../../models/customCards';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.sass'],
})
export default class CustomCardComponent {
  @Input() card!: CustomCards;
}
