import { Component, DoCheck, Input } from "@angular/core";

@Component({
  selector: "app-input-value-child",
  template: `
    <div>
      {{ data }}
    </div>
  `,
  styles: []
})
export class InputValueChildComponent implements DoCheck {
  @Input() data;
  ngDoCheck() {
    console.log("DoCheck: Static");
  }
}
