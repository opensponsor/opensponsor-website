import {Component, Input} from '@angular/core';
import {DebitCard} from "@app/interfaces/ApiInterface";
import {MaskedCardNumberComponent} from "@app/components/masked-card-number/masked-card-number.component";

@Component({
  selector: 'os-debit-card',
  imports: [
    MaskedCardNumberComponent
  ],
  templateUrl: './debit-card.component.html',
  styleUrl: './debit-card.component.scss'
})
export class DebitCardComponent {
  @Input({
    required: true,
  })
  debitCard!: DebitCard;
}
