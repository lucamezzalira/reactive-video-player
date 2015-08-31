export class PlaylistService {
  constructor() {
  }

  getData(){
    const URL = "http://192.168.0.5:3000/playlist";

    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.status === 200 && this.response !== "") {
                resolve(JSON.parse(this.response));
            }
        }
        request.onerror = function () {
            reject(new Error('XMLHttpRequest Error: ' + this.statusText));
        };

        request.open('GET', URL);
        request.send();
    });
  }
}
