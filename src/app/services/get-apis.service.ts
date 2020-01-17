import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetApisService {
  API_URL = 'https://alllinkshare.com';
  constructor(private http: HttpClient) { }

  categorylist() {
    return this.http.get(this.API_URL + '/api/allcategory');
}
}
