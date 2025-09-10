import { Component } from '@angular/core';
import { WhatwedoComponent } from '../whatwedo/whatwedo.component';
import { OurValuesComponent } from '../our-values/our-values.component';
import { FooterComponent } from '../footer/footer.component';
import { WhoWeAreComponent } from '../who-we-are/who-we-are.component';

@Component({
  selector: 'app-home',
  imports: [WhoWeAreComponent,WhatwedoComponent,OurValuesComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
