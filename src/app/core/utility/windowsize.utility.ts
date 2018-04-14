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


export { WindowResize };
