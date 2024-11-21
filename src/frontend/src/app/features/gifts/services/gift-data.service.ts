import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PeopleCreate, PeopleEntity } from '../types';

export type ApiResult = {
  people: PersonItem[];
};
type PersonItem = {
  id: string;
  name: string;
  isLocal: boolean;
};

@Injectable()
export class GiftDataService {
  #http = inject(HttpClient);

  addPerson(person: PeopleCreate): Observable<PeopleEntity> {
    return this.#http
      .post<PersonItem>('/api/user/people', person)
      .pipe(
        map(
          (r) =>
            ({
              ...r,
              location: r.isLocal ? 'local' : 'remote',
            }) as PeopleEntity,
        ),
      );
  }
  getPeople(): Observable<PeopleEntity[]> {
    return this.#http.get<ApiResult>('/api/user/gifts').pipe(
      map((r) => r.people), // ApiResult -> {id: string, name: string, isLocal: boolean}[]
      map((people) => {
        return people.map((person) => {
          const transformed: PeopleEntity = {
            id: person.id,
            name: person.name,
            location: person.isLocal ? 'local' : 'remote',
          };
          return transformed;
        });
      }),
    );
  }
}
