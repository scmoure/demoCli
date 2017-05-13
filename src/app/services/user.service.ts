import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';  
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


import { UserDto } from '../models/user.model';

@Injectable() 
export class UserService {
    constructor (private http: Http) {}

    getUser(): Observable<UserDto> {
        return this.http.get('http://localhost:8080/rest/faculty/test').map((res: Response) => {
            let user = res.json();
            console.log(user);
           // user.profile = null;
            return user;
        });
    }
}