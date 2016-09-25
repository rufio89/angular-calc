/**
 * This file shows the hello-world app with a name variable binding
 */

import { 
  NgModule,
  Component 
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@Component({
  selector: 'Calculator',
})
class Calculator {
  
}

@NgModule({
  declarations: [ Calculator ],
  imports: [ BrowserModule ],
  bootstrap: [ Calculator ],
})
class CalculatorAppModule {}

platformBrowserDynamic().bootstrapModule(CalculatorAppModule);
