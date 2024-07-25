import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { InformationComponent } from './information/information.component';
import { NewsComponent } from './news/news.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainPageComponent
  },
  {
    path: 'information',
    component: InformationComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
