import * as $ from 'jquery';
import { TweenLite, Back } from 'gsap';

const easeEff  = Back.easeOut.config(2);
let option;

const modalHide = (modalId) => {
  $(`${modalId} ._modal_cip_content`).fadeOut(0, () => {
    TweenLite.to(`${modalId} ._modal_cip_container`, .5, {width: '200px', height: '200px', rotation: '0', onComplete: () => {
      TweenLite.to(`${modalId} ._modal_cip_container`, .5, {width: '0', height: '0', onComplete: () => {
        $(`${modalId}, ${modalId} ._modal_cip_overlay`).hide();
      }});
    }});
  });
};
const modalShow = (modalId) => {
  $(`${modalId}`).fadeIn(0, () => {
    // TweenLite.to(`${modalId} ._modal_cip_container`, .5, {
    //   width: '200px', height: '200px', rotation: '360', onComplete: () => {
        // Overlay
        if (option.overlay === true) {
          $(`${modalId} ._modal_cip_overlay`).show();
        }
        TweenLite.to(`${modalId} ._modal_cip_container`, .5, {
          width: option.width, height: option.height, rotation: '360', onComplete: () => {
            setTimeout(() => {
              if (option.btnClose) {
                $(`${modalId} ._modal_cip_container ._modal_cip_content ._modal_cip_close`).fadeIn('fast');
              }
              $(`${modalId} ._modal_cip_content`).fadeIn('fast');
            }, 100);
          }});
      // }});
  });
};

const ModalAnimation = {
  init: ({...opt}) => {
    option = opt;

    modalHide(option.modalId);
    // Check Configs
    if (!option.width || !option.height) {
      alert(`Defina a Altura e Largura do Modal "${option.modalId}"`);
      return false;
    }

    // Title
    $(`${option.modalId} ._modal_cip_content ._modal_cip_header`).html(option.title);

    // Body
    $(`${option.modalId} ._modal_cip_body`).html(option.content);

    // Buttons
    if (option.btnCancel) {
      $(`${option.modalId} ._modal_cip_content ._modal_cip_footer ._modal_btn_cancel`).html(option.btnCancel).show();
    } else {
      $(`${option.modalId} ._modal_cip_content ._modal_cip_footer ._modal_btn_cancel`).html('').hide();
    }
    if (option.btnSuccess) {
      $(`${option.modalId} ._modal_cip_content ._modal_cip_footer ._modal_btn_success`).html(option.btnSuccess).show();
    } else {
      $(`${option.modalId} ._modal_cip_content ._modal_cip_footer ._modal_btn_success`).html('').hide();
    }

    // Footer
    if (option.footer === false) {
      $(`${option.modalId} ._modal_cip_content ._modal_cip_footer`).hide();
    }
  },

  show: () => {
    modalShow(option.modalId);
  },

  hide: () => {
    modalHide(option.modalId);
  },

  onConfirm: () => {
    if (option.onConfirm) {
      option.onConfirm();
    }
    modalHide(option.modalId);
  },

  onCancel: () => {
    if (option.onCancel) {
      option.onCancel();
    }
    modalHide(option.modalId);
  },

  onHide: () => {
    if (option.onHide) {
      option.onHide();
    }
  }
};

export { ModalAnimation };
