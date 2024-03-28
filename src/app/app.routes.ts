import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NodesIndexComponent } from './nodes/nodes-index/nodes-index.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'nodes/index', component: NodesIndexComponent },


    { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
];
