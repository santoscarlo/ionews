import { ApiService } from './../api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage{
  name = "Carlo";
  articles;

  constructor(
    private apiService: ApiService
  ) { }

  ionViewDidEnter(){

    this.apiService.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }



}
