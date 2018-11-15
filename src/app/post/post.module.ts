import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

import { PostViewComponent } from './post-view/post-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuillModule
  ],
  declarations: [PostViewComponent],
  exports: [PostViewComponent]
})
export class PostModule { }
