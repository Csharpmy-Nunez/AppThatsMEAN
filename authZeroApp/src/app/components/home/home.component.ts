import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user/user.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  date:string;

  name:string;
  email:string;
  subject:string;
  message:string;

  msg:string;


  constructor(private auth:AuthService, private userService:UserService) { }

  ngOnInit() {
    this.date = Date();
  }


  sendEmail(){
    
    const email = {
      "name": this.name,
      "email": this.email,
      "subject": this.subject,
      "message": this.message
    }

    console.log(email);
    this.userService.sendEmail(email).subscribe(msg => {
      console.log(msg)
      this.msg = msg;
    });
  }


  isSent(){
    if(this.msg){
      return true;
    }
  }

}//End of component class

