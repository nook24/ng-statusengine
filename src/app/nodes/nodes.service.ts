import { inject, Injectable, Signal, signal, WritableSignal } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { HttpClient, HttpParams } from "@angular/common/http";
import { switchMap, Observable, map, tap, catchError, of, BehaviorSubject, retry } from "rxjs";
import { PROXY_PATH } from "../tokens/proxy-path.token";
import { NodeIndex, NodesIndexParams } from "./nodes.interface";


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

}
