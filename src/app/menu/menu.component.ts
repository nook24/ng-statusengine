import { Component } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { MatIcon } from '@angular/material/icon';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Menulink } from './menulink.interface'

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatIcon,
    NgFor,
    RouterLink,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private TranslocoService: TranslocoService) {
  }

  public getMenu() {

    const menu: Menulink[] = [
      {
        name: this.TranslocoService.translate('Dashboard'),
        icon: 'speed',
        route: ['/']
      } as Menulink,
      {
        name: this.TranslocoService.translate('Nodes'),
        icon: 'dns',
        route: ['/', 'nodes', 'index']
      } as Menulink,
      {
        name: this.TranslocoService.translate('Services'),
        icon: 'settings',
        route: ['/', 'services', 'index']
      } as Menulink
    ];

    return menu;
  }

}
