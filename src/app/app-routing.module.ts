import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SamplePageComponent } from './pages/sample-page/sample-page.component';
import { Sample2PageComponent } from './pages/sample2-page/sample2-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'sample'},
  {path: 'sample', component: SamplePageComponent},
  {path: 'sample2', component: Sample2PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
