import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = 'https://alllinkshare.com';
  //https://searchbysearch.com/api/login

  constructor(private http: HttpClient) { }

  login(email: String, password: String, usertype: String, number: Number) {
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',"Access-Control-Allow-Origin": "*","Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Accept, Authorization, X-Request-With, Access-Control-Request-Method, Access-Control-Request-Headers","Access-Control-Allow-Methods" : "GET, POST, DELETE, PUT, OPTIONS, TRACE, PATCH, CONNECT"})};
    return this.http.post(this.API_URL + '/api/login',
      {user_email: email, user_password: password, user_mobileNumber:number, user_type: usertype}
    ).pipe(
      tap(data => {
        console.log(data);
        return data;
      }),
    );
  }
}
