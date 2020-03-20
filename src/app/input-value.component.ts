import { Component, DoCheck } from "@angular/core";
import { interval } from "rxjs";

@Component({
  selector: "app-input-value",
  template: `
    <div>
      <h4>InputValue</h4>
      <ng-container *ngIf="data$ | async as data">
        <app-input-value-child [data]="data"></app-input-value-child>
      </ng-container>
      <app-static trackName="static A-1"></app-static>
    </div>
  `,
  styles: []
})
export class InputValueComponent implements DoCheck {
  data$ = interval(1000);
  ngDoCheck() {
    console.log("DoCheck: InputValue");
  }
}
