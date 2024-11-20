import { ChangeDetectionStrategy, Component, resource } from '@angular/core';
import { FeatureDirective } from '../shared/feature-management/feature.directive';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeatureDirective],
  template: `
    <h1>Above</h1>
    @defer {
      <div *feature="'home-page'" class="alert alert-info">
        <h2>How is the home page coming!</h2>
      </div>
    }
    <h1>Below Stuff</h1>
  `,
  styles: ``,
})
export class HomeComponent {
  peopleResource = resource({
    loader: () => fetch('/api/user/gifts').then((r) => r.json()),
  });
}
