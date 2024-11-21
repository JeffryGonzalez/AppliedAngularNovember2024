import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
} from '@ngrx/signals';
import {
  addEntities,
  addEntity,
  setEntities,
  withEntities,
} from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { setFulfilled, withRequestStatus, setPending } from '@shared/index';
import { mergeMap, pipe, switchMap, tap } from 'rxjs';
import { PeopleCreate, PeopleEntity } from '../types';
import { GiftDataService } from './gift-data.service';

export const PeopleStore = signalStore(
  withDevtools('people-store'),
  withRequestStatus(),
  withEntities<PeopleEntity>(),
  withMethods((store) => {
    // injection context
    const service = inject(GiftDataService);
    return {
      load: rxMethod<void>(
        pipe(
          tap(() => patchState(store, setPending())),
          switchMap(() =>
            // I only care about the last result. Throw any previous pending results away.
            service
              .getPeople()
              .pipe(
                tap((d) => patchState(store, setEntities(d), setFulfilled())),
              ),
          ),
        ),
      ),
      addPerson: rxMethod<PeopleCreate>(
        pipe(
          tap(() => patchState(store, setPending())),
          mergeMap((p) =>
            service
              .addPerson(p)
              .pipe(
                tap((p) => patchState(store, addEntity(p), setFulfilled())),
              ),
          ),
        ),
      ),
    };
  }),

  withComputed((store) => {
    return {
      totalPeople: computed(() => store.entities().length),
      hasPeople: computed(() => store.entities().length > 0),
      totalLocal: computed(
        () => store.entities().filter((p) => p.location === 'local').length,
      ),
      totalRemote: computed(
        () => store.entities().filter((p) => p.location === 'remote').length,
      ),
    };
  }),
  withHooks({
    onInit(store) {
      store.load();
    },
  }),
);
