import { Component, ElementRef, ViewChild } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { ShareDataService } from 'src/app/core/data/share-data.service';

@Component({
  selector: 'app-basic-inputs',
  templateUrl: './basic-inputs.component.html',
  styleUrls: ['./basic-inputs.component.scss']
})
export class BasicInputsComponent {
  @ViewChild('imageInput') imageInput!: ElementRef<HTMLInputElement>;
  @ViewChild('contentTextarea') contentTextarea!: ElementRef<HTMLTextAreaElement>;
  imageUrls: string[] = [];
  youtubeLink: string = '';
  blogTitle: string = '';
  blogContent: string = '';

  constructor(private data: ShareDataService, private appService: AppService) { }

  previewImages(event: any) {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imageUrls.push(e.target.result);
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }

  clearImageInput() {
    this.imageInput.nativeElement.value = '';
    this.imageUrls = [];
  }

  adjustTextareaHeight(): void {
    const textarea = this.contentTextarea.nativeElement;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  handlePdfChange(event: any) {
    // Implement PDF handling logic here
  }

  addNewBlog(title: string, content: string, youtubeLink: string, fileInput: HTMLInputElement | null): void {
    if (!fileInput) {
      console.error('fileInput is null or undefined');
      return;
    }
  
    const images: File[] = fileInput.files ? Array.from(fileInput.files) : [];
  
    if (!title || !content) {
      console.error('Title or content is null or empty');
      return;
    }
  
  
    if (images.length === 0) {
      console.error('No images selected');
      return;
    }
  
    // Assuming you have a reference to the PDF file, adjust accordingly if needed
    // const pdf: File | null = pdfInput ? pdfInput.files[0] : null;
  
    // If you have a reference to a PDF file, you can pass it as an argument to the addBlog method
    // Otherwise, pass null or adjust as needed
    const pdf: File | null = null;
  
    this.appService.addBlog(title, content, youtubeLink, images, pdf).subscribe(
      (response) => {
        console.log('Blog added successfully', response);
        // Add any further handling here, such as reloading data
      },
      (error) => {
        console.error('Error adding blog', error);
        // Handle errors here
      }
    );
  }
  
  
  
}
