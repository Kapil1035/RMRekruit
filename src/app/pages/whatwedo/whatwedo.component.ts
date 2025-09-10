import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-whatwedo',
  imports: [RouterModule],
  templateUrl: './whatwedo.component.html',
  styleUrl: './whatwedo.component.css'
})
export class WhatwedoComponent {
  constructor(private router: Router){}

  telentSouring(){
    this.router.navigate(['talent-sourcing'])
  }

  executiveServie(){
    this.router.navigate(['execute-service'])
  }

  permanentStaffing(){
    this.router.navigate(['permanent-staffing'])
  }
  RPO(){
    this.router.navigate(['Recruitment-Process-Outsourcing'])
  }
}
