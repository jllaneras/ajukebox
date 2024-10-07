var tracks = [
  {
    "tidalId": "131334629"
  }
];


function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function play() {
    var url = "https://tidal.com/browse/track/"
    if (isMobileDevice()) {
        url = "tidal://track/"
    }
    url = url + tracks[0]["tidalId"];
    window.open(url, "_blank").focus();
}

