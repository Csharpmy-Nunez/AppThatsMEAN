import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  date:string;
  users:User[];
  user:any;

  profile:any;
  userID:string;
  i:number;
  queryEmail:string;
  isUpdated:false;
  id:string;

 
  constructor(private auth:AuthService, private userService:UserService) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
    this.getAllUsers();

  }//End of ngOnInit

  getAllUsers(){
    this.userService.getUsers().subscribe( (users) => {
      //console.log(users);
      this.users = users;

      if(this.profile){
        for(this.i = 0; this.i < users.users.length; this.i++){
          //console.log('This is the quering email: ' + users);
          if(users.users[this.i].email == this.profile.name){
            this.queryEmail = users.users[this.i].email;
            this.id = users.users[this.i]._id;
            this.getSingleUser(this.id);
            //console.log('This is the quering email: ' + this.id);
            //console.log('Profile object: ' + this.profile);
          }else{
            console.log('Not captured yet...');
          }
        }
      }else{
        console.log('Object is not initiated...');
      }
  
    });
  }

  getSingleUser(id:string){
    //console.log(`From the GetSingleUser method: ${id}`);
    this.userService.getUser(id).subscribe( (user) => {
      //console.log(`Single user ${JSON.stringify(user)}`);
      this.user = user;
    });
  }


}//End of class

//Interfaces
interface User {
  name:string,
  email:string,
  age: number,
  gender: string,
  phone: number,
  address: string,
  country: string 
}
