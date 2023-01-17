import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Item } from 'src/app/models/Item';
import { Perro } from 'src/app/models/Perro';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
 public perros:Perro[]= [];
 

items: Item[] =[];
  constructor() {}
  ngOnInit(): void {


    this.perros=[
      {
        nombre:"entero",
        edad: 12,
        color: "blanco y negro",
      },
      {
        nombre:"jack",
        edad: 2,
        color: "negro",
      },
      {
        nombre:"aceituna",
        edad: 12,
        color: "negro",
      }
      
    ]

//[P1,P2,P3];

    this.items =[
      {
        id:0,
        title: "manzana",
        price: 10.5,
        quantity: 4,
        completed: false

      },

      {
        id:1,
        title: "pan",
        price: 3.5,
        quantity: 8,
        completed: true

      }
    ]


    this.perros.filter(p=>p.color !="negro");
    console.log("filtrando los perros que no se llamen jack",this.perros.filter(p=>p.nombre !="jack"));
  
  
this.perros.map(pe=>pe.nombre+ " perrunos");
console.log("agregando la palabra perrunos al nombre de los perros", this.perros.map(pe=>pe.nombre+ " perrunos"));

this.perros.reduce((p,c)=>p+c.edad,0);
console.log("sumando las edades de los perros", this.perros.reduce((p,c)=>p+c.edad,0));
  }

deleteItem(item: Item){
  this.items = this.items.filter(x => x.id != item.id)
} 

}
