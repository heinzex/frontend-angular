import { Component } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent {
  biografia:string = ''
  link:string = ''
  ubicacion:string = ''
  informacion:boolean = false

  onClick(){
    if (this.informacion){
      this.informacion = false
    } else{
      this.informacion = true
    }
    
  }
}
