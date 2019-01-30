import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-post-complete-view',
  templateUrl: './post-complete-view.component.html',
  styleUrls: ['./post-complete-view.component.css']
})
export class PostCompleteViewComponent {
  @Input() post: Post;
  postAuthor: string;
  postBody: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    // const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    //   width: '250px',
    //   data: { postAuthor: this.post.author, postBody: this.post.body }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }
}
