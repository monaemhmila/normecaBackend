import { Component, OnInit, Renderer2  } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';
import { routes } from 'src/app/core/helpers/routes/routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public routes = routes
  selected = 'freelancers';
  getLink = "project"
  constructor(private router:Router,private renderer: Renderer2) { }
  ngOnInit(): void {
    AOS.init({
      duration: 1200,
      once: true,
    });
    setTimeout(() => {
      this.setZoomLevel(1.25);
    }, 0);
  }  
  onVideoEnded() {
    window.scrollBy(0, window.innerHeight); // Scroll down by the window height
  }
  
  private setZoomLevel(zoomLevel: number): void {
    const elementsToZoom = document.querySelectorAll('.zoom-125'); // Adjust the selector based on your requirements
  
    elementsToZoom.forEach(element => {
      this.renderer.setStyle(element, 'zoom', zoomLevel.toString());
      this.renderer.setStyle(element, 'transform', `scale(${zoomLevel})`);
      this.renderer.setStyle(element, 'transform-origin', 'top left');
    });
  }
  customOptions: OwlOptions = {
    loop: true,
    margin: 30,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fas fa-chevron-left"></i>',
    '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  clinicsslides = [
    {
      img: "assets/img/products.jpg",
      name: "CANIVEAUX-ET-SIPHONS",
      department: "Siphon de sol à sortie latéral 300X300",
    },
    {
      img: "assets/img/products.jpg",
      name: "CANIVEAUX-ET-SIPHONS",
      department: "Siphon de sol à sortie latéral 300X300",
    },{
      img: "assets/img/products.jpg",
      name: "CANIVEAUX-ET-SIPHONS",
      department: "Siphon de sol à sortie latéral 300X300",
    },{
      img: "assets/img/products.jpg",
      name: "CANIVEAUX-ET-SIPHONS",
      department: "Siphon de sol à sortie latéral 300X300",
    },
  ];


  tetimonialOptions: OwlOptions = {
    loop: true,
    margin: 30,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fas fa-chevron-left"></i>',
    '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      768 : {
        items: 3
      },
      1170: {
        items: 3
      }
    },
    nav: true
  }


  testimonialslides= [
    {
      img: "assets/img/review/review-01.jpg",
      name: "Durso Raeen",
      position: "Project Lead",
      rating:"4.7"
    },
    {
      img: "assets/img/review/review-02.jpg",
      name: "Camelia Rennesa",
      position: "Project Lead",
      rating:"4.8"
    },
    {
      img: "assets/img/review/review-03.jpg",
      name: "Brayan",
      position: "Team Lead",
      rating:"5.0"
    },
    {
      img: "assets/img/review/review-02.jpg",
      name: "Davis Payerf",
      position: "Project Lead",
      rating:"3.2"
    }
   
  ]
  companyOptions: OwlOptions = {
    loop: true,
    margin: 30,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fas fa-chevron-left"></i>',
    '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      768 : {
        items: 6
      },
      1170: {
        items: 6
      }
    },
    nav: true
  }

  companyslides=[
    {
      img:"assets/img/company-logo-01.png"
    },
    {
      img:"assets/img/company-logo-02.svg"
    },
    {
      img:"assets/img/company-logo-03.svg"
    },
    {
      img:"assets/img/company-logo-04.svg"
    },
    {
      img:"assets/img/company-logo-05.svg",
    },
    {
      img:"assets/img/company-logo-06.svg",
    }

  ]
  search(){
    if(this.selected === 'projects'){
      this.router.navigateByUrl('/freelancer/project')
    }else if(this.selected === 'freelancers'){
      this.router.navigateByUrl('/freelancer/project')
    }
  }
  scrollToTop(): void {
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  aboutusslides = [
    {
      id: 1,
      img: "assets/img/review/review-01.jpg",
      name: "Process & Parc machines",
      officer: "Project Lead",
      rating: "4.7",
      para:"Machine de Découpe Fibre TRULASER 3030/4kw                           Machine de Découpe Laser CO2 TRULASER 3030/3kW                      Presse Plieuse Colly 250 T                   Presse Plieuse Colly 170 T"
    },
    {
      id: 2,
      img: "assets/img/review/review-02.jpg",
      name: "Bureau d’études",
      officer: "Un personnel qualifié et des logiciels performants donnent des possibilités étendues à notre bureau d’études pour concrétiser (dans le domaine de la mécanique, de la mécano-soudure, de la chaudronnerie et de la conception des machines) les projets qui nous sont confiés.",
      rating: "4.7",
      para:""
    },
    {
      id: 3,
      img: "assets/img/review/review-03.jpg",
      name: "Gestion et Management de Grands Projet",
      officer: "Team Lead",
      rating: "4.7",
      para:"NORMECA est capable de gérer des projets d’envergure et d’en assurer la traçabilité grâce à son système ERP «SAP»."
    },
   
   
]
}