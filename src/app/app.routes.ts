import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NodesIndexComponent } from './nodes/nodes-index/nodes-index.component';
import { NodeDetailsComponent } from "./nodes/node-details/node-details.component";
import { NodeChecksComponent } from './nodes/node-checks/node-checks.component';

export const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'nodes/index', component: NodesIndexComponent},
  {path: 'nodes/details/:hostname', component: NodeDetailsComponent},
  {path: 'nodes/checks/:hostname', component: NodeChecksComponent},


  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];
