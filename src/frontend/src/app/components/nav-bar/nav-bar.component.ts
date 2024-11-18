import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NavLinkComponent } from './components/nav-link.component';
import { NavLinkModel } from './types';

@Component({
  selector: 'app-nav-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NavLinkComponent],
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
export class NavBarComponent {
  siteName = signal('Applied Angular Training Course');

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
