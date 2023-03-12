import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const storageKey = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const throttled = throttle(updatePosition, 1000);

player.on('timeupdate', throttled);

function updatePosition({ seconds }) {
    localStorage.setItem(storageKey, seconds);
};

const videoCurrentTime = localStorage.getItem(storageKey);

if (videoCurrentTime) {
    player.setCurrentTime(videoCurrentTime);
};

