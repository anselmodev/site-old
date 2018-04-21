import * as $ from 'jquery';
import { TweenLite, Expo } from 'gsap';

let timerShadow = null;

const ModalAnimation = {
  open: (idModal) => {
    $(`${ idModal }, ${ idModal } ._modal_cip_overlay`).show();
    TweenLite.to('._modal_pixels_item', .8, {
      ease: Expo.easeOut, scale: 1, rotation: 45,
      onStart: () => {
        // Shadow
        clearTimeout(timerShadow);
        timerShadow = setTimeout(() => {
           $(`${ idModal } ._modal_container`).addClass('cip--shadow-z15');
       }, 200);
      },
      onComplete: () => {
        // Show Content
        $(`${ idModal } ._modal_container ._modal_content, ${ idModal } ._modal_container ._modal_btn_close`).show();
      }
      }, 0.05);
  },
  close: (idModal) => {
    // Hide Content
    $(`${ idModal } ._modal_container ._modal_content, ${ idModal } ._modal_container ._modal_btn_close`).hide();

    // Overlay
    setTimeout(() => {
      $(`${ idModal }, ${ idModal } ._modal_cip_overlay`).hide();
    }, 300);

    // Shadow
    clearTimeout(timerShadow);
    $(`${ idModal } ._modal_container`).removeClass('cip--shadow-z15');

    TweenLite.to('._modal_pixels_item', .8, { ease: Expo.easeOut, scale: 0, rotation: 0 }, 0.05);
  }

};

export { ModalAnimation };
