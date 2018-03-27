import * as $ from 'jquery';
import { TweenLite, TimelineLite, Back } from 'gsap';

const resetLogoStyle = () => {
    TweenLite.set( this.getCenterPixel, {scale: 0, rotation: 0} );
    TweenLite.set( this.getTags, {scale: 0, opacity: 0, x: '-10%'} );
    TweenLite.set( this.getPixelback, {scale: 0, rotation: 0, opacity: 0} );
    if (this[`showText_${this.elementId}`] === 'true') {
      TweenLite.set( this.getText, {opacity: 0, top: '100%'} );
      TweenLite.set( this.getSubText, {opacity: 0, top: '1000%'} );
    }
};

const pixelShine = () => {
  // PixelBack Shine
  this[`tl2${this.elementId}`].staggerTo( this.getPixelbackColor, 2, {
    ease: this.easeEff2,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    repeat: 20,
    repeatDelay: 5
  }, .05);
  this[`tl3${this.elementId}`].staggerTo( this.getPixelbackColor, 2, {
    ease: this.easeEff2,
    backgroundColor: 'rgba(46, 70, 92, 0.28)',
    borderColor: 'rgba(46, 70, 92, 0.35)',
    delay: 1.5,
    repeat: 20,
    repeatDelay: 5
  }, .05);
};


const LogoAnimation = {
  init: (logoElement, duration = 1, showText) => {
    this.elementId                     = logoElement;
    this.easeEff                       = Back.easeOut.config(2);
    this.easeEff2                      = Back.easeInOut.config(2);
    this.getLogoBase                   = $(`#${this.elementId}`);
    this.getCenterPixel                = $(`#${this.elementId} ._logo_center_pixel`);
    this.getTagLeft                    = $(`#${this.elementId} ._logo_tag_left`);
    this.getTagRight                   = $(`#${this.elementId} ._logo_tag_right`);
    this.getTags                       = $(`#${this.elementId} ._logo_tag_left, #${this.elementId} ._logo_tag_right`);
    this.getText                       = $(`#${this.elementId} ._logo_text`);
    this.getSubText                    = $(`#${this.elementId} ._logo_subtext`);
    this.getPixelback                  = $(`#${this.elementId} ._logo_pixel_back`);
    this.getPixelbackColor             = $(`#${this.elementId} ._logo_pixel_back ._logo_pixel_back_color`);
    this[`tl${this.elementId}`]        = new TimelineLite();
    this[`tl2${this.elementId}`]       = new TimelineLite();
    this[`tl3${this.elementId}`]       = new TimelineLite();
    this[`duration_${this.elementId}`] = duration;
    this[`showText_${this.elementId}`] = showText;

    // Pause
    this[`tl${this.elementId}`].pause();

    if (!this.animationProgress) {
      this.animationProgress = true;

      // Center Animation
      this[`tl${this.elementId}`].to( this.getCenterPixel, this[`duration_${this.elementId}`], {
        ease: this.easeEff, scale: 1, rotation: '315'
      });

      // Tags Animation
      this[`tl${this.elementId}`].to( this.getTags, this[`duration_${this.elementId}`], {
        ease: this.easeEff, scale: 1, opacity: 1, x: '0%'
      }, '-=0.5');

      // PixelBack Animation
      this[`tl${this.elementId}`].staggerTo( this.getPixelback, this[`duration_${this.elementId}`], {
        ease: this.easeEff2, scale: 1, opacity: 1, rotation: '135'}, .05, '-=0.8');

      // Text Animation
      if (this[`showText_${this.elementId}`] === 'true') {
        this[`tl${this.elementId}`].to( this.getText, this[`duration_${this.elementId}`], {opacity: 1, top: '410%'}, '-=0.5');
        this[`tl${this.elementId}`].to( this.getSubText, this[`duration_${this.elementId}`], {opacity: 1, top: '1330%', onComplete: () => {
          pixelShine();
        }}, '-=0.5');
      }

      // Ended animation Progress
      this.animationProgress = false;

    }
  },
  show: () => {
    resetLogoStyle();
    TweenLite.to(this.getLogoBase, 0, {opacity: 1});
    if (this.animationInit) {
      this[`tl${this.elementId}`].restart();
    } else {
      this[`tl${this.elementId}`].play();
      this.animationInit = true;
    }
  },
  hide: () => {
    if (this.animationInit) {
      TweenLite.to(this.getLogoBase, 1, {opacity: 0});
    }
  }
};

export { LogoAnimation };
