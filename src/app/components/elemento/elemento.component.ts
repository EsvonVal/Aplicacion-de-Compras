import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elemento',
  templateUrl: './elemento.component.html',
  styleUrls: ['./elemento.component.css']
})
export class ElementoComponent implements OnInit{
  public elementos: number[]= [];
 public elementos2: string []=[];

  constructor() {}
  ngOnInit(): void {
    console.log("hola");
    this.elementos=[1,2,10,12];
    console.log("mi primer array es ", this.elementos);

    this.elementos2=["vaca","perro","entero"];
    console.log("mi array 2 de", this.elementos2);

    console.log("filtrando un elemento del array 1 con el metodo filter");
   console.log( this.elementos.filter(x=>x<10));

   console.log("modificando los valores del array con el metodo map");
   console.log( this.elementos.map(x=>x+1));

   console.log("reduciendoo a un solo valor del array con el metodo reduce");
   console.log( this.elementos.reduce((x,y)=>x+y));
  }
}
