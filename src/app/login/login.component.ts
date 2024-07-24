import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router) { }
  ngOnInit(): void {
    sessionStorage.setItem('isoggedin',"false");

  }
  onLogin(): void {
    sessionStorage.setItem('isoggedin',"true");
    this.router.navigate(['/insurdetail']); 
}

}
