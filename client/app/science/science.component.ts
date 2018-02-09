import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
returnedData;
scienceArticles;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getSciArticles();
  }
  getSciArticles() {
    this.articleService.getScienceArticles().subscribe(
      (data) => {
        this.returnedData = data;
        this.scienceArticles = this.returnedData.articles;
      },
      error => console.log(JSON.stringify(error))
    );
  }
}
