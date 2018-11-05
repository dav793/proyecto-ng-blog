import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostViewComponent } from './post-view/post-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PostViewComponent],
  exports: [PostViewComponent]
})
export class PostModule { }
