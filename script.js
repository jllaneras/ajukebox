function isAndroid() {
  return /Android/i.test(navigator.userAgent);
}

class Track {
  constructor(tidalId, spotifyId, title) {
    this.providers = {
      tidal: {
         browser: "https://listen.tidal.com/track/" + tidalId,
	 app: "tidal://track/" + tidalId
      },
      spotify: {
	 browser: "https://open.spotify.com/track/" + spotifyId,
	 app: "spotify:track:" + spotifyId + ":play"
      }
    };
    this.title = title;
  }
  getUrl(provider, platform) {
    return this.providers[provider][platform];
  }
}

class Playlist {
  constructor(tracks) {
    this.tracks = tracks;
  }
  randomTrack() {
    return this.tracks[Math.floor(Math.random()*this.tracks.length)];
  }
  play() {
    let query = window.location.search.substring(1);
    let provider = (query == "spotify") ? "spotify" : "tidal";
    let platform = isAndroid() ? "app" : "browser";
    let url = this.randomTrack().getUrl(provider, platform);
    window.open(url, "_blank").focus();
  }
}

const playlist = new Playlist([
  new Track("131334629", "2A6kF8nb0GuwxrMMrKsvtJ", "Into the Black"),
  new Track("90410954", "53oc5U2cz4MydANM35abYV", "Darkhorse"),
  new Track("15427705", "6PGToxtt6KrZztJe6j66in", "Five Seconds"),
]);
