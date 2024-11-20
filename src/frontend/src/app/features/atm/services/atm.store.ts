import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { WITHDRAWAL_AMOUNTS, WithdrawAmount } from '../types';
import { computed } from '@angular/core';

export const AtmStore = signalStore(
  withState({
    balance: 500.23,
    amounts: WITHDRAWAL_AMOUNTS,
  }),
  withMethods((store) => {
    return {
      withdraw(amount: WithdrawAmount) {
        patchState(store, { balance: store.balance() - amount });
      },
    };
  }),
  withComputed((store) => {
    return {
      atBalanceThreshold: computed(() => store.balance() < 50),
    };
  }),
);
