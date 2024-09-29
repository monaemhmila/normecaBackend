import { Component  } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import * as AOS from 'aos';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  {
  ngOnInit(): void {
    AOS.init({
      once: false,
    });
  } 
  public routes = routes;
}
