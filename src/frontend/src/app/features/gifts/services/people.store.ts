import { patchState, signalStore, withMethods } from '@ngrx/signals';
import { addEntity, withEntities } from '@ngrx/signals/entities';
import { PeopleCreate, PeopleEntity } from '../types';

export const PeopleStore = signalStore(
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
