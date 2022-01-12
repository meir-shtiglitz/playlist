import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoaderService } from '../loader/loader.service';
import { SongModel } from './song.model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient, private loaderService: LoaderService) { }
  playChange = new Subject<SongModel[]>();
  playlist: SongModel[]=[];

  async loadPlaylist(_id: string) {
    setTimeout(()=> this.loaderService.loading.next(true),0) ;
    try{
    const res = await this.http.get(`${environment.apiUrl}/songs/get`, { params: new HttpParams().set("_id", _id) }).toPromise();
    
    this.loaderService.loading.next(false);
    console.log("res from get songs", res);
    let songs = [];
    for (let s = 0; s < res["length"]; s++) {
      songs.push(res[s]);
    }
    this.playlist = songs;
    this.playChange.next(songs);
    return 'go';
  } catch(error){
    this.loaderService.loading.next(false);
    console.log("error from loadPlaylist in playlistService", error.error)
  }
    
  }
  
  getSongs() {
    return [...this.playlist];
  }
  
  addSong(newSong: SongModel) {
    newSong["_id"] = newSong["catID"];
    console.log("newSong from playlist service", newSong);
    this.loaderService.loading.next(true);
    this.http.post(`${environment.apiUrl}/songs/add`, newSong).subscribe(res => {
      console.log(res);
      const pushSong = new SongModel(res['title'], res['description'], res['imgUrl'], res['publish'], res['src'], res['catID'], res['_id']);
      this.playlist.push(pushSong);
      this.playChange.next(this.playlist);
      this.loaderService.loading.next(false);
    })
  }
  
  deleteSong(songID: string) {
    this.loaderService.loading.next(true);
    this.http.delete(`${environment.apiUrl}/songs/delete/${this.playlist[0]["catID"]}/${songID}`).subscribe(res => {
      console.log(res);
      console.log('songs filter');
      const songs = [...this.playlist].filter(song => song['_id'] !== songID);
      console.log('songs filter', songs);
      this.playlist = songs;
      this.playChange.next(songs);
      this.loaderService.loading.next(false);
    })
  }
  
  deleteSongBySrc(src: string) {
    const songID = [...this.playlist].filter(song => song.src == src)[0]._id;
    this.deleteSong(songID);
    // this.loaderService.loading.next(true);
    // this.http.delete(`${environment.apiUrl}/songs/delete/${this.playlist[0]["catID"]}/${songID}`).subscribe(res => {
    //   console.log(res);
    //   console.log('songs filter');
    //   const songs = [...this.playlist].filter(song => song['_id'] !== songID);
    //   console.log('songs filter', songs);
    //   this.playlist = songs;
    //   this.playChange.next(songs);
    //   this.loaderService.loading.next(false);
    // })
  }

}
