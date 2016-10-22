  // utility

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

  // doesn't return array why? probably faster
  // definitly in this case this is better, it's faster, more concise, not so complicated
// BEAWARE probably if array contains more identical properties it will return array
// traverse whole array callback is executed for every item in array
// IE not support
 function findValue(arr, prop, data) {
    //const result = arr.find((el, i) =>  el[prop] === data);
    //return result;
    //returns undefined
    return arr.find((el, i) =>  el[prop] === data);
  }

  //NEAT nearly perfect!!! probably slower than findValue()
  // probably works in most browsers
 function findValueByIndex(arr, prop, data) {
    // const index = arr.map((el)=> el[prop]).indexOf(data);
    // return arr[index];
    //returns undefined
    return arr[arr.map((item)=> item[prop]).indexOf(data)];
  }

  //haluz ale je to dost DIRTY; comma operator -> function with side effects!!!!
 function findValue2(arr, prop, data) {
    let result = null;
    arr.some((el, i) =>  el[prop] === data ? ((result = el), true) : false);
    return result;
  }
