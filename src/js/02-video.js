import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const storageKey = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', _.throttle(updatePosition, 1000));

function updatePosition() {
    localStorage.setItem(storageKey);
};

const videoCurrentTime = localStorage.getItem(storageKey);

player.setCurrentTime(videoCurrentTime);


