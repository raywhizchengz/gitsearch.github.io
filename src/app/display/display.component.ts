import { Component, OnInit } from '@angular/core';
import { ReposService } from '../repos-http/repos.service';
// import { Repository } from '../repository-class/repository';
import { User } from '../user-class/user';
import { UserService } from '../user-http/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import {Http, Response} from '@angular/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  providers: [ReposService, UserService],
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  userRequestService: UserService;
  user: User;

  constructor( userRequestService: UserService, private http:HttpClient, private router: Router){
    this.user = new User("","","","","","","", "", new Date());
  }
  userName="";

  userLookup(){
    this.userRequestService.updateUser(this.userName);
    console.log(this.userName);
    this.userRequestService.userRequest();
    this.user = this.userRequestService.user; 
  }

    userRequest(){

      interface ApiResponse{
        login: string;
        name: string;
        bio: any;
        public_repos: number;
        followers: number;
        following: number;
        avatar_url: any;
        html_url: any;
        created_at: Date;
      }
      let promise = new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>(environment.apiUrl + this.userName + "?access_token=" + environment.access_token).toPromise().then(response=>{

          this.user.avatar = response.avatar_url
          this.user.username = response.login
          this.user.name = response.name
          this.user.bio = response.bio
          this.user.repositories = response.public_repos
          this.user.followers = response.followers
          this.user.following = response.following
          this.user.link = response.html_url

        resolve();

      },
      error=>{

          this.user.avatar = "https://avatars1.githubusercontent.com/u/47349274?v=4"
          this.user.username = "fuaad001"
          this.user.name = "Hussein Fuaad"
          this.user.bio = "Full-Stack Developer \r\nAndroid Developer\r\nCertified Chef\r\nRelationship Officer"
          this.user.repositories = 22
          this.user.followers = 2
          this.user.following = 0
          this.user.link = "https://github.com/fuaad001"

        reject(error);


        })
      })

      return promise

    }

  ngOnInit() { 
    this.user.avatar = "https://avatars1.githubusercontent.com/u/47349274?v=4"
          this.user.username = "fuaad001"
          this.user.name = "Hussein Fuaad"
          this.user.bio = "Full-Stack Developer \r\nAndroid Developer\r\nCertified Chef\r\nRelationship Officer"
          this.user.repositories = 22
          this.user.followers = 2
          this.user.following = 0
          this.user.link = "https://github.com/fuaad001"
   }
}
