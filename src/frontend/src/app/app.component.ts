import { Component, computed, signal } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-nav-bar />
    <p>{{ current() }}</p>
    <button (click)="increment()" class="btn btn-primary">Increment</button>
    <button (click)="decrement()" class="btn btn-primary">Decrement</button>

    @if (isEven()) {
      <p>That is an even number!</p>
    } @else {
      <p>That is an odd number</p>
    }

    <p>{{ isEven() }}</p>
    <p>{{ isEven() }}</p>
    <p>{{ isEven() }}</p>
    <p>{{ isEven() }}</p>
    <p>{{ isEven() }}</p>
    <p>{{ isEven() }}</p>
    <p>{{ isEven() }}</p>
    <p>{{ isEven() }}</p>
    <p>{{ isEven() }}</p>
    <main class="container mx-auto"></main>
  `,
  styles: [],
  imports: [NavBarComponent],
})
export class AppComponent {
  current = signal(0);
  increment() {
    this.current.update((c) => c + 1);
  }
  decrement() {
    this.current.update((c) => c - 1);
  }

  isEven = computed(() => this.current() % 2 === 0);
}
