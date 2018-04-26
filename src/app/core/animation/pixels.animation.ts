import * as $ from 'jquery';
import { TweenLite, TimelineLite, Back } from 'gsap';

const timeAnim = 10;
let rev = false;

this.timerFadeBg = null;

const BackgroundAnimation = {
  init: () => {
    this[`tl1`] = new TimelineLite();
    this[`tl2`] = new TimelineLite();
    this[`tl3`] = new TimelineLite();
    this[`tl4`] = new TimelineLite();
    this[`tl5`] = new TimelineLite();
    this[`tl6`] = new TimelineLite();

    this[`tl1`].to('#bgPixel1', timeAnim, {left: 200});
    this[`tl2`].to('#bgPixel2', timeAnim, {left: '60%'});
    this[`tl3`].to('#bgPixel3', timeAnim, {left: '0%'});
    this[`tl4`].to('#bgPixel4', timeAnim, {left: '0%'});
    this[`tl5`].to('#bgPixel5', timeAnim, {left: '-20%'});
    this[`tl6`].to('#bgPixel6', timeAnim, {left: '70%'});

    this[`tl1`].pause();
    this[`tl2`].pause();
    this[`tl3`].pause();
    this[`tl4`].pause();
    this[`tl5`].pause();
    this[`tl6`].pause();
  },
  start: () => {
    if (this[`tl1`].time() === timeAnim) {
      rev = true;
    }
    if (this[`tl1`].time() === 0) {
      rev = false;
    }

    if (rev) {
      this[`tl1`].reverse();
      this[`tl2`].reverse();
      this[`tl3`].reverse();
      this[`tl4`].reverse();
      this[`tl5`].reverse();
      this[`tl6`].reverse();
    } else {
      this[`tl1`].play();
      this[`tl2`].play();
      this[`tl3`].play();
      this[`tl4`].play();
      this[`tl5`].play();
      this[`tl6`].play();
    }
  },
  stop: () => {
    this[`tl1`].stop();
    this[`tl2`].stop();
    this[`tl3`].stop();
    this[`tl4`].stop();
    this[`tl5`].stop();
    this[`tl6`].stop();
  }
};

export { BackgroundAnimation };
