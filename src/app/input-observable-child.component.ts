import {
  Component,
  DoCheck,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "app-input-observable-child",
  template: `
    <div>
      {{ data$ | async }}
      <app-static trackName="static B-2"></app-static>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputObservablueChildComponent implements DoCheck {
  @Input() data$;
  ngDoCheck() {
    console.log("DoCheck: InputObservableChild");
  }
}
