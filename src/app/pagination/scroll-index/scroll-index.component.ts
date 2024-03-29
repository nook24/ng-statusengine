import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageLinkDirective, PaginationModule } from '@coreui/angular';
import { Scroll } from '../paginator';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-scroll-index',
  standalone: true,
  imports: [
    PaginationModule,
    PageLinkDirective,
    RouterLink,
    NgIf
  ],
  templateUrl: './scroll-index.component.html',
  styleUrl: './scroll-index.component.css'
})
export class ScrollIndexComponent {

  @Input() scroll?: Scroll;
  @Output() pageChange = new EventEmitter<number>();

  // Go to first page
  public firstPage() {
    this.pageChange.emit(1);
  }

  // Go to next page (if any)
  public nextPage() {
    if (this.scroll) {
      if (this.scroll.hasNextPage) {
        this.pageChange.emit((this.scroll.currentPage + 1));
      }
    }
  }

  // Go to previous page (if any)
  public prevPage() {
    if (this.scroll) {
      if (this.scroll.hasPrevPage && this.scroll.currentPage - 1 > 0) {
        this.pageChange.emit((this.scroll.currentPage - 1));
      }
    }
  }

}
