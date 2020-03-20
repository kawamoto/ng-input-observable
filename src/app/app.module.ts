import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { StaticComponent } from "./static.component";
import { InputValueComponent } from "./input-value.component";
import { InputValueChildComponent } from "./input-value-child.component";

@NgModule({
  declarations: [
    AppComponent,
    StaticComponent,
    InputValueComponent,
    InputValueChildComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
