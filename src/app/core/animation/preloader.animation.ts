import * as $ from 'jquery';
import { TweenLite, TimelineLite, Back } from 'gsap';

const easeEffOpen  = Back.easeIn.config(0);
const easeEffClose = Back.easeOut.config(0);
// let countPreloader = 1;

const Preloader = {
  open: ({...opt}) => {
    const options = opt;
    TweenLite.to('._preloader_door_top', 1.6, {
      ease:  easeEffOpen, delay: .5,
      bottom: '250%', onComplete: () => {

        $('._preloader_main').hide();

        // Action after open
        if ( opt.action ) {
          options.action();
        }

    }});
    TweenLite.to('._preloader_door_bottom', 1.6, { ease:  easeEffOpen, top: '250%', delay: .5});
  },


  close: ({...opt}) => {
    const options = opt;

    if (options.currentSection === '/') {

      // Hide Logo
      $('#cip_logo_home').fadeOut('fast', () => {
        // Show Preloader
        $('._preloader_main').show();

        TweenLite.to('._preloader_door_top', 1.6, {
          ease: easeEffClose,
          bottom: '49.9%', onComplete: () => {

            // Action after close
            if ( opt.action ) {
              options.action();
            }

        }});
        TweenLite.to('._preloader_door_bottom', 1.6, { ease: easeEffClose, top: '49.94%'});
      });

    } else {

        // Show Preloader
        $('._preloader_main').show();

        TweenLite.to('._preloader_door_top', 1.6, {
          ease: easeEffClose,
          bottom: '49.9%', onComplete: () => {

            // Action after close
            if ( opt.action ) {
              options.action();
            }

        }});
        TweenLite.to('._preloader_door_bottom', 1.6, { ease: easeEffClose, top: '49.94%'});
    }

  }
};

export { Preloader };
