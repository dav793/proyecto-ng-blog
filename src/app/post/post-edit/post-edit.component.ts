import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { Post, PostFactory } from '../post.model';

import * as moment from 'moment';
import { DataService } from 'src/app/data.service';

import {MatChipInputEvent} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  postId: string;
  post: Post;

  postForm: FormGroup;
  // tagsForm: FormGroup;

  model = PostFactory.CreateDefault();
  preview: boolean;

  actualDate = moment().format('D/MM/YYYY');

  // for the tags
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tagsList = [];
  tagsTest = ['Marvel', 'DC', 'Malabares', 'Celulares', 'Breaking Bad', 'Samsung', 'Iphone'];


  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    if (!this.isCreate) {
      this.postId = this.route.snapshot.paramMap.get('id');
      let singlePost = this.dataService.findById('posts', this.postId);
      this.model = new Post(singlePost);
      this.tagsList = this.model.tags;
    }

    this.postForm = this.createFormWithBuilder(this.model);
    // this.tagsForm = this.createTagsForm(this.tagsList);
  }

  createFormWithBuilder(model: Post): FormGroup {
    const group = this.formBuilder.group({
      title: [this.model.title, [Validators.required, Validators.minLength(3)]],
      date: { value: this.actualDate, disabled: true },
      tags: [this.model.tags, Validators.required],
      body: [this.model.body, [Validators.required]]
    });
    return group;
  }

  // createTagsForm(tags: string[]): FormGroup {
  //   let tagsObj = {};
  //   tags.forEach(tag => {
  //     tagsObj[tag] = [false, []];
  //   });

  //   const group = this.formBuilder.group(tagsObj);
  //   this.watchTagsForm(group);

  //   return group;
  // }

  // watchTagsForm(group: FormGroup) {
  //   let tags = Object.keys(group.controls);

  //   tags.forEach(tag => {
  //     group.get(tag).valueChanges.subscribe(change => {

  //       if (change === true) {    // agregar a tags

  //         let selectedTags = this.selectedTags;
  //         if (selectedTags.indexOf(tag) === -1) {   // no existe interest en elemento del form
  //           selectedTags.push(tag);
  //           this.postForm.get('tags').setValue(selectedTags);
  //         }

  //       }
  //       else {                    // remover de tags

  //         let selectedTags = this.selectedTags;
  //         let tagIndex = selectedTags.indexOf(tag);
  //         if (tagIndex !== -1) {   // existe tag en elemento del form
  //           selectedTags.splice(tagIndex, 1);
  //           this.postForm.get('tags').setValue(selectedTags);
  //         }

  //       }

  //     });
  //   });
  // }

  // get selectedTags(): string[] {
  //   if (!this.postForm)
  //     return null;
  //   return this.postForm.get('tags').value;
  // }

  buttonAction() {

    if (this.isCreate) {
      let newPost = this.dataService.create('posts', this.postForm.value);
      console.log(newPost);
    } else {
      let updatedPost = this.dataService.updateById('posts', this.postId, this.postForm.value);
      console.log(updatedPost);
    }
  }

  get isCreate() {
    let ruta = this.router.url.split('/');

    if (ruta[2] === "create")
      return true;
    else
      return false;
  }

  
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our tag
    if ((value || '').trim()) {
      this.tagsList.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  addInArray(tag: string) {
    // Add our tag
    if ((tag || '').trim()) {
      this.tagsList.push(tag.trim());
    }
  }

  remove(tag: string): void {
    const index = this.tagsList.indexOf(tag);

    if (index >= 0) {
      this.tagsList.splice(index, 1);
    }
  }
}
