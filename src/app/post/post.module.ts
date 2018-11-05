import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';

import { PostViewComponent } from './post-view/post-view.component';

@NgModule({
  imports: [
    CommonModule,
    QuillModule
  ],
  declarations: [PostViewComponent],
  exports: [PostViewComponent]
})
export class PostModule { }
