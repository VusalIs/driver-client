import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private mainUrl = 'localhost:5000';

  constructor(private http:HttpClient) { }

  public loginUser(data: Object){
    return this.http.post(`${this.mainUrl}/auth/login`, data)
  }

  public registerUser(data: Object){
    return this.http.post(`${this.mainUrl}/auth/registration`, data)
  }
}
