import { CurrencyPipe } from '@angular/common';
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { WITHDRAWAL_AMOUNTS, WithdrawAmount } from '../types';

@Component({
  selector: 'app-atm-withdrawal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe],
  template: `
    <p>Your Balance is {{ balance() | currency }}</p>
    <div class="grid grid-flow-col gap-8">
      @for (amt of amounts; track amt) {
        <button
          [disabled]="balance() < amt"
          (click)="withdraw(amt)"
          class="btn btn-primary ring-2 ring-white"
        >
          {{ amt | currency }}
        </button>
      }
    </div>
  `,
  styles: ``,
})
export class WithdrawalComponent {
  balance = signal(500.23);

  amounts = WITHDRAWAL_AMOUNTS;
  withdraw(amount: WithdrawAmount) {
    this.balance.update((b) => b - amount);
  }
}
