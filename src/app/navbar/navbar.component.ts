import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isloggedin(){
    let isloggedin = sessionStorage.getItem("isoggedin");
    // let presentrout = "route";
    if(isloggedin == "true"){
      return true;
    }else{
      return false
    }
  }
}
