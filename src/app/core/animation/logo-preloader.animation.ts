import * as $ from 'jquery';
import { TweenLite, TimelineLite, Back,  Power3 } from 'gsap';

let repeatAnimation = null;
let isPause = false;

const animaTag = (type) => {
  if (type === 'in') {
    this[`tl${this.elementId}`].to( `#${this.elementId} ._logo_tag_left`, this[`duration_${this.elementId}`], {
      ease: this.easeEff, x: '-40%'});

    this[`tl${this.elementId}`].to( `#${this.elementId} ._logo_tag_right`, this[`duration_${this.elementId}`], {
      ease: this.easeEff, x: '40%', onComplete: () => {
      }}, '-=0.8');
  }
  if (type === 'out') {
    this[`tl${this.elementId}`].to( `#${this.elementId} ._logo_tag_left`, this[`duration_${this.elementId}`], {
      ease: this.easeEff2, x: '0%'});

    this[`tl${this.elementId}`].to( `#${this.elementId} ._logo_tag_right`, this[`duration_${this.elementId}`], {
      ease: this.easeEff2, x: '0%'}, '-=0.7');
  }
};

const animaPixel = () => {
  this[`tl2${this.elementId}`].to( this.getCenterPixel, .7, {
    ease: this.easeEff3, rotation: 855, onStart: () => {
      animaTag('in');
      setTimeout(() => {
        animaTag('out');
      }, 100);
    }, onComplete: () => {
      if (isPause) {
        this[`tl2${this.elementId}`].pause();
        isPause = false;
      }
    }});
};

const LogoPreloderAnimation = {
  init: (logoElement, duration = 1) => {

    this.elementId = logoElement;
    this.easeEff = Power3.easeOut;
    this.easeEff2 = Back.easeInOut;
    this.easeEff3 = Back.easeOut.config(2);
    this.getCenterPixel = `#${this.elementId} ._logo_center_pixel`;
    this[`tl${this.elementId}`] = new TimelineLite();
    this[`tl${this.elementId}`] = new TimelineLite();
    this[`tl2${this.elementId}`] = new TimelineLite();
    this[`tl3${this.elementId}`] = new TimelineLite();
    this[`duration_${this.elementId}`] = duration;

    // Pause
    animaPixel();
    this[`tl2${this.elementId}`].pause();
  },

  play: () => {
    repeatAnimation = setInterval(() => {
      if (this.animationInit) {
        this[`tl2${this.elementId}`].restart();
      } else {
        this[`tl2${this.elementId}`].play();
        this.animationInit = true;
      }
    }, 1400);
  },

  stop: () => {
    clearInterval(repeatAnimation);
    repeatAnimation = null;
    isPause = true;
  }
};

export { LogoPreloderAnimation };
