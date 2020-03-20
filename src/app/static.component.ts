import { Component, DoCheck } from "@angular/core";

@Component({
  selector: "app-static",
  template: `
    <div>
      <h4>static</h4>
    </div>
  `,
  styles: []
})
export class StaticComponent implements DoCheck {
  ngDoCheck() {
    console.log("DoCheck: Static");
  }
}
