import * as $ from 'jquery';

/* Pixels Back Animation IN - OUT */
const pixelsBackAnimationIn = () => {
  return new Promise ((resolve, reject) => {
    if (!resolve()) { reject(false); }

    let count = 0;
    const timer = (delay, element) => {
      const pixTimer = setTimeout(() => {
        $(element).fadeIn().addClass('bounceIn2');
        count += 1;
        if (count === 14) {
          resolve();
        }
        clearTimeout(pixTimer);
      }, delay);
    };
    for (let $i = 0; $i < 14; $i++) { timer(100 * $i, `.lpx${$i}`); }
  });
};
const pixelsBackAnimationOut = (delayOut = 0) => {
  return new Promise ((resolve, reject) => {
    if (!resolve()) { reject(false); }

    let count = 0;
    const timerDelay = setTimeout(() => {

      $('._logo_pixel_back').removeClass('bounceIn2');
     const timer = (delay, element) => {
       const pixTimer = setTimeout(() => {
        $(element).addClass('bounceOut').fadeOut('slow');
        clearTimeout(pixTimer);
        count += 1;
        if (count === 14) {
          resolve();
        }
      }, delay);
    };
    for (let $i = 0; $i < 14; $i++) { timer(20 * $i, `.lpx${$i}`); }

    }, delayOut);
  });
};

/* Tag Animation IN */
const tagAnimationIn = () => {
  return new Promise ((resolve, reject) => {
    $('._logo_tag_left').addClass('_logo_tag_transform_left_1');
    $('._logo_tag_right').addClass('_logo_tag_transform_right_1');
    const timerTag = setTimeout(() => {
      clearTimeout(timerTag);
      resolve();
    }, 700);

  });
};
const tagAnimationOut = () => {
  return new Promise ((resolve, reject) => {

    const timerPixels = setTimeout(() => {
      $('._logo_tag_left').addClass('_logo_tag_transform_left_0');
      $('._logo_tag_right').addClass('_logo_tag_transform_right_0');
      $('._logo_tag_left, ._logo_tag_right').removeClass('_logo_tag_transform_left_1 _logo_tag_transform_right_1');
      resolve();
      clearTimeout(timerPixels);
    }, 700);

  });
};

/* Pixel Center Animation IN */
const pixelCenterIn = (logoElement, delay = 0 ) => {
  return new Promise ((resolve, reject) => {

    const logoCenter = $(logoElement);

    logoCenter.addClass('_logo_cip_center_0').hide();
    $('._logo_tag_left').addClass('_logo_tag_left_0');
    $('._logo_tag_right').addClass('_logo_tag_right_0');
    $('._logo_pixel_back').hide();

    const timerCenter1 = setTimeout(() => {
      logoCenter.removeClass('_logo_cip_transform_center_in');
      const timerCenter2 = setTimeout(() => {
        logoCenter.show().addClass('_logo_cip_transform_center_in');
        const timerCenter3 = setTimeout(() => {
          // Remove Class OUT and Timers
          logoCenter.removeClass('_logo_cip_transform_center_out');
          clearTimeout(timerCenter1);
          clearTimeout(timerCenter2);
          clearTimeout(timerCenter3);
          resolve();
        }, 400);
      }, 100);
    }, delay);
  });
};
const pixelCenterOut = (logoElement) => {
  return new Promise ((resolve, reject) => {

    const logoCenter = $('._logo_pixel_center');
    logoCenter.removeClass('_logo_cip_transform_center_out');

      const timerCenter1 = setTimeout(() => {
        logoCenter.addClass('_logo_cip_transform_center_out');
        clearTimeout(timerCenter1);
        // Remove class IN
        logoCenter.removeClass('_logo_cip_center_0 _logo_cip_transform_center_in');
        resolve();
      }, 100);

  });
};


/* ########## Logo Animation ########## */
const LogoAnimation = {

  // ------------ Show
  show: (delay?) => {
    pixelCenterIn('._logo_pixel_center', delay).then(() => {
      tagAnimationIn().then(() => {
        pixelsBackAnimationIn();
      });
    });
  },

   // ------------ Hide
  hide: (delay?) => {
    pixelsBackAnimationOut(delay).then(() => {
      tagAnimationOut().then(() => {
        pixelCenterOut('._logo_pixel_center');
      });
    });
  }

};

/* ########## Pixel Center Shining ########## */
const LogoPixelCenterShining = (interval, intervalTimes: number = 0) => {
  let count = 0;
  const intervalCenterShining = setInterval(() => {

    console.log('Brilhar Centro!');

    count += 1;
    if (intervalTimes === count && intervalTimes !== 0) {
      clearInterval(intervalCenterShining);
    }
  }, interval);
};

/* ########## Pixels Back Animation ########## */
const LogoPixelsBackAnimation = (interval, intervalTimes: number = 0) => {
  let count = 0;
  const intervalPixelsBackAnimation = setInterval(() => {

    console.log('Animar Pixels Back!');

    count += 1;
    if (intervalTimes === count && intervalTimes !== 0) {
      clearInterval(intervalPixelsBackAnimation);
    }
  }, interval);
};

export { LogoAnimation, LogoPixelCenterShining, LogoPixelsBackAnimation };
