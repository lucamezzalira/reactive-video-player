import { PlaylistService } from './PlaylistService';

class PlaylistModel {
  constructor(){
    this.loadData();
  }

  loadData(){
    let playlistService = new PlaylistService();
    playlistService.getData().then(this.onResult.bind(this), this.onError.bind(this));
  }

  onError(error){
     console.error('Something went wrong', reason);
  }

  onResult(data){
    console.log("data...", data[0]);
  /*  var opts = data.map(function(data){
      return  <option key={data.url} value={data.url}>{data.title}</option>;
    });

    this._video.src = data[0].url;

    this.setState({
      options: opts,
      isPlayDisabled: true,
      isPauseDisabled: false
    });*/
  }
}
export default PlaylistModel;
