import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../playlist/playlist.service';
import { SongModel } from '../playlist/song.model';
import { YoutubeService } from '../playlist/youtube.service';

@Component({
  selector: 'app-search-song',
  templateUrl: './search-song.component.html',
  styleUrls: ['./search-song.component.css']
})
export class SearchSongComponent implements OnInit {

  constructor(private tubeSrvice: YoutubeService, private activatedRoute: ActivatedRoute, private playService: PlaylistService) { }
  catID: string;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.catID = params._id;
      this.videos = [];
      this.searchValue = '';
    })
  }

  videos: SongModel[] = [];

  searchValue: string = '';
  resultLength: number = 10;

  async searchSubmit() {
      const resVideo = await this.tubeSrvice.getFromYoutube(this.searchValue, this.resultLength, this.catID);
      console.log('resVideo',resVideo);
      this.videos = resVideo;
  }

  moreResults() {
    this.resultLength += 10;
    this.searchSubmit();
  }

  addToPlaylist(song: any) {
    const newSong = new SongModel(song.title, song.description, song.imgUrl, song.publish, song.src, song.catID, song._id);
    console.log(newSong);
    this.playService.addSong(newSong);
  }

  notExist(src: string) {
    const exist = this.playService.getSongs().filter(song => song['src'] == src);
    return exist.length > 0 ? false : true;
  }

  deleteSong(src:string){
    this.playService.deleteSongBySrc(src);
  }

  closeTubeResult(){
    this.videos = [];
    this.searchValue = '';
  }

}
