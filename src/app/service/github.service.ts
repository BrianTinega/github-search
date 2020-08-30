import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
import {User} from '../user'
@Injectable({
  providedIn: 'root'
})

//private key = environment.accessToken

export class GithubService {
  private username: string;
  name:string
  avatar_url:string

  constructor(private http:HttpClient) { 
    this.username='BrianTinega'
  }
  getprofileInfo(){
    return this.http.get("https://api.github.com/users/" +this.username + "?access_token=" + environment.accessToken)
  }
  getprofileRepos(){
    return this.http.get("https://api.github.com/users/" +this.username + "/repos"+ "?access_token=" + environment.accessToken)
  }
}
