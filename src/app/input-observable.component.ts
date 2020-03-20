import { Component, DoCheck, ChangeDetectionStrategy } from "@angular/core";
import { interval } from "rxjs";
import { take } from "rxjs/operators";

@Component({
  selector: "app-input-observable",
  template: `
    <div>
      <h4>InputObservable</h4>
      <app-input-observable-child [data$]="data$"></app-input-observable-child>
      <app-static trackName="static B-1"></app-static>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputObservableComponent implements DoCheck {
  data$ = interval(3000).pipe(take(4));
  ngDoCheck() {
    console.log("DoCheck: InputObservable");
  }
}
