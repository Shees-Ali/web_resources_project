import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ResourceComponent } from './components/resource/resource.component';
import { LinksComponent } from './components/links/links.component';
import { BookComponent } from './components/book/book.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: 'main', component:MainComponent},
  { path: 'resource', component: ResourceComponent},
  { path: 'links', component:LinksComponent },
  { path: 'book', component:BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
