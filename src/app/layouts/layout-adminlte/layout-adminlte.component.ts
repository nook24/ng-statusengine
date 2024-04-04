import { AfterViewInit, Component, ElementRef, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ChangeLanguageComponent } from "../../change-language/change-language.component";
import { TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import { MenuComponent } from '../../menu/menu.component';

@Component({
  selector: 'app-layout-adminlte',
  standalone: true,
  imports: [
    MatIconModule,
    RouterLink,
    ChangeLanguageComponent,
    TranslocoDirective,
    TranslocoPipe,
    MenuComponent
  ],
  templateUrl: './layout-adminlte.component.html',
  styleUrl: './layout-adminlte.component.css'
})
export class LayoutAdminlteComponent implements AfterViewInit {

  public isSidebarOpen: boolean = true

  constructor(@Inject(DOCUMENT) private document: Document, private elementRef: ElementRef) {
  }

  // Open or close the main menu when the user press on the menu icon.
  // This is a brute force GoHorse implementation :)
  public toggleSidebar() {
    if (this.isSidebarOpen) {
      this.document.body.classList.remove('sidebar-open');
      this.document.body.classList.add('sidebar-collapse');
    } else {
      this.document.body.classList.remove('sidebar-collapse');
      this.document.body.classList.add('sidebar-open');

    }
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // On Mobile, AdminLTE have an overlay to close the main menu if the user touch
  // on the page content.
  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('#sidebar-overlay')
      .addEventListener('click', this.clickOrTouchOnSidebarOverlay.bind(this));

    this.elementRef.nativeElement.querySelector('#sidebar-overlay')
      .addEventListener('touchstart', this.clickOrTouchOnSidebarOverlay.bind(this));
  }

  public clickOrTouchOnSidebarOverlay() {
    // If you can click on the overlay, the sidebar is open
    this.isSidebarOpen = true;
    this.toggleSidebar();
  }

}
