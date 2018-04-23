import * as $ from 'jquery';
import { TweenLite, Back } from 'gsap';

const InputAnimation = (inputEl) => {
  console.log();
  // Pulse Input
  TweenLite.to(`#${inputEl.target.id}`, .1, {
    ease: Back.easeOut.config(2),
    scale: 1.01,
    borderColor: '#2196f3',
    onComplete: () => {
      TweenLite.to(`#${inputEl.target.id}`, .1, {
        scale: 1,
        borderColor: '#E3E3E3',
      });
    }
  });
};

export { InputAnimation };
