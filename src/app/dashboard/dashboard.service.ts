import { inject, Injectable } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { PROXY_PATH } from "../tokens/proxy-path.token";

import { DashboardRoot } from "./dashboard.interface"

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  private readonly http = inject(HttpClient);
  private readonly document = inject(DOCUMENT);
  private readonly proxyPath = inject(PROXY_PATH);

  public getDashboard(): Observable<DashboardRoot> {
    const proxyPath = this.proxyPath;

    const params = new HttpParams().set("hide_ack_and_downtime", false);

    return this.http.get<DashboardRoot>(`${proxyPath}/index.php`, {params: params}).pipe(
      map(data => {
        return data;
      })
    )
  }

}


//     return this.http.get<{ command: DashboardRoot }>(`${proxyPath}/commands/edit/${id}.json?angular=true`).pipe(
