import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  usuario:string = ""
  login:boolean = false
  formlogin:boolean = false

  onClickIG(){
    window.open("http://www.instagram.com")
  }

  onClickTW(){
    window.open("http://www.twitter.com")
  }

  Login(){
    if(this.formlogin){
      this.formlogin= !this.formlogin
    } else {
      this.formlogin= !this.formlogin
    }
  }
}
