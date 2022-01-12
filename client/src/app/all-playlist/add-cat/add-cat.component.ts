import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AllPlaylistService } from '../all-playlist.service';
import { CategoryModel } from '../category.model';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent implements OnInit {
  @ViewChild("refFC") refFC: NgForm;

  catEditing:CategoryModel;

  updateStatus:boolean = false;

  title: string;
  description: string;

  constructor(private allPService: AllPlaylistService) { }

  ngOnInit() {
    this.allPService.catEdit.subscribe(cat => {
      console.log('cat to edit from add cat' , cat);
      this.updateStatus = true;
      this.catEditing = cat;
      this.title = cat['title'];
      console.log("this.title" , this.title);
      console.log("cat['title']" , cat['title']);
      this.description = cat['description'];
    })
  }

  cancel(){
    this.updateStatus = false;
    this.allPService.showFormCat.next(false);
    this.refFC.reset();
  }

  submitFormCat(fCat: HTMLFormElement){
    console.log(this.title);
    console.log(fCat.value);
    if(this.updateStatus){
      this.catEditing["title"] = this.title;
      this.catEditing["description"] = this.description;
      const newCat = this.catEditing;
      this.allPService.updateCategory(newCat);
    } else{
      const newCat = new CategoryModel(this.title, this.description,'','');
      this.allPService.addCategory(newCat);
    }
    this.cancel();
  }

}
