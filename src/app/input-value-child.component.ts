import {
  Component,
  DoCheck,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "app-input-value-child",
  template: `
    <div>
      {{ data }}
      <app-static trackName="static A-2"></app-static>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputValueChildComponent implements DoCheck {
  @Input() data;
  ngDoCheck() {
    console.log("DoCheck: InputValueChild");
  }
}
