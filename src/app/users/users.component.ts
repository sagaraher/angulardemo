import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  list:any;
  filteredItems:any;
  searchText:any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    
  }

  getApi(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((res)=>{
      console.log(res);
      this.list = res;
      this.assignCopy();
    });
  }

  filterItem(value){
    if(!value){
        this.assignCopy();
    } // when nothing has typed
    this.filteredItems = Object.assign([], this.list).filter(
       item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
 }

 assignCopy(){
  this.filteredItems = Object.assign([], this.list);
 }

}
