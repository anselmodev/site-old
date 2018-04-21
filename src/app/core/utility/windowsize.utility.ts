import * as $ from 'jquery';
const DOC = $(document);
const WIN = $(document);

// Get Window Size
const WindowResize = {
  get: (w?: String, h?: String, callback?: Function) => {
    if (w === 'w') {
      return DOC.width();
    }
    if (h === 'h') {
      return DOC.height();
    }

    return `Width: ${DOC.width()} X Height: ${DOC.height()}`;
  }
};

const ElementPosition = {
  get: (elem, type = null) => {
    if (type === 'position') {
      return $(elem).position();
    } else {
      return $(elem).offset();
    }
  },

  set: (elem, value, type = null) => {
    if (type === 'position') {
      $(elem).position(value);
    } else {
      $(elem).offset(value);
    }
  }
};


export { WindowResize, ElementPosition };
