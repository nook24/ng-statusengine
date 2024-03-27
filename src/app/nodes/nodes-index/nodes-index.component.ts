import { Component, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { NodeIndex, NodesIndexParams } from '../nodes.interface';
import { NodesService } from '../nodes.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-nodes-index',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
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

  public displayedColumns: string[] = ['state', 'node_name', 'last_check', 'state_since', 'service_summary'];
  public dataSource: MatTableDataSource<NodeIndex> | null = null;

  private params: NodesIndexParams= {
    'state[]': [false, false, false], // Etwas blöde URL: https://stackoverflow.com/a/47218084
    'direction': 'asc',
    'order': 'hostname',
    'hostname__like': '',
    'limit': 50,
    'offset': 0
  }

  constructor() {
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
    if(this.dataSource){
      // GET Parameter für den HTTP Request anpassen
      this.params.hostname__like = filterValue.trim();
      // Liste neu laden
      this.loadNodes();
    }
  }

  public ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
