import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { AuthService } from '../../services/auth/auth.service';
import { NgModel } from '@angular/forms/src/directives/ng_model';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {
  //user:User;
  //-------------
  email:string;
  password:string;
  name:string;
  age: number;
  gender: string;
  phone: number;
  address: string;
  country: string;
  profile:any;


  constructor(private userService:UserService, private auth:AuthService) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        this.email = profile.name;
        //console.log('From signup ts: ' + this.email);
      });
    }
    
  }//End of ngOnInit

  
  addUser(){
    const user = {
      "name": this.name,
      "email": this.email,
      "age": this.age,
      "gender": this.gender,
      "phone": this.phone,
      "address": this.address,
      "country": this.country
    }

    this.userService.saveUser(user).subscribe( user => console.log(user)); 
  }


}//End of class


interface User {
  name:string,
  email:string,
  password:string,
  age: number,
  gender: string,
  phone: number,
  address: string,
  country: string 
}
