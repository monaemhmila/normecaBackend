import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';

interface Category {
  _id: string;
  description: string;
  Libelle: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
interface Article {
  _id: string;
  Reference: string;
  Designation: string;
  Categorie: string;
  Photo: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
interface Blog {
  _id: string;
  title: string;
  content: string;
  images: string[];
  pdf?: string;
  youtubeLink?: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public url2 = 'http://localhost:3000/' ;
  constructor(private http: HttpClient) {}

 
  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post<any>(this.url2 + 'api/user/login', body);
  }

  // Ajoutez une propriété observable pour suivre l'état de connexion
  private _loginStatus = new BehaviorSubject<string>('0');
  loginStatus$ = this._loginStatus.asObservable();

  // Mettez à jour l'état de connexion
  setLoginStatus(status: string) {
    this._loginStatus.next(status);
  }

  public getCategories(): Observable<Category[]> {
    return this.http.get<{categories: Category[] }>(`${this.url2}api/category/categories`)
      .pipe(map(response => response.categories));
  }
  deleteCategory(categoryId: string): Observable<any> {
    const url = `${this.url2}api/category/categories/${categoryId}`;
    return this.http.delete(url);
  }
  addCategory(Libelle: string, description: string): Observable<Category> {
    const body = {  Libelle: Libelle, description: description };
    return this.http.post<any>(this.url2 + 'api/category/categories', body);
  }
  updateCategory(categoryId: string,updatedData: any): Observable<any> {
    const url = `${this.url2}api/category/categories/${categoryId}`;
    return this.http.put(url, updatedData);
  }
  public getArticles(): Observable<Article[]>{
    return this.http.get<{articles: Article[]}>(`${this.url2}api/article/articles`)
    .pipe(map(response => response.articles));
  }
  addArticle(reference: string, designation: string, description: string, categorie: string, file: File | null): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('Reference', reference);
    formData.append('Designation', designation);
    formData.append('description', description);
    formData.append('Categorie', categorie);
    if (file) {
      formData.append('Photo', file, file.name);
    }
  
    return this.http.post<any>(this.url2 + 'api/article/articles', formData);
  }
  

  deleteArticle(articleId: string): Observable<any> {
    const url = `${this.url2}api/article/articles/${articleId}`;
    return this.http.delete(url);
  }
 
  updateArticle(articleId: string, updatedData: any): Observable<any> {
    const url = `${this.url2}api/article/articles/${articleId}`;
    return this.http.put(url, updatedData);
  }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.url2}/blogs`);
  }

  addBlog(title: string, content: string, youtubeLink: string, images: File[], pdf: File | null): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('youtubeLink', youtubeLink);
    images.forEach((image, index) => {
      formData.append(`images[${index}]`, image, image.name);
    });
    if (pdf) {
      formData.append('pdf', pdf, pdf.name);
    }
    return this.http.post<any>(`${this.url2}/blog`, formData);
  }

  deleteBlog(blogId: string): Observable<any> {
    const url = `${this.url2}/blog/${blogId}`;
    return this.http.delete(url);
  }
  
}