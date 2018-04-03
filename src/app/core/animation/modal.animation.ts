import * as $ from 'jquery';
import { TweenLite, Back } from 'gsap';

const easeEff  = Back.easeOut.config(2);

let option;

const modalHide = () => {
  $('._modal_cip_header, ._modal_cip_content, ._modal_cip_footer').fadeOut('fast', () => {
    TweenLite.to('._modal_cip_container', .5, {width: '200px', height: '200px', rotation: '0', onComplete: () => {
      TweenLite.to('._modal_cip_container', .5, {width: '0', height: '0', onComplete: () => {
        $('._modal_cip_overlay, ._modal_cip').hide();
      }});
    }});
  });
};

const ModalAnimation = {
  init: ({...opt}) => {
    option = opt;
    modalHide();
    // Type
    if (option.type !== null) {
      switch (option.type) {
        case 'info':
          $('._modal_cip_container').addClass('cip--bgc-blue-light');
          $('#_modal_icon').attr('src', 'assets/svg/info2.svg').show();
          $('#_modal_title').addClass('cip--txc-blue-dark');
          $('#_modal_btn_success').addClass('cip--btn-transparent-info');
          $('#_modal_btn_cancel').addClass('cip--btn-transparent-info');
          break;
        case 'warn':
          $('._modal_cip_container').addClass('cip--bgc-orange-light');
          $('#_modal_icon').attr('src', 'assets/svg/warn.svg').show();
          $('#_modal_title').addClass('cip--txc-orange-dark');
          $('#_modal_btn_success').addClass('cip--btn-transparent-warn');
          $('#_modal_btn_cancel').addClass('cip--btn-transparent-warn');
          break;
        case 'danger':
          $('._modal_cip_container').addClass('cip--bgc-red-light');
          $('#_modal_icon').attr('src', 'assets/svg/error.svg').show();
          $('#_modal_title').addClass('cip--txc-red-dark');
          $('#_modal_btn_success').addClass('cip--btn-transparent-danger');
          $('#_modal_btn_cancel').addClass('cip--btn-transparent-danger');
          break;
        case 'success':
          $('._modal_cip_container').addClass('cip--bgc-green-light');
          $('#_modal_icon').attr('src', 'assets/svg/check.svg').show();
          $('#_modal_title').addClass('cip--txc-green-dark');
          $('#_modal_btn_success').addClass('cip--btn-transparent-success');
          $('#_modal_btn_cancel').addClass('cip--btn-transparent-success');
          break;
        default:
          $('._modal_cip_container').addClass('cip--bgc-white');
          $('#_modal_icon').hide().attr('src', '');
          $('#_modal_title').removeClass('cip--txc-blue-dark cip--txc-green-dark cip--txc-orange-dark cip--txc-red-dark')
          .addClass('cip--txc-grey-medium');
          $('#_modal_btn_success, #_modal_btn_cancel').addClass('cip--btn-transparent-grey');
      }
    }
    // Check Configs
    if (!option.width || !option.height || !option.title || !option.content) {
      alert('Defina as Configurações Padrões!');
      return false;
    }
    // Title
    $('#_modal_title').text(option.title);
    // Content
    $('#_modal_content').html(option.content);
    // Buttons
    if (option.btnCancel) {
      $('#_modal_btn_cancel').html(option.btnCancel);
    }
    if (option.btnSuccess) {
      $('#_modal_btn_success').html(option.btnSuccess);
    }
  },
  show: (opt = 'fast') => {
    $('._modal_cip_overlay, ._modal_cip').fadeIn('fast', () => {
      TweenLite.to('._modal_cip_container', .5, {
        width: '200px', height: '200px', rotation: '360', onComplete: () => {

          TweenLite.to('._modal_cip_container', 1, {
            ease: easeEff, width: option.width, height: option.height, onComplete: () => {
              setTimeout(() => {
                $('._modal_cip_header, ._modal_cip_content, ._modal_cip_footer').fadeIn(opt);
              }, 100);
            }});
        }});


    });
  },

  hide: () => {
    modalHide();
  },

  onConfirm: () => {
    if (option.onConfirm) {
      option.onConfirm();
    }
    modalHide();
  },

  onCancel: () => {
    if (option.onCancel) {
      option.onCancel();
    }
    modalHide();
  },

  onHide: () => {
    if (option.onHide) {
      option.onHide();
    }
  }
};

export { ModalAnimation };
