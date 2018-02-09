import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
returnedData;
healthArticles;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getHealthArticles();
  }
  getHealthArticles() {
    this.articleService.getHealthArticles().subscribe(
      (data) => {
        this.returnedData = data;
        this.healthArticles = this.returnedData.articles;
      },
      error => console.log(JSON.stringify(error))
    );
    }

}
