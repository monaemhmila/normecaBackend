import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/core/data/share-data.service';
import { routes } from 'src/app/core/helpers/routes/routes';
import {Article } from 'src/app/core/models/models';
import { forkJoin } from 'rxjs';
import {Category } from 'src/app/core/models/models';

import { AppService } from 'src/app/services/app.service';
import { switchMap } from 'rxjs/operators';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
declare var $: any; // Declare jQuery to avoid TypeScript errors
interface data {
  value: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public like: boolean[] = [false];
  public isButtonVisible = true;
  public isButtonsVisible = true;
  public isButtonVisibles = true;
  public isButtonVisibl = true;
  public isButtonsVisibles = true;
  public Libelle = '';
  public categorys!: Array<Category>;
  public serialNumberArray: Array<number> = [];
  public totalData = 0;
  public skip = 0;
  public pageSize = 10;
  public limit: number = this.pageSize;
  dataSourceCategorys!: MatTableDataSource<Category>;
  selectedCategory: string | null = '';
  public Category!: Array<Category>;
  dataSource!: MatTableDataSource<Article>;
  public searchTerm: string = ''; // Declare searchTerm as a string
  public routes = routes;
  public Articles!: Array<Article>;
  public filteredArticles: Array<Article> = [];
  public filteredArticlestrue: Array<Article> = [];
  selectedMaterial: string[] = [];
  materialFilters = [
    { name: 'Acier Inoxydable', selected: false },
    { name: 'Acier Galvanisé', selected: false },
    { name: 'inox', selected: false }
  ];
  typeProductFilters = [
    { name: 'Caniveaux et Siphons', selected: false },
    { name: 'Hottes de Cuisine', selected: false },
    { name: 'Tables', selected: false },
    { name: 'Étagères', selected: false },
    { name: 'Plonges', selected: false },
    { name: 'Chariots', selected: false },
    { name: 'Pupitres', selected: false },
    { name: 'Cadres Tampon', selected: false },
    { name: 'Cornières à Sceller - Forme L', selected: false },
    { name: 'Tables avec Trou Vide-Ordure', selected: false },
    { name: 'Étagères à 4 Niveaux en Tôle Pleine', selected: false }
];

industryFilters = [
    { name: 'Vinicole', selected: false },
    { name: 'Brassicole', selected: false },
    { name: 'Agro-alimentaire et surfaces de vente', selected: false },
    { name: 'Cuisines collectives', selected: false },
    { name: 'Espaces aquatiques, piscines, spa, balnéo', selected: false },
    { name: 'Sanitaire, salles de bains, douches', selected: false },
    { name: 'Chimique et pharmaceutique', selected: false },
    { name: 'Voirie, terrasses, balcons, parkings', selected: false },
    { name: 'Tour IGH', selected: false }
];
@ViewChild('categoryModal') categoryModal!: ElementRef;

  ngOnInit(): void {
    this.getTableDatacategory();
    this.GetCategories();
    forkJoin([
      this.appService.getCategories(),
      this.appService.getArticles(),
    ]).pipe(
      switchMap(([categories, articles]) => {
        this.Category = categories;
        this.Articles = articles;
        this.filteredArticles = articles; // Set filteredArticles initially
        this.filteredArticlestrue = articles; // Set filteredArticles initially

        this.dataSource.data = this.filteredArticles;
        return [];
      })
    ).subscribe();
    setTimeout(() => {
      this.openModal();
    }, 100);

  }
  openModal() {
    // Check if the current route matches the expected route where you want to show the modal
    if (this.router.url === '/freelancer/project') {
      // Check if categoryModal is defined before accessing its nativeElement property
      if (this.categoryModal?.nativeElement) {
        ($(this.categoryModal.nativeElement) as any).modal('show');
      } else {
        console.error('categoryModal is not defined');
      }
    }
  }
  

  isCategoryObject(category: string | { _id: string }): category is { _id: string } {
    return typeof category !== 'string' && '_id' in category;
  }

  
  private GetCategories(){
    this.appService.getCategories();  
  }

  
  
  private getTableDatacategory(): void {
    this.categorys = [];
    this.serialNumberArray = [];
  
    this.appService.getCategories().subscribe(
      (res: Category[]) => {
        this.totalData = res.length;
        res.map((category: Category, index: number) => {
          const serialNumber = index + 1;
          if (index >= this.skip && serialNumber <= this.limit) {
            
            const modifiedCategory: Category = {
              _id: category._id,
              description: category.description,
              Libelle: category.Libelle,
              createdAt: category.createdAt,
              updatedAt: category.updatedAt,
              __v: category.__v
            };
            this.categorys.push(modifiedCategory);
          }
        });
        this.dataSourceCategorys = new MatTableDataSource<Category>(this.categorys);
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
  constructor(public router: Router, private dataservice: ShareDataService, private appService : AppService) {
    this.dataSource = new MatTableDataSource<Article>(this.Articles);

  }
  toggleLike(index: number) {
    this.like[index] = !this.like[index];
  }
  getFullImageUrl(imageSrc: string): string {
    const fullUrl = 'http://localhost:3000/' + "" + imageSrc;
    return fullUrl;
}

  
  navigation() {
    this.router.navigate([routes.freelancer_project]);
  }
  selectCategory(category: any): void {
    this.selectedCategory = this.selectedCategory === category._id ? null : category._id;
    this.applyFilter(); // Call applyFilter when a category is selected
  }
  
  resetCategoryFilter() {
    this.selectedCategory = null;
    this.applyFilter();
  }
  /*applyFilter() {
  
    if (this.selectedCategory === null) {
      this.filteredArticles = this.Articles;
    } else {
      this.filteredArticles = this.selectedCategory
        ? this.Articles.filter(article => {
            const categoryId = this.isCategoryObject(article.Categorie) ? (article.Categorie as Category)._id : null;
  
            return categoryId === this.selectedCategory;
          })
        : this.Articles;
    }
    this.filteredArticlestrue=this.filteredArticles 

  }*/
  applyFilter() {
    // Filter articles based on selected materials
    this.filteredArticles = this.filteredArticlestrue.filter(article => {
        const industryFilterPassed = this.industryFilters.every(industry => {
            return !industry.selected || (
                article.Designation.toLowerCase().includes(industry.name.toLowerCase()) ||
                article.description.toLowerCase().includes(industry.name.toLowerCase()) ||
                article.Reference.toLowerCase().includes(industry.name.toLowerCase())
            );
        });
        
        const typeProductFilterPassed = this.typeProductFilters.every(typeProduct => {
            return !typeProduct.selected || (
                article.Designation.toLowerCase().includes(typeProduct.name.toLowerCase()) ||
                article.description.toLowerCase().includes(typeProduct.name.toLowerCase()) ||
                article.Reference.toLowerCase().includes(typeProduct.name.toLowerCase())
            );
        });
        
        const materialFilterPassed = this.materialFilters.every(material => {
            return !material.selected || (
                article.Designation.toLowerCase().includes(material.name.toLowerCase()) ||
                article.description.toLowerCase().includes(material.name.toLowerCase()) ||
                article.Reference.toLowerCase().includes(material.name.toLowerCase())
            );
        });
        
        return materialFilterPassed && typeProductFilterPassed && industryFilterPassed;
    });
}





  
  onSearchInputChange(): void {
    // Handle real-time filtering as the input changes
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      this.filteredArticles = this.filteredArticlestrue.filter((article) => {
        return (
          article.Reference.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          article.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          article.Designation.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          false // Placeholder condition, replace with your actual conditions
        );
      });
    } else {
      this.filteredArticles = this.selectedCategory
      ? this.Articles.filter(article => {
          const categoryId = this.isCategoryObject(article.Categorie) ? (article.Categorie as Category)._id : null;

          return categoryId === this.selectedCategory;
        })
      : this.Articles;
    }
  }
  viewProjectDetails(article: Article): void {
    // Encode the article object as a JSON string
    const encodedArticle = encodeURIComponent(JSON.stringify(article));
    
    // Navigate to the project details page with the encoded article in the route state
    this.router.navigate(['/project-details', { article: encodedArticle }]);
  }
  
  
  
  
  
}
