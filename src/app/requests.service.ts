import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from "rxjs";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RequestsService  {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true,
    observe: 'response' as 'response'
  };
  private mainUrl = 'https://driver-backend-thesis.herokuapp.com';

  constructor(private http:HttpClient, public router: Router) { }

  public loginUser(data: Object){
    return this.http.post(`${this.mainUrl}/auth/login`, data, this.httpOptions)
  }

  public registerUser(data: Object){
    return this.http.post(`${this.mainUrl}/auth/registration`, data, this.httpOptions)
  }

  public getCoinList(){
    return this.http.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`);
  }

  public getFavoritedCoins(){
    return this.http.get(`${this.mainUrl}/coin/my-favorites`, this.httpOptions)
  }

  public addToFavorites(coinId: string){
    return this.http.post(`${this.mainUrl}/coin/add-favorite/${coinId}`, {}, this.httpOptions);
  }

  public getCoinsData(coinsId: Array<string>){
    if(coinsId.length != 0) return this.http.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinsId.join(',')}&order=market_cap_desc&per_page=10&page=1&sparkline=false`)
    else return of([]);
  }

  public getCoinData(coinId: string, timeInterval: string){
    return this.http.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${timeInterval}`)
  }

  public changeBalance(coinId: string, amount: string, action: string, currentPrice: string){
    return this.http.post(`${this.mainUrl}/info/balance?coinId=${coinId}&amount=${amount}&action=${action}&currentPrice=${currentPrice}`, {}, this.httpOptions)
  }

  public getBalance(coinId: string){
    return this.http.get(`${this.mainUrl}/info/balance?coinId=${coinId}`, this.httpOptions)
  }

  public getBalanceCoins(){
    return this.http.get(`${this.mainUrl}/info/my-balance`, this.httpOptions)
  }

  public topupBalance(amount: string){
    return this.http.post(`${this.mainUrl}/info/topup?amount=${amount}`, {}, this.httpOptions)
  }
}
