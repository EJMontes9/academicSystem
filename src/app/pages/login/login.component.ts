import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  cedula: string=""
  clave: string=""

  constructor (private route:Router){}
  login (){
    if (this.cedula==="10"&&this.clave==="6"){
      this.route.navigate(["secretary"])
    }
    else (alert ("no funciona"))
  }
}
