import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PeopleGiftListModelItem } from '../types';

@Component({
  selector: 'app-gifts-people',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TitleCasePipe],
  template: `
    <div class="grid">
      @for (p of people(); track p.id) {
        <div class="card bg-base-100 w-96 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">{{ p.name }}</h2>

            <h3>{{ p.name }} is {{ p.location | titlecase }}</h3>
            @for (idea of p.ideas; track idea.id) {
              <p>Idea: {{ idea.description }}</p>
            } @empty {
              <p>No ideas yet for {{ p.name }}</p>
            }
          </div>
        </div>
      }
    </div>
  `,
  styles: ``,
})
export class PeopleComponent {
  people = signal<PeopleGiftListModelItem[]>([
    {
      id: '2',
      name: 'Henry Gonzalez',
      location: 'local',
      ideas: [
        {
          id: '1',
          description: 'Bass Pickups',
        },
      ],
    },
    {
      id: '1',
      name: 'Violet Gonzalez',
      location: 'remote',
      ideas: [
        {
          id: '1',
          description: 'Gift Cards',
        },
        {
          id: '2',
          description: 'Art Supplies',
        },
      ],
    },
    {
      id: '3',
      name: 'Stacey Gonzalez',
      location: 'local',
      ideas: [],
    },
  ]);
}
