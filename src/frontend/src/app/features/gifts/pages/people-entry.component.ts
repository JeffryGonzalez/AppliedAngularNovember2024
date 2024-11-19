import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PeopleStore } from '../services/people.store';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PeopleCreate } from '../types';

@Component({
  selector: 'app-gifts-people-entry',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="addPerson()">
      <div class="form-control">
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">What is the person's name?</span>
          </div>
          <input
            type="text"
            formControlName="name"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
          <div class="label"></div>
        </label>
      </div>
      <div class="form-control w-1/3">
        <label class="label cursor-pointer">
          <input
            formControlName="needsMailing"
            type="checkbox"
            checked="checked"
            class="checkbox checkbox-primary"
          />
          <span class="label-text">Will you need to mail this gift?</span>
        </label>
      </div>
      <button type="submit" class="btn btn-primary">
        Add This Person to the List
      </button>
    </form>
  `,
  styles: ``,
})
export class PeopleEntryComponent {
  store = inject(PeopleStore);

  form = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true }),
    needsMailing: new FormControl<boolean>(false, { nonNullable: true }),
  });

  addPerson() {
    const request: PeopleCreate = {
      name: this.form.controls.name.value,
      location: this.form.controls.needsMailing.value ? 'remote' : 'local',
    };
    this.store.addPerson(request);
  }
}