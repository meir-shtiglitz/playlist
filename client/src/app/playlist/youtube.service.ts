import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoaderService } from '../loader/loader.service';
import { SongModel } from './song.model';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http:HttpClient, private loaderService:LoaderService) { }
  
  videos:SongModel[] = [];

  KEY: string = environment.youtubeApiKey;

  searchValue: string = '';
  async getFromYoutube(keyWord:string, limit:number, catID:string){
      this.loaderService.loading.next(true);
      const res = await this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${keyWord}&type=video&maxResults=${limit}&key=${this.KEY}`).toPromise();
      console.log("res",res);
      this.videos = res['items'].map(item => ( new SongModel( item.snippet.title, item.snippet.description, item.snippet.thumbnails.default.url, item.snippet.publishedAt, item.id.videoId, catID, '')));
      this.loaderService.loading.next(false);
      return this.videos;
  }

}
