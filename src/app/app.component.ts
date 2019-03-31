import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './user-class/user';
import { UserService } from './user-http/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // user: User;

  // constructor( userRequestService: UserService, private http:HttpClient, private router: Router){
  //   this.user = new User("","","","","","","", "");
  // }
  // userName="";

  //   userRequest(){

  //     interface ApiResponse{
  //       login: string;
  //       name: string;
  //       bio: any;
  //       public_repos: number;
  //       followers: number;
  //       following: number;
  //       avatar_url: any;
  //       html_url: any;
  //     }
  //     let promise = new Promise((resolve,reject)=>{
  //       this.http.get<ApiResponse>(environment.apiUrl + this.userName + "?access_token=" + environment.access_token).toPromise().then(response=>{

  //         this.user.avatar = response.avatar_url
  //         this.user.username = response.login
  //         this.user.name = response.name
  //         this.user.bio = response.bio
  //         this.user.repositories = response.public_repos
  //         this.user.followers = response.followers
  //         this.user.following = response.following
  //         this.user.link = response.html_url
          

  //       resolve();

  //     },
  //     error=>{

  //         this.user.avatar = "https://avatars1.githubusercontent.com/u/47349274?v=4"
  //         this.user.username = "fuaad001"
  //         this.user.name = "Hussein Fuaad"
  //         this.user.bio = "Full-Stack Developer \r\nAndroid Developer\r\nCertified Chef\r\nRelationship Officer"
  //         this.user.repositories = 22
  //         this.user.followers = 2
  //         this.user.following = 0
  //         this.user.link = "https://github.com/fuaad001"

  //       reject(error);


  //       })
  //     })

  //     return promise

  //   }

}