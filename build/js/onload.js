const Onload = (function(){
  "use strict";

  const interval = setInterval(() => {
    if(document.readyState === 'complete') {
        clearInterval(interval);
        // console.log(document.readyState);
        TweenLite.to('#js-page', 1, {opacity: 1, ease: Power1.easeOut});
    }
}, 300);

  return {
    interval: interval
  }
})();

// Onload.interval;
