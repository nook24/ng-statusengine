import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-node-details',
  standalone: true,
  imports: [
  ],
  templateUrl: './node-details.component.html',
  styleUrl: './node-details.component.css'
})
export class NodeDetailsComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription = new Subscription();

  public hostname_url: string = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscriptions.add(this.route.params.subscribe(params => {
      console.log(params);
      this.hostname_url = params['hostname'];
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
