import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';
import { ResourceComponent } from './resource/resource.component';
import { LinksComponent } from '../pages/links/links.component';
import { BookComponent } from './book/book.component';


@NgModule({
  declarations: [
    MainComponent,
     ResourceComponent,
    LinksComponent,
    BookComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PagesRoutingModule],
})
export class PagesModule {}
