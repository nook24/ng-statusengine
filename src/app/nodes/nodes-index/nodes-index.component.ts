import { Component, inject, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { NodeIndex, NodesIndexParams } from '../nodes.interface';
import { NodesService } from '../nodes.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { NodesStatusIconComponent } from '../nodes-status-icon/nodes-status-icon.component';
import { FormsModule } from "@angular/forms";
import { DebounceDirective } from "../../directives/debounce.directive";
import { TrueFalseDirective } from "../../true-false.directive";
import { RouterLink } from "@angular/router";
import { LayoutAdminlteComponent } from '../../layouts/layout-adminlte/layout-adminlte.component';
import { TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import { MatIcon } from '@angular/material/icon';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-nodes-index',
  standalone: true,
  imports: [
    LayoutAdminlteComponent,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    NgIf,
    DatePipe,
    NodesStatusIconComponent,
    FormsModule,
    DebounceDirective,
    TrueFalseDirective,
    RouterLink,
    TranslocoDirective,
    NgForOf,
    MatIcon,
    MatCard,
    MatCardContent,
    MatCardTitle,
    TranslocoPipe
  ],
  templateUrl: './nodes-index.component.html',
  styleUrl: './nodes-index.component.css'
})
export class NodesIndexComponent {


  public nodes!: NodeIndex[];
  public displayedColumns: string[] = ['current_state', 'hostname', 'last_check', 'last_state_change', 'service_summary'];
  public dataSource: MatTableDataSource<NodeIndex> | null = null;
  public params: NodesIndexParams = {
    //'state[]': [false, false, false], // Etwas blöde URL: https://stackoverflow.com/a/47218084
    'state[0]': true,
    'state[1]': true,
    'state[2]': true,
    direction: 'asc',
    order: 'hostname',
    hostname__like: '',
    limit: 50,
    offset: 0
  }
  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  private subscriptions: Subscription = new Subscription();
  private NodesService = inject(NodesService)

  constructor(private _liveAnnouncer: LiveAnnouncer) {
    this.loadNodes();
  }


  // Example from Angular Material Docs
  // Only one input field - a bit lame
  /*
  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (this.dataSource) {
      // GET Parameter für den HTTP Request anpassen
      this.params.hostname__like = filterValue.trim();
      // Liste neu laden
      this.loadNodes();
    }
  }*/

  public ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.sort = this.sort;
    }
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    this.params.direction = sortState.direction;
    this.params.order = sortState.active;
    this.loadNodes();
  }

  onSearchTermChange(searchTerm: any): void {
    console.log('Search term debounced:', this.params);
    this.loadNodes();
  }

  private loadNodes() {
    this.subscriptions.add(this.NodesService.getNodesIndex(this.params)
      .subscribe((nodes) => {
        this.nodes = nodes;

        // Wird für die Tabelle genutzt
        this.dataSource = new MatTableDataSource(nodes);
      })
    );
  }
}
