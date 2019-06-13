import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  list:any = [] ;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    
  }

  getApi(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/photos').subscribe((res)=>{
      console.log(res);
      this.list = res;
      this.list = this.list.slice(0, 10);
    });
  }

}
