import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';

import { PostViewComponent } from './post-view/post-view.component';
import { ListadoPostComponent } from './listado-post/listado-post.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    QuillModule
  ],
  declarations: [PostViewComponent, ListadoPostComponent],
  exports: [PostViewComponent]
})
export class PostModule { }
