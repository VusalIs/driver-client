import {AfterViewInit, Component, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { RequestsService } from 'src/app/requests.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent {
  public favoritedCoins: Array<String> = []
  public displayedColumns: string[] = ['image', 'name', 'price', 'total_volume', 'market_cap', 'favorite'];
  public clickableColumns: string[] = ['image', 'name', 'price', 'total_volume', 'market_cap'];
  public dataSource: MatTableDataSource<CoinList> = new MatTableDataSource<CoinList>([]);
  public data: any = []

  //@ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private request: RequestsService, public router: Router){
  }

  ngAfterViewInit() {
    this.request.getCoinList().subscribe((data) => {
      this.data = data;
      this.dataSource = new MatTableDataSource<CoinList>(data as any)
      this.dataSource.paginator = this.paginator
    })

    this.getFavoritedCoins()
  }

  updateFavoritedCoins(newFavoritedCoins: Array<String>){
    this.favoritedCoins = newFavoritedCoins;
  }

  getFavoritedCoins(){
    this.request.getFavoritedCoins().subscribe((res: any) => {
      this.favoritedCoins = res.body.favorites
    })
  }

  public addToFavorites(coinId: string){
    this.request.addToFavorites(coinId).subscribe((res: any) => {
      this.favoritedCoins = res.body.favorites
    });
  }

  public navigateTo(coinId: string){
    this.router.navigate(['dashboard/trade-now/' + coinId], );
  }
}

export interface CoinList {
  id: string;
  name: string;
  image: string;
  current_price: string;
  total_volume: string;
  market_cap: string;
}
