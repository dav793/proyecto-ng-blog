import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';

import { PostViewComponent } from './post-view/post-view.component';
import { ListadoPostComponent } from './listado-post/listado-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post.component';
import { PostThumbnailComponent } from './post-thumbnail/post-thumbnail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    QuillModule
  ],
  declarations: [PostViewComponent, ListadoPostComponent, EditPostComponent, PostFormComponent, PostComponent, PostThumbnailComponent],
  exports: [PostViewComponent]
})
export class PostModule { }
