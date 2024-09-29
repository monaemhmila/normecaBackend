import { Component, OnInit } from '@angular/core';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Sort } from '@angular/material/sort';
import { ShareDataService } from 'src/app/core/data/share-data.service';
import { Category } from 'src/app/core/models/models';
import { AppService } from 'src/app/services/app.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  public Libelle = '';
  public description = '';
  public searchDataValue = '';
  public editLibelle = '';
  public editDescription = '';
  public successMessage = '';
  public successMessage2 = '';
  public successMessage3 = '';
  dataSource!: MatTableDataSource<Category>;
  public selectedCategoryId: string | null = null;
  // pagination variables
  public lastIndex = 0;
  public pageSize = 10;
  public totalData = 0;
  public skip = 0;
  public limit: number = this.pageSize;
  public pageIndex = 0;
  public serialNumberArray: Array<number> = [];
  public currentPage = 1;
  public pageNumberArray: Array<number> = [];
  public pageSelection: Array<pageSelection> = [];
  public totalPages = 0;
  public filter = false;
  //** / pagination variables
  public lstBoard!: Array<Category>;
  constructor(private data: ShareDataService , private appService: AppService) {}

  ngOnInit(): void {
    this.getTableData();
    this.GetCategories();
  }
  openFilter() {
    this.filter = !this.filter;
  }
  
  public setSelectedCategoryId(categoryId: string): void {
    this.selectedCategoryId = categoryId;
  }
  private GetCategories(){
    this.appService.getCategories();
  }
  public openEditModal(category: Category): void {
    this.selectedCategoryId = category._id;
    this.editLibelle = category.Libelle;
    this.editDescription = category.description;
  }
  
  public editCategory(): void {
    if (this.selectedCategoryId) {
        const updatedData = {
            Libelle: this.editLibelle,
            description: this.editDescription,
        };

        this.appService.updateCategory(this.selectedCategoryId, updatedData)
            .subscribe(
                (updatedCategory: Category) => {
                    console.log('Category updated successfully:', updatedCategory);
                    this.getTableData();
                    this.resetEditForm();
                    this.selectedCategoryId = null;
                    this.successMessage = 'Mise à jour réussie !'; // Définir le message de succès
                    setTimeout(() => {
                      this.successMessage = '';
                  }, 1000)
                },
                (error) => {
                    console.error('Error updating category:', error);
                }
            );
    }
}

  
  public resetEditForm(): void {
  this.editLibelle = '';
  this.editDescription = '';
  }
  private getTableData(): void {
    this.lstBoard = [];
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
            this.lstBoard.push(modifiedCategory);
          }
        });
        this.dataSource = new MatTableDataSource<Category>(this.lstBoard);
        this.calculateTotalPages(this.totalData, this.pageSize);
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
  
  deleteCategory(): void {
    if (this.selectedCategoryId) {
      this.appService.deleteCategory(this.selectedCategoryId).subscribe(
        () => {
          console.log('Category deleted successfully');
          this.getTableData();
          // Réinitialiser l'ID après la suppression
          this.selectedCategoryId = null;
          this.successMessage3 = 'Suppression réussie !'; // Définir le message de succès
                    setTimeout(() => {
                      this.successMessage3 = '';
                  }, 1000)
        },
        (error) => {
          console.error('Error deleting category:', error);
        }
      );
    }
  }
  resetForm(): void {
    this.Libelle = '';
    this.description = '';
  }
  

  addCategory(): void {
    this.appService.addCategory(this.Libelle, this.description).subscribe(
      (newCategory: Category) => {
        console.log('Category added successfully:', newCategory);
        this.getTableData();
        this.resetForm(); 
        this.successMessage2 = 'Ajouter avec succeés !'; 
        setTimeout(() => {
          this.successMessage2 = '';
      },3000)
      },
      (error) => {
        console.error('Error adding category:', error);
      }
    );
  }
  
  public sortData(sort: Sort) {
    const data = this.lstBoard.slice();
  
    if (!sort.active || sort.direction === '') {
      this.lstBoard = data;
    } else {
      this.lstBoard = data.sort((a, b) => {
        const aValue = (a as never)[sort.active];
  
        const bValue = (b as never)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  

  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.lstBoard = this.dataSource.filteredData;
  }

  public getMoreData(event: string): void {
    if (event == 'next') {
      this.currentPage++;
      this.pageIndex = this.currentPage - 1;
      this.limit += this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getTableData();
    } else if (event == 'previous') {
      this.currentPage--;
      this.pageIndex = this.currentPage - 1;
      this.limit -= this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getTableData();
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
    this.getTableData();
  }

  public changePageSize(): void {
    this.pageSelection = [];
    this.limit = this.pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.getTableData();
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
