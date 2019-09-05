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
})({"package-lock.json":[function(require,module,exports) {
module.exports = {
  "requires": true,
  "lockfileVersion": 1,
  "dependencies": {
    "@dogstudio/highway": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/@dogstudio/highway/-/highway-2.1.3.tgz",
      "integrity": "sha512-yf2vhsyd7ew0h6tjrCZd0fMYBYPpPNR1Dy0it0UkvWiYq/ZIziAgtUlqrar6TlElb5BuwIus0H4lrETZqA1fHg==",
      "requires": {
        "tiny-emitter": "^2.1.0"
      }
    },
    "anymatch": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.0.tgz",
      "integrity": "sha512-Ozz7l4ixzI7Oxj2+cw+p0tVUt27BpaJ+1+q1TCeANWxHpvyn2+Un+YamBdfKu0uh8xLodGhoa1v7595NhKDAuA==",
      "requires": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      }
    },
    "binary-extensions": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.0.0.tgz",
      "integrity": "sha512-Phlt0plgpIIBOGTT/ehfFnbNlfsDEiqmzE2KRXoX1bLIlir4X/MR+zSyBEkL05ffWgnRSf/DXv+WrUAVr93/ow=="
    },
    "braces": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
      "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
      "requires": {
        "fill-range": "^7.0.1"
      }
    },
    "chokidar": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.0.2.tgz",
      "integrity": "sha512-c4PR2egjNjI1um6bamCQ6bUNPDiyofNQruHvKgHQ4gDUP/ITSVSzNsiI5OWtHOsX323i5ha/kk4YmOZ1Ktg7KA==",
      "requires": {
        "anymatch": "^3.0.1",
        "braces": "^3.0.2",
        "fsevents": "^2.0.6",
        "glob-parent": "^5.0.0",
        "is-binary-path": "^2.1.0",
        "is-glob": "^4.0.1",
        "normalize-path": "^3.0.0",
        "readdirp": "^3.1.1"
      }
    },
    "fill-range": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
      "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
      "requires": {
        "to-regex-range": "^5.0.1"
      }
    },
    "fsevents": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.0.7.tgz",
      "integrity": "sha512-a7YT0SV3RB+DjYcppwVDLtn13UQnmg0SWZS7ezZD0UjnLwXmy8Zm21GMVGLaFGimIqcvyMQaOJBrop8MyOp1kQ==",
      "optional": true
    },
    "glob-parent": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.0.0.tgz",
      "integrity": "sha512-Z2RwiujPRGluePM6j699ktJYxmPpJKCfpGA13jz2hmFZC7gKetzrWvg5KN3+OsIFmydGyZ1AVwERCq1w/ZZwRg==",
      "requires": {
        "is-glob": "^4.0.1"
      }
    },
    "gsap": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/gsap/-/gsap-2.1.3.tgz",
      "integrity": "sha512-8RFASCqi2FOCBuv7X4o7M6bLdy+1hbR0azg+MG7zz+EVsI+OmJblYsTk0GEepQd2Jg/ItMPiVTibF7r3EVxjZQ=="
    },
    "is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "requires": {
        "binary-extensions": "^2.0.0"
      }
    },
    "is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI="
    },
    "is-glob": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
      "integrity": "sha512-5G0tKtBTFImOqDnLB2hG6Bp2qcKEFduo4tZu9MT/H6NQv/ghhy30o55ufafxJ/LdH79LLs2Kfrn85TLKyA7BUg==",
      "requires": {
        "is-extglob": "^2.1.1"
      }
    },
    "is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng=="
    },
    "normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA=="
    },
    "picomatch": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.0.7.tgz",
      "integrity": "sha512-oLHIdio3tZ0qH76NybpeneBhYVj0QFTfXEFTc/B3zKQspYfYYkWYgFsmzo+4kvId/bQRcNkVeguI3y+CD22BtA=="
    },
    "readdirp": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.1.2.tgz",
      "integrity": "sha512-8rhl0xs2cxfVsqzreYCvs8EwBfn/DhVdqtoLmw19uI3SC5avYX9teCurlErfpPXGmYtMHReGaP2RsLnFvz/lnw==",
      "requires": {
        "picomatch": "^2.0.4"
      }
    },
    "sass": {
      "version": "1.23.0-module.beta.1",
      "resolved": "https://registry.npmjs.org/sass/-/sass-1.23.0-module.beta.1.tgz",
      "integrity": "sha512-Cb6l+z/z5mIpOe8lPp+DttHhHyb6J8SsscSIhLUzqDH2Ta2+9mpz8TRvYezD1n+Ey1TWi3EKz8VUPg42Zc1vmA==",
      "requires": {
        "chokidar": ">=2.0.0 <4.0.0"
      }
    },
    "tiny-emitter": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/tiny-emitter/-/tiny-emitter-2.1.0.tgz",
      "integrity": "sha512-NB6Dk1A9xgQPMoGqC5CVXn123gWyte215ONT5Pp5a0yt4nlEoO1ZWeCwpncaekPHXO60i47ihFnZPiRPjRMq4Q=="
    },
    "to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "requires": {
        "is-number": "^7.0.0"
      }
    }
  }
};
},{}],"../../../../usr/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "35747" + '/');

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
      } else {
        window.location.reload();
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
},{}]},{},["../../../../usr/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","package-lock.json"], null)
//# sourceMappingURL=/package-lock.js.map