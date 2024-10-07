var tracks = [
  {
    "song": "Into The Black",
    "tidal": "131334629",
    "spotify": "2A6kF8nb0GuwxrMMrKsvtJ"
  }
];


function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function play() {
    // var url = "https://tidal.com/browse/track/"
    var url = "https://open.spotify.com/track/{id}"
    if (isMobileDevice()) {
        // url = "tidal://track/"
	url = "spotify:track:{id}:play"
    }
    // var track = tracks[0]["tidal"];
    var id = tracks[0]["spotify"];
    url = url.replace("{id}", id);
    window.open(url, "_blank").focus();
}

