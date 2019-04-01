import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Repository } from '../repository-class/repository';
import { Repos } from '../repos'

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repo: Repository;
  userName = "";
  repoName = "";
  repos: Repos;

  constructor(private http:HttpClient){
    this.repo = new Repository("","","","","");
    this.repos = new Repos([])
  }
  
    repoRequest(){

      interface ApiResponse{
        html_url: any;
        name: string;
        description: any;
        forks: number;
        license: any;
      }
      let promise = new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>("https://api.github.com/repos/" + this.userName + "/" + this.repoName + "?access_token=" + environment.access_token).toPromise().then(response=>{

          this.repo.link = response.html_url
          this.repo.name = response.name
          this.repo.description
           = response.description
          this.repo.forks = response.forks
          this.repo.license = response.license
          
        resolve();

      },
      error=>{

        this.repo.link = ""
        this.repo.name = ""
        this.repo.description
         = ""
        this.repo.forks = ""
        this.repo.license = ""
        
        reject(error);


        })
      })

      return promise

    }

    getRepoData(){


      let promise =new Promise((resolve,reject)=>{
          this.http.get( 'https://api.github.com/users/' + this.userName +'/repos?access_token=' + environment.access_token).toPromise().then(response=>{
   
              this.repos.reposArray=response;
   
              resolve()
          },
          error=>{
                  this.repos.reposArray=[];
   
                  reject(error)
              }
          )
      })
   
      return promise
    }

  ngOnInit() {
  }

}
