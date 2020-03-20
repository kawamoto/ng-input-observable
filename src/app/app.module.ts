import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { StaticComponent } from "./static.component";
import { InputValueComponent } from "./input-value.component";
import { InputValueChildComponent } from "./input-value-child.component";
import { InputObservableComponent } from "./input-observable.component";
import { InputObservablueChildComponent } from "./input-observable-child.component";

@NgModule({
  declarations: [
    AppComponent,
    StaticComponent,
    InputValueComponent,
    InputValueChildComponent,
    InputObservableComponent,
    InputObservablueChildComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
