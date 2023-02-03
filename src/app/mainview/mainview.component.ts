import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noComma'
})
export class NoCommaPipe implements PipeTransform {

  transform(val: number): string {
    if (val !== undefined && val !== null) {
      // here we just remove the commas from value
      return val.toString().replace(/,/g, "");
    } else {
      return "";
    }
  }
}

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent {

  constructor() { }

  // a!:number//=0;
  // b!:number//=0;
  // c!:number//=0;
  // d!:number//=0;
  a:number=1;
  b:number=1;
  c:number=1;
  d:number=1;
  toCalculate: string[] = ['A', 'B', 'C', 'D'];
  selected:string='D';
  result:string='1';
  decimal:number=4;
  decimalOptions: number[] = [0,1,2,3,4,5,6];

  ngOnInit(): void {
    this.updateCalculations();
  }


  radioChange(box:string){
    this.selected = box;
  }

  updateCalculations(){
    if(this.selected === 'A'){
      this.a = (this.b*this.c/this.d);
      this.result = this.a.toFixed(this.decimal);
    }
    else if(this.selected === 'B'){
      this.b = (this.a*this.d/this.c);
      this.result = this.b.toFixed(this.decimal);
    }
    else if (this.selected === 'C'){
      this.c = (this.a*this.d/this.b);
      this.result = this.c.toFixed(this.decimal);
    }
    else if (this.selected === 'D'){
      this.d = (this.b*this.c/this.a);
      this.result = this.d.toFixed(this.decimal);
    }
  }
  isDisabled(field:string):boolean{
    //console.log(this.selected);
    if(this.selected !== field){ return false; }
    return true;
  }
  decimalSwitch(decimal:number){
    this.decimal = decimal;
    this.updateCalculations();
  }

}


