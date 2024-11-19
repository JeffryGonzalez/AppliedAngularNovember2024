import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PeopleStore } from '../services/people.store';

@Component({
  selector: 'app-gifts-people-entry',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <form>
      <div class="form-control">
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">What is the person's name?</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
          <div class="label"></div>
        </label>
      </div>
      <div class="form-control w-1/3">
        <label class="label cursor-pointer">
          <input
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
}
