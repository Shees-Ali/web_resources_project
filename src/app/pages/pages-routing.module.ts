import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ResourceComponent } from './resource/resource.component';
import { LinksComponent } from './links/links.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  {path: '',component: MainComponent},
     { path: 'resource', component: ResourceComponent},
  { path: 'links', component:LinksComponent },
  { path: 'book', component:BookComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
