'use strict';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

(() => {
  const player = {
    playerBind: document.querySelector('#vimeo-player'),
    playerInstance: {},
    videoPlayer: {},
    init: function () {
      this.playerInstance = this.playerBind;
      this.videoPlayer = new Player(this.playerInstance);
      const throttled = throttle(data => {
        localStorage.setItem('videoplayer-current-time', data.seconds);
      }, 1000);
      this.videoPlayer.on('timeupdate', function (data) {
        throttled(data);
      });
      this.videoPlayer
        .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
        .then(function (seconds) {
          // seconds = the actual time that the player seeked to
        })
        .catch(function (error) {});
    },
  };
  player.init();
})();

// Zadanie 2 - odtwarzacz wideo
// W HTML znajduje się <iframe> z wideo na Vimeo. Napisz skrypt, który będzie zapisywał aktualny czas odtwarzania wideo w local storage i, podczas przeładowywania strony, kontynuuje odtwarzanie wideo od danego momentu.

// <iframe
//   id="vimeo-player"
//   src="https://player.vimeo.com/video/236203659"
//   width="640"
//   height="360"
//   frameborder="0"
//   allowfullscreen
//   allow="autoplay; encrypted-media"
// ></iframe>

// Wykonuj to zadanie w plikach 02-video.html i 02-video.js. Rozbij je na kilka podzadań:

// - Zapoznaj się z dokumentacją biblioteki odtwarzacza Vimeo. https://github.com/vimeo/player.js/#vimeo-player-api
// - Dodaj bibliotekę jako zależność projektu poprzez npm.
// - Inicjalizuj odtwarzacz w pliku skryptu tak, jak opisano w sekcji pre-existing player, ale weź pod uwagę to, że odtwarzacz dodano jako pakiet npm, a nie poprzez CDN. https://github.com/vimeo/player.js/#pre-existing-player
// - Zbadaj dokumentację metody on() i zacznij śledzić zdarzenie timeupdate - aktualizacja czasu odtwarzania.
// https://github.com/vimeo/player.js/#onevent-string-callback-function-void
// https://github.com/vimeo/player.js/#events
// - Zapisuj czas odtwarzania w local storage. Niech kluczem do storage będzie "videoplayer-current-time".
// - Do przeładowywania strony używaj metody setCurrentTime() aby wznowić odtwarzanie od zapisanego momentu.
// https://github.com/vimeo/player.js/#setcurrenttimeseconds-number-promisenumber-rangeerrorerror

// - Dodaj do projektu bibliotekę lodash.throttle i zrób tak, aby czas odtwarzania aktualizował się w storage nie częściej niż raz na sekundę.
// https://www.npmjs.com/package/lodash.throttle

//Backup tests

// videoPlayer.on('timeupdate', function (data) {
//   // data is an object containing properties specific to that event
//   for (key in data) {
//     console.log(`data.${key}`, data[key]);
//   }
//   localStorage.setItem('videoplayer-current-time', data.seconds);
//   console.log(
//     'in localStorage',
//     localStorage.getItem('videoplayer-current-time')
//   );
//   console.log('----------');
// });
// document.addEventListener(
//   'click',
//   throttle(() => {
//     console.log('Click handler call every 1000ms');
//   }, 1000)
// );
// this.videoPlayer.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
// this.videoPlayer.on('play', function () {
//   console.log('playing...');
// });
// const throttled = throttle(data => {
//   for (let key in data) {
//     console.log(`data.${key}`, data[key]);
//   }
//   localStorage.setItem('videoplayer-current-time', data.seconds);
//   console.log(
//     'in localStorage',
//     localStorage.getItem('videoplayer-current-time')
//   );
// this.videoPlayer
//         .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
//         .then(function (seconds) {
//           // seconds = the actual time that the player seeked to
//         })
//         .catch(function (error) {
//           switch (error.name) {
//             case 'RangeError':
//               // the time was less than 0 or greater than the video’s duration
//               break;
//             default:
//               // some other error occurred
//               //console.log(error);
//               break;
//           }
//         });
