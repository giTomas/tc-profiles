  // utils


  const isObject = function(elem) {
      const getType = (el) => Object.prototype.toString.call(el).slice(8, -1);
      return getType(elem) === 'Object';
  };

  function forEachEl(els, fn) {
      const len = els.length;

      for (let i = 0; i < len; i++ ) {
          if (els[i] !== null) {
              els[i].addEventListener('click', fn, false)
          }
      }
  }

  function findData(arr, prop, data){
      for (let i = 0; i < arr.length; i++) {
          if(arr[i][prop] === data) {
              return arr[i];
          }
      }
  }


 function findValue(arr, prop, data) {
    let result = null;
    arr.some((el, i) =>  el[prop] === data ? ((result = el), true) : false);
    return result;
  }
