import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
returnedData;
sportsArticles;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getSports();
  }

  getSports() {
    this.articleService.getSportsArticles().subscribe(
      (data) => {
        this.returnedData = data;
        this.sportsArticles = this.returnedData.articles;
      });

  }

}
