import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NavLinkModel } from '../types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: ` <a [routerLink]="[link().path]">{{ link().text }}</a> `,
  styles: ``,
})
export class NavLinkComponent {
  link = input.required<NavLinkModel>();
}
