import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';//map
import { Http, Headers } from '@angular/http';//It needs to be inyected because it is a service
//Bring in map from reactive extension



@Injectable()
export class UserService {
  


  constructor(private http:Http) {
    console.log('User data service connected...');
   }

  
   getUsers(){
     return this.http.get('/api/users').map( res => res.json());
   }

   //Get a single user
   getUser(id:string){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
     return this.http.get(`/api/user/${id}`).map( res => res.json());
   }

   saveUser(user:User){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
     return this.http.post('/', JSON.stringify(user), {headers: headers}).map( res => res.json());
   }

   sendEmail(email:Email){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('/send', JSON.stringify(email), {headers: headers}).map( res => res.json());
   }
   

}//End of class
interface User {
  name:string,
  email:string,
  age: number,
  gender: string,
  phone: number,
  address: string,
  country: string 
}
interface AuthUser {
  email:string,
  password:string,
  name:string,
  age: number,
  gender: string,
  phone: number,
  address: string,
  country: string 
}

interface Email {
  name:string,
  email:string,
  subject:string,
  message:string
}
