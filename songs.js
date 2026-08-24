/* Songbook.
   offset = how much later the first sung word lands in the instrumental
   than in the lyric video, in seconds. Positive: the instrumental has the
   longer intro and starts first. Negative: the lyric video starts first.
   Both videos always play from their own beginning; nothing is trimmed.
   end (optional): seconds into the instrumental to stop at. */

var SONGS = [
  {
    "title": "Polaroid Love",
    "artist": "ENHYPEN",
    "lyricId": "zVg4HIFVQ2U",
    "instId": "7PvV7EgO__0",
    "offset": -0.7
  },
  {
    "title": "7 Rings",
    "artist": "Ariana Grande",
    "lyricId": "uDAjINEp8H8",
    "instId": "QYh6mYIJG2Y",
    "offset": 0.5
  },
  {
    "title": "Lush Life",
    "artist": "Zara Larsson",
    "lyricId": "ElspqCcCpvY",
    "instId": "tD4HCZe-tew",
    "offset": 1.3
  }
];
