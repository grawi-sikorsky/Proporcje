import { Component } from '@angular/core';


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
  result:string="Wynik";

  
  ngOnInit(): void {

  }


  radioChange(box:string){
    if(box === "A"){
      this.a = (this.b*this.c/this.d);
      this.result = this.a.toString();
    }
    else if(box === "B"){
      this.b = (this.a*this.d/this.c);
      this.result = this.b.toString();
    }
    else if (box === "C"){
      this.c = (this.a*this.d/this.b);
      this.result = this.c.toString();
    }
    else if (box === "D"){
      this.d = (this.b*this.c/this.a);
      this.result = this.d.toString();
    }
  }

  onChangeA(){
    //a := B*C/D  [a,b,c,x]
    if(this.d === 0){ return; }
    this.a = (this.b*this.c/this.d);
    this.result = this.a.toString();
  }
  onChangeB(){
    //b := A*D/C  [a,b,c,x]
    if(this.c === 0){ return; }
    this.b = (this.a*this.d/this.c);
    this.result = this.b.toString();
  }
  onChangeC(){
    //c := A*D/B  [a,b,c,x]
    if(this.b === 0){ return; }
    this.c = (this.a*this.d/this.b);
    this.result = this.c.toString();
  }
  onChangeD(){
    //d := B*C/A
    if(this.a === 0 ){ return; }
    this.d = (this.b*this.c/this.a);
    this.result = this.d.toString();
  }
}
