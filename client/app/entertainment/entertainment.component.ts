import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
returnedData;
entertainmentArticles;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getEntertainmentArticles();
  }
  getEntertainmentArticles() {
    this.articleService.getEntertainmentArticles().subscribe(
      (data) => {
        this.returnedData = data;
        this.entertainmentArticles = this.returnedData.articles;
      },
      error => console.log(JSON.stringify(error)));
  }
}
