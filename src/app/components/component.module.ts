import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ResourceComponent } from './resource/resource.component';
import { LinksComponent } from './links/links.component';
import { BookComponent } from './book/book.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    SideBarComponent,
    ResourceComponent,
    LinksComponent,
    BookComponent,
   
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports: [
    SideBarComponent
  ]
})
export class ComponentModule { }
