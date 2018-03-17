import * as $ from 'jquery';
import { TweenLite, TimelineLite, Back } from 'gsap';

let getShowText,
    getDuration,
    getLogoBase,
    getCenterPixel,
    getTagLeft,
    getTagRight,
    getTags,
    getText,
    getSubText,
    getPixelback,
    getPixelbackColor,
    animationProgress = false,
    animationInit     = false;

// GSPA Init
const tl0      = new TimelineLite(),
      tl1      = new TimelineLite(),
      tl2      = new TimelineLite(),
      tl3      = new TimelineLite(),
      tl4      = new TimelineLite(),
      tl5      = new TimelineLite(),
      tl6      = new TimelineLite(),
      tl7      = new TimelineLite(),
      easeEff  = Back.easeOut.config(2),
      easeEff2 = Back.easeInOut.config(2);

// Reset logo
const resetLogo = () => {
  tl0.set(getLogoBase, {opcity: 0});
  tl1.set(getCenterPixel, {scale: 0, rotation: 0});
  tl2.set( getTags, {scale: 0, opacity: 0, x: '-10%'});
  tl3.set( getPixelback, {scale: 0, rotation: 0, opacity: 0});
  tl4.set( getText, {opacity: 0, top: '100%'});
  tl5.set( getSubText, {opacity: 0, top: '1000%'});
};

// Logo Init
const LogoAnimation = (logoElement, duration = 1, showText) => {
  getShowText       = showText;
  getLogoBase       = $(`#${logoElement}`);
  getCenterPixel    = $(`#${logoElement} ._logo_pixel_center`);
  getTagLeft        = $(`#${logoElement} ._logo_tag_left`);
  getTagRight       = $(`#${logoElement} ._logo_tag_right`);
  getTags           = $(`#${logoElement} ._logo_tag_left, #${logoElement} ._logo_tag_right`);
  getText           = $(`#${logoElement} ._logo_text`);
  getSubText        = $(`#${logoElement} ._logo_subtext`);
  getPixelback      = $(`#${logoElement} ._logo_pixel_back`);
  getPixelbackColor = $(`#${logoElement} ._logo_pixel_back ._logo_pixel_back_color`);
  getDuration       = duration;

 // Init
 resetLogo();
 tl0.pause();
 tl1.pause();
 tl2.pause();
 tl3.pause();
 tl4.pause();
 tl5.pause();
};

const pixelShine = () => {
  // PixelBack Shine
  tl6.staggerTo( getPixelbackColor, 2, {
    ease: easeEff2,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    repeat: 10,
    repeatDelay: 5
  }, .05);
  tl7.staggerTo( getPixelbackColor, 2, {
    ease: easeEff2,
    backgroundColor: 'rgba(46, 70, 92, 0.28)',
    borderColor: 'rgba(46, 70, 92, 0.35)',
    delay: 1.5,
    repeat: 10,
    repeatDelay: 5
  }, .05);
};

LogoAnimation.prototype.show = () => {
  if (!animationProgress) {

    animationProgress = true;

    tl0.to(getLogoBase, 0, {opacity: 1, onComplete: () => {
      // Center Animation
      tl1.to( getCenterPixel, getDuration, {ease: easeEff, scale: 1, rotation: '315'});

      // Tags Animation
      tl2.to( getTags, 1, {ease: easeEff, scale: 1, opacity: 1, x: '0%', delay: getDuration / 2});

      // PixelBack Animation
      tl3.staggerTo( getPixelback, 1, {ease: easeEff2, scale: 1, opacity: 1, rotation: '135', delay: getDuration / 3}, .05);

      // Text Animation
      if (getShowText === 'true') {
        tl4.to( getText, 1, {opacity: 1, top: '410%', delay: getDuration / 2});
        tl5.to( getSubText, 1, {opacity: 1, top: '1330%', delay: getDuration, onComplete: () => {
          pixelShine();
        }});
      }

    // Ended animation Progress
    animationProgress = false;
    }});
  }
  if (animationInit) {
    tl1.restart();
    tl2.restart();
    tl3.restart();
    tl4.restart();
    tl5.restart();
  } else {
    animationInit = true;
    tl0.play();
    tl1.play();
    tl2.play();
    tl3.play();
    tl4.play();
    tl5.play();
  }
};

LogoAnimation.prototype.hide = () => {
  tl0.to(getLogoBase, .5, {opacity: 0});
};


export { LogoAnimation };
