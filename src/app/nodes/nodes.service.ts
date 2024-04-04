import { inject, Injectable } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { PROXY_PATH } from "../tokens/proxy-path.token";
import { Nodecheck, NodeChecksParams, NodeIndex, NodesIndexParams } from "./nodes.interface";


@Injectable({
  providedIn: 'root',
})
export class NodesService {

  private readonly http = inject(HttpClient);
  private readonly document = inject(DOCUMENT);
  private readonly proxyPath = inject(PROXY_PATH);

  public getNodesIndex(params: NodesIndexParams): Observable<NodeIndex[]> {
    const proxyPath = this.proxyPath;

    // Die GET Parameter für den API call wurden in ein NodesIndexParams verpackt.
    // das "params as {}" macht aus dem NodesIndexParams ein normales JavaScript Objekt
    // wie: params = { limit: 50, offset: 0, ... }

    return this.http.get<NodeIndex[]>(`${proxyPath}/index.php/hosts`, {
      params: params as {}
    }).pipe(
      map(data => {
        return data;
      })
    )
  }

  public getNodeChecks(params: NodeChecksParams): Observable<Nodecheck[]> {
    const proxyPath = this.proxyPath;

    // Die GET Parameter für den API call wurden in ein NodesIndexParams verpackt.
    // das "params as {}" macht aus dem NodesIndexParams ein normales JavaScript Objekt
    // wie: params = { limit: 50, offset: 0, ... }

    return this.http.get<Nodecheck[]>(`${proxyPath}/index.php/hostchecks`, {
      params: params as {}
    }).pipe(
      map(data => {
        return data;
      })
    )
  }


}
