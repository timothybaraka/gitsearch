import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  user: User;
  repos:any;
  username: string;


  constructor(private http: HttpClient) {
    this.user = new User('', '');
    this.username = "timothybaraka";
    console.log(environment.baseUrl);
    

   }

  userRequest() {
    interface ApiResponse {
      login: string;
      avatar_url: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.baseUrl+this.username).toPromise().then(response => {
        console.log(response)
        this.user.login = response.login;
        this.user.avatarUrl = response.avatar_url;
        console.log('This works', this.user.login);
        console.log('This works as well', this.user.avatarUrl);
        resolve();
      },
      error => {
      console.log('Not receiving response');
      reject(error);
      });

      });
    return promise;

    }
    getUser(username: string) {
      return this.http.get(`${environment.baseUrl}${username}/repos`);
    }

    updateProfile(username:string){
      this.username=username;
    }
  }