import { Component, ViewChild, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { NodeIndex, NodesIndexParams } from '../nodes.interface';
import { NodesService } from '../nodes.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatePipe, NgIf } from '@angular/common';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-nodes-index',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    NgIf,
    DatePipe
  ],
  templateUrl: './nodes-index.component.html',
  styleUrl: './nodes-index.component.css'
})
export class NodesIndexComponent {


  private subscriptions: Subscription = new Subscription();
  private NodesService = inject(NodesService)
  public nodes!: NodeIndex[];

  public displayedColumns: string[] = ['current_state', 'hostname', 'last_check', 'last_state_change', 'service_summary'];
  public dataSource: MatTableDataSource<NodeIndex> | null = null;

  private params: NodesIndexParams = {
    'state[]': [false, false, false], // Etwas blöde URL: https://stackoverflow.com/a/47218084
    'direction': 'asc',
    'order': 'hostname',
    'hostname__like': '',
    'limit': 50,
    'offset': 0
  }

  constructor(private _liveAnnouncer: LiveAnnouncer) {
    this.loadNodes();
  }

  private loadNodes() {
    this.subscriptions.add(this.NodesService.getNodesIndex(this.params)
      .subscribe((nodes) => {
        this.nodes = nodes; // Wird aktuell garnicht genutzt

        // Wird für die Tabelle genutzt
        this.dataSource = new MatTableDataSource(nodes);
      })
    );
  }


  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (this.dataSource) {
      // GET Parameter für den HTTP Request anpassen
      this.params.hostname__like = filterValue.trim();
      // Liste neu laden
      this.loadNodes();
    }
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
    this.loadNodes();
  }
}