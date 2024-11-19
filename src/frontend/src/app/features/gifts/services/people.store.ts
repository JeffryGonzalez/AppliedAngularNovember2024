import { signalStore } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import { PeopleEntity } from '../types';

export const PeopleStore = signalStore(withEntities<PeopleEntity>());
