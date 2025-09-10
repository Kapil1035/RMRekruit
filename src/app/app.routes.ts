import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WhatwedoComponent } from './pages/whatwedo/whatwedo.component';
import { TalentSourcingComponent } from './pages/talent-sourcing/talent-sourcing.component';
import { SearchServiceComponent } from './pages/search-service/search-service.component';
import { PermanentStaffingComponent } from './pages/permanent-staffing/permanent-staffing.component';
import { RecruitmentProcessComponent } from './pages/recruitment-process/recruitment-process.component';
import { OurValuesComponent } from './pages/our-values/our-values.component';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';

export const routes: Routes = [
  {
  path:'',
  component:HomeComponent
  },
 {
  path:'Home-page',
  component:HomeComponent
 },
 {
  path:'what-we-do',
  component:WhatwedoComponent
 },
 {
  path:'talent-sourcing',
  component:TalentSourcingComponent
 },
 {
  path:'execute-service',
  component:SearchServiceComponent
 },
 {
  path:'permanent-staffing',
  component:PermanentStaffingComponent
 },
 {
  path:'Recruitment-Process-Outsourcing',
  component:RecruitmentProcessComponent
 },
 {
  path:'our-values',
  component:OurValuesComponent
 },
{
  path:'who-we-are',
  component:WhoWeAreComponent
},
{
  path:'our-values',
  component:OurValuesComponent
}
];
