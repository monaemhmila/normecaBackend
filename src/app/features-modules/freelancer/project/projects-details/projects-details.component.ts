import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { FormControl, FormGroup } from '@angular/forms';
import { routes } from 'src/app/core/helpers/routes/routes';
import { Article } from 'src/app/core/models/models';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss'],
})
export class ProjectsDetailsComponent implements OnInit {
  public routes = routes;
  public article: Article | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve the article information from the route state
    const articleParam = this.route.snapshot.paramMap.get('article');
    if (articleParam) {
      // Decode the URL-encoded JSON string
      const decodedArticle = JSON.parse(decodeURIComponent(articleParam));
      this.article = decodedArticle;
      console.log('Article Data:', this.article);
    }
  }
  // Add this function to your component
  toggleZoom(event: MouseEvent) {
    const container = document.getElementById('zoom-container');
    const image = document.getElementById('zoom-image');

    if (container && image) {
        container.classList.toggle('clicked');
        
        if (container.classList.contains('clicked')) {
            const boundingBox = container.getBoundingClientRect();
            const x = (event.clientX - boundingBox.left) / boundingBox.width * 100;
            const y = (event.clientY - boundingBox.top) / boundingBox.height * 100;

            image.style.transformOrigin = `${x}% ${y}%`;
        } else {
            image.style.transformOrigin = 'center center';
        }
    }
}



  getFullImageUrl(imageSrc: string): string {
    const fullUrl = 'http://localhost:3000/' + "" + imageSrc;
    return fullUrl;
}
}
