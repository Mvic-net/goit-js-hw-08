import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const onPlay = function (data) {
  localStorage.setItem('TYME-TO-PLAY', JSON.stringify(data.seconds));
  // console.log(data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

let startTime = 0;

startTime = JSON.parse(localStorage.getItem('TYME-TO-PLAY'));
console.log(startTime);

player.setCurrentTime(startTime).then(function () {
  player.play();
});
