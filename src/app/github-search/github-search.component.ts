import { Component, OnInit } from '@angular/core';
//import { User} from '../user';
import {GithubService} from '../service/github.service'
@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
 

  constructor(private githubService:GithubService) { 
    this.githubService.getprofileInfo().subscribe(profile =>{

      console.log(profile)
  })
    
  }

  ngOnInit(): void {
     
    

    }
   
  
  }


