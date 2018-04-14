import * as $ from 'jquery';

const MenuItem = '.cip_responsive_nav_container';
const MenuLogo = '#cip_logo_resp_menu';

const ResponsiveMenuAnimation = {
  open: () => {
    $(MenuItem).show();
    $(MenuLogo).fadeIn('fast', () => {
      $('.cip_responsive_links').fadeIn('fast');
    });
  },
  close: () => {
    $(`${MenuLogo}, .cip_responsive_links`).fadeOut(100, () => {
      $(MenuItem).hide();
    });
  }
};

export { ResponsiveMenuAnimation };
