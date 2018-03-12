import * as $ from 'jquery';

let isReady = null;

/* Initial Class Animation */
const animationInit = () => {
  // hide logo base
  $('._logo_cip').show();
  $('._logo_tag_left').removeClass(' _logo_tag_transform_left_1');
  $('._logo_tag_right').removeClass(' _logo_tag_transform_right_1');
};

/* Remove Class Animation */
const animationRemove = () => {
  $('._logo_pixel_center').removeClass('_logo_cip_transform_center_out _logo_cip_transform_center_in _logo_cip_center_0');
  $('._logo_tag_left').removeClass('_logo_tag_left_0 _logo_tag_transform_left_0');
  $('._logo_tag_right').removeClass('_logo_tag_right_0 _logo_tag_transform_right_0');
  $('._logo_pixel_back').removeClass('bounceIn1 bounceOut');
};

/* Pixels Back Animation IN - OUT */
const pixelsBackAnimationIn = () => {
  return new Promise ((resolve, reject) => {
    let count = 0;

    const timer = (delay, element) => {
      const pixTimer = setTimeout(() => {
        $(element).fadeIn().addClass('bounceIn1');
        count += 1;
        if (count === 14) {
          const timerResetBounce = setTimeout(() => {
            animationRemove();
            clearTimeout(timerResetBounce);
          }, 1000);
          resolve();
        }
        clearTimeout(pixTimer);
      }, delay);
    };
    for (let $i = 0; $i < 14; $i++) { timer(50 * $i, `.lpx${$i}`); }
  });
};
const pixelsBackAnimationOut = (delayOut = 0) => {
  return new Promise ((resolve, reject) => {
    let count = 0;
    isReady = false;

    const timerDelay = setTimeout(() => {

     const timer = (delay, element) => {
       const pixTimer = setTimeout(() => {
        $(element).addClass('bounceOut').fadeOut('slow');
        clearTimeout(pixTimer);
        count += 1;
        if (count === 14) {

          const timerResetBounce = setTimeout(() => {
            $('._logo_pixel_back').removeClass('bounceOut');
            clearTimeout(timerResetBounce);
          }, 1000);
          resolve();

        }
      }, delay);
    };
    for (let $i = 0; $i < 14; $i++) { timer(20 * $i, `.lpx${$i}`); }

    }, delayOut);
  });
};

/* Tag Animation IN - OUT */
const tagAnimationIn = () => {
  return new Promise ((resolve, reject) => {
    $('._logo_tag_left').show().addClass('_logo_tag_transform_left_1');
    $('._logo_tag_right').show().addClass('_logo_tag_transform_right_1');
    const timerTag = setTimeout(() => {
      clearTimeout(timerTag);
      resolve();
    }, 700);
  });
};
const tagAnimationOut = () => {
  return new Promise ((resolve, reject) => {

    const timerPixels = setTimeout(() => {
      $('._logo_tag_left').addClass('_logo_tag_transform_left_0').fadeOut();
      $('._logo_tag_right').addClass('_logo_tag_transform_right_0').fadeOut();
      const resetTrasnform = setTimeout(() => {
        // $('._logo_tag_left').removeClass('_logo_tag_transform_left_1');
        // $('._logo_tag_right').removeClass('_logo_tag_transform_right_1');
        clearTimeout(resetTrasnform);
      }, 1000);
      resolve();
      clearTimeout(timerPixels);
    }, 700);

  });
};

/* Pixel Center Animation IN - OUT */
const pixelCenterIn = (delay = 0 ) => {
  const logoCenter = $('._logo_pixel_center');

  return new Promise ((resolve, reject) => {
    isReady = false;
    logoCenter.addClass('_logo_cip_center_0').hide();
    $('._logo_pixel_back, ._logo_text, ._logo_subtext').hide();
    $('._logo_tag_left').addClass('_logo_tag_left_0');
    $('._logo_tag_right').addClass('_logo_tag_right_0');
    animationInit();

    const timerCenter1 = setTimeout(() => {
      logoCenter.show().addClass('_logo_cip_transform_center_in');
      const timerCenter2 = setTimeout(() => {
        clearTimeout(timerCenter1);
        clearTimeout(timerCenter2);
        resolve();
      }, 400);
    }, delay);
  });
};
const pixelCenterOut = () => {
  const logoCenter = $('._logo_pixel_center');

  return new Promise ((resolve, reject) => {
    const timerCenter1 = setTimeout(() => {
      logoCenter.addClass('_logo_cip_transform_center_out');
      clearTimeout(timerCenter1);

      const clearTransform = setTimeout(() => {
        animationRemove();
        resolve();
      }, 800);

    }, 100);

  });
};

/* Pixel Center Animation IN - OUT */
const textFadeIn = () => {
  return new Promise((resolve, reject) => {
    $('._logo_text').fadeIn();
    const timeText1 = setTimeout(() => {
      $('._logo_subtext').fadeIn();
      resolve();
    }, 200);
  });
};
const textFadeOut = () => {
  return new Promise((resolve, reject) => {
    $('._logo_text, ._logo_subtext').fadeOut();
  });
};


/* ########## Logo Animation ########## */
const LogoAnimation = {
  // ------------ Show
  show: (delay?) => {
    if (!isReady && isReady !== null) {
      return false;
    }
    pixelCenterIn(delay).then(() => {
      tagAnimationIn().then(() => {
        pixelsBackAnimationIn().then(() => {
          textFadeIn().then(() => {
            isReady = true;
          });
        });
      });
    });
  },

  // ------------ Hide
  hide: (delay?) => {
    if (!isReady && isReady !== null) {
      return false;
    }
    textFadeOut();
    pixelsBackAnimationOut(delay).then(() => {
      tagAnimationOut().then(() => {
        pixelCenterOut().then(() => {
          $('._logo_cip').hide();
          isReady = true;
        });
      });
    });
  },
  // ------------ Reset
  reset: () => {
    $('._logo_pixel_center').removeClass('_logo_cip_transform_center_out _logo_cip_transform_center_in _logo_cip_center_0');
    $('._logo_tag_left').removeClass('_logo_tag_left_0 _logo_tag_transform_left_0 _logo_tag_transform_left_1');
    $('._logo_tag_right').removeClass('_logo_tag_right_0 _logo_tag_transform_right_0 _logo_tag_transform_right_1');
    $('._logo_pixel_back').removeClass('bounceIn1 bounceOut');
  }
};

/* ########## Pixel Center Shining ########## */
const LogoPixelShining = (interval, intervalTimes: number = 0) => {
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

export { LogoAnimation };
