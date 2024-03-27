import { Component, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardService } from './dashboard.service';
import { DashboardRoot } from './dashboard.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { DecimalPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    DecimalPipe,
    NgIf
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  private subscriptions: Subscription = new Subscription();
  private DashboardService = inject(DashboardService);
  public dashboard!: DashboardRoot;

  constructor() {
    this.loadDashboard();
  }

  loadDashboard() {
    this.subscriptions.add(this.DashboardService.getDashboard()
      .subscribe((dashboard) => {
        this.dashboard = dashboard;

      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
