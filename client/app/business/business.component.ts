import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
returnedData;
businessArticles;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getBusinessArticles();
  }
  getBusinessArticles() {
    this.articleService.getBusinessArticles().subscribe(
      (data) => {
        this.returnedData = data;
        this.businessArticles = this.returnedData.articles;
      },
      error => console.log(JSON.stringify(error))
    );
    }
}
