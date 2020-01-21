import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { UserService } from '../user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  user:User;
  username:string;
  constructor(private userService:UserService, private http:HttpClient) { 
    this.userService = userService;
    this.http = http;
    this.username = "timothybaraka"
  }

  userSearch() {

    const promise = new Promise((resolve, reject) => {
      this.http.get(`${environment.searchUrl}users?username=${this.username}+repos:%3E15+followers:%3E0`, {
          headers: {
            Authorization: `Bearer ${environment.accessToken}`
          }
      }).toPromise().then(response => {

            this.user = response['items'];
          //  console.log(this.repos.id);
            console.log(response);
            //console.log(this.q);
            resolve();
      },
      error => {
        console.log('This isn\'t working');
        reject(error);
      });
    });
    return promise;

    
  }


  ngOnInit() {
    this.userService.userRequest();
    console.log(this.user)
    this.user = this.userService.user;
  }

}
