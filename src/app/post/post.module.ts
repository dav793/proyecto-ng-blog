import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';

import { ListadoPostComponent } from './listado-post/listado-post.component';
import { PostFilterFormComponent } from './post-filter-form/post-filter-form.component';
import { PostThumbnailComponent } from './post-thumbnail/post-thumbnail.component';

import { PostFilterService } from './services/postFilter.service';
import { PostCompleteViewComponent } from './post-complete-view/post-complete-view.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    QuillModule,
    BrowserAnimationsModule
  ],
  declarations: [
    ListadoPostComponent, 
    PostFilterFormComponent,
    PostThumbnailComponent,
    PostCompleteViewComponent
  ],
  exports: [
    ListadoPostComponent
  ],
  providers: [
    PostFilterService
  ]
})
export class PostModule { }
