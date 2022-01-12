import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllPlaylistService } from '../all-playlist/all-playlist.service';
import { CategoryModel } from '../all-playlist/category.model';
import { IsAdminRouteGuardService } from '../routes-guard/is-admin-route-guard.service';
import { PlaylistService } from './playlist.service';
import { SongModel } from './song.model';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  songs: SongModel[];
  constructor(private Aroute: ActivatedRoute, private allPS:AllPlaylistService, private isAdmin:IsAdminRouteGuardService, private playService: PlaylistService) { }
  src:string = ``;

  playlistID:string;

  playlistDetails: CategoryModel = new CategoryModel('','','','');
  
  ngOnInit(): void {
    this.Aroute.params.subscribe(async (params) => {
      console.log("params._id",params._id);
      this.songs = [];
      this.src = '';
      await this.playService.loadPlaylist(params._id);
      this.playlistID = params._id;
      this.playlistDetails = this.allPS.getCategory(params._id)[0];
      this.isAdmin.isAdmin(this.playlistDetails.userID);
      console.log("category from the playlist component" , this.playlistDetails)
    })

    this.playService.playChange.subscribe(songs => {
      this.songs = songs;
    })


  }

  playAll(){
    const list = [...this.songs].map(song => song.src).join();
    console.log('list of src',list);
    this.src = `https://www.youtube.com/embed/${this.songs[0].src}?playlist=${list}&autoplay=1`;
  }

  
  deleteCat(){
    if(confirm("are you shure? you whant to delete me?")) this.allPS.deleteCategory(this.playlistID);

  }

  editCat(){
    this.allPS.showFormCat.next(true);
    this.allPS.catEdit.next(this.playlistDetails);
  }

  deleteSong(_id:string){
    this.playService.deleteSong(_id);
  }

  play(src:string){
    this.src = `https://www.youtube.com/embed/${src}?autoplay=1`;
  }

}
