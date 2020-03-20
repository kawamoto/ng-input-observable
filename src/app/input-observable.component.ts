import { Component, DoCheck } from "@angular/core";
import { interval } from "rxjs";

@Component({
  selector: "app-input-observable",
  template: `
    <div>
      <h4>InputObservable</h4>
      <app-input-observable-child [data$]="data$"></app-input-observable-child>
      <app-static trackName="static B-1"></app-static>
    </div>
  `,
  styles: []
})
export class InputObservableComponent implements DoCheck {
  data$ = interval(1000);
  ngDoCheck() {
    console.log("DoCheck: InputObservable");
  }
}
