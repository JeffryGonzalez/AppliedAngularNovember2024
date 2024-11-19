import { patchState, signalStore, withMethods } from '@ngrx/signals';
import { addEntity, withEntities } from '@ngrx/signals/entities';
import { PeopleCreate, PeopleEntity } from '../types';
import { withDevtools } from '@angular-architects/ngrx-toolkit';

export const PeopleStore = signalStore(
  withDevtools('people-store'),
  withEntities<PeopleEntity>(),
  withMethods((store) => {
    // injection context
    return {
      addPerson: (request: PeopleCreate) => {
        const entity: PeopleEntity = {
          id: crypto.randomUUID(),
          ...request,
        };
        patchState(store, addEntity(entity));
      },
    };
  }),
);
