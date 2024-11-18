import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { NavLinkComponent } from './components/nav-link.component';
import { NavLinkModel } from './types';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nav-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NavLinkComponent],
  providers: [Title], // hey angular, let me use this thing - provide it to me.
  template: `
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">{{ siteName() }}</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          @for (link of links(); track link.text) {
            <li><app-link [link]="link" /></li>
          }
        </ul>
      </div>
    </div>
  `,
  styles: ``,
})
export class NavBarComponent implements OnInit {
  #titleService = inject(Title);
  siteName = signal('Applied Angular Training Course');

  ngOnInit(): void {
    this.#titleService.setTitle(this.siteName());
  }
  links = signal<NavLinkModel[]>([
    {
      text: 'Home',
      path: 'home',
    },
    {
      text: 'About Us',
      path: 'about',
    },
  ]);
}
