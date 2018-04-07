import * as $ from 'jquery';
import { TweenLite, TimelineLite, Back } from 'gsap';
import { LogoAnimation } from '../animation/logo.animation';

const easeEffOpen  = Back.easeIn.config(0);
const easeEffClose = Back.easeOut.config(0);
// let countPreloader = 1;

const Preloader = {
  open: ({...opt}) => {
    const options = opt;
    $('._preloader_loader').fadeOut(5, () => {
      TweenLite.to('._preloader_base_line', .7, { ease:  easeEffOpen, width: '100%', opacity: .5, onComplete: () => {

        TweenLite.to('._preloader_door_top', 1, {
          ease:  easeEffOpen, delay: .3,
          bottom: '250%', onComplete: () => {

            $('._preloader_main').hide();

            // Action after open
            if ( opt.action ) {
              options.action();
            }

        }});
        TweenLite.to('._preloader_door_bottom', 1, { ease:  easeEffOpen, top: '250%', delay: .3});

      }});
    });

  },


  close: ({...opt}) => {
    const options = opt;

    if (options.currentSection === '/') {
      LogoAnimation.shine('stop');
    }

    $('._preloader_main').show();

    TweenLite.to('._preloader_door_top', 1, {
      ease: easeEffClose,
      bottom: '49.9%', onComplete: () => {

        TweenLite.to('._preloader_base_line', .7, { ease:  easeEffOpen, width: '0%', opacity: 0, onComplete: () => {
          $('._preloader_loader').fadeIn(5, () => {
            // Action after close
            if ( opt.action ) {
              options.action();
            }
          });
        }});


    }});
    TweenLite.to('._preloader_door_bottom', 1, { ease: easeEffClose, top: '49.94%'});
  },


  fadeIn: () => {

  },


  fadeOut: () => {

  }
};

export { Preloader };
