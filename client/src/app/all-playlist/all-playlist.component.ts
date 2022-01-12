import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllPlaylistService } from './all-playlist.service';
import { CategoryModel } from './category.model';

@Component({
  selector: 'app-all-playlist',
  templateUrl: './all-playlist.component.html',
  styleUrls: ['./all-playlist.component.css']
})
export class AllPlaylistComponent implements OnInit {
  @HostListener('document:click', ['$event.target'])
  onClick(element: HTMLElement) {
    console.log("element", element)
    if (!element.classList.contains('open') && this.helpShowList) {
      this.showList = false;
    }
  }
 
  constructor(private allPS: AllPlaylistService, private route: Router) { };
  categories: CategoryModel[];

  showFormCat: boolean = false;
  showList: boolean = true;
  helpShowList: boolean = false;


  ngOnInit(): void {
    const initUrl = window.location.href;
    if(initUrl.includes('playlist')){ 
      this.helpShowList = true;
      this.showList = false;
    } else{
      this.helpShowList = false;
      this.showList = true;
    }

    this.route.events.subscribe((params) => {
      const url = window.location.href;
      if(url.includes('playlist')){ 
        this.helpShowList = true;
      } else{
        this.helpShowList = false;
        this.showList = true;
      }
      return;
    })

    this.allPS.loadCategories();

    this.allPS.catsChange.subscribe(cats => {
      console.log('subscribe', cats);
      this.categories = cats;
    });

    this.allPS.showFormCat.subscribe(show => {
      this.showFormCat = show;
    })

  }

  togglePlaylists(){
    if(this.helpShowList) this.showList=!this.showList;
  }
}
