'use strict';

// utils


var isObject = function isObject(elem) {
    var getType = function getType(el) {
        return Object.prototype.toString.call(el).slice(8, -1);
    };
    return getType(elem) === 'Object';
};

function forEachEl(els, fn) {
    var len = els.length;

    for (var i = 0; i < len; i++) {
        if (els[i] !== null) {
            els[i].addEventListener('click', fn, false);
        }
    }
}

function findData(arr, prop, data) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][prop] === data) {
            return arr[i];
        }
    }
}

function findValue(arr, prop, data) {
    var result = null;
    arr.some(function (el, i) {
        return el[prop] === data ? (result = el, true) : false;
    });
    return result;
}