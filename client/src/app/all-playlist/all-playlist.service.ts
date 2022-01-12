import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoaderService } from '../loader/loader.service';
import { CategoryModel } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class AllPlaylistService {
  catsChange = new Subject<CategoryModel[]>();

  catEdit = new Subject<CategoryModel>();

  showFormCat = new BehaviorSubject<boolean>(false);

  categories: CategoryModel[] = [];
  constructor(private http: HttpClient, private route: Router, private loaderService:LoaderService) { }

  addCategory(cat:CategoryModel){
    this.loaderService.loading.next(true);
    this.http.post(`${environment.apiUrl}/cat/add`,cat).subscribe(res => {
      console.log(res);
      console.log(res['title']);
      const newCat:CategoryModel = new CategoryModel(res['title'], res['description'], res["userID"], res["_id"]);
      this.categories.push(newCat);
      this.catsChange.next(this.categories.slice());
      this.loaderService.loading.next(false);
    })
  }

  loadCategories(){
    this.loaderService.loading.next(true);
    this.http.get(`${environment.apiUrl}/cat/get`).subscribe(res => {
      console.log('res from load', res);
      this.categories = [];
      for(let i = 0; i < res['length']; i++){
        this.categories.push(res[i]);
      }
      this.catsChange.next(this.categories.slice());
      this.loaderService.loading.next(false);
    })
  }

  getCategory(id:string){
    return [...this.categories].filter(cat => cat['_id'] == id);
  }

  deleteCategory(id:string){
    this.loaderService.loading.next(true);
    this.http.delete(`${environment.apiUrl}/cat/delete/${id}`).subscribe(res => {
      console.log(res);
      const cats = [...this.categories].filter(cat => cat["_id"] !== id);
      this.categories = cats;
      this.catsChange.next(this.categories.slice());
      this.loaderService.loading.next(false);
      this.route.navigateByUrl('/');
    })
  }

  editCategory(cat: CategoryModel){
    this.catEdit.next(cat);
  }

  updateCategory(cat: CategoryModel){
    console.log("cat from service updateCategory",cat)
    this.loaderService.loading.next(true);
    this.http.put(`${environment.apiUrl}/cat/update`, cat).subscribe(res => {
      console.log(res);
      const updatedCats = [...this.categories].filter(c => c["_id"] == cat["_id"] ? cat : c);
      this.categories = updatedCats;
      this.catsChange.next(this.categories.slice());
      this.loaderService.loading.next(false);
    })
  }

}
