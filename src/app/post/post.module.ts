import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

import { PostViewComponent } from './post-view/post-view.component';
import { EscapeHtmlPipe } from '../shared/pipes/escape-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule
  ],
  declarations: [
    PostViewComponent,
    EscapeHtmlPipe
  ],
  exports: [PostViewComponent]
})
export class PostModule { }
