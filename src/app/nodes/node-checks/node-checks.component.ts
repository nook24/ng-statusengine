import { Component, ViewChild, inject } from '@angular/core';
import { NodeChecksParams, Nodecheck } from '../nodes.interface';
import { Subscription } from 'rxjs';
import { NodesService } from '../nodes.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { TableModule } from '@coreui/angular';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NodesStatusIconComponent } from '../nodes-status-icon/nodes-status-icon.component';
import { ScrollIndexComponent } from '../../pagination/scroll-index/scroll-index.component';
import { Scroll } from '../../pagination/paginator';

@Component({
  selector: 'app-node-checks',
  standalone: true,
  imports: [
    TableModule,
    MatSortModule,
    NgIf,
    NgFor,
    NodesStatusIconComponent,
    DatePipe,
    ScrollIndexComponent
  ],
  templateUrl: './node-checks.component.html',
  styleUrl: './node-checks.component.css'
})
export class NodeChecksComponent {
  private subscriptions: Subscription = new Subscription();
  private NodesService = inject(NodesService)
  public nodechecks!: Nodecheck[];

  public displayedColumns: string[] = ['state', 'start_time', 'is_hardstate', 'output'];
  public dataSource: MatTableDataSource<Nodecheck> | null = null;

  public hostname_url: string = '';

  // Die API hat anscheinend kein order=DESC
  public params: NodeChecksParams = {
    'state[0]': false,
    'state[1]': false,
    'state[2]': false,
    direction: 'asc',
    order: 'hostname',
    hostname: '',
    output__like: '',
    limit: 10,
    offset: 0
  };

  public scroll: Scroll = {
    hasNextPage: true,
    hasPrevPage: false,
    currentPage: 1
  };

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscriptions.add(this.route.params.subscribe(params => {
      this.hostname_url = params['hostname'];

      // Patch Request params
      this.params.hostname = params['hostname'];

      this.loadNodeChecks();
    }));
  }


  private loadNodeChecks() {
    this.subscriptions.add(this.NodesService.getNodeChecks(this.params)
      .subscribe((checks) => {
        this.nodechecks = checks; // Wird aktuell garnicht genutzt

        // Wird für die Tabelle genutzt
        this.dataSource = new MatTableDataSource(checks);
      })
    );
  }

  public ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.sort = this.sort;
    }
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    this.params.direction = sortState.direction;
    this.params.order = sortState.active;
    this.loadNodeChecks();
  }

  onPageChange(newPage: number): void {
    this.scroll.currentPage = newPage;

    if (newPage > 1) {
      this.params.offset = (newPage * this.params.limit);
      this.scroll.hasPrevPage = true; // will be provided by server API of oITC
      this.loadNodeChecks();
      return;
    }

    // First page, use limit and an offset if zero to get the first page
    this.params.offset = 0;
    this.scroll.hasPrevPage = false; // will be provided by server API of oITC
    this.scroll.hasNextPage = true; // will be provided by server API of oITC
    this.loadNodeChecks();
    return;

  }
}
