import { Component, Input, OnInit } from '@angular/core';
import { CustomCards } from '../../models/customCards';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.sass'],
})
export default class CustomCardComponent implements OnInit {
  @Input() card!: CustomCards;

  ngOnInit() {
    console.log(this.card);
  }
}
