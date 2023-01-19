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
  selected:string='';
  result:string="Wynik";


  ngOnInit(): void {

  }


  radioChange(box:string){
    this.selected = box;
  }

  update(){
    if(this.selected === 'A'){
      this.a = (this.b*this.c/this.d);
      this.result = this.a.toString();
    }
    else if(this.selected === 'B'){
      this.b = (this.a*this.d/this.c);
      this.result = this.b.toString();
    }
    else if (this.selected === 'C'){
      this.c = (this.a*this.d/this.b);
      this.result = this.c.toString();
    }
    else if (this.selected === 'D'){
      this.d = (this.b*this.c/this.a);
      this.result = this.d.toString();
    }
  }

}
