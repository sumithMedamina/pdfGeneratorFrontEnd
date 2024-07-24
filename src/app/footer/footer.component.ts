import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


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
