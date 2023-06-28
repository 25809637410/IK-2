// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var shoppingList = [{
  num: 1,
  price: 110000,
  name: "SNOWMAN15 Portable Stand",
  style: "IK 시리즈",
  src: "./images/sub01.jpg"
}, {
  num: 2,
  price: "340,000",
  name: "SWAN2 Floor Stand",
  style: "IK 시리즈",
  src: "./images/sub02.jpg"
}, {
  num: 3,
  price: 240000,
  name: "SWAN2 Table Stand",
  style: "IK 시리즈",
  src: "./images/sub03.jpg"
}, {
  num: 4,
  price: 290000,
  name: "PINOCCHIO120 A Pendant",
  style: "IK 시리즈",
  src: "./images/sub04.jpg"
}, {
  num: 5,
  price: 280000,
  name: "PINOCCHIO120 B Pendant",
  style: "IK 시리즈",
  src: "./images/sub05.jpg"
}, {
  num: 6,
  price: 190000,
  name: "WORKSHOP38 Pendant",
  style: "IK 시리즈",
  src: "./images/sub06.jpg"
}, {
  num: 7,
  price: 150000,
  name: "WORKSHOP28 Pendant",
  style: "IK 시리즈",
  src: "./images/sub07.jpg"
}, {
  num: 8,
  price: 120000,
  name: "WORKSHOP18 Pendant",
  style: "IK 시리즈",
  src: "./images/sub08.jpg"
}, {
  num: 9,
  price: 230000,
  name: "SNOWMAN22 SOLID Table Stand",
  style: "IK 시리즈",
  src: "./images/sub09.jpg"
}, {
  num: 10,
  price: 210000,
  name: "SNOWBALL22 SOLID Table Stand",
  style: "IK 시리즈",
  src: "./images/sub10.jpg"
}, {
  num: 11,
  price: 280000,
  name: "FONDUE16 Table Stand KYOBO BOOK Edition",
  style: "IK 시리즈",
  src: "./images/sub11.jpg"
}, {
  num: 12,
  price: 390000,
  name: "TRIANGLE120 A Pendant",
  style: "IK 시리즈",
  src: "./images/sub12.jpg"
}, {
  num: 13,
  price: 390000,
  name: "TRIANGLE120 B Pendant",
  style: "IK 시리즈",
  src: "./images/sub13.jpg"
}, {
  num: 14,
  price: 360000,
  name: "TRIANGLE120 C Pendant",
  style: "IK 시리즈",
  src: "./images/sub14.jpg"
}, {
  num: 15,
  price: 110000,
  name: "TRIANGLE120 PANEL A",
  style: "IK 시리즈",
  src: "./images/sub15.jpg"
}, {
  num: 16,
  price: 110000,
  name: "TRIANGLE120 PANEL B",
  style: "IK 시리즈",
  src: "./images/sub16.jpg"
}, {
  num: 17,
  price: 80000,
  name: "TRIANGLE120 PANEL C",
  style: "IK 시리즈",
  src: "./images/sub17.jpg"
}, {
  num: 18,
  price: 380000,
  name: "MAGRITTE40 Pendant",
  style: "IK 시리즈",
  src: "./images/sub18.jpg"
}, {
  num: 19,
  price: 280000,
  name: "MAGRITTE25 Pendant",
  style: "IK 시리즈",
  src: "./images/sub19.jpg"
}, {
  num: 20,
  price: 290000,
  name: "SLOPE45 SMART Pendant",
  style: "IK 시리즈",
  src: "./images/sub20.jpg"
}, {
  num: 21,
  price: 340000,
  name: "B-DAY45 Pendant",
  style: "IK 시리즈",
  src: "./images/sub21.jpg"
}, {
  num: 22,
  price: 340000,
  name: "APOLLO22 Table Stand",
  style: "IK 시리즈",
  src: "./images/sub22.jpg"
}, {
  num: 23,
  price: 180000,
  name: "TALLBOY16 Table Stand",
  style: "IK 시리즈",
  src: "./images/sub23.jpg"
}, {
  num: 24,
  price: 200000,
  name: "SNOWBALL22 Table Stand",
  style: "IK 시리즈",
  src: "./images/sub24.jpg"
}, {
  num: 25,
  price: 220000,
  name: "SNOWMAN22 Table Stand",
  style: "IK 시리즈",
  src: "./images/sub25.jpg"
}, {
  num: 26,
  price: 320000,
  name: "SNOWBALL22 Floor Stand",
  style: "IK 시리즈",
  src: "./images/sub26.jpg"
}, {
  num: 27,
  price: 340000,
  name: "SNOWMAN22 Floor Stand",
  style: "IK 시리즈",
  src: "./images/sub27.jpg"
}, {
  num: 28,
  price: 170000,
  name: "FROG22 Table Stand White Edition",
  style: "IK 시리즈",
  src: "./images/sub28.jpg"
}, {
  num: 29,
  price: 170000,
  name: "ACORN22 Table Stand White Edition",
  style: "IK 시리즈",
  src: "./images/sub29.jpg"
}, {
  num: 30,
  price: 270000,
  name: "ACORN22 Floor Stand",
  style: "IK 시리즈",
  src: "./images/sub30.jpg"
}, {
  num: 31,
  price: 310000,
  name: "ACORN38 Floor Stand",
  style: "IK 시리즈",
  src: "./images/sub31.jpg"
}, {
  num: 32,
  price: 270000,
  name: "FROG22 Floor Stand",
  style: "IK 시리즈",
  src: "./images/sub32.jpg"
}, {
  num: 33,
  price: 310000,
  name: "FROG38 Floor Stand",
  style: "IK 시리즈",
  src: "./images/sub33.png"
}, {
  num: 34,
  price: 890000,
  name: "LANDSCAPE68 Table Stand Industrial Gray",
  style: "IK 시리즈",
  src: "./images/sub34.jpg"
}, {
  num: 35,
  price: 890000,
  name: "LANDSCAPE68 Table Stand Aluminium",
  style: "IK 시리즈",
  src: "./images/sub35.jpg"
}, {
  num: 36,
  price: 240000,
  name: "SWAN Table Stand ODENSE Edition",
  style: "IK 시리즈",
  src: "./images/sub36.jpg"
}, {
  num: 37,
  price: 55000,
  name: "CANDLE9 Table Stand White",
  style: "IK 시리즈",
  src: "./images/sub37.jpg"
}, {
  num: 38,
  price: 55000,
  name: "CANDLE9 Table Stand Mint",
  style: "IK 시리즈",
  src: "./images/sub38.jpg"
}, {
  num: 39,
  price: 55000,
  name: "CANDLE9 Table Stand Ivory & Green",
  style: "IK 시리즈",
  src: "./images/sub39.jpg"
}, {
  num: 40,
  price: 55000,
  name: "CANDLE9 Table Stand Burgundy",
  style: "IK 시리즈",
  src: "./images/sub40.jpg"
}, {
  num: 41,
  price: 55000,
  name: "CANDLE9 Table Stand Black",
  style: "IK 시리즈",
  src: "./images/sub41.jpg"
}, {
  num: 42,
  price: 75000,
  name: "TEACUP 4A Table Stand",
  style: "IK 시리즈",
  src: "./images/sub42.jpg"
}, {
  num: 43,
  price: 75000,
  name: "TEACUP R Table Stand",
  style: "IK 시리즈",
  src: "./images/sub43.jpg"
}, {
  num: 44,
  price: 75000,
  name: "TEACUP 4R Table Stand",
  style: "IK 시리즈",
  src: "./images/sub44.jpg"
}, {
  num: 45,
  price: 75000,
  name: "TEACUP 10A Table Stand",
  style: "IK 시리즈",
  src: "./images/sub45.jpg"
}, {
  num: 46,
  price: 240000,
  name: "SATURN55 SMART Pendant White",
  style: "IK 시리즈",
  src: "./images/sub46.jpg"
}, {
  num: 47,
  price: 240000,
  name: "SATURN55 SMART Pendant Silver",
  style: "IK 시리즈",
  src: "./images/sub47.jpg"
}, {
  num: 48,
  price: 120000,
  name: "NEST25 Pendant Clear",
  style: "IK 시리즈",
  src: "./images/sub48.jpg"
}, {
  num: 49,
  price: 120000,
  name: "SATURN55 SMART Pendant Silver",
  style: "IK 시리즈",
  src: "./images/sub49.jpg"
}, {
  num: 50,
  price: 160000,
  name: "ACORN22 Table Stand Ivory",
  style: "IK 시리즈",
  src: "./images/sub50.jpg"
}, {
  num: 51,
  price: 160000,
  name: "ACORN22 Table Stand Cool Gray",
  style: "IK 시리즈",
  src: "./images/sub51.jpg"
}, {
  num: 52,
  price: 160000,
  name: "ACORN22 Table Stand Dark Blue",
  style: "IK 시리즈",
  src: "./images/sub52.jpg"
}, {
  num: 53,
  price: 160000,
  name: "ACORN22 Table Stand Deep Green",
  style: "IK 시리즈",
  src: "./images/sub53.jpg"
}, {
  num: 54,
  price: 160000,
  name: "ACORN22 Table Stand Black",
  style: "IK 시리즈",
  src: "./images/sub54.jpg"
}, {
  num: 55,
  price: 95000,
  name: "ACORN22 Pendant Ivory",
  style: "IK 시리즈",
  src: "./images/sub55.jpg"
}, {
  num: 56,
  price: 95000,
  name: "ACORN22 Pendant Cool Gray",
  style: "IK 시리즈",
  src: "./images/sub56.jpg"
}, {
  num: 57,
  price: 95000,
  name: "ACORN22 Pendant Dark Blue",
  style: "IK 시리즈",
  src: "./images/sub57.jpg"
}, {
  num: 58,
  price: 95000,
  name: "ACORN22 Pendant Deep Green",
  style: "IK 시리즈",
  src: "./images/sub58.jpg"
}, {
  num: 59,
  price: 95000,
  name: "ACORN22 Pendant Black",
  style: "IK 시리즈",
  src: "./images/sub59.jpg"
}, {
  num: 60,
  price: 120000,
  name: "ACORN38 Pendant Ivory",
  style: "IK 시리즈",
  src: "./images/sub60.jpg"
}, {
  num: 61,
  price: 120000,
  name: "ACORN38 Pendant Cool Gray",
  style: "IK 시리즈",
  src: "./images/sub61.jpg"
}, {
  num: 62,
  price: 120000,
  name: "ACORN38 Pendant Dark Blue",
  style: "IK 시리즈",
  src: "./images/sub62.jpg"
}, {
  num: 63,
  price: 120000,
  name: "ACORN38 Pendant Deep Green",
  style: "IK 시리즈",
  src: "./images/sub63.jpg"
}, {
  num: 64,
  price: 120000,
  name: "ACORN38 Pendant Black",
  style: "IK 시리즈",
  src: "./images/sub64.jpg"
}, {
  num: 65,
  price: 160000,
  name: "FROG22 Table Stand Ivory",
  style: "IK 시리즈",
  src: "./images/sub65.jpg"
}, {
  num: 66,
  price: 160000,
  name: "FROG22 Table Stand Butter",
  style: "IK 시리즈",
  src: "./images/sub66.jpg"
}, {
  num: 67,
  price: 160000,
  name: "FROG22 Table Stand Pink",
  style: "IK 시리즈",
  src: "./images/sub67.jpg"
}, {
  num: 68,
  price: 160000,
  name: "FROG22 Table Stand Burgundy",
  style: "IK 시리즈",
  src: "./images/sub68.jpg"
}, {
  num: 69,
  price: 160000,
  name: "FROG22 Table Stand Black",
  style: "IK 시리즈",
  src: "./images/sub69.jpg"
}, {
  num: 70,
  price: 95000,
  name: "FROG22 Pendant Ivory",
  style: "IK 시리즈",
  src: "./images/sub70.jpg"
}, {
  num: 71,
  price: 95000,
  name: "FROG22 Pendant Butter",
  style: "IK 시리즈",
  src: "./images/sub71.jpg"
}, {
  num: 72,
  price: 95000,
  name: "FROG22 Pendant Pink",
  style: "IK 시리즈",
  src: "./images/sub72.jpg"
}, {
  num: 73,
  price: 95000,
  name: "FROG22 Pendant Burgundy",
  style: "IK 시리즈",
  src: "./images/sub73.jpg"
}, {
  num: 74,
  price: 95000,
  name: "FROG22 Pendant Black",
  style: "IK 시리즈",
  src: "./images/sub74.jpg"
}, {
  num: 75,
  price: 120000,
  name: "FROG38 Pendant Ivory",
  style: "IK 시리즈",
  src: "./images/sub75.jpg"
}, {
  num: 76,
  price: 120000,
  name: "FROG38 Pendant Butter",
  style: "IK 시리즈",
  src: "./images/sub76.jpg"
}, {
  num: 77,
  price: 120000,
  name: "FROG38 Pendant Pink",
  style: "IK 시리즈",
  src: "./images/sub77.jpg"
}, {
  num: 78,
  price: 120000,
  name: "FROG38 Pendant Burgundy",
  style: "IK 시리즈",
  src: "./images/sub78.jpg"
}, {
  num: 79,
  price: 120000,
  name: "FROG38 Pendant Black",
  style: "IK 시리즈",
  src: "./images/sub79.jpg"
}, {
  num: 80,
  price: 65000,
  name: "WOOD2 SHADE Table Stand Gold & Green",
  style: "IK 시리즈",
  src: "./images/sub80.jpg"
}, {
  num: 81,
  price: 60000,
  name: "SNOWMAN22 Glass Shade 3Colors",
  style: "IK 시리즈",
  src: "./images/sub81.jpg"
}, {
  num: 82,
  price: 60000,
  name: "SNOWBALL22 Glass Shade 3Colors",
  style: "IK 시리즈",
  src: "./images/sub82.jpg"
}, {
  num: 83,
  price: 180000,
  name: "SATURN55 Pendant Silver",
  style: "IK 시리즈",
  src: "./images/sub83.jpg"
}, {
  num: 84,
  price: 180000,
  name: "SATURN55 Pendant White",
  style: "IK 시리즈",
  src: "./images/sub84.jpg"
}, {
  num: 85,
  price: 150000,
  name: "AMBER22 Pendant",
  style: "IK 시리즈",
  src: "./images/sub85.jpg"
}, {
  num: 86,
  price: 130000,
  name: "SOUFFLE21 Pendant",
  style: "IK 시리즈",
  src: "./images/sub86.jpg"
}, {
  num: 87,
  price: 60000,
  name: "CORE4.5 Pendant White",
  style: "IK 시리즈",
  src: "./images/sub87.jpg"
}, {
  num: 88,
  price: 80000,
  name: "CORE4.5 Pendant Brass",
  style: "IK 시리즈",
  src: "./images/sub88.jpg"
}, {
  num: 89,
  price: 60000,
  name: "CORE4.5 Pendant Black",
  style: "IK 시리즈",
  src: "./images/sub89.jpg"
}, {
  num: 90,
  price: 60000,
  name: "CORE4.5 Pendant Olive green",
  style: "IK 시리즈",
  src: "./images/sub90.jpg"
}, {
  num: 91,
  price: 20000,
  name: "IK DIMMER Switch",
  style: "IK 시리즈",
  src: "./images/sub91.jpg"
}, {
  num: 92,
  price: 4000,
  name: "ON/OFF Switch",
  style: "IK 시리즈",
  src: "./images/sub92.jpg"
}, {
  num: 93,
  price: 55000,
  name: "WOOD3 Table Stand Olive Green",
  style: "IK 시리즈",
  src: "./images/sub93.jpg"
}, {
  num: 94,
  price: 55000,
  name: "WOOD3 Table Stand Silver",
  style: "IK 시리즈",
  src: "./images/sub94.jpg"
}, {
  num: 95,
  price: 55000,
  name: "WOOD3 Table Stand Black",
  style: "IK 시리즈",
  src: "./images/sub95.jpg"
}, {
  num: 96,
  price: 55000,
  name: "WOOD2 Table Stand Green",
  style: "IK 시리즈",
  src: "./images/sub96.jpg"
}, {
  num: 97,
  price: 55000,
  name: "WOOD2 Stand Table Gold",
  style: "IK 시리즈",
  src: "./images/sub97.jpg"
}, {
  num: 98,
  price: 35000,
  name: "WOOD1 Table Stand",
  style: "IK 시리즈",
  src: "./images/sub98.jpg"
}];
var _default = shoppingList;
exports.default = _default;
},{}],"js/sub.js":[function(require,module,exports) {
"use strict";

var _data = _interopRequireDefault(require("./data.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//shoppinglist로 변수 받기

var bestSection = document.querySelector('.best_product');
for (var i = 1; i <= 20; i++) {
  //for (let i = 0; i < shoppingList.length; i++) {
  var bestDiv = document.createElement('div');
  bestDiv.setAttribute('class', 'best_box');
  var imgDiv = document.createElement('div');
  imgDiv.setAttribute('class', 'img_box');
  var bestImg = document.createElement('img');
  bestImg.setAttribute('src', _data.default[i].src);
  bestDiv.appendChild(bestImg);
  var textDiv = document.createElement('div');
  textDiv.setAttribute('class', 'txt_box');
  var bestName = document.createElement('p');
  var bestNameText = document.createTextNode(_data.default[i].name);
  bestName.appendChild(bestNameText);
  textDiv.appendChild(bestName);
  var bestPrice = document.createElement('span');
  var bestPriceText = document.createTextNode(_data.default[i].price);
  bestPrice.appendChild(bestPriceText);
  textDiv.appendChild(bestPrice);
  bestSection.appendChild(bestDiv);
  bestDiv.appendChild(imgDiv);
  imgDiv.appendChild(bestImg);
  //bestSection.appendChild(textDiv)
  bestDiv.appendChild(textDiv);
} //shoppingList_for

function filterAlign() {
  //정렬 함수

  function filterNew() {
    //새 상품 순으로 재배열
    var thisInput = document.querySelector("#line04");
    thisInput.addEventListener("change", filterTry);
    function filterTry() {
      items.map(function (item) {
        return item.style.order = item.dataset.release;
      });
    }
  }
  filterNew();
  function filterBest() {
    //초기값 배열
    var thisInput = document.querySelector("#line01");
    thisInput.addEventListener("change", filterTry);
    function filterTry() {
      items.map(function (item) {
        return item.style.order = item.dataset.num;
      });
    }
  }
  filterBest();
  function filterRowPrice() {
    //낮은 가격 순으로 재배열
    var thisInput = document.querySelector("#line02");
    thisInput.addEventListener("change", filterTry);
    function filterTry() {
      items.sort(function (a, b) {
        return a.dataset.price - b.dataset.price;
      });
      items.map(function (item, i) {
        return item.style.order = "".concat(i);
      });
    }
  }
  filterRowPrice();
  function filterHighPrice() {
    //높은 가격 순으로 재배열
    var thisInput = document.querySelector("#line03");
    thisInput.addEventListener("change", filterTry);
    function filterTry() {
      items.sort(function (a, b) {
        return b.dataset.price - a.dataset.price;
      });
      items.map(function (item, i) {
        return item.style.order = "".concat(i);
      });
    }
  }
  filterHighPrice();
}
filterAlign();
},{"./data.js":"js/data.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51324" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/sub.js"], null)
//# sourceMappingURL=/sub.3e71813d.js.map