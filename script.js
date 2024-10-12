function isAndroid() {
  return /Android/i.test(navigator.userAgent);
}

class Track {
  constructor(name, tidalId, spotifyId) {
    this.name = name;
    this.providers = {
      tidal: {
        desktop: "https://listen.tidal.com/track/" + tidalId,
        android: "tidal://track/" + tidalId
      },
      spotify: {
        desktop: "https://open.spotify.com/track/" + spotifyId,
        android: "spotify:track:" + spotifyId + ":play"
      },
      multi: {
        desktop: "https://tidal.com/browse/track/" + tidalId + "/u",
        android: "https://tidal.com/browse/track/" + tidalId + "/u"
      }
    };
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
    let provider = (query == "spotify" || query=="multi") ? query : "tidal";
    let platform = isAndroid() ? "android" : "desktop";
    let url = this.randomTrack().getUrl(provider, platform);
    window.open(url, "_blank").focus();
  }
}

const aj = new Playlist([
  new Track("Neil Young - Into the Black", "49651365", "0yjhcB1fBuZ9SN7nn4mVB2"),
  new Track("The Stooges - Search and Destroy", "1304594", "1VbzG7zcqQNpeTbNxVaCFX"),
  new Track("Ramones - I Wanna Be Sedated", "68698733", "3KEnNpr0f3rVITZ4eKZBOF"),
  new Track("The Clash - London Calling", "21785494", "5jzma6gCzYtKB1DbEwFZKH"),
  new Track("Midnight Oil - Beds Are Burning", "11344011", "3ICcDXguES7W7ccKsuu2JM"),
  new Track("Peter Gabriel - Steam", "122120454", "4x8g2OO1JhtmZz6psVAEOH"),
  new Track("Fleetwood Mac - Dreams", "18676717", "5TDZyWDfbQFQJabbPwImVY"),
  new Track("The Bangles - Manic Monday", "1273660", "5KYoPa5akZxiCn38xelbqI"),
  new Track("Ace of Base - All That She Wants", "38963629", "2pMrptw5lkxCWKAIuUgGZt"),
  new Track("Shakespears Sister - Hello (Turn Your Radio On)", "82527537", "28CbxqvoML43nJMU68VPx1"),
  new Track("Teya Dora - Džanum", "308715957", "6R0jwOnMzRwYI9DhUM1sJv"),
  new Track("Jorane - Film III", "21588061", "7hL7bOZPQKHpInerzKGuir"),
  new Track("Les Deux Love Orchestra - The Moth & The Flame", "66164398", "6NpzkIYecTgirnDViWoisp"),
  new Track("TOOL - Schism", "114330490", "55mJleti2WfWEFNFcBduhc"),
  new Track("Foo Fighters - The Pretender", "3146736", "4s21kykbRq9sGQsEXN49Q0"),
  new Track("Auf Der Maur - Lightning Is My Girl", "628645", "4Jhl1ZuAknfhD6WHR4EQ1S"),
  new Track("Stereophonics - Maybe Tomorrow", "3953868", "6SXy02aTZU3ysoGUixYCz0"),
  new Track("Travis - Why Does It Always Rain On Me?", "106823597", "2Dy3988rJEhgF6hhbo3TUh"),
  new Track("Yann Tiersen - La Valse d'Amélie (Version Piano)", "188642751", "6bpmBNPfQ2KFAW0ik6F9Vq"),
  new Track("Philip Glass - Metamorphosis: One", "1877441", "3ETT2JGTPOTesR9kLDKfgI"),
  new Track("Wim Mertens - Struggle for Pleasure", "38912480", "7zFovryAx4THLvSRUtYkEN"),
  new Track("Nils Frahm - Says", "103387145", "5626KdflSKfeDK7RJQfSrE"),
  new Track("Dan Tyminski - Hey Brother", "298113582", "0HmmGtJzwfqvpKW0ixeapq"),
  new Track("Hozier - Take Me To Church", "52892100", "3dYD57lRAUcMHufyqn9GcI"),
  new Track("Pink Floyd - Wish You Were Here", "7909705", "6mFkJmJqdDVQ1REhVfGgd1"),
  new Track("Nine Inch Nails - A Warm Place", "637218", "5NCX1f3TdiQCuxCLIORAe7"),
  new Track("Ibrahim Maalouf - Red & Black Light", "51684492", "6cgH0eZr4yUwlmuf299iim"),
  new Track("Kælan Mikla - Hvítir Sandar", "197662008", "32B4DCTnt8bBJWeLJzseCM"),
  new Track("The Avener - Fade Out Lines", "77780914", "4NZJZkYD33ubD7Iv7t3Mdq"),
  new Track("Nine Inch Nails - Right Where It Belongs", "34737516", "586rOcAzOHkpJTA4POqO2c"),
  new Track("The Last Dinner Party - Nothing Matters", "288806881", "7A1c10w4jZOFWlQw32GbMo"),
  new Track("Lorde - Everybody Wants To Rule The World", "23564771", "7b4T4jjKiEDRpD8cM29sij"),
  new Track("Ednaswap - Torn", "36327049", "3Ko0HG4tuWVE7Q9do59z4m"),
  new Track("Lis Sørensen - Brændt ", "23235355", "3kEryqVt2S7aq6RM7lgR2s"),
  new Track("Wye Oak - Civilian", "37265508", "3wqMCDKWWYHnPLldMskKHe"),
  new Track("Chromatics - Into The Black", "131334629", "2A6kF8nb0GuwxrMMrKsvtJ"),
  new Track("Placebo - Follow the Cops Back Home", "246046700", "4xQ5JVqDgp3vfo5csRicvF"),
  new Track("Ludovico Einaudi - Einaudi: Experience", "23319147", "6eWKf639gKufnnbu9GKFd8"),
  new Track("Biffy Clyro - Bubbles", "3180427", "41CZarbx8MtXKEgcB8tk7R"),
  new Track("Daughter - New Ways", "38963629", "6kFFYhsCqdUki4f8ohFeLI"),
  new Track("Daughter - Numbers", "58082968", "5dGg0Wf5tKM1D3R6Rr4xlK"),
  new Track("Low - Lullaby", "1346075", "1De66xUavye2fNqhCwtgyo"),
  new Track("Michael Kiwanuka - Love & Hate", "62786954", "7oOEFDLSQscl0uGulnIEmG"),
  new Track("Nine Inch Nails - The Perfect Drug", "94442112", "14tKBoKXxGakkoEmYuFfor"),
  new Track("Twin Shadows - Five Seconds", "15427705", "61f7YLWbVgGfCfbROgWiqR"),
  new Track("AWOLNATION - Sail", "37352999", "7ueP5u2qkdZbIPN2YA6LR0"),
  new Track("Pharrell Williams - Happy", "77440246", "60nZcImufyMA1MKQY3dcCH"),
  new Track("Lily Allen - Fuck You", "3237059", "3ZhLeIbuUTR10WTljA972g"), // 2024-10-11
  //new Track("name", "tidalId", "spotifyId"),
]);

async function testUrls() {
  for (let i = 0; i < aj.tracks.length; i++) {
    window.open(aj.tracks[i].getUrl("tidal", "desktop"), "_blank");
    await new Promise(res => setTimeout(res, 1000))
  }
}
// testUrls();
