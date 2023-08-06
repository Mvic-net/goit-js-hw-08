import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const onPlay = function (data) {
  localStorage.setItem('TYME-TO-PLAY', JSON.stringify(data.seconds));
};

player.on('timeupdate', throttle(onPlay, 1000));

let startTime = JSON.parse(localStorage.getItem('TYME-TO-PLAY'));

player.setCurrentTime(startTime || 0);
