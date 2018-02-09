import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  constructor(private articleService: ArticleService) { }
returnedData;
techArticles;

  ngOnInit() {
    this.getTechnologyArticles();
  }
  getTechnologyArticles() {
    this.articleService.getTechArticles().subscribe(
      (data) => {
        this.returnedData = data;
        this.techArticles = this.returnedData.articles;
      },
      error => console.log(JSON.stringify(error)));
  }
}
