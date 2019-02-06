import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { QuillModule } from 'ngx-quill';
import { MaterialPackageModule } from '../material-package/material-package.module';

import { ListadoPostComponent } from './listado-post/listado-post.component';
import { PostFilterFormComponent } from './post-filter-form/post-filter-form.component';
import { PostThumbnailComponent } from './post-thumbnail/post-thumbnail.component';
import { PostEditComponent } from './post-edit/post-edit.component';

import { PostFilterService } from './services/postFilter.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    QuillModule,
    MaterialPackageModule
  ],
  declarations: [
    ListadoPostComponent, 
    PostFilterFormComponent,
    PostThumbnailComponent,
    PostEditComponent
  ],
  exports: [
    ListadoPostComponent,
    PostEditComponent
  ],
  providers: [
    PostFilterService
  ]
})
export class PostModule { }
