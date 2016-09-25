/**
 * A basic hello-world Angular 2 app
 */
import { 
  NgModule,
  Component 
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";



@Component({
  selector: 'header-item',
  template: `
  <div id="header">
  CALCULATOR
  </div>
  `
})

class HeaderItem{

}

@Component({
  selector: 'calculator-item',
  host: {
    '(document:keypress)': 'calcKeypress($event)'
  },
  template: `
  <div class="main">
		<div id="result">
			
		</div>
		<div id="calc" >
			<p>
				<button class="num" (click)="getNumbers(0)">0</button>
				<button class="num" (click)="getNumbers(1)">1</button>
				<button class="num" (click)="getNumbers(2)">2</button>
				<button class="num" (click)="getNumbers(3)">3</button>
				
			</p>
			<p>
				<button class="num" (click)="getNumbers(4)">4</button>
				<button class="num" (click)="getNumbers(5)">5</button>
				<button class="num" (click)="getNumbers(6)">6</button>
				<button class="op"  (click)="callOp('+')" value="+">+</button>

			</p>
			<p>
				<button class="num" (click)="getNumbers(7)">7</button>
				<button class="num" (click)="getNumbers(8)">8</button>
				<button class="num" (click)="getNumbers(9)">9</button>
				<button class="op" (click)="callOp('-')" value="-">-</button>
				
			</p>
			<p>
				<button class="op" (click)="callOp('/')">/</button>
				<button id="clear" (click)="clearData()">Clear</button>
				<button class="run" (click)="runOp()">=</button>
				<button class="op" (click)="callOp('*')" value="*">*</button>
			</p>
		</div>
	</div>
  `
})
class CalculatorItem {
  currentItem: string ="";
  op: string;
  prevItem: string = "";
  clear: number;


  getNumbers(item){

    this.currentItem = this.currentItem + "" + item.toString();

    if(this.clear==1){
      this.clear = 0;
    }
    console.log("IN GET NUM: op=" + this.op);
    console.log("IN GET NUM: clear=" + this.clear);
    console.log("IN GET NUM: current=" + this.currentItem);
    console.log("IN GET NUM: prev=" + this.prevItem);
    document.getElementById("result").innerHTML = this.currentItem;
  }

  callOp = function(operation){
    this.op = operation;
    this.clear=1;
    this.prevItem = this.currentItem;
    this.currentItem = "";
    console.log("IN CALL OP: op=" + this.op);
    console.log("IN CALL OP: clear=" + this.clear);
    console.log("IN CALL OP: current=" + this.currentItem);
    console.log("IN CALL OP: prev=" + this.prevItem);
    document.getElementById("result").innerHTML = this.op;
  }

  runOp = function(){
    console.log("here");
    var retNum=0;
    var newPrevItem = parseInt(this.prevItem);
    var newCurrentItem = parseInt(this.currentItem);
    if(this.op=="+"){
      retNum = newPrevItem + newCurrentItem;
    }
    else if(this.op=="-"){
      retNum = newPrevItem - newCurrentItem;
    }
    else if(this.op=="*"){
      retNum = newPrevItem * newCurrentItem;
    }
    else{
      retNum = newPrevItem / newCurrentItem;
    }
    this.currentItem = retNum.toString();
    console.log("IN RUN OP: op=" + this.op);
    console.log("IN RUN OP: clear=" + this.clear);
    console.log("IN RUN OP: current=" + this.currentItem);
    console.log("IN RUN OP: prev=" + this.prevItem);

    document.getElementById("result").innerHTML = retNum.toString();
}

clearData = function(){
	this.prevItem = "";
	this.currentItem = "";
	this.op = "";
	this.clear = 0;
	document.getElementById("result").innerHTML = "";
}

calcKeypress = function(evt) {
  
    	evt = evt || window.event;
    	var charCode = evt.keyCode || evt.which;
    	var charStr = String.fromCharCode(charCode);
      console.log(charStr);
      console.log(charCode);
			if(charStr === "+" || charStr=== "-" || charStr === "*" || charStr==="/"){
					this.callOp(charStr);
			}
			else if(charStr=== "=" || charCode ===13){
					this.runOp();
			}
			else if(parseInt(charStr) >=0 || parseInt(charStr) <= 9){
				  this.getNumbers(charStr);
			}	
  }

}


@NgModule({
  declarations: [ CalculatorItem, HeaderItem ],
  imports: [ BrowserModule ],
  bootstrap: [ CalculatorItem, HeaderItem],
})
class CalculatorAppModule {
  
}

platformBrowserDynamic().bootstrapModule(CalculatorAppModule);
