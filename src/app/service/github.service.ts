import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
//import {User} from '../user'
//import { TitleCasePipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})

//private key = environment.accessToken

export class GithubService {
  private username:string

  constructor(private http:HttpClient) { 
    this.username='BrianTinega'
  }
  getprofileInfo(){
    return this.http.get("https://api.github.com/users/" +this.username + "?access_token=" + environment.accessToken)
  }
  getprofileRepos(){
    return this.http.get("https://api.github.com/users/" +this.username + "/repos" + "?access_token=" + environment.accessToken)
  }
  updateProfile(username:string){
    this.username=username
  }
}