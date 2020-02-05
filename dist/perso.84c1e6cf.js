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
})({"../perso.js":[function(require,module,exports) {
var ButtonCol = document.querySelector(".button__personalisation");
var ButtonTorse = document.querySelector(".button__Torse");
var ButtonManches = document.querySelector(".button__Manches");
var Col = document.querySelector(".Col");
var Torse = document.querySelector(".Torse");
var Manches = document.querySelector(".Manches");
var Taille = document.querySelector(".button__Letters");
var XS = document.querySelector(".XS");
var S = document.querySelector(".S");
var M = document.querySelector(".M");
var L = document.querySelector(".L");
var XL = document.querySelector(".XL"); //Choix des Parametre

var root = document.documentElement; //Boutton couleurs de col

var Colwhite = document.querySelector(".color__Col--white");
var Colgreen = document.querySelector(".color__Col--green");
var Colyellow = document.querySelector(".color__Col--yellow");
var Colred = document.querySelector(".color__Col--red");
var Colblue = document.querySelector(".color__Col--blue");
var Colpurple = document.querySelector(".color__Col--purple"); //Boutton couleurs de Torse

var Torsewhite = document.querySelector(".color__Torse--white");
var Torsegreen = document.querySelector(".color__Torse--green");
var Torseyellow = document.querySelector(".color__Torse--yellow");
var Torsered = document.querySelector(".color__Torse--red");
var Torseblue = document.querySelector(".color__Torse--blue");
var Torsepurple = document.querySelector(".color__Torse--purple"); //Boutton couleurs de Manches

var Mancheswhite = document.querySelector(".color__Manches--white");
var Manchesgreen = document.querySelector(".color__Manches--green");
var Manchesyellow = document.querySelector(".color__Manches--yellow");
var Manchesred = document.querySelector(".color__Manches--red");
var Manchesblue = document.querySelector(".color__Manches--blue");
var Manchespurple = document.querySelector(".color__Manches--purple"); //TAILLES

XS.addEventListener("click", function () {
  XS.classList.toggle("border");

  if (S.classList != "border" || M.classList != "border" || L.classList != "border" || XL.classList != "border") {
    S.classList.remove("border");
    M.classList.remove("border");
    L.classList.remove("border");
    XL.classList.remove("border");
  }
});
S.addEventListener("click", function () {
  S.classList.toggle("border");

  if (XS.classList != "border" || M.classList != "border" || L.classList != "border" || XL.classList != "border") {
    XS.classList.remove("border");
    M.classList.remove("border");
    L.classList.remove("border");
    XL.classList.remove("border");
  }
});
M.addEventListener("click", function () {
  M.classList.toggle("border");

  if (S.classList != "border" || XS.classList != "border" || L.classList != "border" || XL.classList != "border") {
    S.classList.remove("border");
    XS.classList.remove("border");
    L.classList.remove("border");
    XL.classList.remove("border");
  }
});
L.addEventListener("click", function () {
  L.classList.toggle("border");

  if (S.classList != "border" || M.classList != "border" || XS.classList != "border" || XL.classList != "border") {
    S.classList.remove("border");
    M.classList.remove("border");
    XS.classList.remove("border");
    XL.classList.remove("border");
  }
});
XL.addEventListener("click", function () {
  XL.classList.toggle("border");

  if (S.classList != "border" || M.classList != "border" || L.classList != "border" || XS.classList != "border") {
    S.classList.remove("border");
    M.classList.remove("border");
    L.classList.remove("border");
    XS.classList.remove("border");
  }
}); //BUTTON SELECTION

ButtonCol.addEventListener("click", function () {
  Col.classList.toggle("hidden");

  if (Torse.classList != "hidden" || Manches.classList != "hidden") {
    Torse.classList.add("hidden");
    Manches.classList.add("hidden");
  }
});
ButtonTorse.addEventListener("click", function () {
  Torse.classList.toggle("hidden");

  if (Col.classList != "hidden" || Manches.classList != "hidden") {
    Col.classList.add("hidden");
    Manches.classList.add("hidden");
  }
});
ButtonManches.addEventListener("click", function () {
  Manches.classList.toggle("hidden");

  if (Torse.classList != "hidden" || Manches.classList != "hidden") {
    Torse.classList.add("hidden");
    Col.classList.add("hidden");
  }
}); //root.style.setProperty('--mouse-x', e.clientX + "px");
//Boutton couleurs de col

Colwhite.addEventListener("click", function () {
  root.style.setProperty("--third-bg-color", "white");
});
Colgreen.addEventListener("click", function () {
  root.style.setProperty("--third-bg-color", "lightgreen");
});
Colyellow.addEventListener("click", function () {
  root.style.setProperty("--third-bg-color", "lightyellow");
});
Colred.addEventListener("click", function () {
  root.style.setProperty("--third-bg-color", "red");
});
Colblue.addEventListener("click", function () {
  root.style.setProperty("--third-bg-color", "lightcyan");
});
Colpurple.addEventListener("click", function () {
  root.style.setProperty("--third-bg-color", "purple");
}); //Boutton couleurs de Torse

Torsewhite.addEventListener("click", function () {
  root.style.setProperty("--main-bg-color", "white");
});
Torsegreen.addEventListener("click", function () {
  root.style.setProperty("--main-bg-color", "lightgreen");
});
Torseyellow.addEventListener("click", function () {
  root.style.setProperty("--main-bg-color", "lightyellow");
});
Torsered.addEventListener("click", function () {
  root.style.setProperty("--main-bg-color", "red");
});
Torseblue.addEventListener("click", function () {
  root.style.setProperty("--main-bg-color", "lightcyan");
});
Torsepurple.addEventListener("click", function () {
  root.style.setProperty("--main-bg-color", "purple");
}); //Boutton couleurs de Manches

Mancheswhite.addEventListener("click", function () {
  root.style.setProperty("--second-bg-color", "white");
});
Manchesgreen.addEventListener("click", function () {
  root.style.setProperty("--second-bg-color", "lightgreen");
});
Manchesyellow.addEventListener("click", function () {
  root.style.setProperty("--second-bg-color", "lightyellow");
});
Manchesred.addEventListener("click", function () {
  root.style.setProperty("--second-bg-color", "red");
});
Manchesblue.addEventListener("click", function () {
  root.style.setProperty("--second-bg-color", "lightcyan");
});
Manchespurple.addEventListener("click", function () {
  root.style.setProperty("--second-bg-color", "purple");
});
},{}],"../../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51166" + '/');

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
      }); // Enable HMR for CSS by default.

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
  overlay.id = OVERLAY_ID; // html encode message and stack trace

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
},{}]},{},["../../node_modules/parcel/src/builtins/hmr-runtime.js","../perso.js"], null)
//# sourceMappingURL=/perso.84c1e6cf.js.map