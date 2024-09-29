import { Component, OnInit, ViewChild} from '@angular/core';

// import { Subject } from "rxjs";
import { ShareDataService } from 'src/app/core/data/share-data.service';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Sort } from '@angular/material/sort';
import {Category } from 'src/app/core/models/models';
import { AppService } from 'src/app/services/app.service';
import { forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
interface Article {
  _id: string;
  Reference: string;
  Designation: string;
  Categorie: string | Category;
  Photo: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @ViewChild('editForm', { static: false }) editForm!: NgForm;
  public lstProject!: Array<Article>;
  public selectedArticleId: string | null = null;
  public updatingArticleId = ''
  public url = "admin";
  public searchDataValue = '';
  editPhoto: File | null = null;
  public updatedData: any; // Ajoutez cette ligne pour déclarer la propriété
  editPhotoFileName: string | null = null;
  dataSource!: MatTableDataSource<Article>;
  public Libelle = '';
  public editReference = '';
  public editDesignation = '';
  public editCategorie = "";
  public editdescription = '';
  public successMessage = '';
      //** / pagination variables
  public lastIndex = 0;
  public pageSize = 10;
  public totalData = 0;
  public successMessage3 = '';
  public skip = 0;
  public limit: number = this.pageSize;
  public pageIndex = 0;
  public serialNumberArray: Array<number> = [];
  public currentPage = 1;
  public pageNumberArray: Array<number> = [];
  public pageSelection: Array<pageSelection> = [];
  public totalPages = 0;
  public lstBoard!: Array<Article>;
  public Category!: Array<Category>;
  selectedCategory = ''; // Initialisez cette propriété
  public filter = false;
 
      //** / pagination variables
      constructor(private data: ShareDataService, private appService: AppService) {   
      }   
  public formData: any = {
    Reference: '',
    Designation: '',
    Categorie: '',
    Photo: '',
    description: '',
  };
 
  
  ngOnInit(): void {
    forkJoin([
      this.appService.getCategories(),
      this.appService.getArticles(),
    ]).pipe(
      switchMap(([categories, articles]) => {
        this.Category = categories; 
        this.getTableData(articles);
        return [];
      })
    ).subscribe();
  }

  public openEditModal(article: Article): void {
    this.selectedArticleId = article._id;
    this.updatingArticleId = article._id; 
    this.editReference = article.Reference;
    this.editDesignation = article.Designation;
    this.editPhotoFileName = article.Photo;  // Utilisez une nouvelle propriété pour stocker le nom du fichier
    if (this.isCategoryObject(article.Categorie)) {
      this.editCategorie = article.Categorie.Libelle;
    } else {
      // Traitez le cas où article.Categorie est de type 'string'
      this.editCategorie = article.Categorie;
    }
    this.editdescription = article.description;
  }
  
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.editPhotoFileName = file.name;
    this.editPhoto = file;
  }
  
  public updateArticle(): void {
    console.log('Update Article method triggered');
    if (this.selectedArticleId && this.editForm) {
      this.editForm.form.markAllAsTouched();
      if (this.editForm.valid) {
        const formData = new FormData();
    formData.append('Reference', this.editReference);
    formData.append('Designation', this.editDesignation);
    if (this.editPhoto) {
      const blob = new Blob([this.editPhoto], { type: this.editPhoto.type });     
      formData.append('Photo', blob, this.editPhotoFileName ?? '');
    }    formData.append('description', this.editdescription);
        console.log('editCategorie:', this.editCategorie);
        console.log('Updating Article with ID:', this.updatingArticleId);
        this.appService.updateArticle(this.updatingArticleId, formData).subscribe(
          (response) => {
            console.log('Article mis à jour avec succès', response);
            this.loadData();
            this.successMessage = 'Mise à jour réussie !';
            setTimeout(() => {
              this.successMessage = '';
            }, 1000);
          },
          (error) => {
            console.error('Erreur lors de la mise à jour de l\'article', error);
            if (error instanceof HttpErrorResponse) {
              console.error('Status:', error.status);
              console.error('Error message:', error.error.message); // Examinez le message d'erreur spécifique
            }
          }
        );
      } else {
        console.log('Form is invalid');
      }
    } else {
      console.log('Updating ID or Form is missing');
    }
  }
  
  addNewArticle(reference: string, designation: string, description: string, categorie: string, fileInput: HTMLInputElement | null): void {
    if (!fileInput) {
      console.error('fileInput is null or undefined');
      return;
    }
  
    const file: File | null = fileInput.files ? fileInput.files[0] : null;
  
    if (!this.selectedCategory) {
      console.error('Selected category is null or undefined');
      return;
    }
  
    if (!file) {
      console.error('File is null or undefined');
      return;
    }
  
    this.appService.addArticle(reference, designation, description, this.selectedCategory, file).subscribe(
      (response) => {
        console.log('Article ajouté avec succès', response);
        this.loadData();
        // Ajoutez ici le code pour gérer le succès (rechargement des données, fermeture de la modal, etc.)
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de l\'article', error);
        console.log('Selected Category:', this.selectedCategory);
  
        if (error instanceof HttpErrorResponse) {
          console.error('Status:', error.status);
          console.error('Error message:', error.error.message);
          // Ajoutez ici le code pour gérer l'échec (affichage d'un message d'erreur, etc.)
        }
      }
    );
  }
  

  isCategoryObject(category: any): category is { _id: string } {
    return typeof category !== 'string' && '_id' in category;
  } 
  openFilter(){
    this.filter = !this.filter
  }
  public setSelectedArticleId(articleId: string): void {
    this.selectedArticleId = articleId;
  }
  deleteArticle(): void {
    if (this.selectedArticleId) {
    this.appService.deleteArticle(this.selectedArticleId).subscribe(
      (response) => { 
        console.log('Article supprimé avec succès', response);
        this.loadData();
        this.successMessage3 = 'Suppression réussie !'; // Définir le message de succès
        setTimeout(() => {
          this.successMessage3 = '';
      }, 1000)
      },
      (error) => {
        console.error('Erreur lors de la suppression de l\'article', error);
      }
    );
    }
  }
 
  private loadData(): void {
    forkJoin([
      this.appService.getCategories(),
      this.appService.getArticles(),
    ]).pipe(
      switchMap(([categories, articles]) => {
        this.Category = categories;
        this.getTableData(articles);
        return [];
      })
    ).subscribe();
  }
  
  private getTableData(articles: Article[]): void {
    this.lstProject = [];
    this.serialNumberArray = [];
  
    articles.forEach((article: Article, index: number) => {
      const serialNumber = index + 1;
      if (index >= this.skip && serialNumber <= this.limit) {
        const modifiedArticle: Article = {
          _id: article._id,
          description: article.description,
          Reference: article.Reference,
          Designation: article.Designation,
          Categorie: article.Categorie,
          Photo: article.Photo,
          createdAt: article.createdAt,
          updatedAt: article.updatedAt,
          __v: article.__v
        };
  
        this.lstProject.push(modifiedArticle);
      }
    });
  
    this.dataSource = new MatTableDataSource<Article>(this.lstProject);
    this.calculateTotalPages(articles.length, this.pageSize);
  }
  
  

  public sortData(sort: Sort) {
    const data = this.lstProject.slice();

    if (!sort.active || sort.direction === '') {
      this.lstProject = data;
    } else {
       
      this.lstProject = data.sort((a, b) => {
         
        const aValue = (a as never)[sort.active];
         
        const bValue = (b as never)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
 
  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.lstProject = this.dataSource.filteredData;
  }

  getFullImageUrl(imageSrc: string): string {
    const fullUrl = 'http://localhost:3000/' + imageSrc;  // Assurez-vous que le chemin est correct
    return fullUrl;
  }
 

  public getMoreData(event: string): void {
    if (event == 'next') {
      this.currentPage++;
      this.pageIndex = this.currentPage - 1;
      this.limit += this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getTableData(this.lstBoard);
    } else if (event == 'previous') {
      this.currentPage--;
      this.pageIndex = this.currentPage - 1;
      this.limit -= this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getTableData(this.lstBoard);
    }
  }

  public moveToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.skip = this.pageSelection[pageNumber - 1].skip;
    this.limit = this.pageSelection[pageNumber - 1].limit;
    if (pageNumber > this.currentPage) {
      this.pageIndex = pageNumber - 1;
    } else if (pageNumber < this.currentPage) {
      this.pageIndex = pageNumber + 1;
    }
    this.getTableData(this.lstBoard);
  }

  
  public changePageSize(): void {
    this.pageSelection = [];
    this.limit = this.pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.getTableData(this.lstBoard);
  }

  private calculateTotalPages(totalData: number, pageSize: number): void {
    this.pageNumberArray = [];
    this.totalPages = totalData / pageSize;
    if (this.totalPages % 1 != 0) {
      this.totalPages = Math.trunc(this.totalPages + 1);
    }
    for (let i = 1; i <= this.totalPages; i++) {
      const limit = pageSize * i;
      const skip = limit - pageSize;
      this.pageNumberArray.push(i);
      this.pageSelection.push({ skip: skip, limit: limit });
    }
  }
}
export interface pageSelection {
  skip: number;
  limit: number;
}