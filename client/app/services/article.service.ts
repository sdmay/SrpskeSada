import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) { }
    getSportsArticles() {
      console.log('in Service');
      return this.http.get('/api/sportsarticles');
    }
    getBusinessArticles() {
      console.log('Business Service');
      return this.http.get('/api/businessarticles');
    }
    getEntertainmentArticles() {
      return this.http.get('/api/entertainmentarticles');
    }
    getHealthArticles() {
      return this.http.get('/api/healtharticles');
    }
    getScienceArticles() {
      return this.http.get('/api/sciencearticles');
    }
    getTechArticles() {
      return this.http.get('/api/techarticles');
    }
}
