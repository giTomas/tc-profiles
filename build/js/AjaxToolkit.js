"use strict";

var AjaxToolkit = function () {
  "use strict";

  var xhr = function xhr(url, method, data) {
    return new Promise(function (resolve, reject) {
      var req = new XMLHttpRequest();
      req.open(method, url);
      // req.setRequestHeader("Content-type", "application/json")
      // req.setRequestHeader("Content-type", "multipart/form-data")
      req.onload = function () {
        req.status == 200 ? resolve(req.response) : reject(Error(req.statusText));
      };
      req.onerror = function () {
        return reject(Error("Network Error"));
      };
      req.send(data); //????? (data || "")
    });
  };

  var makeUrl = function makeUrl(part, el) {
    return part + el.dataset.url;
  };

  var getUser = function getUser(el) {
    return el.dataset.user;
  };

  return {
    xhr: xhr,
    makeUrl: makeUrl,
    getUser: getUser
  };
}();