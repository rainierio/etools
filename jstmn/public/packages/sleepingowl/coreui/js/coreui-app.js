/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
__webpack_require__(18);
module.exports = __webpack_require__(19);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coreui_vue_Vue_Full_Project_src_components_SidebarMinimizer__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coreui_vue_Vue_Full_Project_src_components_SidebarMinimizer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__coreui_vue_Vue_Full_Project_src_components_SidebarMinimizer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_MobileSidebarToggler_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_MobileSidebarToggler_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_MobileSidebarToggler_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_SidebarToggler_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_SidebarToggler_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_SidebarToggler_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_AsideToggler_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_AsideToggler_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_AsideToggler_vue__);







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_bootstrap_vue__["a" /* default */]);

window.app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#vueApp',
    computed: {
        hasSidebar: function hasSidebar() {
            return document.getElementsByClassName('sidebar').length !== 0;
        },
        hasAside: function hasAside() {
            return document.getElementsByClassName('aside-menu').length !== 0;
        }
    },
    components: {
        SidebarMinimizer: __WEBPACK_IMPORTED_MODULE_2__coreui_vue_Vue_Full_Project_src_components_SidebarMinimizer___default.a,
        MobileSidebarToggler: __WEBPACK_IMPORTED_MODULE_3__components_MobileSidebarToggler_vue___default.a,
        SidebarToggler: __WEBPACK_IMPORTED_MODULE_4__components_SidebarToggler_vue___default.a,
        AsideToggler: __WEBPACK_IMPORTED_MODULE_5__components_AsideToggler_vue___default.a
    },
    methods: {
        handleNavClick: function handleNavClick(e) {
            e.preventDefault();
            e.target.parentElement.classList.toggle('open');
        }
    }
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.4.4
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */


/*  */

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

var _toString = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(val);
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

var warn = noop;
var tip = noop;
var formatComponentName = (null); // work around flow check

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var name = typeof vm === 'string'
      ? vm
      : typeof vm === 'function' && vm.options
        ? vm.options.name
        : vm._isVue
          ? vm.$options.name || vm.$options._componentTag
          : vm.name;

    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  var generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

function handleError (err, vm, info) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info);
  } else {
    if (true) {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (!isIE && typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve, reject) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this) : parentVal
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn.call(this, parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (parentVal, childVal) {
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options) {
  var inject = options.inject;
  if (Array.isArray(inject)) {
    var normalized = options.inject = {};
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = inject[i];
    }
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child);
  normalizeInject(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (true) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode, deep) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  if (deep && vnode.children) {
    cloned.children = cloneVNodes(vnode.children);
  }
  return cloned
}

function cloneVNodes (vnodes, deep) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i], deep);
  }
  return res
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  var plain = !(passive || once$$1 || capture);
  return {
    name: name,
    plain: plain,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

// #6552
function prioritizePlainEvents (a, b) {
  return a.plain ? -1 : b.plain ? 1 : 0
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  var toAdd = [];
  var hasModifier = false;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (!event.plain) { hasModifier = true; }
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      event.handler = cur;
      toAdd.push(event);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  if (toAdd.length) {
    if (hasModifier) { toAdd.sort(prioritizePlainEvents); }
    for (var i = 0; i < toAdd.length; i++) {
      var event$1 = toAdd[i];
      add(event$1.name, event$1.handler, event$1.once, event$1.capture, event$1.passive);
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        (last).text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (comp.__esModule && comp.default) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
      data && data.slot != null
    ) {
      var name = child.data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots
}

function isWhitespace (node) {
  return node.isComment || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure((name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure((name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = (parentVnode.data && parentVnode.data.attrs) || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function checkOptionType (vm, name) {
  var option = vm.$options[name];
  if (!isPlainObject(option)) {
    warn(
      ("component option \"" + name + "\" should be an object."),
      vm
    );
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      if (isReservedAttribute(key) || config.isReservedAttr(key)) {
        warn(
          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  "development" !== 'production' && checkOptionType(vm, 'computed');
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  "development" !== 'production' && checkOptionType(vm, 'methods');
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  "development" !== 'production' && checkOptionType(vm, 'watch');
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
        ? Reflect.ownKeys(inject).filter(function (key) {
          /* istanbul ignore next */
          return Object.getOwnPropertyDescriptor(inject, key).enumerable
        })
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key];
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if ("development" !== 'production' && !source) {
        warn(("Injection \"" + key + "\" not found"), vm);
      }
    }
    return result
  }
}

/*  */

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
  var vnode = Ctor.options.render.call(null, h, {
    data: data,
    props: props,
    children: children,
    parent: context,
    listeners: data.on || emptyObject,
    injections: resolveInject(Ctor.options.inject, context),
    slots: function () { return resolveSlots(children, context); }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    vnode.functionalOptions = Ctor.options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    warn(
      'Avoid using non-primitive value as key, ' +
      'use string/number value instead.',
      context
    );
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && isUndef(child.ns)) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      props = extend(extend({}, bindObject), props);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && "development" !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1
  } else {
    return keyCodes !== eventKeyCode
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var tree = this._staticTrees[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = this._staticTrees[index] =
    this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(ours, existing) : ours;
      }
    }
  }
  return data
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$vnode = vm.$options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', vm.$options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive$$1(vm, '$listeners', vm.$options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // if the parent didn't update, the slot nodes will be the ones from
      // last render. They need to be cloned to ensure "freshness" for this render.
      for (var key in vm.$slots) {
        var slot = vm.$slots[key];
        if (slot._rendered) {
          vm.$slots[key] = cloneVNodes(slot, true /* deep */);
        }
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (true) {
        vnode = vm.$options.renderError
          ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
          : vm._vnode;
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // internal render helpers.
  // these are exposed on the instance prototype to reduce generated render
  // code size.
  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
  Vue.prototype._g = bindObjectListeners;
}

/*  */

var uid$1 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-init:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(((vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue$3)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (true) {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (true) {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp, Array];

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (cache, current, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        if (cachedNode !== current) {
          pruneCacheEntry(cachedNode);
        }
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry (vnode) {
  if (vnode) {
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created () {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this.cache, this._vnode, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this.cache, this._vnode, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.4.4';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if ("development" !== 'production' && !elmToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.elm = elm;
      vnode.isAsyncPlaceholder = true;
      return true
    }
    if (true) {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !bailed
              ) {
                bailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !bailed
              ) {
                bailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (isDef(vnode.tag)) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            }
            ancestor = ancestor.parent;
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers && modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }
  // check capture modifier
  if (modifiers && modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers && modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers && modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }
  var events;
  if (modifiers && modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }
  var newHandler = { value: value, modifiers: modifiers };
  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

function getAndRemoveAttr (el, name) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var modelRs = parseModel(value);
  if (modelRs.idx === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (modelRs.exp) + ", " + (modelRs.idx) + ", " + assignment + ")")
  }
}

/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;

function parseModel (val) {
  str = val;
  len = str.length;
  index$1 = expressionPos = expressionEndPos = 0;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    return {
      exp: val,
      idx: null
    }
  }

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.substring(0, expressionPos),
    idx: val.substring(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (true) {
    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (tag === 'input' && dynamicType) {
      warn$1(
        "<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" +
        "v-model does not support dynamic input types. Use v-if branches instead."
      );
    }
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (true) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
  );
  addHandler(el, CHECKBOX_RADIO_TOKEN,
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + value + "=$$a.concat([$$v]))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, CHECKBOX_RADIO_TOKEN, genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;
  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  var event;
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    // Chrome fires microtasks in between click/change, leads to #4521
    event = isChrome ? 'click' : 'change';
    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  if (once$$1) {
    var oldHandler = handler;
    var _target = target$1; // save current target element in closure
    handler = function (ev) {
      var res = arguments.length === 1
        ? oldHandler(ev)
        : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, handler, capture, _target);
      }
    };
  }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, vnode, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (
  elm,
  vnode,
  checkVal
) {
  return (!elm.composing && (
    vnode.tag === 'option' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers) && modifiers.number) {
    return toNumber(value) !== toNumber(newVal)
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser && window.requestAnimationFrame
  ? window.requestAnimationFrame.bind(window)
  : setTimeout;

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$options._renderChildren;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var body = document.body;
    var f = body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if ("development" !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if ("development" !== 'production' &&
    config.productionTip !== false &&
    inBrowser && typeof console !== 'undefined'
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

// check whether current browser encodes a char inside attribute values
function shouldDecode (content, encoded) {
  var div = document.createElement('div');
  div.innerHTML = "<div a=\"" + content + "\"/>";
  return div.innerHTML.indexOf(encoded) > 0
}

// #3663
// IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});

function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+')
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var expression = parseText(staticClass, options.delimiters);
    if (expression) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (true) {
      var expression = parseText(staticStyle, options.delimiters);
      if (expression) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

var modules$1 = [
  klass$1,
  style$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      attrs[i] = {
        name: args[1],
        value: decodeAttr(
          value,
          options.shouldDecodeNewlines
        )
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function endPre (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = {
        type: 1,
        tag: tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        parent: currentParent,
        children: []
      };
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        preTransforms[i](element, options);
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else {
        processFor(element);
        processIf(element);
        processOnce(element);
        processKey(element);

        // determine whether this is a plain element after
        // removing structural attributes
        element.plain = !element.key && !attrs.length;

        processRef(element);
        processSlot(element);
        processComponent(element);
        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
          transforms[i$1](element, options);
        }
        processAttrs(element);
      }

      function checkRootConstraints (el) {
        if (true) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (true) {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        endPre(element);
      }
      // apply post-transforms
      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
        postTransforms[i$2](element, options);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      endPre(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (true) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var expression;
        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      "development" !== 'production' && warn$2(
        ("Invalid v-for expression: " + exp)
      );
      return
    }
    el.for = inMatch[2].trim();
    var alias = inMatch[1].trim();
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      el.alias = iteratorMatch[1].trim();
      el.iterator1 = iteratorMatch[2].trim();
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim();
      }
    } else {
      el.alias = alias;
    }
  }
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (true) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      addAttr(el, 'slot', slotTarget);
    }
    if (el.tag === 'template') {
      el.slotScope = getAndRemoveAttr(el, 'scope');
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (true) {
        var expression = parseText(value, delimiters);
        if (expression) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    var handler = events[name];
    // #5330: warn click.right, since right clicks do not actually fire click events.
    if ("development" !== 'production' &&
      name === 'click' &&
      handler && handler.modifiers && handler.modifiers.right
    ) {
      warn(
        "Use \"contextmenu\" instead of \"click.right\" since right clicks " +
        "do not actually fire \"click\" events."
      );
    }
    res += "\"" + name + "\":" + (genHandler(name, handler)) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    return isMethodPath || isFunctionExpression
      ? handler.value
      : ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? handler.value + '($event)'
      : isFunctionExpression
        ? ("(" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var alias = keyCodes[key];
  return ("_k($event.keyCode," + (JSON.stringify(key)) + (alias ? ',' + JSON.stringify(alias) : '') + ")")
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  if (el.slotTarget) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length > 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  return "{key:" + key + ",fn:function(" + (String(el.attrsMap.scope)) + "){" +
    "return " + (el.tag === 'template'
      ? genChildren(el, state) || 'void 0'
      : genElement(el, state)) + "}}"
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// check valid identifier for v-for
var identRE = /[A-Za-z_$][\w$]*/;

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (ident, type, text, errors) {
  if (typeof ident === 'string' && !identRE.test(ident)) {
    errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
      );
    } else {
      errors.push(("invalid expression: " + (text.trim())));
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = options || {};

    /* istanbul ignore if */
    if (true) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (true) {
      if (compiled.errors && compiled.errors.length) {
        warn(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (true) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (true) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  optimize(ast, options);
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (true) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(((this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue$3.compile = compileToFunctions;

module.exports = Vue$3;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * Register and event to listen on specified element once.
 * @param {Element} element to listen on
 * @param {String} event to listen for
 * @param {Function} callback when event fires
 */

// Production steps of ECMA-262, Edition 6, 22.1.2.1
// es6-ified by @alexsasharegan
if (!Array.from) {
    Array.from = function () {
        var toStr = Object.prototype.toString;
        var isCallable = function isCallable(fn) {
            return typeof fn === "function" || toStr.call(fn) === "[object Function]";
        };
        var toInteger = function toInteger(value) {
            var number = Number(value);
            if (isNaN(number)) {
                return 0;
            }
            if (number === 0 || !isFinite(number)) {
                return number;
            }
            return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
        };
        var maxSafeInteger = Math.pow(2, 53) - 1;
        var toLength = function toLength(value) {
            return Math.min(Math.max(toInteger(value), 0), maxSafeInteger);
        };

        // The length property of the from method is 1.
        return function from(arrayLike /*, mapFn, thisArg */) {
            // 1. Let C be the this value.
            var C = this;

            // 2. Let items be ToObject(arrayLike).
            var items = Object(arrayLike);

            // 3. ReturnIfAbrupt(items).
            if (arrayLike == null) {
                throw new TypeError("Array.from requires an array-like object - not null or undefined");
            }

            // 4. If mapfn is undefined, then let mapping be false.
            var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
            var T = void 0;

            if (typeof mapFn !== "undefined") {
                // 5. else
                // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
                if (!isCallable(mapFn)) {
                    throw new TypeError("Array.from: when provided, the second argument must be a function");
                }

                // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
                if (arguments.length > 2) {
                    T = arguments[2];
                }
            }

            // 10. Let lenValue be Get(items, "length").
            // 11. Let len be ToLength(lenValue).
            var len = toLength(items.length);

            // 13. If IsConstructor(C) is true, then
            // 13. a. Let A be the result of calling the [[Construct]] internal method
            // of C with an argument list containing the single item len.
            // 14. a. Else, Let A be ArrayCreate(len).
            var A = isCallable(C) ? Object(new C(len)) : new Array(len);

            // 16. Let k be 0.
            var k = 0;
            // 17. Repeat, while k < len??? (also steps a - h)
            var kValue = void 0;
            while (k < len) {
                kValue = items[k];
                if (mapFn) {
                    A[k] = typeof T === "undefined" ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                } else {
                    A[k] = kValue;
                }
                k += 1;
            }
            // 18. Let putStatus be Put(A, "length", len, true).
            A.length = len;
            // 20. Return A.
            return A;
        };
    }();
}

// https://tc39.github.io/ecma262/#sec-array.prototype.find
// Needed for IE support
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function value(predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            var o = Object(this);

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;

            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }

            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];

            // 5. Let k be 0.
            var k = 0;

            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, ?? kValue, k, O ??)).
                // d. If testResult is true, return kValue.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return kValue;
                }
                // e. Increase k by 1.
                k++;
            }

            // 7. Return undefined.
            return undefined;
        }
    });
}

if (!Array.isArray) {
    Array.isArray = function (arg) {
        return Object.prototype.toString.call(arg) === "[object Array]";
    };
}

// Static
var from = Array.from;
var isArray = Array.isArray;

// Instance
var arrayIncludes = function arrayIncludes(array, value) {
    return array.indexOf(value) !== -1;
};

function concat() {
    return Array.prototype.concat.apply([], arguments);
}

/**
 * Aliasing Object[method] allows the minifier to shorten methods to a single character variable,
 * as well as giving BV a chance to inject polyfills.
 * As long as we avoid
 * - import * as Object from "utils/object"
 * all unused exports should be removed by tree-shaking.
 */

// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
if (typeof Object.assign != "function") {
    Object.assign = function (target, varArgs) {
        // .length of function is 2

        if (target == null) {
            // TypeError if undefined or null
            throw new TypeError("Cannot convert undefined or null to object");
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];

            if (nextSource != null) {
                // Skip over if undefined or null
                for (var nextKey in nextSource) {
                    // Avoid bugs when hasOwnProperty is shadowed
                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
        }
        return to;
    };
}

// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Polyfill
if (!Object.is) {
    Object.is = function (x, y) {
        // SameValue algorithm
        if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    };
}

var assign = Object.assign;

var keys = Object.keys;
var defineProperties = Object.defineProperties;
var defineProperty = Object.defineProperty;




var create = Object.create;



function readonlyDescriptor() {
    return { enumerable: true, configurable: false, writable: false };
}

/*
 * Element closest polyfill, if needed
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
 * Returns null of not found
 */
if (typeof document !== "undefined" && window.Element && !Element.prototype.closest) {
    Element.prototype.closest = function (s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s);
        var el = this;
        var i = void 0;
        do {
            i = matches.length;
            // eslint-disable-next-line no-empty
            while (--i >= 0 && matches.item(i) !== el) {}
        } while (i < 0 && (el = el.parentElement));
        return el;
    };
}

/*
 * Element.matches polyfill, if needed
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 * Returns true or false
 */
if (typeof document !== "undefined" && window.Element && !Element.prototype.matches) {
    var proto = Element.prototype;
    proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector || function (s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s);
        var i = matches.length;
        // eslint-disable-next-line no-empty
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1;
    };
}

var dom = {};

// Determine if an element is an HTML Element
dom.isElement = function (el) {
    return el && el.nodeType === Node.ELEMENT_NODE;
};

// Determine if an HTML element is visible - Faster than CSS check
dom.isVisible = function (el) {
    return dom.isElement(el) && document.body.contains(el) && (el.offsetParent !== null || el.offsetWidth > 0 || el.offsetHeight > 0);
};

// Determine if an element is disabled
dom.isDisabled = function (el) {
    return !dom.isElement(el) || el.disabled || el.classList.contains('disabled') || Boolean(el.getAttribute('disabled'));
};

// Cause/wait-for an element to reflow it's content (adjusting it's height/width)
dom.reflow = function (el) {
    // requsting an elements offsetHight will trigger a reflow of the element content
    return dom.isElement(el) && el.offsetHeight;
};

// Select all elements matching selector. Returns [] if none found
dom.selectAll = function (selector, root) {
    if (!dom.isElement(root)) {
        root = document;
    }
    return from(root.querySelectorAll(selector));
};

// Select a single element, returns null if not found
dom.select = function (selector, root) {
    if (!dom.isElement(root)) {
        root = document;
    }
    return root.querySelector(selector) || null;
};

// Finds closest element matching selector. Returns null if not found
dom.closest = function (selector, root) {
    if (!dom.isElement(root)) {
        return null;
    }
    var el = root.closest(selector);
    return el === root ? null : el;
};

// Get an element given an ID
dom.getById = function (id) {
    return document.getElementById(/^#/.test(id) ? id.slice(1) : id) || null;
};

// Add a class to an element
dom.addClass = function (el, className) {
    if (className && dom.isElement(el)) {
        el.classList.add(className);
    }
};

// Remove a class from an element
dom.removeClass = function (el, className) {
    if (className && dom.isElement(el)) {
        el.classList.remove(className);
    }
};

// Test if an element has a class
dom.hasClass = function (el, className) {
    if (className && dom.isElement(el)) {
        return el.classList.contains(className);
    }
    return false;
};

// Determine if an element matches a selector
dom.matches = function (el, selector) {
    if (!dom.isElement(el)) {
        return false;
    }
    return el.matches(selector);
};

// Set an attribute on an element
dom.setAttr = function (el, attr, value) {
    if (attr && dom.isElement(el)) {
        el.setAttribute(attr, value);
    }
};

// Remove an attribute from an element
dom.removeAttr = function (el, attr) {
    if (attr && dom.isElement(el)) {
        el.removeAttribute(attr);
    }
};

// Get an attribute value from an element (returns null if not found)
dom.getAttr = function (el, attr) {
    if (attr && dom.isElement(el)) {
        return el.getAttribute(attr);
    }
    return null;
};

// Retur nteh Bounding Client Rec of an element. Retruns null if not an element
dom.getBCR = function (el) {
    return dom.isElement(el) ? el.getBoundingClientRect() : null;
};

// Get computed style object for an element
dom.getCS = function (el) {
    return dom.isElement(el) ? window.getComputedStyle(el) : {};
};

// Return an element's offset wrt document element
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.offset
dom.offset = function (el) {
    if (dom.isElement(el)) {
        if (!el.getClientRects().length) {
            return { top: 0, left: 0 };
        }
        var bcr = dom.getBCR(el);
        var win = el.ownerDocument.defaultView;
        return {
            top: bcr.top + win.pageYOffset,
            left: bcr.left + win.pageXOffset
        };
    }
};

// Return an element's offset wrt to it's offsetParent
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.position
dom.position = function (el) {
    if (!dom.isElement(el)) {
        return;
    }
    var parentOffset = { top: 0, left: 0 };
    var offset = void 0;
    var offsetParent = void 0;
    if (dom.getCS(el).position === 'fixed') {
        offset = dom.getBCR(el);
    } else {
        offset = dom.offset(el);
        var doc = el.ownerDocument;
        offsetParent = el.offsetParent || doc.documentElement;
        while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && dom.getCS(offsetParent).position === 'static') {
            offsetParent = offsetParent.parentNode;
        }
        if (offsetParent && offsetParent !== el && offsetParent.nodeType === Node.ELEMENT_NODE) {
            parentOffset = dom.offset(offsetParent);
            parentOffset.top += parseFloat(dom.getCS(offsetParent).borderTopWidth);
            parentOffset.left += parseFloat(dom.getCS(offsetParent).borderLeftWidth);
        }
    }
    return {
        top: offset.top - parentOffset.top - parseFloat(dom.getCS(el).marginTop),
        left: offset.left - parentOffset.left - parseFloat(dom.getCS(el).marginLeft)
    };
};

// Attach an event listener to an element
dom.eventOn = function (el, evtName, handler) {
    if (el && el.addEventListener) {
        el.addEventListener(evtName, handler);
    }
};

// Remove an event listener from an element
dom.eventOff = function (el, evtName, handler) {
    if (el && el.removeEventListener) {
        el.removeEventListener(evtName, handler);
    }
};

var isElement = dom.isElement;
var isVisible = dom.isVisible;
var isDisabled = dom.isDisabled;
var reflow = dom.reflow;
var closest = dom.closest;
var getById = dom.getById;
var selectAll = dom.selectAll;
var select = dom.select;
var addClass = dom.addClass;
var removeClass = dom.removeClass;
var hasClass = dom.hasClass;
var matches = dom.matches;
var setAttr = dom.setAttr;
var removeAttr = dom.removeAttr;
var getAttr = dom.getAttr;
var getBCR = dom.getBCR;
var getCS = dom.getCS;
var offset = dom.offset;
var position = dom.position;
var eventOn = dom.eventOn;
var eventOff = dom.eventOff;

function identity(x) {
    return x;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty$1 = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



















var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/**
 * @param {[]|{}} props
 * @param {Function} transformFn
 */
function copyProps(props) {
    var transformFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;

    if (isArray(props)) {
        return props.map(transformFn);
    }
    // Props as an object.
    var copied = {};

    for (var prop in props) {
        if (props.hasOwnProperty(prop)) {
            if ((typeof prop === "undefined" ? "undefined" : _typeof(prop)) === "object") {
                copied[transformFn(prop)] = assign({}, props[prop]);
            } else {
                copied[transformFn(prop)] = props[prop];
            }
        }
    }

    return copied;
}

/**
 * @param {string} str
 */
function lowerFirst(str) {
    if (typeof str !== "string") {
        str = String(str);
    }
    return str.charAt(0).toLowerCase() + str.slice(1);
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 * Returns boolean true or false
 */
function looseEqual(a, b) {
  if (a === b) return true;
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = isArray(a);
      var isArrayB = isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i]);
        });
      } else if (!isArrayA && !isArrayB) {
        var keysA = keys(a);
        var keysB = keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key]);
        });
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}

"use strict";
function concat$1() {
  return Array.prototype.concat.apply([], arguments);
}function mergeData() {
  for (var e = __assign({}, arguments[0]), a = 1; a < arguments.length; a++) for (var s = 0, t = keys$1(arguments[a]); s < t.length; s++) {
    var c = t[s];if (void 0 !== e[c]) switch (c) {case "class":case "style":case "directives":
        e[c] = concat$1(e[c], arguments[a][c]);break;case "staticClass":
        e[c] && (e[c] = e[c].trim() + " "), e[c] += arguments[a][c].trim();break;case "on":case "nativeOn":
        for (var r = 0, o = keys$1(arguments[a][c]); r < o.length; r++) {
          var n = o[r];e[c][n] ? e[c][n] = concat$1(arguments[a][c][n], e[c][n]) : e[c][n] = arguments[a][c][n];
        }break;case "attrs":case "props":case "domProps":case "scopedSlots":case "staticStyle":case "hook":case "transition":
        e[c] = __assign({}, e[c], arguments[a][c]);break;case "slot":case "key":case "ref":case "tag":case "show":case "keepAlive":default:
        e[c] = arguments[a][c];} else e[c] = arguments[a][c];
  }return e;
}var __assign = Object.assign || function (e) {
  for (var a, s = 1, t = arguments.length; s < t; s++) {
    a = arguments[s];for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (e[c] = a[c]);
  }return e;
};
var keys$1 = Object.keys;var lib_common = mergeData;

function memoize(fn) {
    var cache = create(null);

    return function memoizedFn() {
        var args = JSON.stringify(arguments);
        return cache[args] = cache[args] || fn.apply(null, arguments);
    };
}

/**
 * Observe a DOM element changes, falls back to eventListener mode
 * @param {Element} el The DOM element to observe
 * @param {Function} callback callback to be called on change
 * @param {object} [opts={childList: true, subtree: true}] observe options
 * @see http://stackoverflow.com/questions/3219758
 */
function observeDOM(el, callback, opts) {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    var eventListenerSupported = window.addEventListener;

    // Handle case where we might be passed a vue instance
    el = el ? el.$el || el : null;
    if (!isElement(el)) {
        // We can't observe somthing that isn't an element
        return null;
    }

    var obs = null;

    if (MutationObserver) {
        // Define a new observer
        obs = new MutationObserver(function (mutations) {
            var changed = false;
            // A Mutation can contain several change records, so we loop through them to see what has changed.
            // We break out of the loop early if any "significant" change has been detected
            for (var i = 0; i < mutations.length && !changed; i++) {
                // The muttion record
                var mutation = mutations[i];
                // Mutation Type
                var type = mutation.type;
                // DOM Node (could be any DOM Node type - HTMLElement, Text, comment, etc)
                var target = mutation.target;
                if (type === 'characterData' && target.nodeType === Node.TEXT_NODE) {
                    // We ignore nodes that are not TEXt (i.e. comments, etc) as they don't change layout
                    changed = true;
                } else if (type === 'attributes') {
                    changed = true;
                } else if (type === 'childList' && (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0)) {
                    // This includes HTMLElement and Text Nodes being added/removed/re-arranged
                    changed = true;
                }
            }
            if (changed) {
                // We only call the callback if a change that could affect layout/size truely happened.
                callback();
            }
        });

        // Have the observer observe foo for changes in children, etc
        obs.observe(el, assign({ childList: true, subtree: true }, opts));
    } else if (eventListenerSupported) {
        // Legacy interface. most likely not used in modern browsers
        el.addEventListener('DOMNodeInserted', callback, false);
        el.addEventListener('DOMNodeRemoved', callback, false);
    }

    // We return a reference to the observer so that obs.disconnect() can be called if necessary
    // To reduce overhead when the root element is hiiden
    return obs;
}

/**
 * Given an array of properties or an object of property keys,
 * plucks all the values off the target object.
 * @param {{}|string[]} keysToPluck
 * @param {{}} objToPluck
 * @param {Function} transformFn
 * @return {{}}
 */
function pluckProps(keysToPluck, objToPluck) {
    var transformFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : identity;

    return (isArray(keysToPluck) ? keysToPluck.slice() : keys(keysToPluck)).reduce(function (memo, prop) {
        return memo[transformFn(prop)] = objToPluck[prop], memo;
    }, {});
}

/**
 * @param {string} str
 */
function upperFirst(str) {
    if (typeof str !== "string") {
        str = String(str);
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * @param {string} prefix
 * @param {string} value
 */
function prefixPropName(prefix, value) {
  return prefix + upperFirst(value);
}

/**
 * Suffix can be a falsey value so nothing is appended to string.
 * (helps when looping over props & some shouldn't change)
 * Use data last parameters to allow for currying.
 * @param {string} suffix
 * @param {string} str
 */
function suffixPropName(suffix, str) {
  return str + (suffix ? upperFirst(suffix) : "");
}

/**
 * @param {string} prefix
 * @param {string} value
 */
function unPrefixPropName(prefix, value) {
  return lowerFirst(value.replace(prefix, ""));
}

/**
 * Log a warning message to the console with bootstrap-vue formatting sugar.
 * @param {string} message
 */
function warn(message) {
  console.warn("[Bootstrap-Vue warn]: " + message);
}

var props = {
    disabled: {
        type: Boolean,
        default: false
    },
    ariaLabel: {
        type: String,
        default: "Close"
    },
    textVariant: {
        type: String,
        default: null
    }
};

var bBtnClose = {
    functional: true,
    props: props,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            listeners = _ref.listeners,
            children = _ref.children;

        var componentData = {
            staticClass: "close",
            class: defineProperty$1({}, "text-" + props.textVariant, props.textVariant),
            attrs: {
                type: "button",
                disabled: props.disabled,
                "aria-label": props.ariaLabel ? String(props.ariaLabel) : null
            },
            on: {
                click: function click(e) {
                    // Ensure click on button HTML content is also disabled
                    if (props.disabled && e instanceof Event) {
                        e.stopPropagation();
                        e.preventDefault();
                    }
                }
            }
        };
        // Careful not to override the slot with innerHTML
        if (!children.length) {
            componentData.domProps = { innerHTML: "&times;" };
        }
        return h("button", lib_common(data, componentData), children);
    }
};

var alert = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _vm.localShow ? _c('div', { class: _vm.classObject, attrs: { "role": "alert", "aria-live": "polite", "aria-atomic": "true" } }, [_vm.dismissible ? _c('b-btn-close', { attrs: { "aria-label": _vm.dismissLabel }, on: { "click": _vm.dismiss } }, [_vm._t("dismiss")], 2) : _vm._e(), _vm._t("default")], 2) : _vm._e();
    }, staticRenderFns: [],
    components: { bBtnClose: bBtnClose },
    model: {
        prop: 'show',
        event: 'input'
    },
    data: function data() {
        return {
            countDownTimerId: null,
            dismissed: false
        };
    },

    computed: {
        classObject: function classObject() {
            return ['alert', this.alertVariant, this.dismissible ? 'alert-dismissible' : ''];
        },
        alertVariant: function alertVariant() {
            var variant = this.variant;
            return 'alert-' + variant;
        },
        localShow: function localShow() {
            return !this.dismissed && (this.countDownTimerId || this.show);
        }
    },
    props: {
        variant: {
            type: String,
            default: 'info'
        },
        dismissible: {
            type: Boolean,
            default: false
        },
        dismissLabel: {
            type: String,
            default: 'Close'
        },
        show: {
            type: [Boolean, Number],
            default: false
        }
    },
    watch: {
        show: function show() {
            this.showChanged();
        }
    },
    mounted: function mounted() {
        this.showChanged();
    },
    destroyed: function destroyed() {
        this.clearCounter();
    },

    methods: {
        dismiss: function dismiss() {
            this.clearCounter();
            this.dismissed = true;
            this.$emit('dismissed');
            this.$emit('input', false);
            if (typeof this.show === 'number') {
                this.$emit('dismiss-count-down', 0);
                this.$emit('input', 0);
            } else {
                this.$emit('input', false);
            }
        },
        clearCounter: function clearCounter() {
            if (this.countDownTimerId) {
                clearInterval(this.countDownTimerId);
                this.countDownTimerId = null;
            }
        },
        showChanged: function showChanged() {
            var _this = this;

            // Reset counter status
            this.clearCounter();
            // Reset dismiss status
            this.dismissed = false;

            // No timer for boolean values
            if (this.show === true || this.show === false || this.show === null || this.show === 0) {
                return;
            }

            // Start counter
            var dismissCountDown = this.show;
            this.countDownTimerId = setInterval(function () {
                if (dismissCountDown < 1) {
                    _this.dismiss();
                    return;
                }
                dismissCountDown--;
                _this.$emit('dismiss-count-down', dismissCountDown);
                _this.$emit('input', dismissCountDown);
            }, 1000);
        }
    }
};

var props$1 = {
    tag: {
        type: String,
        default: "span"
    },
    variant: {
        type: String,
        default: "secondary"
    },
    pill: {
        type: Boolean,
        default: false
    }
};

var badge = {
    functional: true,
    props: props$1,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        return h(props.tag, lib_common(data, {
            staticClass: "badge",
            class: [!props.variant ? "badge-secondary" : "badge-" + props.variant, { "badge-pill": Boolean(props.pill) }]
        }), children);
    }
};

/**
 * The Link component is used in many other BV components.
 * As such, sharing its props makes supporting all its features easier.
 * However, some components need to modify the defaults for their own purpose.
 * Prefer sharing a fresh copy of the props to ensure mutations
 * do not affect other component references to the props.
 *
 * https://github.com/vuejs/vue-router/blob/dev/src/components/link.js
 * @return {{}}
 */
function propsFactory() {
    return {
        href: {
            type: String,
            default: null
        },
        rel: {
            type: String,
            default: null
        },
        target: {
            type: String,
            default: "_self"
        },
        active: {
            type: Boolean,
            default: false
        },
        activeClass: {
            type: String,
            default: "active"
        },
        append: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        event: {
            type: [String, Array],
            default: "click"
        },
        exact: {
            type: Boolean,
            default: false
        },
        exactActiveClass: {
            type: String,
            default: "active"
        },
        replace: {
            type: Boolean,
            default: false
        },
        routerTag: {
            type: String,
            default: "a"
        },
        to: {
            type: [String, Object],
            default: null
        }
    };
}

var props$5 = propsFactory();

function pickLinkProps(propsToPick) {
    var freshLinkProps = propsFactory();
    // Normalize everything to array.
    propsToPick = concat(propsToPick);

    return keys(freshLinkProps).reduce(function (memo, prop) {
        if (arrayIncludes(propsToPick, prop)) {
            memo[prop] = freshLinkProps[prop];
        }

        return memo;
    }, {});
}





function computeTag(props, parent) {
    return Boolean(parent.$router) && props.to && !props.disabled ? "router-link" : "a";
}

function computeHref(_ref, tag) {
    var disabled = _ref.disabled,
        href = _ref.href,
        to = _ref.to;

    // We've already checked the parent.$router in computeTag,
    // so router-link means live router.
    // When deferring to Vue Router's router-link,
    // don't use the href attr at all.
    // Must return undefined for router-link to populate href.
    if (tag === "router-link") return void 0;
    // If href explicitly provided
    if (href) return href;
    // Reconstruct href when `to` used, but no router
    if (to) {
        // Fallback to `to` prop (if `to` is a string)
        if (typeof to === "string") return to;
        // Fallback to `to.path` prop (if `to` is an object)
        if ((typeof to === "undefined" ? "undefined" : _typeof(to)) === "object" && typeof to.path === "string") return to.path;
    }
    // If nothing is provided use '#'
    return "#";
}

function computeRel(_ref2) {
    var target = _ref2.target,
        rel = _ref2.rel;

    if (target === "_blank" && rel === null) {
        return "noopener";
    }
    return rel || null;
}

function clickHandlerFactory(_ref3) {
    var disabled = _ref3.disabled,
        tag = _ref3.tag,
        href = _ref3.href,
        suppliedHandler = _ref3.suppliedHandler,
        parent = _ref3.parent;

    var isRouterLink = tag === "router-link";

    return function onClick(e) {
        if (disabled && e instanceof Event) {
            // Stop event from bubbling up.
            e.stopPropagation();
            // Kill the event loop attached to this specific EventTarget.
            e.stopImmediatePropagation();
        } else {
            parent.$root.$emit("clicked::link", e);

            if (isRouterLink && e.target.__vue__) {
                e.target.__vue__.$emit("click", e);
            }
            if (typeof suppliedHandler === "function") {
                suppliedHandler.apply(undefined, arguments);
            }
        }

        if (!isRouterLink && href === "#" || disabled) {
            // Stop scroll-to-top behavior or navigation.
            e.preventDefault();
        }
    };
}

var bLink = {
    functional: true,
    props: propsFactory(),
    render: function render(h, _ref4) {
        var props = _ref4.props,
            data = _ref4.data,
            parent = _ref4.parent,
            children = _ref4.children;

        var tag = computeTag(props, parent),
            rel = computeRel(props),
            href = computeHref(props, tag),
            eventType = tag === "router-link" ? "nativeOn" : "on",
            suppliedHandler = (data[eventType] || {}).click,
            handlers = { click: clickHandlerFactory({ tag: tag, href: href, disabled: props.disabled, suppliedHandler: suppliedHandler, parent: parent }) };

        var componentData = lib_common(data, {
            class: [props.active ? props.exact ? props.exactActiveClass : props.activeClass : null, { disabled: props.disabled }],
            attrs: {
                rel: rel,
                href: href,
                target: props.target,
                "aria-disabled": tag === "a" ? props.disabled ? "true" : "false" : null
            },
            props: assign(props, { tag: props.routerTag })
        });

        // If href prop exists on router-link (even undefined or null) it fails working on SSR
        if (!componentData.attrs.href) {
            delete componentData.attrs.href;
        }

        // We want to overwrite any click handler since our callback
        // will invoke the supplied handler if !props.disabled
        componentData[eventType] = assign(componentData[eventType] || {}, handlers);

        return h(tag, componentData, children);
    }
};

var props$4 = assign(propsFactory(), {
    text: {
        type: String,
        default: null
    },
    active: {
        type: Boolean,
        default: false
    },
    href: {
        type: String,
        default: "#"
    },
    ariaCurrent: {
        type: String,
        default: "location"
    }
});

var BreadcrumbLink = {
    functional: true,
    props: props$4,
    render: function render(h, _ref) {
        var suppliedProps = _ref.props,
            data = _ref.data,
            children = _ref.children;

        var tag = suppliedProps.active ? "span" : bLink;

        var componentData = {
            props: pluckProps(props$4, suppliedProps),
            domProps: { innerHTML: suppliedProps.text }
        };

        if (suppliedProps.active) {
            componentData.attrs = { "aria-current": suppliedProps.ariaCurrent };
        } else {
            componentData.attrs = { href: suppliedProps.href };
        }

        return h(tag, lib_common(data, componentData), children);
    }
};

var props$3 = assign({}, props$4, {
    text: {
        type: String,
        default: null
    },
    href: {
        type: String,
        default: null
    }
});

var BreadcrumbItem = {
    functional: true,
    props: props$3,
    render: function render(h, _ref) {
        var props$$1 = _ref.props,
            data = _ref.data,
            children = _ref.children;

        return h("li", lib_common(data, {
            staticClass: "breadcrumb-item",
            class: { active: props$$1.active },
            attrs: { role: "presentation" }
        }), [h(BreadcrumbLink, { props: props$$1 }, children)]);
    }
};

var props$2 = {
    items: {
        type: Array,
        default: null
    }
};

var breadcrumb = {
    functional: true,
    props: props$2,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        var childNodes = children;
        // Build child nodes from items if given.
        if (isArray(props.items)) {
            var activeDefined = false;
            childNodes = props.items.map(function (item, idx) {
                if ((typeof item === "undefined" ? "undefined" : _typeof(item)) !== "object") {
                    item = { text: item };
                }
                // Copy the value here so we can normalize it.
                var active = item.active;
                if (active) {
                    activeDefined = true;
                }
                if (!active && !activeDefined) {
                    // Auto-detect active by position in list.
                    active = idx + 1 === props.items.length;
                }

                return h(BreadcrumbItem, { props: assign({}, item, { active: active }) });
            });
        }

        return h("ol", lib_common(data, { staticClass: "breadcrumb" }), childNodes);
    }
};

var btnProps = {
    block: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: null,
        validator: function validator(size) {
            return arrayIncludes(["sm", "", "lg"], size);
        }
    },
    variant: {
        type: String,
        default: null
    },
    type: {
        type: String,
        default: "button"
    },
    pressed: {
        // tri-state prop: true, false or null
        // => on, off, not a toggle
        type: Boolean,
        default: null
    }
};

var linkProps = propsFactory();
delete linkProps.href.default;
delete linkProps.to.default;
var linkPropKeys = keys(linkProps);

var props$6 = assign(linkProps, btnProps);

function handleFocus(evt) {
    if (evt.type === "focusin") {
        addClass(evt.target, "focus");
    } else if (evt.type === "focusout") {
        removeClass(evt.target, "focus");
    }
}

var bBtn = {
    functional: true,
    props: props$6,
    render: function render(h, _ref) {
        var _ref2;

        var props = _ref.props,
            data = _ref.data,
            listeners = _ref.listeners,
            children = _ref.children;

        var isLink = Boolean(props.href || props.to);
        var isToggle = typeof props.pressed === "boolean";
        var on = {
            click: function click(e) {
                if (props.disabled && e instanceof Event) {
                    e.stopPropagation();
                    e.preventDefault();
                } else if (isToggle) {
                    // Concat will normalize the value to an array
                    // without double wrapping an array value in an array.
                    concat(listeners["update:pressed"]).forEach(function (fn) {
                        if (typeof fn === "function") {
                            fn(!props.pressed);
                        }
                    });
                }
            }
        };

        if (isToggle) {
            on.focusin = handleFocus;
            on.focusout = handleFocus;
        }

        var componentData = {
            staticClass: "btn",
            class: [props.variant ? "btn-" + props.variant : "btn-secondary", (_ref2 = {}, defineProperty$1(_ref2, "btn-" + props.size, Boolean(props.size)), defineProperty$1(_ref2, "btn-block", props.block), defineProperty$1(_ref2, "disabled", props.disabled), defineProperty$1(_ref2, "active", props.pressed), _ref2)],
            props: isLink ? pluckProps(linkPropKeys, props) : null,
            attrs: {
                type: isLink ? null : props.type,
                disabled: isLink ? null : props.disabled,
                // Data attribute not used for js logic,
                // but only for BS4 style selectors.
                "data-toggle": isToggle ? "button" : null,
                "aria-pressed": isToggle ? String(props.pressed) : null,
                // Tab index is used when the component becomes a link.
                // Links are tabable, but don't allow disabled,
                // so we mimic that functionality by disabling tabbing.
                tabindex: props.disabled && isLink ? "-1" : null
            },
            on: on
        };

        return h(isLink ? bLink : "button", lib_common(data, componentData), children);
    }
};

var ITEM_SELECTOR = ['.btn:not(.disabled):not([disabled])', '.form-control:not(.disabled):not([disabled])', 'select:not(.disabled):not([disabled])', 'input[type="checkbox"]:not(.disabled)', 'input[type="radio"]:not(.disabled)'].join(',');

var buttonToolbar = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.classObject, attrs: { "role": "toolbar", "tabindex": _vm.keyNav ? '0' : null }, on: { "focusin": function focusin($event) {
                    if ($event.target !== $event.currentTarget) {
                        return null;
                    }_vm.focusFirst($event);
                }, "keydown": [function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "left", 37)) {
                        return null;
                    }if ('button' in $event && $event.button !== 0) {
                        return null;
                    }_vm.focusNext($event, true);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) {
                        return null;
                    }_vm.focusNext($event, true);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "right", 39)) {
                        return null;
                    }if ('button' in $event && $event.button !== 2) {
                        return null;
                    }_vm.focusNext($event, false);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) {
                        return null;
                    }_vm.focusNext($event, false);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "left", 37)) {
                        return null;
                    }if (!$event.shiftKey) {
                        return null;
                    }if ('button' in $event && $event.button !== 0) {
                        return null;
                    }_vm.focusFirst($event);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) {
                        return null;
                    }if (!$event.shiftKey) {
                        return null;
                    }_vm.focusFirst($event);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "right", 39)) {
                        return null;
                    }if (!$event.shiftKey) {
                        return null;
                    }if ('button' in $event && $event.button !== 2) {
                        return null;
                    }_vm.focusLast($event);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) {
                        return null;
                    }if (!$event.shiftKey) {
                        return null;
                    }_vm.focusLast($event);
                }] } }, [_vm._t("default")], 2);
    }, staticRenderFns: [],
    computed: {
        classObject: function classObject() {
            return ['btn-toolbar', this.justify && !this.vertical ? 'justify-content-between' : ''];
        }
    },
    props: {
        justify: {
            type: Boolean,
            default: false
        },
        keyNav: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        setItemFocus: function setItemFocus(item) {
            this.$nextTick(function () {
                item.focus();
            });
        },
        focusNext: function focusNext(e, prev) {
            if (!this.keyNav) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            var items = this.getItems();
            if (items.length < 1) {
                return;
            }
            var index = items.indexOf(e.target);
            if (prev && index > 0) {
                index--;
            } else if (!prev && index < items.length - 1) {
                index++;
            }
            if (index < 0) {
                index = 0;
            }
            this.setItemFocus(items[index]);
        },
        focusFirst: function focusFirst(e) {
            if (!this.keyNav) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            var items = this.getItems();
            if (items.length > 0) {
                this.setItemFocus(items[0]);
            }
        },
        focusLast: function focusLast(e) {
            if (!this.keyNav) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            var items = this.getItems();
            if (items.length > 0) {
                this.setItemFocus([items.length - 1]);
            }
        },
        getItems: function getItems() {
            var items = selectAll(ITEM_SELECTOR, this.$el);
            items.forEach(function (item) {
                // Ensure tabfocus is -1 on any new elements
                item.tabIndex = -1;
            });
            return items.filter(function (el) {
                return isVisible(el);
            });
        }
    },
    mounted: function mounted() {
        if (this.keyNav) {
            // Pre-set the tabindexes if the markup does not include tabindex="-1" on the toolbar items
            this.getItems();
        }
    }
};

var props$7 = {
    vertical: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: null,
        validator: function validator(size) {
            return arrayIncludes(["sm", "", "lg"], size);
        }
    },
    tag: {
        type: String,
        default: "div"
    },
    ariaRole: {
        type: String,
        default: "group"
    }
};

var buttonGroup = {
    functional: true,
    props: props$7,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        return h(props.tag, lib_common(data, {
            staticClass: "btn-group",
            class: defineProperty$1({
                "btn-group-vertical": props.vertical
            }, "btn-group-" + props.size, Boolean(props.size)),
            attrs: { "role": props.ariaRole }
        }), children);
    }
};

var props$8 = {
    id: {
        type: String,
        default: null
    },
    tag: {
        type: String,
        default: "div"
    }
};

var bInputGroupAddon = {
    functional: true,
    props: props$8,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        return h(props.tag, lib_common(data, {
            staticClass: 'input-group-addon',
            attrs: { id: props.id }
        }), children);
    }
};

var inputGroup = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.tag, { tag: "component", class: _vm.classObject, attrs: { "id": _vm.id || null, "role": "group" } }, [_vm._t("left", [_vm.left ? _c('b-input-group-addon', { attrs: { "id": _vm.id ? _vm.id + "_BV_addon_left_" : null }, domProps: { "innerHTML": _vm._s(_vm.left) } }) : _vm._e()]), _vm._t("default"), _vm._t("right", [_vm.right ? _c('b-input-group-addon', { attrs: { "id": _vm.id ? _vm.id + "_BV_addon_right_" : null }, domProps: { "innerHTML": _vm._s(_vm.right) } }) : _vm._e()])], 2);
    }, staticRenderFns: [],
    components: { bInputGroupAddon: bInputGroupAddon },
    computed: {
        classObject: function classObject() {
            return ['input-group', this.size ? 'input-group-' + this.size : '', this.state ? 'has-' + this.state : ''];
        }
    },
    props: {
        id: {
            type: String,
            defualt: null
        },
        size: {
            type: String,
            default: null
        },
        state: {
            type: String,
            default: null
        },
        left: {
            type: String,
            default: null
        },
        right: {
            type: String,
            default: null
        },
        tag: {
            type: String,
            default: 'div'
        }
    }
};

var props$9 = {
    id: {
        type: String,
        default: null
    },
    tag: {
        type: String,
        default: "div"
    }
};

var inputGroupButton = {
    functional: true,
    props: props$9,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        return h(props.tag, lib_common(data, {
            staticClass: 'input-group-btn',
            attrs: {
                id: props.id
            }
        }), children);
    }
};

var cardMixin = {
    props: {
        tag: {
            type: String,
            default: "div"
        },
        bgVariant: {
            type: String,
            default: null
        },
        borderVariant: {
            type: String,
            default: null
        },
        textVariant: {
            type: String,
            default: null
        }
    }
};

var clickoutMixin = {
    mounted: function mounted() {
        if (typeof document !== 'undefined') {
            document.documentElement.addEventListener('click', this._clickOutListener);
        }
    },
    destroyed: function destroyed() {
        if (typeof document !== 'undefined') {
            document.removeEventListener('click', this._clickOutListener);
        }
    },

    methods: {
        _clickOutListener: function _clickOutListener(e) {
            if (!this.$el.contains(e.target)) {
                if (this.clickOutListener) {
                    this.clickOutListener();
                }
            }
        }
    }
};

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.12.5
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var nativeHints = ['native code', '[object MutationObserverConstructor]'];

/**
 * Determine if a function is implemented natively (as opposed to a polyfill).
 * @method
 * @memberof Popper.Utils
 * @argument {Function | undefined} fn the function to check
 * @returns {Boolean}
 */
var isNative = function (fn) {
  return nativeHints.some(function (hint) {
    return (fn || '').toString().indexOf(hint) > -1;
  });
};

var isBrowser = typeof window !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var scheduled = false;
  var i = 0;
  var elem = document.createElement('span');

  // MutationObserver provides a mechanism for scheduling microtasks, which
  // are scheduled *before* the next task. This gives us a way to debounce
  // a function but ensure it's called *before* the next paint.
  var observer = new MutationObserver(function () {
    fn();
    scheduled = false;
  });

  observer.observe(elem, { attributes: true });

  return function () {
    if (!scheduled) {
      scheduled = true;
      elem.setAttribute('x-index', i);
      i = i + 1; // don't use compund (+=) because it doesn't get optimized in V8
    }
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

// It's common for MutationObserver polyfills to be seen in the wild, however
// these rely on Mutation Events which only occur when an element is connected
// to the DOM. The algorithm used in this module does not use a connected element,
// and so we must ensure that a *native* MutationObserver is available.
var supportsNativeMutationObserver = isBrowser && isNative(window.MutationObserver);

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsNativeMutationObserver ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element || ['HTML', 'BODY', '#document'].indexOf(element.nodeName) !== -1) {
    return window.document.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  // NOTE: 1 DOM access here
  var offsetParent = element && element.offsetParent;
  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return window.document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return window.document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = window.document.documentElement;
    var scrollingElement = window.document.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return +styles['border' + sideA + 'Width'].split('px')[0] + +styles['border' + sideB + 'Width'].split('px')[0];
}

/**
 * Tells if you are running Internet Explorer 10
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean} isIE10
 */
var isIE10 = undefined;

var isIE10$1 = function () {
  if (isIE10 === undefined) {
    isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
  }
  return isIE10;
};

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE10$1() ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = window.document.body;
  var html = window.document.documentElement;
  var computedStyle = isIE10$1() && window.getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck$1 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty$2 = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends$1 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends$1({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  if (isIE10$1()) {
    try {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } catch (err) {}
  } else {
    rect = element.getBoundingClientRect();
  }

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var isIE10 = isIE10$1();
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = +styles.borderTopWidth.split('px')[0];
  var borderLeftWidth = +styles.borderLeftWidth.split('px')[0];

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = +styles.marginTop.split('px')[0];
    var marginLeft = +styles.marginLeft.split('px')[0];

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var html = window.document.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = getScroll(html);
  var scrollLeft = getScroll(html, 'left');

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  // NOTE: 1 DOM access here
  var boundaries = { top: 0, left: 0 };
  var offsetParent = findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(popper));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = window.document.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = window.document.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends$1({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var commonOffsetParent = findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier.function) {
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier.function || modifier.fn;
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length - 1; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof window.document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.left = '';
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? window : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  window.addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  window.removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    window.cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // floor sides to avoid blurry text
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.floor(popper.top),
    bottom: Math.floor(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends$1({}, attributes, data.attributes);
  data.styles = _extends$1({}, styles, data.styles);
  data.arrowStyles = _extends$1({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var popperMarginSide = getStyleComputedProperty(data.instance.popper, 'margin' + sideCapitalized).replace('px', '');
  var sideValue = center - getClientRect(data.offsets.popper)[side] - popperMarginSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = {};
  data.offsets.arrow[side] = Math.round(sideValue);
  data.offsets.arrow[altSide] = ''; // make sure to unset any eventual altSide value from the DOM node

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends$1({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset$1(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty$2({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty$2({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends$1({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty$2({}, side, reference[side]),
      end: defineProperty$2({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends$1({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset$1,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" ??? or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck$1(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends$1({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference.jquery ? reference[0] : reference;
    this.popper = popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends$1({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends$1({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends$1({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass$1(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */

Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/**
 * Issue #569: collapse::toggle::state triggered too many times
 * @link https://github.com/bootstrap-vue/bootstrap-vue/issues/569
 */

var BVRL = '__BV_root_listeners__';

var listenOnRootMixin = {
    methods: {
        /**
         * Safely register event listeners on the root Vue node.
         * While Vue automatically removes listeners for individual components,
         * when a component registers a listener on root and is destroyed,
         * this orphans a callback because the node is gone,
         * but the root does not clear the callback.
         *
         * This adds a non-reactive prop to a vm on the fly
         * in order to avoid object observation and its performance costs
         * to something that needs no reactivity.
         * It should be highly unlikely there are any naming collisions.
         * @param {string} event
         * @param {function} callback
         * @chainable
         */
        listenOnRoot: function listenOnRoot(event, callback) {
            if (!this[BVRL] || !isArray(this[BVRL])) {
                this[BVRL] = [];
            }
            this[BVRL].push({ event: event, callback: callback });
            this.$root.$on(event, callback);
            return this;
        },


        /**
         * Convenience method for calling vm.$emit on vm.$root.
         * @param {string} event
         * @param {*} args
         * @chainable
         */
        emitOnRoot: function emitOnRoot(event) {
            var _$root;

            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            (_$root = this.$root).$emit.apply(_$root, [event].concat(toConsumableArray(args)));
            return this;
        }
    },

    destroyed: function destroyed() {
        if (this[BVRL] && isArray(this[BVRL])) {
            while (this[BVRL].length > 0) {
                // shift to process in order
                var _BVRL$shift = this[BVRL].shift(),
                    event = _BVRL$shift.event,
                    callback = _BVRL$shift.callback;

                this.$root.$off(event, callback);
            }
        }
    }
};

// Return an Array of visible items
function filterVisible(els) {
    return (els || []).filter(isVisible);
}

// Dropdown item CSS selectors
// TODO: .dropdown-form handling
var ITEM_SELECTOR$1 = ".dropdown-item:not(.disabled):not([disabled])";

// Popper attachment positions
var AttachmentMap = {
    // DropUp Left Align
    TOP: "top-start",
    // DropUp Right Align
    TOPEND: "top-end",
    // Dropdown left Align
    BOTTOM: "bottom-start",
    // Dropdown Right Align
    BOTTOMEND: "bottom-end"
};

var dropdownMixin = {
    mixins: [clickoutMixin, listenOnRootMixin],
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        text: {
            // Button label
            type: String,
            default: ""
        },
        dropup: {
            // place on top if possible
            type: Boolean,
            default: false
        },
        right: {
            // Right align menu (default is left align)
            type: Boolean,
            default: false
        },
        offset: {
            // Number of pixels to offset menu, or a CSS unit value (i.e. 1px, 1rem, etc)
            type: [Number, String],
            default: 0
        },
        noFlip: {
            // Disable auto-flipping of menu from bottom<=>top
            type: Boolean,
            default: false
        },
        popperOpts: {
            type: Object,
            default: function _default() {}
        }
    },
    data: function data() {
        return {
            visible: false,
            _popper: null,
            inNavbar: null
        };
    },
    created: function created() {
        var _this = this;

        var listener = function listener(el) {
            if (el !== _this) {
                _this.visible = false;
            }
        };

        // To keep one dropdown opened on page
        this.listenOnRoot("bv::dropdown::shown", listener);

        // Hide when clicked on links
        this.listenOnRoot("clicked::link", listener);
        // Use new namespaced events
        this.listenOnRoot("bv::link::clicked", listener);
    },

    watch: {
        visible: function visible(state, old) {
            if (state === old) {
                // Avoid duplicated emits
                return;
            }
            if (state) {
                this.showMenu();
            } else {
                this.hideMenu();
            }
        },
        disabled: function disabled(state, old) {
            if (state !== old && state && this.visible) {
                // Hide dropdown if disabled changes to true
                this.visible = false;
            }
        }
    },
    computed: {
        toggler: function toggler() {
            return this.$refs.toggle.$el || this.$refs.toggle;
        }
    },
    destroyed: function destroyed() {
        if (this._popper) {
            // Ensure popper event listeners are removed cleanly
            this._popper.destroy();
        }
        this._popper = null;
        this.setTouchStart(false);
    },

    methods: {
        showMenu: function showMenu() {
            if (this.disabled) {
                return;
            }
            // TODO: move emit show to visible watcher, to allow cancelling of show
            this.$emit("show");
            // Ensure other menus are closed
            this.emitOnRoot("bv::dropdown::shown", this);

            // If popper not installed, then fallback gracefully to dropdown only with left alignment
            if (typeof Popper === "function") {
                // Are we in a navbar ?
                if (this.inNavbar === null && this.isNav) {
                    this.inNavbar = Boolean(closest(".navbar", this.$el));
                }
                // for dropup with alignment we use the parent element as popper container
                var element = this.dropup && this.right || this.split || this.inNavbar ? this.$el : this.$refs.toggle;
                // Make sure we have a reference to an element, not a component!
                element = element.$el || element;

                // Instantiate popper.js
                this._popper = new Popper(element, this.$refs.menu, this.getPopperConfig());
            }

            this.setTouchStart(true);
            this.$emit("shown");

            // Focus on the first item on show
            this.$nextTick(this.focusFirstItem);
        },
        hideMenu: function hideMenu() {
            // TODO: move emit hide to visible watcher, to allow cancelling of hide
            this.$emit("hide");
            if (this._popper) {
                // Ensure popper event listeners are removed cleanly
                this._popper.destroy();
            }
            this._popper = null;
            this.setTouchStart(false);
            this.emitOnRoot("bv::dropdown::hidden", this);
            this.$emit("hidden");
        },
        getPopperConfig: function getPopperConfig() {
            var placement = AttachmentMap.BOTTOM;
            if (this.dropup && this.right) {
                // dropup + right
                placement = AttachmentMap.TOPEND;
            } else if (this.dropup) {
                // dropup + left
                placement = AttachmentMap.TOP;
            } else if (this.right) {
                // dropdown + right
                placement = AttachmentMap.BOTTOMEND;
            }
            var popperConfig = {
                placement: placement,
                modifiers: {
                    offset: {
                        offset: this.offset || 0
                    },
                    flip: {
                        enabled: !this.noFlip
                    },
                    applyStyle: {
                        // Disable Popper.js for Dropdown in Navbar
                        enabled: !this.inNavbar
                    }
                }
            };
            return assign(popperConfig, this.popperOpts || {});
        },
        setTouchStart: function setTouchStart(on) {
            var _this2 = this;

            /*
             If this is a touch-enabled device we add extra
             empty mouseover listeners to the body's immediate children;
             only needed because of broken event delegation on iOS
             https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
             */
            if ("ontouchstart" in document.documentElement) {
                var children = from(document.body.children);
                children.forEach(function (el) {
                    if (on) {
                        eventOn("mouseover", _this2._noop);
                    } else {
                        eventOff("mouseover", _this2._noop);
                    }
                });
            }
        },
        _noop: function _noop() {
            // Do nothing event handler (used in touchstart event handler)
        },
        clickOutListener: function clickOutListener() {
            this.visible = false;
        },
        click: function click(e) {
            // Calle only in split button mode, for the split button
            if (this.disabled) {
                this.visible = false;
                return;
            }

            this.$emit("click", e);
        },
        toggle: function toggle() {
            // Called only by a button that toggles the menu
            if (this.disabled) {
                this.visible = false;
                return;
            }
            this.visible = !this.visible;
        },
        show: function show() {
            // Public method to show dropdown
            if (this.disabled) {
                return;
            }
            this.visible = true;
        },
        hide: function hide() {
            // Public method to hide dropdown
            if (this.disabled) {
                return;
            }
            this.visible = false;
        },
        onTab: function onTab() {
            if (this.visible) {
                // TODO: Need special handler for dealing with form inputs
                // Tab, if in a text-like input, we should just focus next item in the dropdown
                // Note: Inputs are in a special .dropdown-form container
                this.visible = false;
            }
        },
        onEsc: function onEsc(e) {
            if (this.visible) {
                this.visible = false;
                e.preventDefault();
                e.stopPropagation();
                // Return focus to original trigger button
                this.$nextTick(this.focusToggler);
            }
        },
        onFocusOut: function onFocusOut(evt) {
            if (this.$refs.menu.contains(evt.relatedTarget)) {
                return;
            }
            this.visible = false;
        },
        onMouseOver: function onMouseOver(evt) {
            // Focus the item on hover
            // TODO: Special handling for inputs? Inputs are in a special .dropdown-form container
            var item = evt.target;
            if (item.classList.contains("dropdown-item") && !item.disabled && !item.classList.contains("disabled") && item.focus) {
                item.focus();
            }
        },
        focusNext: function focusNext(e, up) {
            var _this3 = this;

            if (!this.visible) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            this.$nextTick(function () {
                var items = _this3.getItems();
                if (items.length < 1) {
                    return;
                }
                var index = items.indexOf(e.target);
                if (up && index > 0) {
                    index--;
                } else if (!up && index < items.length - 1) {
                    index++;
                }
                if (index < 0) {
                    index = 0;
                }
                _this3.focusItem(index, items);
            });
        },
        focusItem: function focusItem(idx, items) {
            var el = items.find(function (el, i) {
                return i === idx;
            });
            if (el && getAttr(el, "tabindex") !== "-1") {
                el.focus();
            }
        },
        getItems: function getItems() {
            // Get all items
            return filterVisible(selectAll(ITEM_SELECTOR$1, this.$refs.menu));
        },
        getFirstItem: function getFirstItem() {
            // Get the first non-disabled item
            var item = this.getItems()[0];
            return item || null;
        },
        focusFirstItem: function focusFirstItem() {
            var item = this.getFirstItem();
            if (item) {
                this.focusItem(0, [item]);
            }
        },
        focusToggler: function focusToggler() {
            var toggler = this.toggler;
            if (toggler && toggler.focus) {
                toggler.focus();
            }
        }
    }
};

var formMixin = {
    props: {
        name: {
            type: String
        },
        id: {
            type: String
        },
        disabled: {
            type: Boolean
        },
        required: {
            type: Boolean,
            default: false
        }
    }
};

var formCustomMixin = {
    computed: {
        custom: function custom() {
            return !this.plain;
        }
    },
    props: {
        plain: {
            type: Boolean,
            default: false
        }
    }
};

var formOptionsMixin = {
    props: {
        options: {
            type: [Array, Object],
            default: function _default() {
                return [];
            }
        },
        valueField: {
            type: String,
            default: 'value'
        },
        textField: {
            type: String,
            default: 'text'
        },
        disabledField: {
            type: String,
            default: 'disabled'
        }
    },
    computed: {
        formOptions: function formOptions() {
            var _this = this;

            var options = this.options || [];

            if (isArray(options)) {
                // Normalize flat arrays to Array of Objects
                options = options.map(function (option) {
                    if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object') {
                        return {
                            value: option[_this.valueField],
                            text: option[_this.textField],
                            disabled: option[_this.disabledField] || false
                        };
                    }

                    return {
                        text: String(option),
                        value: option,
                        disabled: false
                    };
                });
            } else {
                // Normalize Objects keys to Array of Objects
                options = keys(options).map(function (key) {
                    var option = options[key] || {};

                    // Resolve text
                    if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) !== 'object') {
                        option = defineProperty$1({}, _this.textField, String(option));
                    }
                    // Resolve text field (uses key as text if not provided)
                    if (option[_this.textField] === 0) {
                        option.text = option[_this.textField];
                    } else {
                        option.text = option[_this.textField] || key;
                    }

                    // Resolve value (uses null/undef value if not provided)
                    option.value = option[_this.valueField];

                    // Resolve disabled
                    option.disabled = option[_this.disabledField] || false;

                    return option;
                });
            }
            // Return nomalized options array
            return options;
        }
    }
};

/*
 * form-radio & form-check mixin
 *
 */

var formRadioCheckMixin = {
    data: function data() {
        return {
            localChecked: this.checked,
            hasFocus: false
        };
    },

    model: {
        prop: 'checked',
        event: 'input'
    },
    props: {
        value: {},
        checked: {
            // This is the model, except when in group mode
        },
        buttonVariant: {
            // Only applicable when rendered with button style
            type: String,
            default: null
        }
    },
    computed: {
        computedLocalChecked: {
            get: function get() {
                if (this.is_Child) {
                    return this.$parent.localChecked;
                } else {
                    return this.localChecked;
                }
            },
            set: function set(val) {
                if (this.is_Child) {
                    this.$parent.localChecked = val;
                } else {
                    this.localChecked = val;
                }
            }
        },
        is_Child: function is_Child() {
            return Boolean(this.$parent && this.$parent.is_RadioCheckGroup);
        },
        is_Disabled: function is_Disabled() {
            // Child can be disabled while parent isn't
            return Boolean(this.is_Child ? this.$parent.disabled || this.disabled : this.disabled);
        },
        is_Required: function is_Required() {
            return Boolean(this.is_Child ? this.$parent.required : this.required);
        },
        is_Plain: function is_Plain() {
            return Boolean(this.is_Child ? this.$parent.plain : this.plain);
        },
        is_Custom: function is_Custom() {
            return !this.is_Plain;
        },
        get_Size: function get_Size() {
            return this.is_Child ? this.$parent.size : this.size;
        },
        get_State: function get_State() {
            // This is a tri-state prop (true, false, null)
            if (typeof this.state === 'boolean') {
                return this.state;
            } else if (this.state === 'valid') {
                return true;
            } else if (this.state === 'invalid') {
                return false;
            } else if (this.is_Childp && typeof this.$parent.get_State === 'boolean') {
                return this.$parent.get_State;
            }
            return null;
        },
        get_StateClass: function get_StateClass() {
            // This is a tri-state prop (true, false, null)
            return typeof this.get_State === 'boolean' ? this.get_State ? 'is-valid' : 'is-invalid' : '';
        },
        is_Stacked: function is_Stacked() {
            return Boolean(this.is_Child && this.$parent.stacked);
        },
        is_Inline: function is_Inline() {
            return !this.is_Stacked;
        },
        is_ButtonMode: function is_ButtonMode() {
            return Boolean(this.is_Child && this.$parent.buttons);
        },
        get_ButtonVariant: function get_ButtonVariant() {
            // Local variant trumps parent variant
            return this.buttonVariant || (this.is_Child ? this.$parent.buttonVariant : null) || 'secondary';
        },
        get_Name: function get_Name() {
            return (this.is_Child ? this.$parent.name || this.$parent.safeId() : this.name) || null;
        },
        buttonClasses: function buttonClasses() {
            // Same for radio & check
            return ['btn', 'btn-' + this.get_ButtonVariant, Boolean(this.get_Size) ? 'btn-' + this.get_Size : '',
            // 'disabled' class makes "button" look disabled
            this.is_Disabled ? 'disabled' : '',
            // 'active' class makes "button" look pressed
            this.is_Checked ? 'active' : '',
            // Focus class makes button look focused
            this.hasFocus ? 'focus' : ''];
        }
    },
    methods: {
        handleFocus: function handleFocus(evt) {
            // When in buttons mode, we need to add 'focus' class to label when radio focused
            if (this.is_ButtonMode && evt.target) {
                if (evt.type === 'focus') {
                    this.hasFocus = true;
                } else if (evt.type === 'blur') {
                    this.hasFocus = false;
                }
            }
        }
    }
};

var formSizeMixin = {
    props: {
        size: {
            type: String,
            default: null
        }
    },
    computed: {
        sizeFormClass: function sizeFormClass() {
            return [this.size ? "form-control-" + this.size : null];
        },
        sizeBtnClass: function sizeBtnClass() {
            return [this.size ? "btn-" + this.size : null];
        }
    }
};

/* Form control contextual state class computation
 *
 * Returned class is either 'is-valid' or 'is-invalid' based on the 'state' prop
 * state can be one of five values:
 *  - true or 'valid' for is-valid
 *  - false or 'invalid' for is-invalid
 *  - null (or empty string) for no contextual state
 */

var formStateMixin = {
    props: {
        state: {
            // true/'valid', false/'invalid', '',null
            type: [Boolean, String],
            default: null
        }
    },
    computed: {
        computedState: function computedState() {
            var state = this.state;
            if (state === true || state === 'valid') {
                return true;
            } else if (state === false || state === 'invalid') {
                return false;
            }
            return null;
        },
        stateClass: function stateClass() {
            var state = this.computedState;
            if (state === true) {
                return 'is-valid';
            } else if (state === false) {
                return 'is-invalid';
            }
            return null;
        }
    }
};

/*
 * SSR Safe Client Side ID attribute generation
 *
 */

var idMixin = {
    props: {
        id: {
            typ: String,
            default: null
        }
    },
    data: function data() {
        return {
            localId_: null
        };
    },
    mounted: function mounted() {
        if (!this.$isServer && !this.id && this._uid) {
            this.localId_ = '__BVID__' + this._uid + '_';
        }
    },

    methods: {
        safeId: function safeId() {
            var suffix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            var id = this.id || this.localId_ || null;
            if (!id) {
                return null;
            }
            suffix = String(suffix).replace(/\s+/g, '_');
            return Boolean(suffix) ? id + '_' + suffix : id;
        }
    }
};

/**
 * @param {number} length
 * @return {Array}
 */
var range = (function (length) {
  return Array.apply(null, { length: length });
});

/*
 * Comon props, computed, data, amd methods for b-pagination and b-pagination.nav
 */

// Make an array of N to N+X
function makePageArray(startNum, numPages) {
    return range(numPages).map(function (value, index) {
        return { number: index + startNum, className: null };
    });
}

// Threshold of limit size when we start/stop showing ellipsis
var ELLIPSIS_THRESHOLD = 3;

// Props object
var props$11 = {
    disabled: {
        type: Boolean,
        default: false
    },
    value: {
        type: Number,
        default: 1
    },
    limit: {
        type: Number,
        default: 5
    },
    size: {
        type: String,
        default: 'md'
    },
    align: {
        type: String,
        default: 'left'
    },
    hideGotoEndButtons: {
        type: Boolean,
        default: false
    },
    ariaLabel: {
        type: String,
        default: 'Pagination'
    },
    labelFirstPage: {
        type: String,
        default: 'Goto first page'
    },
    firstText: {
        type: String,
        default: '&laquo;'
    },
    labelPrevPage: {
        type: String,
        default: 'Goto previous page'
    },
    prevText: {
        type: String,
        default: '&lsaquo;'
    },
    labelNextPage: {
        type: String,
        default: 'Goto next page'
    },
    nextText: {
        type: String,
        default: '&rsaquo;'
    },
    labelLastPage: {
        type: String,
        default: 'Goto last page'
    },
    lastText: {
        type: String,
        default: '&raquo;'
    },
    labelPage: {
        type: String,
        default: 'Goto page'
    },
    hideEllipsis: {
        type: Boolean,
        default: false
    },
    ellipsisText: {
        type: String,
        default: '&hellip;'
    }
};

var paginationMixin = {
    data: function data() {
        return {
            showFirstDots: false,
            showLastDots: false,
            currentPage: this.value
        };
    },

    props: props$11,
    watch: {
        currentPage: function currentPage(newPage, oldPage) {
            if (newPage !== oldPage) {
                this.$emit('input', newPage);
            }
        },
        value: function value(newValue, oldValue) {
            if (newValue !== oldValue) {
                this.currentPage = newValue;
            }
        }
    },
    computed: {
        btnSize: function btnSize() {
            return this.size ? 'pagination-' + this.size : '';
        },
        alignment: function alignment() {
            if (this.align === 'center') {
                return 'justify-content-center';
            } else if (this.align === 'end' || this.align === 'right') {
                return 'justify-content-end';
            }
            return '';
        },
        pageList: function pageList() {
            // Sanity checks
            if (this.currentPage > this.numberOfPages) {
                this.currentPage = this.numberOfPages;
            } else if (this.currentPage < 1) {
                this.currentPage = 1;
            }
            // - Hide first ellipsis marker
            this.showFirstDots = false;
            // - Hide last ellipsis marker
            this.showLastDots = false;
            var numLinks = this.limit;
            var startNum = 1;
            if (this.numberOfPages <= this.limit) {
                // Special Case: Less pages available than the limit of displayed pages
                numLinks = this.numberOfPages;
            } else if (this.currentPage < this.limit - 1 && this.limit > ELLIPSIS_THRESHOLD) {
                // We are near the beginning of the page list
                if (!this.hideEllipsis) {
                    numLinks = this.limit - 1;
                    this.showLastDots = true;
                }
            } else if (this.numberOfPages - this.currentPage + 2 < this.limit && this.limit > ELLIPSIS_THRESHOLD) {
                // We are near the end of the list
                if (!this.hideEllipsis) {
                    this.showFirstDots = true;
                    numLinks = this.limit - 1;
                }
                startNum = this.numberOfPages - numLinks + 1;
            } else {
                // We are somewhere in the middle of the page list
                if (this.limit > ELLIPSIS_THRESHOLD && !this.hideEllipsis) {
                    this.showFirstDots = true;
                    this.showLastDots = true;
                    numLinks = this.limit - 2;
                }
                startNum = this.currentPage - Math.floor(numLinks / 2);
            }
            // Sanity checks
            if (startNum < 1) {
                startNum = 1;
            } else if (startNum > this.numberOfPages - numLinks) {
                startNum = this.numberOfPages - numLinks + 1;
            }
            // Generate list of page numbers
            var pages = makePageArray(startNum, numLinks);
            // We limit to a total of 3 page buttons on small screens
            // Ellipsis will also be hidden on small screens
            if (pages.length > 3) {
                var idx = this.currentPage - startNum;
                if (idx === 0) {
                    // Keep leftmost 3 buttons visible
                    for (var i = 3; i < pages.length; i++) {
                        pages[i].className = 'd-none d-sm-flex';
                    }
                } else if (idx === pages.length - 1) {
                    // Keep rightmost 3 buttons visible
                    for (var _i = 0; _i < pages.length - 3; _i++) {
                        pages[_i].className = 'd-none d-sm-flex';
                    }
                } else {
                    // hide left button(s)
                    for (var _i2 = 0; _i2 < idx - 1; _i2++) {
                        pages[_i2].className = 'd-none d-sm-flex';
                    }
                    // hide right button(s)
                    for (var _i3 = pages.length - 1; _i3 > idx + 1; _i3--) {
                        pages[_i3].className = 'd-none d-sm-flex';
                    }
                }
            }
            return pages;
        }
    },
    methods: {
        isActive: function isActive(pagenum) {
            return pagenum === this.currentPage;
        },
        pageItemClasses: function pageItemClasses(page) {
            return ['page-item', this.disabled ? 'disabled' : '', this.isActive(page.number) ? 'active' : '', page.className];
        },
        pageLinkClasses: function pageLinkClasses(page) {
            return ['page-link', this.disabled ? 'disabled' : '', this.isActive(page.number) ? 'active' : ''];
        },
        getButtons: function getButtons() {
            // Return only buttons that are visible
            return selectAll('a.page-link', this.$el).filter(function (btn) {
                return isVisible(btn);
            });
        },
        setBtnFocus: function setBtnFocus(btn) {
            this.$nextTick(function () {
                btn.focus();
            });
        },
        focusFirst: function focusFirst() {
            var btn = this.getButtons().find(function (el) {
                return !isDisabled(el);
            });
            if (btn && btn.focus && btn !== document.activeElement) {
                this.setBtnFocus(btn);
            }
        },
        focusLast: function focusLast() {
            var btn = this.getButtons().reverse().find(function (el) {
                return !isDisabled(el);
            });
            if (btn && btn.focus && btn !== document.activeElement) {
                this.setBtnFocus(btn);
            }
        },
        focusCurrent: function focusCurrent() {
            var _this = this;

            var btn = this.getButtons().find(function (el) {
                return parseInt(getAttr(el, 'aria-posinset'), 10) === _this.currentPage;
            });
            if (btn && btn.focus) {
                this.setBtnFocus(btn);
            } else {
                // Fallback if current page is not in button list
                this.focusFirst();
            }
        },
        focusPrev: function focusPrev() {
            var buttons = this.getButtons();
            var idx = buttons.indexOf(document.activeElement);
            if (idx > 0 && !isDisabled(buttons[idx - 1]) && buttons[idx - 1].focus) {
                this.setBtnFocus(buttons[idx - 1]);
            }
        },
        focusNext: function focusNext() {
            var buttons = this.getButtons();
            var idx = buttons.indexOf(document.activeElement);
            var cnt = buttons.length - 1;
            if (idx < cnt && !isDisabled(buttons[idx + 1]) && buttons[idx + 1].focus) {
                this.setBtnFocus(buttons[idx + 1]);
            }
        }
    }
};

/*
 * Tooltip/Popover component mixin
 * Common props
 */
var PLACEMENTS = {
    top: 'top',
    topleft: 'topleft',
    topright: 'topright',
    right: 'right',
    righttop: 'righttop',
    rightbottom: 'rightbottom',
    bottom: 'bottom',
    bottomleft: 'bottomleft',
    bottomright: 'bottomright',
    left: 'left',
    lefttop: 'lefttop',
    leftbottom: 'leftbottom',
    auto: 'auto'
};

var OBSERVER_CONFIG = {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: ['class', 'style']
};

var toolpopMixin = {
    props: {
        target: {
            // String ID of element, or element/component reference
            type: [String, Object]
        },
        delay: {
            type: Number,
            default: 0
        },
        offset: {
            type: [Number, String],
            default: 0
        },
        noFade: {
            type: Boolean,
            default: false
        },
        container: {
            // String ID of container, if null body is used (default)
            type: String,
            default: null
        }
    },
    created: function created() {
        // Create non-reactive property
        this._toolpop = null;
        this._obs_title = null;
        this._obs_content = null;
    },
    mounted: function mounted() {
        var _this = this;

        // We do this in a $nextTick in hopes that the target element is in the DOM
        // And that our children have rendered
        this.$nextTick(function () {
            // Instantiate ToolTip/PopOver on target
            // createToolpop method must exist in main component
            if (_this.createToolpop()) {
                // Listen to close signals from others
                _this.$on('close', _this.onClose);
                // Observe content Child changes so we can notify popper of possible size change
                _this.setObservers(true);
            }
        });
    },
    updated: function updated() {
        // If content/props changes, etc
        if (this._toolpop) {
            this._toolpop.updateConfig(this.getConfig());
        }
    },
    activated: function activated() {
        // Called when component is inside a <keep-alive> and component brought offline
        this.setObservers(true);
    },
    deactivated: function deactivated() {
        // Called when component is inside a <keep-alive> and component taken offline
        if (this._toolpop) {
            this.setObservers(false);
            this._toolpop.hide();
        }
    },
    beforeDestroy: function beforeDestroy() {
        this.$off('close', this.onClose);
        this.setObservers(false);
        if (this._toolpop) {
            this._toolpop.destroy();
            this._toolpop = null;
        }
        // bring our content back if needed
        this.bringItBack();
    },

    computed: {
        baseConfig: function baseConfig() {
            var cont = this.container;
            return {
                // Title prop
                title: (this.title || '').trim() || '',
                // Contnt prop (if popover)
                content: (this.content || '').trim() || '',
                // Tooltip/Popover placement
                placement: PLACEMENTS[this.placement] || 'auto',
                // Container curently needs to be an ID with '#' prepended, if null then body is used
                container: cont ? /^#/.test(cont) ? cont : '#' + cont : false,
                // Show/Hide delay
                delay: parseInt(this.delay, 10) || 0,
                // Offset can be css distance. if no units, pixels are assumed
                offset: this.offset || 0,
                // Disable fade Animation?
                animation: !Boolean(this.noFade),
                // Open/Close Trigger(s)
                trigger: isArray(this.triggers) ? this.triggers.join(' ') : this.triggers,
                // Callbacks so we can trigger events on component
                callbacks: {
                    show: this.onShow,
                    shown: this.onShown,
                    hide: this.onHide,
                    hidden: this.onHidden
                }
            };
        }
    },
    methods: {
        getConfig: function getConfig() {
            var cfg = assign({}, this.baseConfig);
            if (this.$refs.title && this.$refs.title.innerHTML.trim()) {
                // If slot has content, it overrides 'title' prop
                // We use the DOM node as content to allow components!
                cfg.title = this.$refs.title;
                cfg.html = true;
            }
            if (this.$refs.content && this.$refs.content.innerHTML.trim()) {
                // If slot has content, it overrides 'content' prop
                // We use the DOM node as content to allow components!
                cfg.content = this.$refs.content;
                cfg.html = true;
            }
            return cfg;
        },
        onClose: function onClose(callback) {
            if (this._toolpop) {
                this._toolpop.hide(callback);
            } else if (typeof callback === 'function') {
                callback();
            }
        },
        updatePosition: function updatePosition() {
            if (this._toolpop) {
                // Instruct popper to reposition popover if necessary
                this._toolpop.update();
            }
        },
        getTarget: function getTarget() {
            var target = this.target;
            if (typeof target === 'string') {
                // Assume ID of element
                return getById(target);
            } else if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && isElement(target.$el)) {
                // Component reference
                return target.$el;
            } else if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && isElement(target)) {
                // Element reference
                return target;
            }
            return null;
        },
        onShow: function onShow(evt) {
            this.$emit('show', evt);
        },
        onShown: function onShown(evt) {
            this.setObservers(true);
            this.$emit('shown', evt);
        },
        onHide: function onHide(evt) {
            this.$emit('hide', evt);
        },
        onHidden: function onHidden(evt) {
            this.setObservers(false);
            // bring our content back if needed to keep Vue happy
            // Tooltip class will move it back to tip when shown again
            this.bringItBack();
            this.$emit('hidden', evt);
        },
        bringItBack: function bringItBack() {
            // bring our content back if needed to keep Vue happy
            if (this.$el && this.$refs.title) {
                this.$el.appendChild(this.$refs.title);
            }
            if (this.$el && this.$refs.content) {
                this.$el.appendChild(this.$refs.content);
            }
        },
        setObservers: function setObservers(on) {
            if (on) {
                if (this.$refs.title) {
                    this._obs_title = observeDOM(this.$refs.title, this.updatePosition.bind(this), OBSERVER_CONFIG);
                }
                if (this.$refs.content) {
                    this._obs_content = observeDOM(this.$refs.content, this.updatePosition.bind(this), OBSERVER_CONFIG);
                }
            } else {
                if (this._obs_title) {
                    this._obs_title.disconnect();
                    this._obs_title = null;
                }
                if (this._obs_content) {
                    this._obs_content.disconnect();
                    this._obs_content = null;
                }
            }
        }
    }
};

var props$12 = assign({}, copyProps(cardMixin.props, prefixPropName.bind(null, "body")), {
    title: {
        type: String,
        default: null
    },
    titleTag: {
        type: String,
        default: "h4"
    },
    subTitle: {
        type: String,
        default: null
    },
    subTitleTag: {
        type: String,
        default: "h6"
    },
    overlay: {
        type: Boolean,
        default: false
    }
});

var CardBody = {
    functional: true,
    props: props$12,
    render: function render(h, _ref) {
        var _class;

        var props = _ref.props,
            data = _ref.data,
            slots = _ref.slots;

        var cardBodyChildren = [];
        if (props.title) {
            cardBodyChildren.push(h(props.titleTag, {
                staticClass: "card-title",
                domProps: { innerHTML: props.title }
            }));
        }
        if (props.subTitle) {
            cardBodyChildren.push(h(props.subTitleTag, {
                staticClass: "card-subtitle mb-2 text-muted",
                domProps: { innerHTML: props.subTitle }
            }));
        }
        cardBodyChildren.push(slots().default);

        return h(props.bodyTag, lib_common(data, {
            staticClass: "card-body",
            class: (_class = {
                "card-img-overlay": props.overlay
            }, defineProperty$1(_class, "bg-" + props.bodyBgVariant, Boolean(props.bodyBgVariant)), defineProperty$1(_class, "border-" + props.bodyBorderVariant, Boolean(props.bodyBorderVariant)), defineProperty$1(_class, "text-" + props.bodyTextVariant, Boolean(props.bodyTextVariant)), _class)
        }), cardBodyChildren);
    }
};

var props$13 = assign({}, copyProps(cardMixin.props, prefixPropName.bind(null, "header")), {
    header: {
        type: String,
        default: null
    },
    headerClass: {
        type: [String, Object, Array],
        default: null
    }
});

var CardHeader = {
    functional: true,
    props: props$13,
    render: function render(h, _ref) {
        var _ref2;

        var props = _ref.props,
            data = _ref.data,
            slots = _ref.slots;

        return h(props.headerTag, lib_common(data, {
            staticClass: "card-header",
            class: [props.headerClass, (_ref2 = {}, defineProperty$1(_ref2, "bg-" + props.headerBgVariant, Boolean(props.headerBgVariant)), defineProperty$1(_ref2, "border-" + props.headerBorderVariant, Boolean(props.headerBorderVariant)), defineProperty$1(_ref2, "text-" + props.headerTextVariant, Boolean(props.headerTextVariant)), _ref2)]
        }), slots().default || [h("div", { domProps: { innerHTML: props.header } })]);
    }
};

var props$14 = assign({}, copyProps(cardMixin.props, prefixPropName.bind(null, "footer")), {
    footer: {
        type: String,
        default: null
    },
    footerClass: {
        type: [String, Object, Array],
        default: null
    }
});

var CardFooter = {
    functional: true,
    props: props$14,
    render: function render(h, _ref) {
        var _ref2;

        var props = _ref.props,
            data = _ref.data,
            slots = _ref.slots;

        return h(props.footerTag, lib_common(data, {
            staticClass: "card-footer",
            class: [props.footerClass, (_ref2 = {}, defineProperty$1(_ref2, "bg-" + props.footerBgVariant, Boolean(props.footerBgVariant)), defineProperty$1(_ref2, "border-" + props.footerBorderVariant, Boolean(props.footerBorderVariant)), defineProperty$1(_ref2, "text-" + props.footerTextVariant, Boolean(props.footerTextVariant)), _ref2)]
        }), slots().default || [h("div", { domProps: { innerHTML: props.footer } })]);
    }
};

var props$15 = {
    src: {
        type: String,
        default: null,
        required: true
    },
    alt: {
        type: String,
        default: null
    },
    top: {
        type: Boolean,
        default: false
    },
    bottom: {
        type: Boolean,
        default: false
    },
    fluid: {
        type: Boolean,
        default: false
    }
};

var CardImg = {
    functional: true,
    props: props$15,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data;

        var staticClass = "card-img";
        if (props.top) {
            staticClass += "-top";
        } else if (props.bottom) {
            staticClass += "-bottom";
        }

        return h("img", lib_common(data, {
            staticClass: staticClass,
            class: { "img-fluid": props.fluid },
            attrs: { src: props.src, alt: props.alt }
        }));
    }
};

var cardImgProps = copyProps(props$15, prefixPropName.bind(null, "img"));
cardImgProps.imgSrc.required = false;

var props$10 = assign({}, props$12, props$13, props$14, cardImgProps, copyProps(cardMixin.props), {
    align: {
        type: String,
        default: null
    },
    noBody: {
        type: Boolean,
        default: false
    }
});

var card = {
    functional: true,
    props: props$10,
    render: function render(h, _ref) {
        var _class;

        var props$$1 = _ref.props,
            data = _ref.data,
            slots = _ref.slots;

        // The order of the conditionals matter.
        // We are building the component markup in order.
        var childNodes = [],
            img = props$$1.imgSrc ? h(CardImg, { props: pluckProps(cardImgProps, props$$1, unPrefixPropName.bind(null, "img")) }) : null;

        if (img) {
            // Above the header placement.
            if (props$$1.imgTop || !props$$1.imgBottom) {
                childNodes.push(img);
            }
        }
        if (props$$1.header || slots().header) {
            childNodes.push(h(CardHeader, { props: pluckProps(props$13, props$$1) }, slots().header));
        }
        if (props$$1.noBody) {
            childNodes.push(slots().default);
        } else {
            childNodes.push(h(CardBody, { props: pluckProps(props$12, props$$1) }, slots().default));
        }
        if (props$$1.footer || slots().footer) {
            childNodes.push(h(CardFooter, { props: pluckProps(props$14, props$$1) }, slots().footer));
        }
        if (img && props$$1.imgBottom) {
            // Below the footer placement.
            childNodes.push(img);
        }

        return h(props$$1.tag, lib_common(data, {
            staticClass: "card",
            class: (_class = {}, defineProperty$1(_class, "text-" + props$$1.align, Boolean(props$$1.align)), defineProperty$1(_class, "bg-" + props$$1.bgVariant, Boolean(props$$1.bgVariant)), defineProperty$1(_class, "border-" + props$$1.borderVariant, Boolean(props$$1.borderVariant)), defineProperty$1(_class, "text-" + props$$1.textVariant, Boolean(props$$1.textVariant)), _class)
        }), childNodes);
    }
};

var props$16 = {
    tag: {
        type: String,
        default: "div"
    },
    deck: {
        type: Boolean,
        default: false
    },
    columns: {
        type: Boolean,
        default: false
    }
};

var cardGroup = {
    functional: true,
    props: props$16,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        var staticClass = "card-group";
        if (props.columns) {
            staticClass = "card-columns";
        }
        if (props.deck) {
            staticClass = "card-deck";
        }

        return h(props.tag, lib_common(data, { staticClass: staticClass }), children);
    }
};

// Slide directional classes
var DIRECTION = {
    next: {
        dirClass: 'carousel-item-left',
        overlayClass: 'carousel-item-next'
    },
    prev: {
        dirClass: 'carousel-item-right',
        overlayClass: 'carousel-item-prev'
    }
};

// Fallback Transition duration (with a little buffer) in ms
var TRANS_DURATION = 600 + 50;

// Transition Event names
var TransitionEndEvents = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'otransitionend oTransitionEnd',
    transition: 'transitionend'
};

// Return the brtowser specific transitionend event name
function getTransisionEndEvent(el) {
    for (var name in TransitionEndEvents) {
        if (el.style[name] !== undefined) {
            return TransitionEndEvents[name];
        }
    }
    // fallback
    return null;
}

var carousel = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "carousel slide", style: { background: _vm.background }, attrs: { "role": "region", "id": _vm.safeId(), "aria-busy": _vm.isSliding ? 'true' : 'false' }, on: { "mouseenter": _vm.pause, "mouseleave": _vm.start, "focusin": _vm.pause, "focusout": _vm.restart, "keydown": [function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "left", 37)) {
                        return null;
                    }if ('button' in $event && $event.button !== 0) {
                        return null;
                    }$event.stopPropagation();$event.preventDefault();_vm.prev($event);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "right", 39)) {
                        return null;
                    }if ('button' in $event && $event.button !== 2) {
                        return null;
                    }$event.stopPropagation();$event.preventDefault();_vm.next($event);
                }] } }, [_c('div', { ref: "inner", staticClass: "carousel-inner", attrs: { "role": "list", "id": _vm.safeId('__BV_inner_') } }, [_vm._t("default")], 2), _vm.controls ? [_c('a', { staticClass: "carousel-control-prev", attrs: { "href": "#", "role": "button", "aria-controls": _vm.safeId('__BV_inner_') }, on: { "click": function click($event) {
                    $event.stopPropagation();$event.preventDefault();_vm.prev($event);
                }, "keydown": [function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) {
                        return null;
                    }$event.stopPropagation();$event.preventDefault();_vm.prev($event);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "space", 32)) {
                        return null;
                    }$event.stopPropagation();$event.preventDefault();_vm.prev($event);
                }] } }, [_c('span', { staticClass: "carousel-control-prev-icon", attrs: { "aria-hidden": "true" } }), _vm._v(" "), _c('span', { staticClass: "sr-only" }, [_vm._v(_vm._s(_vm.labelPrev))])]), _c('a', { staticClass: "carousel-control-next", attrs: { "href": "#", "role": "button", "aria-controls": _vm.safeId('__BV_inner_') }, on: { "click": function click($event) {
                    $event.stopPropagation();$event.preventDefault();_vm.next($event);
                }, "keydown": [function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) {
                        return null;
                    }$event.stopPropagation();$event.preventDefault();_vm.next($event);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "space", 32)) {
                        return null;
                    }$event.stopPropagation();$event.preventDefault();_vm.next($event);
                }] } }, [_c('span', { staticClass: "carousel-control-next-icon", attrs: { "aria-hidden": "true" } }), _vm._v(" "), _c('span', { staticClass: "sr-only" }, [_vm._v(_vm._s(_vm.labelNext))])])] : _vm._e(), _c('ol', { directives: [{ name: "show", rawName: "v-show", value: _vm.indicators, expression: "indicators" }], staticClass: "carousel-indicators", attrs: { "role": "group", "id": _vm.indicators ? _vm.safeId('__BV_indicators_') : null, "aria-hidden": _vm.indicators ? 'false' : 'true', "aria-label": _vm.indicators && _vm.labelIndicators ? _vm.labelIndicators : null, "aria-owns": _vm.indicators ? _vm.safeId('__BV_inner_') : null } }, _vm._l(_vm.slides.length, function (n) {
            return _c('li', { key: 'slide_' + n, class: { active: n - 1 === _vm.index }, attrs: { "role": "button", "id": _vm.safeId('__BV_indicator_' + n + '_'), "tabindex": _vm.indicators ? '0' : '-1', "aria-current": n - 1 === _vm.index ? 'true' : 'false', "aria-label": _vm.labelGotoSlide + ' ' + n, "aria-describedby": _vm.slides[n - 1].id || null, "aria-controls": _vm.safeId('__BV_inner_') }, on: { "click": function click($event) {
                        _vm.setSlide(n - 1);
                    }, "keydown": [function ($event) {
                        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) {
                            return null;
                        }$event.stopPropagation();$event.preventDefault();_vm.setSlide(n - 1);
                    }, function ($event) {
                        if (!('button' in $event) && _vm._k($event.keyCode, "space", 32)) {
                            return null;
                        }$event.stopPropagation();$event.preventDefault();_vm.setSlide(n - 1);
                    }] } });
        }))], 2);
    }, staticRenderFns: [],
    mixins: [idMixin],
    data: function data() {
        return {
            index: this.value || 0,
            isSliding: false,
            intervalId: null,
            transitionEndEvent: null,
            slides: []
        };
    },

    props: {
        labelPrev: {
            type: String,
            default: 'Previous Slide'
        },
        labelNext: {
            type: String,
            default: 'Next Slide'
        },
        labelGotoSlide: {
            type: String,
            default: 'Goto Slide'
        },
        labelIndicators: {
            type: String,
            default: 'Select a slide to display'
        },
        interval: {
            type: Number,
            default: 5000
        },
        indicators: {
            type: Boolean,
            default: false
        },
        controls: {
            type: Boolean,
            default: false
        },
        imgWidth: {
            // Sniffed by carousel-slide
            type: [Number, String]
        },
        imgHeight: {
            // Sniffed by carousel-slide
            type: [Number, String]
        },
        background: {
            type: String
        },
        value: {
            type: Number,
            default: 0
        }
    },
    computed: {
        isCycling: function isCycling() {
            return Boolean(this.intervalId);
        }
    },
    methods: {
        // Set slide
        setSlide: function setSlide(slide) {
            var _this = this;

            // Don't animate when page is not visible
            if (typeof document !== 'undefined' && document.visibilityState && document.hidden) {
                return;
            }

            var len = this.slides.length;

            // Don't do anything if nothing to slide to
            if (len === 0) {
                return;
            }

            // Don't change slide while transitioning, wait until transition is done
            if (this.isSliding) {
                // Schedule slide after sliding complete
                this.$once('sliding-end', function () {
                    return _this.setSlide(slide);
                });
                return;
            }

            // Make sure we have an integer (you never know!)
            slide = Math.floor(slide);

            // Set new slide index. Wrap around if necessary
            this.index = slide >= len ? 0 : slide >= 0 ? slide : len - 1;
        },


        // Previous slide
        prev: function prev() {
            this.setSlide(this.index - 1);
        },


        // Next slide
        next: function next() {
            this.setSlide(this.index + 1);
        },


        // Pause auto rotation
        pause: function pause() {
            if (this.isCycling) {
                clearInterval(this.intervalId);
                this.intervalId = null;

                // Make current slide focusable for screen readers
                this.slides[this.index].tabIndex = 0;
            }
        },


        // Start auto rotate slides
        start: function start() {
            var _this2 = this;

            // Don't start if no intetrval, or if we are already running
            if (!Boolean(this.interval) || this.isCycling) {
                return;
            }
            this.slides.forEach(function (slide) {
                slide.tabIndex = -1;
            });
            this.intervalId = setInterval(function () {
                _this2.next();
            }, Math.max(1000, this.interval));
        },


        // Re-Start auto rotate slides when focus/hover leaves the carousel
        restart: function restart(evt) {
            if (!evt.relatedTarget || !this.$el.contains(evt.relatedTarget)) {
                this.start();
            }
        },


        // Update slide list
        updateSlides: function updateSlides() {
            var _this3 = this;

            this.pause();

            // Get all slides as DOM elements
            this.slides = selectAll('.carousel-item', this.$refs.inner);

            var numSlides = this.slides.length;

            // Keep slide number in range
            var index = Math.max(0, Math.min(Math.floor(this.index), numSlides - 1));

            this.slides.forEach(function (slide, idx) {
                var n = idx + 1;
                var id = _this3.safeId('__BV_indicator_' + n + '_');
                if (idx === index) {
                    addClass(slide, 'active');
                } else {
                    removeClass(slide, 'active');
                }
                setAttr(slide, 'aria-current', idx === index ? 'true' : 'false');
                setAttr(slide, 'aria-posinset', String(n));
                setAttr(slide, 'aria-setsize', String(numSlides));
                slide.tabIndex = -1;
                if (id) {
                    setAttr(slide, 'aria-controlledby', id);
                }
            });

            // Set slide as active
            this.setSlide(index);

            this.start();
        }
    },
    watch: {
        value: function value(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.setSlide(newVal);
            }
        },
        interval: function interval(newVal, oldVal) {
            if (newVal === oldVal) {
                return;
            }
            if (!Boolean(newVal)) {
                // Pausing slide show
                this.pause();
            } else {
                // Restarting or Changing interval
                this.pause();
                this.start();
            }
        },
        index: function index(val, oldVal) {
            var _this4 = this;

            if (val === oldVal || this.isSliding) {
                return;
            }

            // Determine sliding direction
            var direction = val > oldVal ? DIRECTION.next : DIRECTION.prev;

            // Rotates
            if (oldVal === 0 && val === this.slides.length - 1) {
                direction = DIRECTION.prev;
            } else if (oldVal === this.slides.length - 1 && val === 0) {
                direction = DIRECTION.next;
            }

            // Determine current and next slides
            var currentSlide = this.slides[oldVal];
            var nextSlide = this.slides[val];

            // Don't do anything if there aren't any slides to slide to
            if (!currentSlide || !nextSlide) {
                return;
            }

            // Start animating
            this.isSliding = true;
            this.$emit('sliding-start', val);

            // Update v-model
            this.$emit('input', this.index);

            nextSlide.classList.add(direction.overlayClass);
            // Trigger a reflow of next slide
            reflow(nextSlide);

            addClass(currentSlide, direction.dirClass);
            addClass(nextSlide, direction.dirClass);

            // Transition End handler
            var called = false;
            var onceTransEnd = function onceTransEnd(evt) {
                if (called) {
                    return;
                }
                called = true;
                if (_this4.transitionEndEvent) {
                    var events = _this4.transitionEndEvent.split(/\s+/);
                    events.forEach(function (event) {
                        eventOff(currentSlide, event, onceTransEnd);
                    });
                }
                _this4._animationTimeout = null;

                removeClass(nextSlide, direction.dirClass);
                removeClass(nextSlide, direction.overlayClass);
                addClass(nextSlide, 'active');

                removeClass(currentSlide, 'active');
                removeClass(currentSlide, direction.dirClass);
                removeClass(currentSlide, direction.overlayClass);

                setAttr(currentSlide, 'aria-current', 'false');
                setAttr(nextSlide, 'aria-current', 'true');
                setAttr(currentSlide, 'aria-hidden', 'true');
                setAttr(nextSlide, 'aria-hidden', 'false');

                currentSlide.tabIndex = -1;
                nextSlide.tabIndex = -1;

                if (!_this4.isCycling) {
                    // Focus the next slide for screen readers if not in play mode
                    nextSlide.tabIndex = 0;
                    _this4.$nextTick(function () {
                        nextSlide.focus();
                    });
                }

                _this4.isSliding = false;
                // Notify ourselves that we're done sliding (slid)
                _this4.$nextTick(function () {
                    return _this4.$emit('sliding-end', val);
                });
            };

            // Clear transition classes after transition ends
            if (this.transitionEndEvent) {
                var events = this.transitionEndEvent.split(/\s+/);
                events.forEach(function (event) {
                    eventOn(currentSlide, event, onceTransEnd);
                });
            }
            // Fallback to setTimeout
            this._animationTimeout = setTimeout(onceTransEnd, TRANS_DURATION);
        }
    },
    created: function created() {
        // Create private non-reactive props
        this._animationTimeout = null;
    },
    mounted: function mounted() {
        // Cache current browser transitionend event name
        this.transitionEndEvent = getTransisionEndEvent(this.$el) || null;

        // Get all slides
        this.updateSlides();

        // Observe child changes so we can update slide list
        observeDOM(this.$refs.inner, this.updateSlides.bind(this), {
            subtree: false,
            childList: true,
            attributes: true,
            attributeFilter: ['id']
        });
    },
    destroyed: function destroyed() {
        clearInterval(this.intervalId);
        clearTimeout(this._animationTimeout);
        this._animationTimeout = null;
    }
};

// Blank image with fill template
var BLANK_TEMPLATE = '<svg width="%{w}" height="%{h}" ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'viewBox="0 0 %{w} %{h}" preserveAspectRatio="none">' + '<rect width="100%" height="100%" style="fill:%{f};"></rect>' + '</svg>';

function makeBlankImgSrc(width, height, color) {
    var src = encodeURIComponent(BLANK_TEMPLATE.replace('%{w}', String(width)).replace('%{h}', String(height)).replace('%{f}', color));
    return 'data:image/svg+xml;charset=UTF-8,' + src;
}

var props$17 = {
    src: {
        type: String,
        default: null
    },
    alt: {
        type: String,
        default: null
    },
    width: {
        type: [Number, String],
        default: null
    },
    height: {
        type: [Number, String],
        default: null
    },
    block: {
        type: Boolean,
        default: false
    },
    fluid: {
        type: Boolean,
        default: false
    },
    fluidGrow: {
        // Gives fluid images class `w-100` to make them grow to fit container
        type: Boolean,
        default: false
    },
    rounded: {
        // rounded can be:
        //   false: no rounding of corners
        //   true: slightly rounded corners
        //   'top': top corners rounded
        //   'right': right corners rounded
        //   'bottom': bottom corners rounded
        //   'left': left corners rounded
        //   'circle': circle/oval
        //   '0': force rounding off
        type: [Boolean, String],
        default: false
    },
    thumbnail: {
        type: Boolean,
        default: false
    },
    left: {
        type: Boolean,
        default: false
    },
    right: {
        type: Boolean,
        default: false
    },
    center: {
        type: Boolean,
        default: false
    },
    blank: {
        type: Boolean,
        default: false
    },
    blankColor: {
        type: String,
        default: 'transparent'
    }
};

var bImg = {
    functional: true,
    props: props$17,
    render: function render(h, _ref) {
        var _class;

        var props = _ref.props,
            data = _ref.data;

        var src = props.src;
        var width = Boolean(parseInt(props.width, 10)) ? parseInt(props.width, 10) : null;
        var height = Boolean(parseInt(props.height, 10)) ? parseInt(props.height, 10) : null;
        var align = null;
        var block = props.block;
        if (props.blank) {
            if (!height && Boolean(width)) {
                height = width;
            } else if (!width && Boolean(height)) {
                width = height;
            }
            if (!width && !height) {
                width = 1;
                height = 1;
            }
            // Make a blank SVG image
            src = makeBlankImgSrc(width, height, props.blankColor || 'transparent');
        }
        if (props.left) {
            align = 'float-left';
        } else if (props.right) {
            align = 'float-right';
        } else if (props.center) {
            align = 'mx-auto';
            block = true;
        }
        return h('img', lib_common(data, {
            attrs: {
                'src': src,
                'alt': props.alt,
                'width': width ? String(width) : null,
                'height': height ? String(height) : null
            },
            class: (_class = {
                'img-thumbnail': props.thumbnail,
                'img-fluid': props.fluid || props.fluidGrow,
                'w-100': props.fluidGrow,
                'rounded': props.rounded === '' || props.rounded === true
            }, defineProperty$1(_class, 'rounded-' + props.rounded, typeof props.rounded === 'string' && props.rounded !== ''), defineProperty$1(_class, align, Boolean(align)), defineProperty$1(_class, 'd-block', block), _class)
        }));
    }
};

var carouselSlide = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "carousel-item", style: { background: _vm.background }, attrs: { "role": "listitem", "id": _vm.safeId() } }, [_vm._t("img", [_vm.imgSrc || _vm.imgBlank ? _c('b-img', { attrs: { "fluid-grow": "", "block": "", "blank": _vm.imgBlank, "blank-color": _vm.imgBlankColor, "src": _vm.imgSrc, "width": _vm.computedWidth, "height": _vm.computedHeight, "alt": _vm.imgAlt } }) : _vm._e()]), _c(_vm.contentTag, { tag: "div", class: _vm.contentClasses }, [_vm.caption ? _c(_vm.captionTag, { tag: "h3", domProps: { "innerHTML": _vm._s(_vm.caption) } }) : _vm._e(), _vm.text ? _c(_vm.textTag, { tag: "p", domProps: { "innerHTML": _vm._s(_vm.text) } }) : _vm._e(), _vm._t("default")], 2)], 2);
    }, staticRenderFns: [],
    components: { bImg: bImg },
    mixins: [idMixin],
    props: {
        imgSrc: {
            type: String,
            default: function _default() {
                if (this && this.src) {
                    // Deprecate src
                    warn("b-carousel-slide: prop 'src' has been deprecated. Use 'img-src' instead");
                    return this.src;
                }
                return null;
            }
        },
        src: {
            // Deprecated: use img-src instead
            type: String
        },
        imgAlt: {
            type: String
        },
        imgWidth: {
            type: [Number, String]
        },
        imgHeight: {
            type: [Number, String]
        },
        imgBlank: {
            type: Boolean,
            default: false
        },
        imgBlankColor: {
            type: String,
            default: 'transparent'
        },
        contentVisibleUp: {
            type: String
        },
        contentTag: {
            type: String,
            default: "div"
        },
        caption: {
            type: String
        },
        captionTag: {
            type: String,
            default: "h3"
        },
        text: {
            type: String
        },
        textTag: {
            type: String,
            default: "p"
        },
        background: {
            type: String
        }
    },
    computed: {
        contentClasses: function contentClasses() {
            return ['carousel-caption', this.contentVisibleUp ? 'd-none' : '', this.contentVisibleUp ? 'd-' + this.contentVisibleUp + '-block' : ''];
        },
        computedWidth: function computedWidth() {
            // Use local width, or try parent width
            return this.imgWidth || this.$parent.imgWidth;
        },
        computedHeight: function computedHeight() {
            // Use local height, or try parent height
            return this.imgHeight || this.$parent.imgHeight;
        }
    }
};

/**
 * Generates a prop object with a type of
 * [Boolean, String, Number]
 */
function boolStrNum() {
    return {
        type: [Boolean, String, Number],
        default: false
    };
}

/**
 * Generates a prop object with a type of
 * [String, Number]
 */
function strNum() {
    return {
        type: [String, Number],
        default: null
    };
}

var computeBkPtClass = memoize(function computeBkPt(type, breakpoint, val) {
    var className = type;
    if (val === false || val === null || val === undefined) {
        return undefined;
    }
    if (breakpoint) {
        className += "-" + breakpoint;
    }
    // Handling the boolean style prop when accepting [Boolean, String, Number]
    // means Vue will not convert <b-col sm /> to sm: true for us.
    // Since the default is false, an empty string indicates the prop's presence.
    if (type === "col" && (val === "" || val === true)) {
        // .col-md
        return className.toLowerCase();
    }
    // .order-md-6
    className += "-" + val;
    return className.toLowerCase();
});

var BREAKPOINTS = ["sm", "md", "lg", "xl"];
// Supports classes like: .col-sm, .col-md-6, .col-lg-auto
var breakpointCol = BREAKPOINTS.reduce(function (propMap, breakpoint) {
    return propMap[breakpoint] = boolStrNum(), propMap;
}, create(null));
// Supports classes like: .offset-md-1, .offset-lg-12
var breakpointOffset = BREAKPOINTS.reduce(function (propMap, breakpoint) {
    return propMap[suffixPropName(breakpoint, "offset")] = strNum(), propMap;
}, create(null));
// Supports classes like: .order-md-1, .order-lg-12
var breakpointOrder = BREAKPOINTS.reduce(function (propMap, breakpoint) {
    return propMap[suffixPropName(breakpoint, "order")] = strNum(), propMap;
}, create(null));

// For loop doesn't need to check hasOwnProperty
// when using an object created from null
var breakpointPropMap = assign(create(null), {
    col: keys(breakpointCol),
    offset: keys(breakpointOffset),
    order: keys(breakpointOrder)
});

var props$18 = assign({}, breakpointCol, breakpointOffset, breakpointOrder, {
    tag: {
        type: String,
        default: "div"
    },
    // Generic flexbox .col
    col: {
        type: Boolean,
        default: false
    },
    // .col-[1-12]|auto
    cols: strNum(),
    // .offset-[1-12]
    offset: strNum(),
    // Flex ordering utility .order-[1-12]
    order: strNum(),
    alignSelf: {
        type: String,
        default: null,
        validator: function validator(str) {
            return arrayIncludes(["auto", "start", "end", "center", "baseline", "stretch"], str);
        }
    }
});

/**
 * We need ".col" to default in when no other props are passed,
 * but always render when col=true.
 */
var col = {
    functional: true,
    props: props$18,
    render: function render(h, _ref) {
        var _classList$push;

        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        var classList = [];
        // Loop through `col`, `offset`, `order` breakpoint props
        for (var type in breakpointPropMap) {
            // Returns colSm, offset, offsetSm, orderMd, etc.
            var _keys = breakpointPropMap[type];
            for (var i = 0; i < _keys.length; i++) {
                // computeBkPt(col, colSm => Sm, value=[String, Number, Boolean])
                var c = computeBkPtClass(type, _keys[i].replace(type, ""), props[_keys[i]]);
                // If a class is returned, push it onto the array.
                if (c) {
                    classList.push(c);
                }
            }
        }

        classList.push((_classList$push = {
            // Default to .col if no other classes generated nor `cols` specified.
            col: props.col || classList.length === 0 && !props.cols
        }, defineProperty$1(_classList$push, "col-" + props.cols, props.cols), defineProperty$1(_classList$push, "offset-" + props.offset, props.offset), defineProperty$1(_classList$push, "order-" + props.order, props.order), defineProperty$1(_classList$push, "align-self-" + props.alignSelf, props.alignSelf), _classList$push));

        return h(props.tag, lib_common(data, { class: classList }), children);
    }
};

// Events we emit on $root
var EVENT_STATE = 'bv::collapse::state';
var EVENT_ACCORDION = 'bv::collapse::accordion';

// Events we listen to on $root
var EVENT_TOGGLE = 'bv::toggle::collapse';

var collapse = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "enter-class": "", "enter-active-class": "collapsing", "enter-to-class": "", "leave-class": "", "leave-active-class": "collapsing", "leave-to-class": "" }, on: { "enter": _vm.onEnter, "after-enter": _vm.onAfterEnter, "leave": _vm.onLeave, "after-leave": _vm.onAfterLeave } }, [_c(_vm.tag, { directives: [{ name: "show", rawName: "v-show", value: _vm.show, expression: "show" }], tag: "component", class: _vm.classObject, attrs: { "id": _vm.id || null }, on: { "click": _vm.clickHandler } }, [_vm._t("default")], 2)], 1);
    }, staticRenderFns: [],
    mixins: [listenOnRootMixin],
    data: function data() {
        return {
            show: this.visible,
            transitioning: false
        };
    },

    model: {
        prop: 'visible',
        event: 'input'
    },
    props: {
        id: {
            type: String,
            required: true
        },
        isNav: {
            type: Boolean,
            default: false
        },
        accordion: {
            type: String,
            default: null
        },
        visible: {
            type: Boolean,
            default: false
        },
        tag: {
            type: String,
            default: 'div'
        }
    },
    watch: {
        visible: function visible(newVal) {
            if (newVal !== this.show) {
                this.show = newVal;
            }
        },
        show: function show(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.emitState();
            }
        }
    },
    computed: {
        classObject: function classObject() {
            return {
                'navbar-collapse': this.isNav,
                'collapse': !this.transitioning,
                'show': this.show && !this.transitioning
            };
        }
    },
    methods: {
        toggle: function toggle() {
            this.show = !this.show;
        },
        onEnter: function onEnter(el) {
            el.style.height = 0;
            reflow(el);
            el.style.height = el.scrollHeight + 'px';
            this.transitioning = true;
            // This should be moved out so we can add cancellable events
            this.$emit('show');
        },
        onAfterEnter: function onAfterEnter(el) {
            el.style.height = null;
            this.transitioning = false;
            this.$emit('shown');
        },
        onLeave: function onLeave(el) {
            el.style.height = 'auto';
            el.style.display = 'block';
            el.style.height = el.getBoundingClientRect().height + 'px';
            reflow(el);
            this.transitioning = true;
            el.style.height = 0;
            // This should be moved out so we can add cancellable events
            this.$emit('hide');
        },
        onAfterLeave: function onAfterLeave(el) {
            el.style.height = null;
            this.transitioning = false;
            this.$emit('hidden');
        },
        emitState: function emitState() {
            this.$emit('input', this.show);
            // Let v-b-toggle know the state of this collapse
            this.$root.$emit(EVENT_STATE, this.id, this.show);
            if (this.accordion && this.show) {
                // Tell the other collapses in this accordion to close
                this.$root.$emit(EVENT_ACCORDION, this.id, this.accordion);
            }
        },
        clickHandler: function clickHandler(evt) {
            // If we are in a nav/navbar, close the collapse when non-disabled link clicked
            var el = evt.target;
            if (!this.isNav || !el || getComputedStyle(this.$el).display !== 'block') {
                return;
            }
            if (hasClass(el, 'nav-link') || hasClass(el, 'dropdown-item')) {
                this.show = false;
            }
        },
        handleToggleEvt: function handleToggleEvt(target) {
            if (target !== this.id) {
                return;
            }
            this.toggle();
        },
        handleAccordionEvt: function handleAccordionEvt(openedId, accordion) {
            if (!this.accordion || accordion !== this.accordion) {
                return;
            }
            if (openedId === this.id) {
                // Open this collapse if not shown
                if (!this.show) {
                    this.toggle();
                }
            } else {
                // Close this collapse if shown
                if (this.show) {
                    this.toggle();
                }
            }
        },
        handleResize: function handleResize() {
            // Handler for orientation/resize to set collapsed state in nav/navbar
            this.show = getComputedStyle(this.$el).display === 'block';
        }
    },
    created: function created() {
        // Listen for toggle events to open/close us
        this.listenOnRoot(EVENT_TOGGLE, this.handleToggleEvt);
        // Listen to otehr collapses for accordion events
        this.listenOnRoot(EVENT_ACCORDION, this.handleAccordionEvt);
    },
    mounted: function mounted() {
        if (this.isNav && typeof document !== 'undefined') {
            // Set up handlers
            window.addEventListener('resize', this.handleResize, false);
            window.addEventListener('orientationchange', this.handleResize, false);
            this.handleResize();
        }
        this.emitState();
    },
    beforeDestroy: function beforeDestroy() {
        if (this.isNav && typeof document !== 'undefined') {
            window.removeEventListener('resize', this.handleResize, false);
            window.removeEventListener('orientationchange', this.handleResize, false);
        }
    }
};

var props$19 = {
    tag: {
        type: String,
        default: "div"
    },
    fluid: {
        type: Boolean,
        default: false
    }
};

var Container = {
    functional: true,
    props: props$19,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        return h(props.tag, lib_common(data, {
            class: {
                'container': !props.fluid,
                'container-fluid': props.fluid
            }
        }), children);
    }
};

var dropdown = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.dropdownClasses, attrs: { "id": _vm.safeId() } }, [_vm.split ? _c('b-button', { ref: "button", attrs: { "id": _vm.safeId('_BV_button_'), "aria-haspopup": _vm.split ? 'true' : null, "aria-expanded": _vm.split ? _vm.visible ? 'true' : 'false' : null, "variant": _vm.variant, "size": _vm.size, "disabled": _vm.disabled }, on: { "click": function click($event) {
                    $event.stopPropagation();$event.preventDefault();_vm.click($event);
                } } }, [_vm._t("button-content", [_vm._t("text", [_vm._v(_vm._s(_vm.text))])])], 2) : _vm._e(), _c('b-button', { ref: "toggle", class: ['dropdown-toggle', { 'dropdown-toggle-split': _vm.split }], attrs: { "id": _vm.safeId('_BV_toggle_'), "aria-haspopup": _vm.split ? null : 'true', "aria-expanded": _vm.split ? null : _vm.visible ? 'true' : 'false', "variant": _vm.variant, "size": _vm.size, "disabled": _vm.disabled }, on: { "click": function click($event) {
                    $event.stopPropagation();$event.preventDefault();_vm.toggle($event);
                } } }, [_vm.split ? _c('span', { staticClass: "sr-only" }, [_vm._v(_vm._s(_vm.toggleText))]) : _vm._t("button-content", [_vm._t("text", [_vm._v(_vm._s(_vm.text))])])], 2), _c('div', { ref: "menu", class: _vm.menuClasses, attrs: { "role": _vm.role, "aria-labelledby": _vm.safeId(_vm.split ? '_BV_toggle_' : '_BV_button_') }, on: { "mouseover": _vm.onMouseOver, "keyup": function keyup($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) {
                        return null;
                    }_vm.onEsc($event);
                }, "keydown": [function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "tab", 9)) {
                        return null;
                    }_vm.onTab($event);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) {
                        return null;
                    }_vm.focusNext($event, true);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) {
                        return null;
                    }_vm.focusNext($event, false);
                }] } }, [_vm._t("default")], 2)], 1);
    }, staticRenderFns: [],
    mixins: [idMixin, dropdownMixin],
    components: { bButton: bBtn },
    props: {
        split: {
            type: Boolean,
            default: false
        },
        toggleText: {
            type: String,
            default: 'Toggle Dropdown'
        },
        size: {
            type: String,
            default: null
        },
        variant: {
            type: String,
            default: null
        },
        role: {
            type: String,
            default: 'menu'
        }
    },
    computed: {
        dropdownClasses: function dropdownClasses() {
            return ['btn-group', 'b-dropdown', 'dropdown', this.dropup ? 'dropup' : '', this.visible ? 'show' : ''];
        },
        menuClasses: function menuClasses() {
            return ['dropdown-menu', this.right ? 'dropdown-menu-right' : '', this.visible ? 'show' : ''];
        }
    }
};

var props$20 = propsFactory();

var dropdownItem = {
    functional: true,
    props: props$20,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        return h(bLink, lib_common(data, {
            props: props,
            staticClass: "dropdown-item",
            attrs: { role: "menuitem" }
        }), children);
    }
};

var props$21 = {
    disabled: {
        type: Boolean,
        default: false
    }
};

var dropdownItemButton = {
    functional: true,
    props: props$21,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            parent = _ref.parent,
            children = _ref.children;

        return h("button", lib_common(data, {
            props: props,
            staticClass: "dropdown-item",
            attrs: { role: "menuitem", type: "button", disabled: props.disabled },
            on: {
                click: function click(e) {
                    parent.$root.$emit("clicked::link", e);
                }
            }
        }), children);
    }
};

var props$22 = {
    tag: {
        type: String,
        default: "div"
    }
};

var dropdownDivider = {
    functional: true,
    props: props$22,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data;

        return h(props.tag, lib_common(data, {
            staticClass: "dropdown-divider",
            attrs: { role: "separator" }
        }));
    }
};

var props$23 = {
    id: {
        type: String,
        default: null
    },
    tag: {
        type: String,
        default: "h6"
    }
};

var dropdownHeader = {
    functional: true,
    props: props$23,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        return h(props.tag, lib_common(data, {
            staticClass: "dropdown-header",
            attrs: { id: props.id || null }
        }), children);
    }
};

var props$24 = {
    type: {
        type: String,
        default: "iframe",
        validator: function validator(str) {
            return arrayIncludes(["iframe", "embed", "video", "object", "img", "b-img", "b-img-lazy"], str);
        }
    },
    tag: {
        type: String,
        default: "div"
    },
    aspect: {
        type: String,
        default: "16by9"
    }
};

var embed = {
    functional: true,
    props: props$24,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        return h(props.tag, {
            ref: data.ref,
            staticClass: "embed-responsive",
            class: defineProperty$1({}, "embed-responsive-" + props.aspect, Boolean(props.aspect))
        }, [h(props.type, lib_common(data, { ref: '', staticClass: "embed-responsive-item" }), children)]);
    }
};

var props$25 = {
    id: {
        type: String,
        default: null
    },
    inline: {
        type: Boolean,
        default: false
    },
    novalidate: {
        type: Boolean,
        default: false
    },
    validated: {
        type: Boolean,
        default: false
    }
};

var Form = {
    functional: true,
    props: props$25,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        return h("form", lib_common(data, {
            class: {
                "form-inline": props.inline,
                "was-validated": props.validated
            },
            attrs: {
                id: props.id,
                novalidate: props.novalidate
            }
        }), children);
    }
};

var props$26 = {
    tag: {
        type: String,
        default: "div"
    }
};

var bFormRow = {
    functional: true,
    props: props$26,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        return h(props.tag, lib_common(data, {
            staticClass: "form-row"
        }), children);
    }
};

var props$27 = {
    id: {
        type: String,
        default: null
    },
    tag: {
        type: String,
        default: "small"
    },
    textVariant: {
        type: String,
        default: "muted"
    },
    inline: {
        type: Boolean,
        default: false
    }
};

var bFormText = {
    functional: true,
    props: props$27,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        return h(props.tag, lib_common(data, {
            class: defineProperty$1({
                'form-text': !Boolean(props.inline)
            }, "text-" + props.textVariant, Boolean(props.textVariant)),
            attrs: {
                id: props.id
            }
        }), children);
    }
};

var props$28 = {
    id: {
        type: String,
        default: null
    },
    tag: {
        type: String,
        default: 'div'
    }
};

var bFormFeedback = {
    functional: true,
    props: props$28,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        return h(props.tag, lib_common(data, {
            staticClass: 'invalid-feedback',
            attrs: {
                id: props.id
            }
        }), children);
    }
};

// Selector to find first input with an ID. This Order is important!
var INPUT_SELECTOR = ['[role="radiogroup"][id]', '[role="group"][id]', 'input[id]', 'select[id]', 'textarea[id]', '.form-control[id]', '.form-control-plaintext[id]', '.dropdown[id]', '.dropup[id]'].join(',');

var formGroup = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('b-form-row', { class: _vm.groupClasses, attrs: { "id": _vm.safeId(), "role": "group", "aria-describedby": _vm.describedByIds } }, [_vm.label || _vm.$slots['label'] || _vm.horizontal ? _c('label', { class: _vm.labelClasses, attrs: { "for": _vm.targetId, "id": _vm.labelId } }, [_vm._t("label", [_c('span', { domProps: { "innerHTML": _vm._s(_vm.label) } })])], 2) : _vm._e(), _c('div', { ref: "content", class: _vm.inputLayoutClasses }, [_vm._t("default"), _c('b-form-feedback', { directives: [{ name: "show", rawName: "v-show", value: _vm.feedback || _vm.$slots['feedback'], expression: "feedback || $slots['feedback']" }], attrs: { "id": _vm.feedbackId, "role": "alert", "aria-live": "assertive", "aria-atomic": "true" } }, [_vm._t("feedback", [_c('span', { domProps: { "innerHTML": _vm._s(_vm.feedback) } })])], 2), _vm.description || _vm.$slots['description'] ? _c('b-form-text', { attrs: { "id": _vm.descriptionId } }, [_vm._t("description", [_c('span', { domProps: { "innerHTML": _vm._s(_vm.description) } })])], 2) : _vm._e()], 2)]);
    }, staticRenderFns: [],
    mixins: [idMixin, formStateMixin],
    components: {
        bFormRow: bFormRow,
        bFormText: bFormText,
        bFormFeedback: bFormFeedback
    },
    data: function data() {
        return {
            targetId: null
        };
    },

    props: {
        labelFor: {
            type: String,
            default: null
        },
        validated: {
            type: Boolean,
            value: false
        },
        horizontal: {
            type: Boolean,
            default: false
        },
        labelCols: {
            type: Number,
            default: 3,
            validator: function validator(value) {
                if (value >= 1 && value <= 11) {
                    return true;
                }
                warn('b-form-group: label-cols must be a value between 1 and 11');
                return false;
            }
        },
        breakpoint: {
            type: String,
            default: 'sm'
        },
        labelTextAlign: {
            type: String,
            default: null
        },
        label: {
            type: String,
            default: null
        },
        labelSrOnly: {
            type: Boolean,
            default: false
        },
        description: {
            type: String,
            default: null
        },
        feedback: {
            type: String,
            default: null
        }
    },
    computed: {
        inputState: function inputState() {
            return this.stateClass;
        },
        groupClasses: function groupClasses() {
            return ['b-form-group', 'form-group', this.validated ? 'was-validated' : null, this.inputState];
        },
        labelClasses: function labelClasses() {
            return [this.labelSrOnly ? 'sr-only' : 'col-form-label', this.labelLayout, this.labelAlignClass];
        },
        labelLayout: function labelLayout() {
            if (this.labelSrOnly) {
                return null;
            }
            return this.horizontal ? 'col-' + this.breakpoint + '-' + this.labelCols : 'col-12';
        },
        labelAlignClass: function labelAlignClass() {
            if (this.labelSrOnly) {
                return null;
            }
            return this.labelTextAlign ? 'text-' + this.labelTextAlign : null;
        },
        inputLayoutClasses: function inputLayoutClasses() {
            return [this.horizontal ? 'col-' + this.breakpoint + '-' + (12 - this.labelCols) : 'col-12'];
        },
        labelId: function labelId() {
            return this.label || this.$slots['label'] ? this.safeId('_BV_label_') : null;
        },
        descriptionId: function descriptionId() {
            if (this.description || this.$slots['description']) {
                return this.safeId('_BV_description_');
            }
            return null;
        },
        feedbackId: function feedbackId() {
            if (this.feedback || this.$slots['feedback']) {
                return this.safeId('_BV_feedback_');
            }
            return null;
        },
        describedByIds: function describedByIds() {
            if (this.id) {
                return [this.labelId, this.descriptionId, this.feedbackId].filter(function (i) {
                    return i;
                }).join(' ');
            }
            return null;
        }
    },
    methods: {
        updateTargetId: function updateTargetId() {
            if (this.labelFor) {
                // User supplied for target
                this.targetId = this.labelFor;
                return;
            }
            // Else find first input with ID
            var content = this.$refs.content;
            if (!content) {
                this.targetId = null;
            } else {
                // Find first input element with an ID
                var input = select(INPUT_SELECTOR, content);
                this.targetId = input && input.id ? input.id : null;
            }
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.targetId = this.labelFor || null;
        // We run in nextTick to ensure auto IDs are available
        this.$nextTick(function () {
            return _this.updateTargetId();
        });
    },
    updated: function updated() {
        var _this2 = this;

        // We run in nextTick to ensure auto IDs are available
        this.$nextTick(function () {
            return _this2.updateTargetId();
        });
    }
};

var bFormCheckbox = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _vm.is_Plain && !_vm.is_ButtonMode ? _c('div', { class: ['form-check', _vm.is_Stacked ? '' : 'form-check-inline'] }, [_c('label', { staticClass: "form-check-label" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.computedLocalChecked, expression: "computedLocalChecked" }], ref: "check", staticClass: "form-check-input", attrs: { "type": "checkbox", "id": _vm.safeId(), "name": _vm.get_Name, "true-value": _vm.value, "false-value": _vm.uncheckedValue, "disabled": _vm.is_Disabled, "required": _vm.is_Required, "autocomplete": "off", "aria-required": _vm.is_Required ? 'true' : null }, domProps: { "value": _vm.value, "checked": Array.isArray(_vm.computedLocalChecked) ? _vm._i(_vm.computedLocalChecked, _vm.value) > -1 : _vm._q(_vm.computedLocalChecked, _vm.value) }, on: { "change": _vm.handleChange, "__c": function __c($event) {
                    var $$a = _vm.computedLocalChecked,
                        $$el = $event.target,
                        $$c = $$el.checked ? _vm.value : _vm.uncheckedValue;if (Array.isArray($$a)) {
                        var $$v = _vm.value,
                            $$i = _vm._i($$a, $$v);if ($$el.checked) {
                            $$i < 0 && (_vm.computedLocalChecked = $$a.concat($$v));
                        } else {
                            $$i > -1 && (_vm.computedLocalChecked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                        }
                    } else {
                        _vm.computedLocalChecked = $$c;
                    }
                } } }), _vm._t("default")], 2)]) : _c('label', { class: _vm.is_ButtonMode ? _vm.buttonClasses : _vm.labelClasses }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.computedLocalChecked, expression: "computedLocalChecked" }], ref: "check", class: _vm.is_ButtonMode ? '' : 'custom-control-input', attrs: { "type": "checkbox", "id": _vm.safeId(), "name": _vm.get_Name, "true-value": _vm.value, "false-value": _vm.uncheckedValue, "disabled": _vm.is_Disabled, "required": _vm.is_Required, "autocomplete": "off", "aria-required": _vm.is_Required ? 'true' : null }, domProps: { "value": _vm.value, "checked": Array.isArray(_vm.computedLocalChecked) ? _vm._i(_vm.computedLocalChecked, _vm.value) > -1 : _vm._q(_vm.computedLocalChecked, _vm.value) }, on: { "focus": _vm.handleFocus, "blur": _vm.handleFocus, "change": _vm.handleChange, "__c": function __c($event) {
                    var $$a = _vm.computedLocalChecked,
                        $$el = $event.target,
                        $$c = $$el.checked ? _vm.value : _vm.uncheckedValue;if (Array.isArray($$a)) {
                        var $$v = _vm.value,
                            $$i = _vm._i($$a, $$v);if ($$el.checked) {
                            $$i < 0 && (_vm.computedLocalChecked = $$a.concat($$v));
                        } else {
                            $$i > -1 && (_vm.computedLocalChecked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                        }
                    } else {
                        _vm.computedLocalChecked = $$c;
                    }
                } } }), _vm._v(" "), !_vm.is_ButtonMode ? _c('span', { staticClass: "custom-control-indicator", attrs: { "aria-hidden": "true" } }) : _vm._e(), _vm._v(" "), _c('span', { class: _vm.is_ButtonMode ? '' : 'custom-control-description' }, [_vm._t("default")], 2)]);
    }, staticRenderFns: [],
    mixins: [idMixin, formRadioCheckMixin, formMixin, formSizeMixin, formStateMixin, formCustomMixin],
    props: {
        value: {
            default: true
        },
        uncheckedValue: {
            // Not applicable in multi-check mode
            default: false
        },
        indeterminate: {
            // Not applicable in multi-check mode
            type: Boolean,
            default: false
        }
    },
    computed: {
        labelClasses: function labelClasses() {
            return ['custom-control', 'custom-checkbox', Boolean(this.get_Size) ? 'form-control-' + this.get_Size : '', this.get_StateClass];
        },
        is_Checked: function is_Checked() {
            var checked = this.computedLocalChecked;
            if (isArray(checked)) {
                for (var i = 0; i < checked.length; i++) {
                    if (looseEqual(checked[i], this.value)) {
                        return true;
                    }
                }
                return false;
            } else {
                return looseEqual(checked, this.value);
            }
        }
    },
    watch: {
        computedLocalChecked: function computedLocalChecked(newVal, oldVal) {
            if (looseEqual(newVal, oldVal)) {
                return;
            }
            this.$emit('input', newVal);
            this.$emit('update:indeterminate', this.$refs.check.indeterminate);
        },
        checked: function checked(newVal, oldVal) {
            if (this.is_Child || looseEqual(newVal, oldVal)) {
                return;
            }
            this.computedLocalChecked = newVal;
        },
        indeterminate: function indeterminate(newVal, oldVal) {
            this.setIndeterminate(newVal);
        }
    },
    methods: {
        handleChange: function handleChange(_ref) {
            var checked = _ref.target.checked;

            // Change event is only fired via user interaction
            // And we only emit the value of this checkbox
            if (this.is_Child || isArray(this.computedLocalChecked)) {
                this.$emit('change', checked ? this.value : null);
                if (this.is_Child) {
                    // If we are a child of form-checkbbox-group, emit change on parent
                    this.$parent.$emit('change', this.computedLocalChecked);
                }
            } else {
                // Single radio mode supports unchecked value
                this.$emit('change', checked ? this.value : this.uncheckedValue);
            }
            this.$emit('update:indeterminate', this.$refs.check.indeterminate);
        },
        setIndeterminate: function setIndeterminate(state) {
            // Indeterminate only supported in single checkbox mode
            if (this.is_Child || isArray(this.computedLocalChecked)) {
                return;
            }
            this.$refs.check.indeterminate = state;
            // Emit update event to prop
            this.$emit('update:indeterminate', this.$refs.check.indeterminate);
        }
    },
    mounted: function mounted() {
        // Set initial indeterminate state
        this.setIndeterminate(this.indeterminate);
    }
};

var formCheckboxGroup = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.groupClasses, attrs: { "id": _vm.safeId(), "role": "group", "tabindex": "-1", "data-toggle": _vm.buttons ? 'buttons' : null, "aria-required": _vm.required ? 'true' : null, "aria-invalid": _vm.computedAriaInvalid } }, [_vm._t("first"), _vm._l(_vm.formOptions, function (option, idx) {
            return _c('b-form-checkbox', { key: 'radio_' + idx + '_opt', ref: "options", refInFor: true, attrs: { "id": _vm.safeId('_BV_radio_' + idx + '_opt_'), "name": _vm.name, "value": option.value, "required": _vm.name && _vm.required, "disabled": option.disabled } }, [_c('span', { domProps: { "innerHTML": _vm._s(option.text) } })]);
        }), _vm._t("default")], 2);
    }, staticRenderFns: [],
    mixins: [idMixin, formMixin, formSizeMixin, formStateMixin, formCustomMixin, formOptionsMixin],
    components: [bFormCheckbox],
    data: function data() {
        return {
            localChecked: this.checked || [],
            // Flag for children
            is_RadioCheckGroup: true
        };
    },

    model: {
        prop: 'checked',
        event: 'input'
    },
    props: {
        checked: {
            type: [String, Object, Array],
            default: null
        },
        validated: {
            type: Boolean,
            default: false
        },
        ariaInvalid: {
            type: [Boolean, String],
            default: false
        },
        stacked: {
            type: Boolean,
            default: false
        },
        buttons: {
            // Render as button style
            type: Boolean,
            default: false
        },
        buttonVariant: {
            // Only applicable when rendered with button style
            type: String,
            default: 'secondary'
        }
    },
    watch: {
        checked: function checked(newVal, oldVal) {
            this.localChecked = this.checked;
        },
        localChecked: function localChecked(newVal, oldVal) {
            this.$emit('input', newVal);
        }
    },
    computed: {
        groupClasses: function groupClasses() {
            if (this.buttons) {
                return ['btn-group', this.size ? 'btn-group-' + this.size : '', this.stacked ? 'btn-group-vertical' : '', this.validated ? 'was-validated' : ''];
            }
            return [this.sizeFormClass, this.stacked && this.custom ? 'custom-controls-stacked' : '', this.validated ? 'was-validated' : ''];
        },
        computedAriaInvalid: function computedAriaInvalid() {
            if (this.ariaInvalid === true || this.ariaInvalid === 'true' || this.ariaInvalid === '') {
                return 'true';
            }
            return this.get_State === false ? 'true' : null;
        },
        get_State: function get_State() {
            // This is a tri-state prop (true/valid, false/invalid, null)
            if (typeof this.state === 'boolean') {
                return this.state;
            } else if (this.state === 'valid') {
                return true;
            } else if (this.state === 'invalid') {
                return false;
            }
            return null;
        }
    }
};

var bFormRadio = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _vm.is_Plain && !_vm.is_ButtonMode ? _c('div', { class: ['form-check', _vm.is_Stacked ? '' : 'form-check-inline'] }, [_c('label', { staticClass: "form-check-label" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.computedLocalChecked, expression: "computedLocalChecked" }], ref: "radio", staticClass: "form-check-input", attrs: { "id": _vm.safeId(), "name": _vm.get_Name, "required": _vm.get_Name && _vm.is_Required, "disabled": _vm.is_Disabled, "type": "radio", "autocomplete": "off" }, domProps: { "value": _vm.value, "checked": _vm._q(_vm.computedLocalChecked, _vm.value) }, on: { "focus": _vm.handleFocus, "blur": _vm.handleFocus, "change": _vm.handleChange, "__c": function __c($event) {
                    _vm.computedLocalChecked = _vm.value;
                } } }), _vm._t("default")], 2)]) : _c('label', { class: _vm.is_ButtonMode ? _vm.buttonClasses : _vm.labelClasses }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.computedLocalChecked, expression: "computedLocalChecked" }], ref: "radio", class: _vm.is_ButtonMode ? '' : 'custom-control-input', attrs: { "id": _vm.safeId(), "name": _vm.get_Name, "required": _vm.get_Name && _vm.is_Required, "disabled": _vm.is_Disabled, "type": "radio", "autocomplete": "off" }, domProps: { "value": _vm.value, "checked": _vm._q(_vm.computedLocalChecked, _vm.value) }, on: { "focus": _vm.handleFocus, "blur": _vm.handleFocus, "change": _vm.handleChange, "__c": function __c($event) {
                    _vm.computedLocalChecked = _vm.value;
                } } }), _vm._v(" "), !_vm.is_ButtonMode ? _c('span', { staticClass: "custom-control-indicator", attrs: { "aria-hidden": "true" } }) : _vm._e(), _vm._v(" "), _c('span', { class: !_vm.is_ButtonMode ? 'custom-control-description' : null }, [_vm._t("default")], 2)]);
    }, staticRenderFns: [],
    mixins: [idMixin, formRadioCheckMixin, formMixin, formStateMixin],
    watch: {
        // Radio Groups can only have a single value, so our watchers are simple
        checked: function checked(newVal, oldVal) {
            this.computedLocalChceked = newVal;
        },
        computedLocalChceked: function computedLocalChceked(newVal, oldVal) {
            this.$emit('input', this.computedLocalChceked);
        }
    },
    computed: {
        is_Checked: function is_Checked() {
            return looseEqual(this.value, this.computedLocalChecked);
        },
        labelClasses: function labelClasses() {
            // Specific to radio
            return [Boolean(this.get_Size) ? 'form-control-' + this.get_Size : '', 'custom-control', 'custom-radio', this.get_StateClass];
        }
    },
    methods: {
        handleChange: function handleChange(_ref) {
            var checked = _ref.target.checked;

            // Change is only emitted on user interaction
            this.$emit('change', checked ? this.value : null);
            // If this is a child of form-radio-group, we emit a change event on it as well
            if (this.is_Child) {
                this.$parent.$emit('change', this.computedLocalChecked);
            }
        }
    }
};

var formRadioGroup = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.groupClasses, attrs: { "id": _vm.safeId(), "role": "radiogroup", "tabindex": "-1", "data-toggle": _vm.buttons ? 'buttons' : null, "aria-required": _vm.required ? 'true' : null, "aria-invalid": _vm.computedAriaInvalid } }, [_vm._t("first"), _vm._l(_vm.formOptions, function (option, idx) {
            return _c('b-form-radio', { key: 'radio_' + idx + '_opt', ref: "options", refInFor: true, attrs: { "id": _vm.safeId('_BV_radio_' + idx + '_opt_'), "name": _vm.name, "value": option.value, "required": _vm.name && _vm.required, "disabled": option.disabled } }, [_c('span', { domProps: { "innerHTML": _vm._s(option.text) } })]);
        }), _vm._t("default")], 2);
    }, staticRenderFns: [],
    mixins: [idMixin, formMixin, formSizeMixin, formStateMixin, formCustomMixin, formOptionsMixin],
    components: [bFormRadio],
    data: function data() {
        return {
            localChecked: this.checked,
            // Flag for children
            is_RadioCheckGroup: true
        };
    },

    model: {
        prop: 'checked',
        event: 'input'
    },
    props: {
        checked: {
            type: [String, Object],
            default: null
        },
        validated: {
            type: Boolean,
            default: false
        },
        ariaInvalid: {
            type: [Boolean, String],
            default: false
        },
        stacked: {
            type: Boolean,
            default: false
        },
        buttons: {
            // Render as button style
            type: Boolean,
            default: false
        },
        buttonVariant: {
            // Only applicable when rendered with button style
            type: String,
            default: 'secondary'
        }
    },
    watch: {
        checked: function checked(newVal, oldVal) {
            this.localChecked = this.checked;
        },
        localChecked: function localChecked(newVal, oldVal) {
            this.$emit('input', newVal);
        }
    },
    computed: {
        groupClasses: function groupClasses() {
            if (this.buttons) {
                return ['btn-group', this.size ? 'btn-group-' + this.size : '', this.stacked ? 'btn-group-vertical' : '', this.validated ? 'was-validated' : ''];
            }
            return [this.sizeFormClass, this.stacked && this.custom ? 'custom-controls-stacked' : '', this.validated ? 'was-validated' : ''];
        },
        computedAriaInvalid: function computedAriaInvalid() {
            if (this.ariaInvalid === true || this.ariaInvalid === 'true' || this.ariaInvalid === '') {
                return 'true';
            }
            return this.get_State === false ? 'true' : null;
        },
        get_State: function get_State() {
            // This is a tri-state prop (true/valid, false/invalid, null)
            if (typeof this.state === 'boolean') {
                return this.state;
            } else if (this.state === 'valid') {
                return true;
            } else if (this.state === 'invalid') {
                return false;
            }
            return null;
        }
    }
};

// Valid input types
var TYPES = ['text', 'password', 'email', 'number', 'url', 'tel', 'search', 'range', 'color', 'date', 'time', 'datetime', 'datetime-local', 'month', 'week'];

var formInput = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('input', { class: _vm.inputClass, attrs: { "id": _vm.safeId(), "name": _vm.name, "type": _vm.localType, "disabled": _vm.disabled, "required": _vm.required, "readonly": _vm.readonly || _vm.plaintext, "placeholder": _vm.placeholder, "autocomplete": _vm.autocomplete || null, "aria-required": _vm.required ? 'true' : null, "aria-invalid": _vm.computedAriaInvalid }, domProps: { "value": _vm.localValue }, on: { "input": function input($event) {
                    _vm.onInput($event.target.value, $event);
                }, "change": function change($event) {
                    _vm.onChange($event.target.value, $event);
                } } });
    }, staticRenderFns: [],
    mixins: [idMixin, formMixin, formSizeMixin, formStateMixin],
    data: function data() {
        return {
            localValue: this.value
        };
    },

    props: {
        value: {
            default: null
        },
        type: {
            type: String,
            default: 'text',
            validator: function validator(type) {
                return arrayIncludes(TYPES, type);
            }
        },
        ariaInvalid: {
            type: [Boolean, String],
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        plaintext: {
            type: Boolean,
            default: false
        },
        autocomplete: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: null
        },
        formatter: {
            type: Function
        },
        lazyFormatter: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        localType: function localType() {
            // We only allow certain types
            return arrayIncludes(TYPES, this.type) ? this.type : 'text';
        },
        inputClass: function inputClass() {
            return [this.plaintext ? 'form-control-plaintext' : 'form-control', this.sizeFormClass, this.stateClass];
        },
        computedAriaInvalid: function computedAriaInvalid() {
            if (!Boolean(this.ariaInvalid) || this.ariaInvalid === 'false') {
                // this.ariaInvalid is null or false or 'false'
                return this.computedState === false ? 'true' : null;
            }
            if (this.ariaInvalid === true) {
                // User wants explicit aria-invalid=true
                return 'true';
            }
            // Most likely a string value (which could be 'true')
            return this.ariaInvalid;
        }
    },
    watch: {
        value: function value(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.localValue = newVal;
            }
        },
        localValue: function localValue(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.$emit('input', newVal);
            }
        }
    },
    methods: {
        format: function format(value, e) {
            if (this.formatter) {
                var formattedValue = this.formatter(value, e);
                if (formattedValue !== value) {
                    return formattedValue;
                }
            }
            return value;
        },
        onInput: function onInput(value, e) {
            if (this.lazyFormatter) {
                // Update the model with the current unformated value
                this.localValue = value;
            } else {
                this.localValue = this.format(value, e);
            }
        },
        onChange: function onChange(value, e) {
            this.localValue = this.format(value, e);
            this.$emit('change', this.localValue);
        },
        focus: function focus() {
            if (!this.disabled) {
                this.$el.focus();
            }
        }
    }
};

var formTextarea = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('textarea', { directives: [{ name: "model", rawName: "v-model", value: _vm.localValue, expression: "localValue" }], class: _vm.inputClass, style: _vm.inputStyle, attrs: { "id": _vm.safeId(), "name": _vm.name, "disabled": _vm.disabled, "placeholder": _vm.placeholder, "required": _vm.required, "autocomplete": _vm.autocomplete || null, "readonly": _vm.readonly || _vm.plaintext, "rows": _vm.rowsCount, "wrap": _vm.wrap || null, "aria-required": _vm.required ? 'true' : null, "aria-invalid": _vm.computedAriaInvalid }, domProps: { "value": _vm.localValue }, on: { "input": function input($event) {
                    if ($event.target.composing) {
                        return;
                    }_vm.localValue = $event.target.value;
                } } });
    }, staticRenderFns: [],
    mixins: [idMixin, formMixin, formSizeMixin, formStateMixin],
    data: function data() {
        return {
            localValue: this.value
        };
    },

    props: {
        value: {
            type: String,
            default: ''
        },
        ariaInvalid: {
            type: [Boolean, String],
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        plaintext: {
            type: Boolean,
            default: false
        },
        autocomplete: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: null
        },
        rows: {
            type: [Number, String],
            default: null
        },
        maxRows: {
            type: [Number, String],
            default: null
        },
        wrap: {
            // 'soft', 'hard' or 'off'. Browser default is 'soft'
            type: String,
            default: 'soft'
        },
        noResize: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        rowsCount: function rowsCount() {
            var rows = parseInt(this.rows, 10) || 1;
            var maxRows = parseInt(this.maxRows, 10) || 0;
            var lines = (this.value || '').toString().split('\n').length;
            return maxRows ? Math.min(maxRows, Math.max(rows, lines)) : Math.max(rows, lines);
        },
        inputClass: function inputClass() {
            return [this.plaintext ? 'form-control-plaintext' : 'form-control', this.sizeFormClass, this.stateClass];
        },
        inputStyle: function inputStyle() {
            // We set width 100% in plaintext mode to get around a shortcoming in bootstrap CSS
            // setting noResize to true will disable the ability for the user to resize the textarea
            return {
                width: this.plaintext ? '100%' : null,
                resize: this.noResize ? 'none' : null
            };
        },
        computedAriaInvalid: function computedAriaInvalid() {
            if (!Boolean(this.ariaInvalid) || this.ariaInvalid === 'false') {
                // this.ariaInvalid is null or false or 'false'
                return this.computedState === false ? 'true' : null;
            }
            if (this.ariaInvalid === true) {
                // User wants explicit aria-invalid=true
                return 'true';
            }
            // Most likely a string value (which could be the string 'true')
            return this.ariaInvalid;
        }
    },
    watch: {
        value: function value(newVal, oldVal) {
            // Update our localValue
            if (newVal !== oldVal) {
                this.localValue = newVal;
            }
        },
        localValue: function localValue(newVal, oldVal) {
            // update Parent value
            if (newVal !== oldVal) {
                this.$emit('input', newVal);
            }
        }
    },
    methods: {
        focus: function focus() {
            // For external handler that may want a focus method
            if (!this.disabled) {
                this.$el.focus();
            }
        }
    }
};

var formFile = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _vm.plain ? _c('input', { ref: "input", class: ['form-control-file', _vm.sizeFormClass, _vm.stateClass], attrs: { "type": "file", "id": _vm.safeId(), "name": _vm.name, "disabled": _vm.disabled, "required": _vm.required, "capture": _vm.capture || null, "aria-required": _vm.required ? 'true' : null, "accept": _vm.accept || null, "multiple": _vm.multiple, "webkitdirectory": _vm.directory }, on: { "change": _vm.onFileChange } }) : _c('div', { class: ['custom-file', 'w-100', _vm.stateClass], attrs: { "id": _vm.safeId('_BV_file_outer_') }, on: { "dragover": function dragover($event) {
                    $event.stopPropagation();$event.preventDefault();_vm.dragover($event);
                } } }, [_vm.dragging ? _c('span', { staticClass: "drop-here", attrs: { "data-drop": _vm.dropLabel }, on: { "dragover": function dragover($event) {
                    $event.stopPropagation();$event.preventDefault();_vm.dragover($event);
                }, "drop": function drop($event) {
                    $event.stopPropagation();$event.preventDefault();_vm.drop($event);
                }, "dragleave": function dragleave($event) {
                    $event.stopPropagation();$event.preventDefault();_vm.dragging = false;
                } } }) : _vm._e(), _c('input', { ref: "input", class: ['custom-file-input', 'w-100', _vm.stateClass, _vm.hasFocus ? 'focus' : ''], attrs: { "type": "file", "id": _vm.safeId(), "name": _vm.name, "disabled": _vm.disabled, "required": _vm.required, "capture": _vm.capture || null, "aria-required": _vm.required ? 'true' : null, "accept": _vm.accept || null, "multiple": _vm.multiple, "webkitdirectory": _vm.directory, "aria-describedby": _vm.safeId('_BV_file_control_') }, on: { "focusin": _vm.focusHandler, "focusout": _vm.focusHandler, "change": _vm.onFileChange } }), _vm._v(" "), _c('span', { class: ['custom-file-control', _vm.dragging ? 'dragging' : null], attrs: { "id": _vm.safeId('_BV_file_control_'), "data-choose": _vm.computedChooseLabel, "data-selected": _vm.selectedLabel } })]);
    }, staticRenderFns: [], _scopeId: 'data-v-c68bd5f8',
    mixins: [idMixin, formMixin, formStateMixin, formCustomMixin],
    data: function data() {
        return {
            selectedFile: null,
            dragging: false,
            hasFocus: false
        };
    },

    props: {
        accept: {
            type: String,
            default: ''
        },
        capture: {
            // Instruct input to capture from camera
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: null
        },
        chooseLabel: {
            type: String,
            default: null
        },
        multiple: {
            type: Boolean,
            default: false
        },
        directory: {
            type: Boolean,
            default: false
        },
        noTraverse: {
            type: Boolean,
            default: false
        },
        selectedFormat: {
            type: String,
            default: ':count Files'
        },
        noDrop: {
            type: Boolean,
            default: false
        },
        dropLabel: {
            type: String,
            default: 'Drop files here'
        }
    },
    computed: {
        selectedLabel: function selectedLabel() {
            if (!this.selectedFile || this.selectedFile.length === 0) {
                return this.placeholder || 'No file chosen';
            }

            if (this.multiple) {
                if (this.selectedFile.length === 1) {
                    return this.selectedFile[0].name;
                }

                return this.selectedFormat.replace(':names', this.selectedFile.map(function (file) {
                    return file.name;
                }).join(',')).replace(':count', this.selectedFile.length);
            }

            return this.selectedFile.name;
        },
        computedChooseLabel: function computedChooseLabel() {
            return this.chooseLabel || (this.multiple ? 'Choose Files' : 'Choose File');
        }
    },
    watch: {
        selectedFile: function selectedFile(newVal, oldVal) {
            if (newVal === oldVal) {
                return;
            }

            if (!newVal && this.multiple) {
                this.$emit('input', []);
            } else {
                this.$emit('input', newVal);
            }
        }
    },
    methods: {
        focusHandler: function focusHandler(evt) {
            // Boostrap v4.beta doesn't have focus styling for custom file input
            // Firefox has a borked '[type=file]:focus ~ sibling' selector, so we add
            // A 'focus' class to get around this bug
            if (this.plain || evt.type === 'focusout') {
                this.hasFocus = false;
            } else {
                // Add focus styling for custom file input
                this.hasFocus = true;
            }
        },
        reset: function reset() {
            try {
                // Wrapped in try in case IE < 11 craps out
                this.$refs.input.value = '';
            } catch (e) {}

            // IE < 11 doesn't support setting input.value to '' or null
            // So we use this little extra hack to reset the value, just in case
            // This also appears to work on modern browsers as well.
            this.$refs.input.type = '';
            this.$refs.input.type = 'file';

            this.selectedFile = this.multiple ? [] : null;
        },
        onFileChange: function onFileChange(e) {
            var _this = this;

            // Always emit original event
            this.$emit('change', e);

            // Check if special `items` prop is available on event (drop mode)
            // Can be disabled by setting no-traverse
            var items = e.dataTransfer && e.dataTransfer.items;
            if (items && !this.noTraverse) {
                var queue = [];
                for (var i = 0; i < items.length; i++) {
                    var item = items[i].webkitGetAsEntry();
                    if (item) {
                        queue.push(this.traverseFileTree(item));
                    }
                }
                Promise.all(queue).then(function (filesArr) {
                    _this.setFiles(from(filesArr));
                });
                return;
            }

            // Normal handling
            this.setFiles(e.target.files || e.dataTransfer.files);
        },
        setFiles: function setFiles(files) {
            if (!files) {
                this.selectedFile = null;
                return;
            }

            if (!this.multiple) {
                this.selectedFile = files[0];
                return;
            }

            // Convert files to array
            var filesArray = [];
            for (var i = 0; i < files.length; i++) {
                if (files[i].type.match(this.accept)) {
                    filesArray.push(files[i]);
                }
            }

            this.selectedFile = filesArray;
        },
        dragover: function dragover(e) {
            if (this.noDrop || !this.custom) {
                return;
            }

            this.dragging = true;
            e.dataTransfer.dropEffect = 'copy';
        },
        drop: function drop(e) {
            if (this.noDrop) {
                return;
            }

            this.dragging = false;
            if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                this.onFileChange(e);
            }
        },
        traverseFileTree: function traverseFileTree(item, path) {
            var _this2 = this;

            // Based on http://stackoverflow.com/questions/3590058
            return new Promise(function (resolve) {
                path = path || '';
                if (item.isFile) {
                    // Get file
                    item.file(function (file) {
                        file.$path = path; // Inject $path to file obj
                        resolve(file);
                    });
                } else if (item.isDirectory) {
                    // Get folder contents
                    item.createReader().readEntries(function (entries) {
                        var queue = [];
                        for (var i = 0; i < entries.length; i++) {
                            queue.push(_this2.traverseFileTree(entries[i], path + item.name + '/'));
                        }
                        Promise.all(queue).then(function (filesArr) {
                            resolve(from(filesArr));
                        });
                    });
                }
            });
        }
    }
};

var formSelect = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('select', { directives: [{ name: "model", rawName: "v-model", value: _vm.localValue, expression: "localValue" }], ref: "input", class: _vm.inputClass, attrs: { "name": _vm.name, "id": _vm.safeId(), "multiple": _vm.multiple || null, "size": _vm.multiple || _vm.selectSize > 1 ? _vm.selectSize : null, "disabled": _vm.disabled, "required": _vm.required, "aria-required": _vm.required ? 'true' : null, "aria-invalid": _vm.computedAriaInvalid }, on: { "change": function change($event) {
                    var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                        return o.selected;
                    }).map(function (o) {
                        var val = "_value" in o ? o._value : o.value;return val;
                    });_vm.localValue = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
                } } }, [_vm._t("first"), _vm._l(_vm.formOptions, function (option, idx) {
            return _c('option', { key: 'option_' + idx + '_opt', attrs: { "disabled": option.disabled }, domProps: { "value": option.value, "innerHTML": _vm._s(option.text) } });
        }), _vm._t("default")], 2);
    }, staticRenderFns: [],
    mixins: [idMixin, formMixin, formSizeMixin, formStateMixin, formCustomMixin, formOptionsMixin],
    data: function data() {
        return {
            localValue: this.value
        };
    },

    watch: {
        value: function value(newVal, oldVal) {
            this.localValue = newVal;
        },
        localValue: function localValue(newVal, oldVal) {
            this.$emit('input', this.localValue);
        }
    },
    props: {
        value: {},
        multiple: {
            type: Boolean,
            default: false
        },
        selectSize: {
            // Browsers default size to 0, which shows 4 rows in most browsers in multiple mode
            // Size of 1 can bork out firefox
            type: Number,
            default: 0
        },
        ariaInvalid: {
            type: [Boolean, String],
            default: false
        }
    },
    computed: {
        inputClass: function inputClass() {
            return ['form-control', this.stateClass, this.sizeFormClass, this.plain || this.multiple || this.selectSize > 1 ? null : 'custom-select'];
        },
        computedAriaInvalid: function computedAriaInvalid() {
            if (this.ariaInvalid === true || this.ariaInvalid === 'true') {
                return 'true';
            }
            return this.stateClass == 'is-invalid' ? 'true' : null;
        }
    }
};

var THROTTLE = 100;

var imgLazy = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('b-img', { attrs: { "src": _vm.computedSrc, "blank": _vm.computedBlank, "blank-color": _vm.blankColor, "width": _vm.computedWidth, "height": _vm.computedHeight, "fluid": _vm.fluid, "fluid-grow": _vm.fluidGrow, "block": _vm.block, "thumbnail": _vm.thumbnail, "rounded": _vm.rounded, "left": _vm.left, "right": _vm.right, "center": _vm.center } });
    }, staticRenderFns: [],
    components: { bImg: bImg },
    data: function data() {
        return {
            isShown: false,
            scrollTimeout: null
        };
    },

    props: {
        src: {
            type: String,
            default: null,
            rqeuired: true
        },
        width: {
            type: [Number, String],
            default: null
        },
        height: {
            type: [Number, String],
            default: null
        },
        blankSrc: {
            // If null, a blank image is generated
            type: String,
            default: null
        },
        blankColor: {
            type: String,
            default: 'transparent'
        },
        blankWidth: {
            type: [Number, String],
            default: null
        },
        blankHeight: {
            type: [Number, String],
            default: null
        },
        fluid: {
            type: Boolean,
            default: false
        },
        fluidGrow: {
            type: Boolean,
            default: false
        },
        block: {
            type: Boolean,
            default: false
        },
        thumbnail: {
            type: Boolean,
            default: false
        },
        rounded: {
            type: [Boolean, String],
            default: false
        },
        left: {
            type: Boolean,
            default: false
        },
        right: {
            type: Boolean,
            default: false
        },
        center: {
            type: Boolean,
            default: false
        },
        offset: {
            type: [Number, String],
            default: 360
        },
        throttle: {
            type: [Number, String],
            default: THROTTLE
        }
    },
    computed: {
        computedSrc: function computedSrc() {
            return !this.blankSrc || this.isShown ? this.src : this.blankSrc;
        },
        computedBlank: function computedBlank() {
            return this.isShown || this.blankSrc ? false : true;
        },
        computedWidth: function computedWidth() {
            return this.isShown ? this.width : this.blankWidth || this.width;
        },
        computedHeight: function computedHeight() {
            return this.isShown ? this.height : this.blankHeight || this.height;
        }
    },
    mounted: function mounted() {
        this.setListeners(true);
        this.checkView();
    },
    activated: function activated() {
        this.setListeners(true);
        this.checkView();
    },
    deactivated: function deactivated() {
        this.setListeners(false);
    },
    beforeDdestroy: function beforeDdestroy() {
        this.setListeners(false);
    },

    methods: {
        setListeners: function setListeners(on) {
            clearTimeout(this.scrollTimer);
            this.scrollTimout = null;
            var root = window;
            if (on) {
                eventOn(root, 'scroll', this.onScroll);
                eventOn(root, 'resize', this.onScroll);
                eventOn(root, 'orientationchange', this.onScroll);
            } else {
                eventOff(root, 'scroll', this.onScroll);
                eventOff(root, 'resize', this.onScroll);
                eventOff(root, 'orientationchange', this.onScroll);
            }
        },
        checkView: function checkView() {
            // check bounding box + offset to see if we should show 
            if (!isVisible(this.$el)) {
                // Element is hidden, so skip for now
                return;
            }
            var offset$$1 = parseInt(this.offset, 10) || 0;
            var docElement = document.documentElement;
            var view = {
                l: 0 - offset$$1,
                t: 0 - offset$$1,
                b: docElement.clientHeight + offset$$1,
                r: docElement.clientWidth + offset$$1
            };
            var box = getBCR(this.$el);
            if (box.right >= view.l && box.bottom >= view.t && box.left <= view.r && box.top <= view.b) {
                // image is in view (or about to be in view)
                this.isShown = true;
                this.setListeners(false);
            }
        },
        onScroll: function onScroll() {
            if (this.isShown) {
                this.setListeners(false);
            } else {
                clearTimeout(this.scrollTimeout);
                this.scrollTimeout = setTimeout(this.checkView, parseInt(this.throttle, 10) || THROTTLE);
            }
        }
    }
};

var props$29 = {
    fluid: {
        type: Boolean,
        default: false
    },
    containerFluid: {
        type: Boolean,
        default: false
    },
    header: {
        type: String,
        default: null
    },
    headerTag: {
        type: String,
        default: 'h1'
    },
    headerLevel: {
        type: [Number, String],
        default: '3'
    },
    lead: {
        type: String,
        default: null
    },
    leadTag: {
        type: String,
        default: 'p'
    },
    tag: {
        type: String,
        default: 'div'
    },
    bgVariant: {
        type: String,
        default: null
    },
    borderVariant: {
        type: String,
        default: null
    },
    textVariant: {
        type: String,
        default: null
    }
};

var jumbotron = {
    functional: true,
    props: props$29,
    render: function render(h, _ref) {
        var _class2;

        var props = _ref.props,
            data = _ref.data,
            slots = _ref.slots;

        // The order of the conditionals matter.
        // We are building the component markup in order.
        var childNodes = [];

        // Header
        if (props.header || slots().header) {
            childNodes.push(h(props.headerTag, {
                class: defineProperty$1({}, "display-" + props.headerLevel, Boolean(props.headerLevel))
            }, slots().header || props.header));
        }

        // Lead
        if (props.lead || slots().lead) {
            childNodes.push(h(props.leadTag, { staticClass: 'lead' }, slots().lead || props.lead));
        }

        // Default slot
        if (slots().default) {
            childNodes.push(slots().default);
        }

        // If fluid, wrap content in a container/container-fluid
        if (props.fluid) {
            // Children become a child of a container
            childNodes = [h(Container, { props: { 'fluid': props.containerFluid } }, childNodes)];
        }
        // Return the jumbotron
        return h(props.tag, lib_common(data, {
            staticClass: "jumbotron",
            class: (_class2 = {
                'jumbotron-fluid': props.fluid
            }, defineProperty$1(_class2, "text-" + props.textVariant, Boolean(props.textVariant)), defineProperty$1(_class2, "bg-" + props.bgVariant, Boolean(props.bgVariant)), defineProperty$1(_class2, "border-" + props.borderVariant, Boolean(props.borderVariant)), defineProperty$1(_class2, 'border', Boolean(props.borderVariant)), _class2)
        }), childNodes);
    }
};

var props$30 = {
    tag: {
        type: String,
        default: "div"
    },
    flush: {
        type: Boolean,
        default: false
    }
};

var listGroup = {
    functional: true,
    props: props$30,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        var componentData = {
            staticClass: "list-group",
            class: { "list-group-flush": props.flush }
        };

        return h(props.tag, lib_common(data, componentData), children);
    }
};

var actionTags = ["a", "router-link", "button", "b-link"];
var linkProps$1 = propsFactory();
delete linkProps$1.href.default;
delete linkProps$1.to.default;

var props$31 = assign(linkProps$1, {
    tag: {
        type: String,
        default: "div"
    },
    action: {
        type: Boolean,
        default: null
    },
    variant: {
        type: String,
        default: null
    }
});

var listGroupItem = {
    functional: true,
    props: props$31,
    render: function render(h, _ref) {
        var _class;

        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        var tag = !props.href && !props.to ? props.tag : bLink;

        var componentData = {
            staticClass: "list-group-item",
            class: (_class = {
                "list-group-flush": props.flush
            }, defineProperty$1(_class, "list-group-item-" + props.variant, Boolean(props.variant)), defineProperty$1(_class, "active", props.active), defineProperty$1(_class, "disabled", props.disabled), defineProperty$1(_class, "list-group-item-action", Boolean(props.href || props.to || props.action || arrayIncludes(actionTags, props.tag))), _class),
            props: pluckProps(linkProps$1, props)
        };

        return h(tag, lib_common(data, componentData), children);
    }
};

var props$33 = {
    tag: {
        type: String,
        default: "div"
    }
};

var MediaBody = {
    functional: true,
    props: props$33,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        return h(props.tag, lib_common(data, {
            staticClass: "media-body"
        }), children);
    }
};

var props$34 = {
    tag: {
        type: String,
        default: "div"
    },
    verticalAlign: {
        type: String,
        default: "top"
    }
};

var MediaAside = {
    functional: true,
    props: props$34,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        return h(props.tag, lib_common(data, {
            staticClass: "d-flex",
            class: defineProperty$1({}, "align-self-" + props.verticalAlign, props.verticalAlign)
        }), children);
    }
};

var props$32 = {
    tag: {
        type: String,
        default: "div"
    },
    rightAlign: {
        type: Boolean,
        default: false
    },
    verticalAlign: {
        type: String,
        default: "top"
    },
    noBody: {
        type: Boolean,
        default: false
    }
};

var media = {
    functional: true,
    props: props$32,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            slots = _ref.slots,
            children = _ref.children;

        var childNodes = props.noBody ? children : [];

        if (!props.noBody) {
            if (slots().aside && !props.rightAlign) {
                childNodes.push(h(MediaAside, { staticClass: "mr-3", props: { verticalAlign: props.verticalAlign } }, slots().aside));
            }

            childNodes.push(h(MediaBody, slots().default));

            if (slots().aside && props.rightAlign) {
                childNodes.push(h(MediaAside, { staticClass: "ml-3", props: { verticalAlign: props.verticalAlign } }, slots().aside));
            }
        }

        return h(props.tag, lib_common(data, { staticClass: "media" }), childNodes);
    }
};

var BvEvent = function () {
    function BvEvent(type) {
        var eventInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        classCallCheck(this, BvEvent);

        // Start by emulating native Event constructor.
        if (!type) {
            throw new TypeError("Failed to construct '" + this.constructor.name + "'. 1 argument required, " + arguments.length + " given.");
        }
        // Assign defaults first, the eventInit,
        // and the type last so it can't be overwritten.
        assign(this, BvEvent.defaults(), eventInit, { type: type });
        // Freeze some props as readonly, but leave them enumerable.
        defineProperties(this, {
            type: readonlyDescriptor(),
            cancelable: readonlyDescriptor(),
            nativeEvent: readonlyDescriptor(),
            target: readonlyDescriptor(),
            relatedTarget: readonlyDescriptor(),
            vueTarget: readonlyDescriptor()
        });
        // Create a private variable using closure scoping.
        var defaultPrevented = false;
        // Recreate preventDefault method. One way setter.
        this.preventDefault = function preventDefault() {
            if (this.cancelable) {
                defaultPrevented = true;
            }
        };
        // Create 'defaultPrevented' publicly accessible prop
        // that can only be altered by the preventDefault method.
        defineProperty(this, "defaultPrevented", {
            enumerable: true,
            get: function get$$1() {
                return defaultPrevented;
            }
        });
    }

    createClass(BvEvent, null, [{
        key: "defaults",
        value: function defaults$$1() {
            return {
                type: "",
                cancelable: true,
                nativeEvent: null,
                target: null,
                relatedTarget: null,
                vueTarget: null
            };
        }
    }]);
    return BvEvent;
}();

var NAME = 'tooltp';
var CLASS_PREFIX = 'bs-tooltip';
var BSCLS_PREFIX_REGEX = new RegExp('\\b' + CLASS_PREFIX + '\\S+', 'g');

var TRANSITION_DURATION = 150;

// Modal $root event (prepare for future evnt name change)
var MODAL_CLOSE_EVENT = 'bv::modal::hidden';
var MODAL_CLASS = '.modal';

var AttachmentMap$1 = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left',
    TOPLEFT: 'top',
    TOPRIGHT: 'top',
    RIGHTTOP: 'right',
    RIGHTBOTTOM: 'right',
    BOTTOMLEFT: 'bottom',
    BOTTOMRIGHT: 'bottom',
    LEFTTOP: 'left',
    LEFTBOTTOM: 'left'
};

var OffsetMap = {
    AUTO: 0,
    TOPLEFT: -1,
    TOP: 0,
    TOPRIGHT: +1,
    RIGHTTOP: -1,
    RIGHT: 0,
    RIGHTBOTTOM: +1,
    BOTTOMLEFT: -1,
    BOTTOM: 0,
    BOTTOMRIGHT: +1,
    LEFTTOP: -1,
    LEFT: 0,
    LEFTBOTTOM: +1
};

var HoverState = {
    SHOW: 'show',
    OUT: 'out'
};

var ClassName = {
    FADE: 'fade',
    SHOW: 'show'
};

var Selector$1 = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
};

var Defaults$1 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    placement: 'top',
    offset: 0,
    arrowPadding: 6,
    container: false,
    fallbackPlacement: 'flip',
    callbacks: {}
};

// Transition Event names
var TransitionEndEvents$1 = {
    WebkitTransition: ['webkitTransitionEnd'],
    MozTransition: ['transitionend'],
    OTransition: ['otransitionend', 'oTransitionEnd'],
    transition: ['transitionend']
};

// Client Side Tip ID counter for aria-describedby attribute
// Could use Alex's uid generator util
// Each tooltip requires a unique client side ID
var NEXTID = 1;
function generateId(name) {
    return '__BV_' + name + '_' + NEXTID++ + '__';
}

/*
 * ToolTip Class definition
 */

var ToolTip = function () {

    // Main constructor
    function ToolTip(element, config, $root) {
        classCallCheck(this, ToolTip);

        // New tooltip object
        this.$fadeTimeout = null;
        this.$hoverTimeout = null;
        this.$visibleInterval = null;
        this.$hoverState = '';
        this.$activeTrigger = {};
        this.$popper = null;
        this.$element = element;
        this.$tip = null;
        this.$id = generateId(this.constructor.NAME);
        this.$root = $root || null;
        this.$routeWatcher = null;
        this.updateConfig(config);
    }

    // NOTE: Overridden by PopOver class


    createClass(ToolTip, [{
        key: 'updateConfig',


        // Update config
        value: function updateConfig(config) {
            // Merge config into defaults. We use "this" here because PopOver overrides Default
            var updatedConfig = assign({}, this.constructor.Default, config);

            // Sanitize delay
            if (config.delay && typeof config.delay === 'number') {
                updatedConfig.delay = {
                    show: config.delay,
                    hide: config.delay
                };
            }

            // Title for tooltip and popover
            if (config.title && typeof config.title === 'number') {
                updatedConfig.title = config.title.toString();
            }

            // Content only for popover
            if (config.content && typeof config.content === 'number') {
                updatedConfig.content = config.content.toString();
            }

            // Hide element original title if needed
            this.fixTitle();
            // Update the config
            this.$config = updatedConfig;
            // Stop/Restart listening
            this.unListen();
            this.listen();
        }

        // Destroy this instance

    }, {
        key: 'destroy',
        value: function destroy() {
            // Stop listening to trigger events
            this.unListen();
            // Disable while open listeners/watchers
            this.setWhileOpenListeners(false);
            // Clear any timouts
            clearTimeout(this.$hoverTimeout);
            this.$hoverTimeout = null;
            clearTimeout(this.$fadeTimeout);
            this.$fadeTimeout = null;
            // Remove popper
            if (this.$popper) {
                this.$popper.destroy();
            }
            this.$popper = null;
            // Remove tip from document
            if (this.$tip && this.$tip.parentElement) {
                this.$tip.parentElement.removeChild(this.$tip);
            }
            this.$tip = null;
            // Null out other properties
            this.$id = null;
            this.$root = null;
            this.$element = null;
            this.$config = null;
            this.$hoverState = null;
            this.$activeTrigger = null;
        }

        // Click toggler

    }, {
        key: 'toggle',
        value: function toggle(event) {
            if (event) {
                this.$activeTrigger.click = !this.$activeTrigger.click;

                if (this.isWithActiveTrigger()) {
                    this.enter(null);
                } else {
                    this.leave(null);
                }
            } else {
                if (hasClass(this.getTipElement(), ClassName.SHOW)) {
                    this.leave(null);
                } else {
                    this.enter(null);
                }
            }
        }

        // Show tooltip

    }, {
        key: 'show',
        value: function show() {
            var _this = this;

            if (!document.body.contains(this.$element)) {
                // If trigger element isn't in the DOM
                return;
            }

            // Build tooltip element (also sets this.$tip)
            var tip = this.getTipElement();
            this.fixTitle();
            this.setContent(tip);
            if (!this.isWithContent(tip)) {
                // if No content, dont bother showing
                this.$tip = null;
                return;
            }

            // Set ID on tip and aria-describedby on element
            setAttr(tip, 'id', this.$id);
            this.addAriaDescribedby();

            // Set animation on or off
            if (this.$config.animation) {
                addClass(tip, ClassName.FADE);
            } else {
                removeClass(tip, ClassName.FADE);
            }

            var placement = this.getPlacement();
            var attachment = this.constructor.getAttachment(placement);
            this.addAttachmentClass(attachment);

            // Create a cancelable BvEvent
            var showEvt = new BvEvent('show', {
                cancelable: true,
                target: this.$element,
                relatedTarget: tip
            });
            this.emitEvent(showEvt);
            if (showEvt.defaultPrevented) {
                // Don't show if event cancelled
                this.$tip = null;
                return;
            }

            // Insert tooltip if needed
            var container = this.getContainer();
            if (!document.body.contains(tip)) {
                container.appendChild(tip);
            }

            // Refresh popper
            this.removePopper();
            this.$popper = new Popper(this.$element, tip, this.getPopperConfig(placement, tip));

            // Transitionend Callback
            var complete = function complete() {
                if (_this.$config.animation) {
                    _this.fixTransition(tip);
                }
                var prevHoverState = _this.$hoverState;
                _this.$hoverState = null;
                if (prevHoverState === HoverState.OUT) {
                    _this.leave(null);
                }
                // Create a non-cancelable BvEvent
                var shownEvt = new BvEvent('shown', {
                    cancelable: false,
                    target: _this.$element,
                    relatedTarget: tip
                });
                _this.emitEvent(shownEvt);
            };

            // Enable while open listeners/watchers
            this.setWhileOpenListeners(true);

            // Show tip
            addClass(tip, ClassName.SHOW);

            // Start the transition/animation
            this.transitionOnce(tip, complete);
        }

        // handler for periodic visibility check

    }, {
        key: 'visibleCheck',
        value: function visibleCheck(on) {
            var _this2 = this;

            clearInterval(this.$visibleInterval);
            this.$visibleInterval = null;
            if (on) {
                this.$visibleInterval = setInterval(function () {
                    var tip = _this2.getTipElement();
                    if (tip && !isVisible(_this2.$element) && hasClass(tip, ClassName.SHOW)) {
                        // Element is no longer visible, so force-hide the tooltip
                        _this2.forceHide();
                    }
                }, 100);
            }
        }
    }, {
        key: 'setWhileOpenListeners',
        value: function setWhileOpenListeners(on) {
            // Modal close events
            this.setModalListener(on);
            // Periodic $element visibility check
            // For handling when tip is in <keepalive>, tabs, carousel, etc
            this.visibleCheck(on);
            // Route change events
            this.setRouteWatcher(on);
            // Global hide events
            this.setRootListener(on);
            // Ontouch start listeners
            this.setOnTouchStartListener(on);
        }

        // force hide of tip (internal method)

    }, {
        key: 'forceHide',
        value: function forceHide() {
            // Disable while open listeners/watchers
            this.setWhileOpenListeners(false);
            if (!this.$tip) {
                return;
            }
            // Clear any hover enter/leave event
            clearTimeout(this.$hoverTimeout);
            this.$hoverTimeout = null;
            this.$hoverState = '';
            // Hide the tip
            this.hide(null, true);
        }

        // Hide tooltip

    }, {
        key: 'hide',
        value: function hide(callback, force) {
            var _this3 = this;

            var tip = this.$tip;
            if (!tip) {
                return;
            }

            // Create a canelable BvEvent
            var hideEvt = new BvEvent('hide', {
                // We disable cancelling if force is true
                cancelable: !Boolean(force),
                target: this.$element,
                relatedTarget: tip
            });
            this.emitEvent(hideEvt);
            if (hideEvt.defaultPrevented) {
                // Don't hide if event cancelled
                return;
            }

            // Transitionend Callback
            var complete = function complete() {
                if (_this3.$hoverState !== HoverState.SHOW && tip.parentNode) {
                    // Remove tip from dom (but leaves reference in this.$tip)
                    tip.parentNode.removeChild(tip);
                }
                _this3.removeAriaDescribedby();
                _this3.removePopper();
                // Force a re-compile (next time shown) of tip in case template has changed.
                _this3.$tip = null;
                if (callback) {
                    callback();
                }
                // Create a non-cancelable BvEvent
                var hiddenEvt = new BvEvent('hidden', {
                    cancelable: false,
                    target: _this3.$element,
                    relatedTarget: null
                });
                _this3.emitEvent(hiddenEvt);
            };

            // Disable while open listeners/watchers
            this.setWhileOpenListeners(false);

            // If forced close, disable animation
            if (force) {
                removeClass(tip, ClassName.FADE);
            }
            // Hide tip
            removeClass(tip, ClassName.SHOW);

            this.$activeTrigger.click = false;
            this.$activeTrigger.focus = false;
            this.$activeTrigger.hover = false;

            // Start the hide transition
            this.transitionOnce(tip, complete);

            this.$hoverState = '';
        }
    }, {
        key: 'emitEvent',
        value: function emitEvent(evt) {
            var evtName = evt.type;
            if (this.$root && this.$root.$emit) {
                // Emit an event on $root
                this.$root.$emit('bv::' + this.constructor.NAME + '::' + evtName, evt);
            }
            var callbacks = this.$config.callbacks || {};
            if (typeof callbacks[evtName] === 'function') {
                callbacks[evtName](evt);
            }
        }
    }, {
        key: 'getContainer',
        value: function getContainer() {
            var container = this.$config.container;
            var body = document.body;
            // If we are in a modal, we append to the modal instead of body, unless a container is specified
            return container === false ? closest(MODAL_CLASS, this.$element) || body : select(container, body) || body;
        }

        // Will be overritten by popover if neede

    }, {
        key: 'addAriaDescribedby',
        value: function addAriaDescribedby() {
            // Add aria-describedby on trigger element, without removing any other IDs
            var desc = getAttr(this.$element, 'aria-describedby') || '';
            desc = desc.split(/\s+/).concat(this.$id).join(' ').trim();
            setAttr(this.$element, 'aria-describedby', desc);
        }

        // Will be overritten by popover if neede

    }, {
        key: 'removeAriaDescribedby',
        value: function removeAriaDescribedby() {
            var desc = getAttr(this.$element, 'aria-describedby') || '';
            desc = desc.replace(this.$id, '').replace(/\s+/g, ' ').trim();
            if (desc) {
                setAttr(this.$element, 'aria-describedby', desc);
            } else {
                removeAttr(this.$element, 'aria-describedby');
            }
        }
    }, {
        key: 'removePopper',
        value: function removePopper() {
            if (this.$popper) {
                this.$popper.destroy();
            }
            this.$popper = null;
        }
    }, {
        key: 'transitionOnce',
        value: function transitionOnce(tip, complete) {
            var _this4 = this;

            var transEvents = this.getTransitionEndEvents();
            var called = false;
            clearTimeout(this.$fadeTimeout);
            this.$fadeTimeout = null;
            var fnOnce = function fnOnce() {
                if (called) {
                    return;
                }
                called = true;
                clearTimeout(_this4.$fadeTimeout);
                _this4.$fadeTimeout = null;
                transEvents.forEach(function (evtName) {
                    eventOff(tip, evtName, fnOnce);
                });
                // Call complete callback
                complete();
            };
            if (hasClass(tip, ClassName.FADE)) {
                transEvents.forEach(function (evtName) {
                    eventOn(tip, evtName, fnOnce);
                });
                // Fallback to setTimeout
                this.$fadeTimeout = setTimeout(fnOnce, TRANSITION_DURATION);
            } else {
                fnOnce();
            }
        }

        // What transitionend event(s) to use? (returns array of event names)

    }, {
        key: 'getTransitionEndEvents',
        value: function getTransitionEndEvents() {
            for (var name in TransitionEndEvents$1) {
                if (this.$element.style[name] !== undefined) {
                    return TransitionEndEvents$1[name];
                }
            }
            // fallback
            return [];
        }
    }, {
        key: 'update',
        value: function update() {
            if (this.$popper !== null) {
                this.$popper.scheduleUpdate();
            }
        }

        // NOTE: Overridden by PopOver class

    }, {
        key: 'isWithContent',
        value: function isWithContent(tip) {
            tip = tip || this.$tip;
            if (!tip) {
                return false;
            }
            return Boolean((select(Selector$1.TOOLTIP_INNER, tip) || {}).innerHTML);
        }

        // NOTE: Overridden by PopOver class

    }, {
        key: 'addAttachmentClass',
        value: function addAttachmentClass(attachment) {
            addClass(this.getTipElement(), CLASS_PREFIX + '-' + attachment);
        }
    }, {
        key: 'getTipElement',
        value: function getTipElement() {
            if (!this.$tip) {
                // Try and compile user supplied template, or fallback to default template
                this.$tip = this.compileTemplate(this.$config.template) || this.compileTemplate(this.constructor.Default.template);
            }
            return this.$tip;
        }
    }, {
        key: 'compileTemplate',
        value: function compileTemplate(html) {
            if (!html || typeof html !== 'string') {
                return null;
            }
            var div = document.createElement('div');
            div.innerHTML = html.trim();
            var node = div.firstElementChild ? div.removeChild(div.firstElementChild) : null;
            div = null;
            return node;
        }

        // NOTE: Overridden by PopOver class

    }, {
        key: 'setContent',
        value: function setContent(tip) {
            this.setElementContent(select(Selector$1.TOOLTIP_INNER, tip), this.getTitle());
            removeClass(tip, ClassName.FADE);
            removeClass(tip, ClassName.SHOW);
        }
    }, {
        key: 'setElementContent',
        value: function setElementContent(container, content) {
            if (!container) {
                // If container element doesn't exist, just return
                return;
            }
            var allowHtml = this.$config.html;
            if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object' && content.nodeType) {
                // content is a DOM node
                if (allowHtml) {
                    if (content.parentElement !== container) {
                        container.innerHtml = '';
                        container.appendChild(content);
                    }
                } else {
                    container.innerText = content.innerText;
                }
            } else {
                // We have a plain HTML string or Text
                container[allowHtml ? 'innerHTML' : 'innerText'] = content;
            }
        }

        // NOTE: Overridden by PopOver class

    }, {
        key: 'getTitle',
        value: function getTitle() {
            var title = this.$config.title || '';
            if (typeof title === 'function') {
                // Call the function to get the title value
                title = title(this.$element);
            }
            if ((typeof title === 'undefined' ? 'undefined' : _typeof(title)) === 'object' && title.nodeType && !title.innerHTML.trim()) {
                // We have a DOM node, but without inner content, so just return empty string
                title = '';
            }
            if (typeof title === 'string') {
                title = title.trim();
            }
            if (!title) {
                // If an explicit title is not given, try element's title atributes
                title = getAttr(this.$element, 'title') || getAttr(this.$element, 'data-original-title') || '';
                title = title.trim();
            }

            return title;
        }
    }, {
        key: 'listen',
        value: function listen() {
            var _this5 = this;

            var triggers = this.$config.trigger.trim().split(/\s+/);
            var el = this.$element;

            // Using 'this' as the handler will get automagically directed to this.handleEvent
            // And maintain our binding to 'this'
            triggers.forEach(function (trigger) {
                if (trigger === 'click') {
                    eventOn(el, 'click', _this5);
                } else if (trigger === 'focus') {
                    eventOn(el, 'focusin', _this5);
                    eventOn(el, 'focusout', _this5);
                } else if (trigger === 'blur') {
                    // Used to close $tip when element looses focus
                    eventOn(el, 'focusout', _this5);
                } else if (trigger === 'hover') {
                    eventOn(el, 'mouseenter', _this5);
                    eventOn(el, 'mouseleave', _this5);
                }
            }, this);
        }
    }, {
        key: 'unListen',
        value: function unListen() {
            var _this6 = this;

            var events = ['click', 'focusin', 'focusout', 'mouseenter', 'mouseleave'];
            // Using "this" as the handler will get automagically directed to this.handleEvent
            events.forEach(function (evt) {
                eventOff(_this6.$element, evt, _this6);
            }, this);
        }
    }, {
        key: 'handleEvent',
        value: function handleEvent(e) {
            // This special method allows us to use "this" as the event handlers
            if (isDisabled(this.$element)) {
                // If disabled, don't do anything. Note: if tip is shown before element gets
                // disabled, then tip not close until no longer disabled or forcefully closed.
                return;
            }
            var type = e.type;
            if (type === 'click') {
                this.toggle(e);
            } else if (type === 'focusin' || type === 'mouseenter') {
                this.enter(e);
            } else if (type === 'focusout' || type === 'mouseleave') {
                this.leave(e);
            }
        }
    }, {
        key: 'setRouteWatcher',
        value: function setRouteWatcher(on) {
            var _this7 = this;

            if (on) {
                this.setRouteWatcher(false);
                if (this.$root && Boolean(this.$root.$route)) {
                    this.$routeWatcher = this.$root.$watch('$route', function (newVal, oldVal) {
                        if (newVal === oldVal) {
                            return;
                        }
                        // If route has changed, we force hide the tooltip/popover
                        _this7.forceHide();
                    });
                }
            } else {
                if (this.$routeWatcher) {
                    // cancel the route watcher by calling hte stored reference
                    this.$routeWatcher();
                    this.$routeWatcher = null;
                }
            }
        }
    }, {
        key: 'setModalListener',
        value: function setModalListener(on) {
            var modal = closest(MODAL_CLASS, this.$element);
            if (!modal) {
                // If we are not in a modal, don't worry. be happy
                return;
            }
            // We can listen for modal hidden events on $root
            if (this.$root) {
                this.$root[on ? '$on' : '$off'](MODAL_CLOSE_EVENT, this.forceHide.bind(this));
            }
        }
    }, {
        key: 'setRootListener',
        value: function setRootListener(on) {
            // We can listen for global 'bv::hide::popover/tooltip' hide request event
            if (this.$root) {
                this.$root[on ? '$on' : '$off']('bv::hide::' + this.constructor.NAME, this.forceHide.bind(this));
            }
        }
    }, {
        key: 'setOnTouchStartListener',
        value: function setOnTouchStartListener(on) {
            var _this8 = this;

            // if this is a touch-enabled device we add extra
            // empty mouseover listeners to the body's immediate children;
            // only needed because of broken event delegation on iOS
            // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
            if ('ontouchstart' in document.documentElement) {
                from(document.body.children).forEach(function (el) {
                    if (on) {
                        eventOn(el, 'mouseover', _this8._noop);
                    } else {
                        eventOff(el, 'mouseover', _this8._noop);
                    }
                });
            }
        }
    }, {
        key: '_noop',
        value: function _noop() {
            // Empty noop handler for ontouchstart devices
        }
    }, {
        key: 'fixTitle',
        value: function fixTitle() {
            var el = this.$element;
            var titleType = _typeof(getAttr(el, 'data-original-title'));
            if (getAttr(el, 'title') || titleType !== 'string') {
                setAttr(el, 'data-original-title', getAttr(el, 'title') || '');
                setAttr(el, 'title', '');
            }
        }

        // Enter handler

    }, {
        key: 'enter',
        value: function enter(e) {
            var _this9 = this;

            if (e) {
                this.$activeTrigger[e.type === 'focusin' ? 'focus' : 'hover'] = true;
            }
            if (hasClass(this.getTipElement(), ClassName.SHOW) || this.$hoverState === HoverState.SHOW) {
                this.$hoverState = HoverState.SHOW;
                return;
            }
            clearTimeout(this.$hoverTimeout);
            this.$hoverState = HoverState.SHOW;
            if (!this.$config.delay || !this.$config.delay.show) {
                this.show();
                return;
            }
            this.$hoverTimeout = setTimeout(function () {
                if (_this9.$hoverState === HoverState.SHOW) {
                    _this9.show();
                }
            }, this.$config.delay.show);
        }

        // Leave handler

    }, {
        key: 'leave',
        value: function leave(e) {
            var _this10 = this;

            if (e) {
                this.$activeTrigger[e.type === 'focusout' ? 'focus' : 'hover'] = false;
                if (e.type === 'focusout' && /blur/.test(this.$config.trigger)) {
                    // Special case for `blur`: we clear out the other triggers
                    this.$activeTrigger.click = false;
                    this.$activeTrigger.hover = false;
                }
            }
            if (this.isWithActiveTrigger()) {
                return;
            }
            clearTimeout(this.$hoverTimeout);
            this.$hoverState = HoverState.OUT;
            if (!this.$config.delay || !this.$config.delay.hide) {
                this.hide();
                return;
            }
            this.$hoverTimeout = setTimeout(function () {
                if (_this10.$hoverState === HoverState.OUT) {
                    _this10.hide();
                }
            }, this.$config.delay.hide);
        }
    }, {
        key: 'getPopperConfig',
        value: function getPopperConfig(placement, tip) {
            var _this11 = this;

            return {
                placement: this.constructor.getAttachment(placement),
                modifiers: {
                    offset: { offset: this.getOffset(placement, tip) },
                    flip: { behavior: this.$config.fallbackPlacement },
                    arrow: { element: '.arrow' }
                },
                onCreate: function onCreate(data) {
                    // Handle flipping arrow classes
                    if (data.originalPlacement !== data.placement) {
                        _this11.handlePopperPlacementChange(data);
                    }
                },
                onUpdate: function onUpdate(data) {
                    // Handle flipping arrow classes
                    _this11.handlePopperPlacementChange(data);
                }
            };
        }
    }, {
        key: 'getOffset',
        value: function getOffset(placement, tip) {
            if (!this.$config.offset) {
                var arrow = select(Selector$1.ARROW, tip);
                var arrowOffset = parseFloat(getCS(arrow).width) + parseFloat(this.$config.arrowPadding);
                switch (OffsetMap[placement.toUpperCase()]) {
                    case +1:
                        return '+50%p - ' + arrowOffset + 'px';
                    case -1:
                        return '-50%p + ' + arrowOffset + 'px';
                    default:
                        return 0;
                }
            }
            return parseFloat(this.$config.offset);
        }
    }, {
        key: 'getPlacement',
        value: function getPlacement() {
            var placement = this.$config.placement;
            if (typeof placement === 'function') {
                return placement.call(this, this.$tip, this.$element);
            }
            return placement;
        }
    }, {
        key: 'isWithActiveTrigger',
        value: function isWithActiveTrigger() {
            for (var trigger in this.$activeTrigger) {
                if (this.$activeTrigger[trigger]) {
                    return true;
                }
            }
            return false;
        }

        // NOTE: Overridden by PopOver class

    }, {
        key: 'cleanTipClass',
        value: function cleanTipClass() {
            var tip = this.getTipElement();
            var tabClass = tip.className.match(BSCLS_PREFIX_REGEX);
            if (tabClass !== null && tabClass.length > 0) {
                tabClass.forEach(function (cls) {
                    removeClass(tip, cls);
                });
            }
        }
    }, {
        key: 'handlePopperPlacementChange',
        value: function handlePopperPlacementChange(data) {
            this.cleanTipClass();
            this.addAttachmentClass(this.constructor.getAttachment(data.placement));
        }
    }, {
        key: 'fixTransition',
        value: function fixTransition(tip) {
            var initConfigAnimation = this.$config.animation || false;
            if (getAttr(tip, 'x-placement') !== null) {
                return;
            }
            removeClass(tip, ClassName.FADE);
            this.$config.animation = false;
            this.hide();
            this.show();
            this.$config.animation = initConfigAnimation;
        }
    }], [{
        key: 'getAttachment',
        value: function getAttachment(placement) {
            return AttachmentMap$1[placement.toUpperCase()];
        }
    }, {
        key: 'Default',
        get: function get$$1() {
            return Defaults$1;
        }

        // NOTE: Overridden by PopOver class

    }, {
        key: 'NAME',
        get: function get$$1() {
            return NAME;
        }
    }]);
    return ToolTip;
}();

var NAME$1 = 'popover';
var CLASS_PREFIX$1 = 'bs-popover';
var BSCLS_PREFIX_REGEX$1 = new RegExp('\\b' + CLASS_PREFIX$1 + '\\S+', 'g');

var Defaults$2 = assign({}, ToolTip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
});

var ClassName$1 = {
    FADE: 'fade',
    SHOW: 'show'
};

var Selector$2 = {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
};

var PopOver = function (_ToolTip) {
    inherits(PopOver, _ToolTip);

    function PopOver() {
        classCallCheck(this, PopOver);
        return possibleConstructorReturn(this, (PopOver.__proto__ || Object.getPrototypeOf(PopOver)).apply(this, arguments));
    }

    createClass(PopOver, [{
        key: 'isWithContent',


        // Method overrides

        value: function isWithContent(tip) {
            tip = tip || this.$tip;
            if (!tip) {
                return false;
            }
            var hasTitle = Boolean((select(Selector$2.TITLE, tip) || {}).innerHTML);
            var hasContent = Boolean((select(Selector$2.CONTENT, tip) || {}).innerHTML);
            return hasTitle || hasContent;
        }
    }, {
        key: 'addAttachmentClass',
        value: function addAttachmentClass(attachment) {
            addClass(this.getTipElement(), CLASS_PREFIX$1 + '-' + attachment);
        }
    }, {
        key: 'setContent',
        value: function setContent(tip) {
            // we use append for html objects to maintain js events/components
            this.setElementContent(select(Selector$2.TITLE, tip), this.getTitle());
            this.setElementContent(select(Selector$2.CONTENT, tip), this.getContent());

            removeClass(tip, ClassName$1.FADE);
            removeClass(tip, ClassName$1.SHOW);
        }

        // This method may look identical to ToolTip version, but it uses a different RegEx defined above

    }, {
        key: 'cleanTipClass',
        value: function cleanTipClass() {
            var tip = this.getTipElement();
            var tabClass = tip.className.match(BSCLS_PREFIX_REGEX$1);
            if (tabClass !== null && tabClass.length > 0) {
                tabClass.forEach(function (cls) {
                    removeClass(tip, cls);
                });
            }
        }
    }, {
        key: 'getTitle',
        value: function getTitle() {
            var title = this.$config.title || '';
            if (typeof title === 'function') {
                title = title(this.$element);
            }
            if ((typeof title === 'undefined' ? 'undefined' : _typeof(title)) === 'object' && title.nodeType && !title.innerHTML.trim()) {
                // We have a dom node, but without inner content, so just return an empty string
                title = '';
            }
            if (typeof title === 'string') {
                title = title.trim();
            }
            if (!title) {
                // Try and grab element's title attribute
                title = getAttr(this.$element, 'title') || getAttr(this.$element, 'data-original-title') || '';
                title = title.trim();
            }
            return title;
        }

        // New methods

    }, {
        key: 'getContent',
        value: function getContent() {
            var content = this.$config.content || '';
            if (typeof content === 'function') {
                content = content(this.$element);
            }
            if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object' && content.nodeType && !content.innerHTML.trim()) {
                // We have a dom node, but without inner content, so just return an empty string
                content = '';
            }
            if (typeof content === 'string') {
                content = content.trim();
            }
            return content;
        }
    }], [{
        key: 'Default',


        // Getter overrides

        get: function get$$1() {
            return Defaults$2;
        }
    }, {
        key: 'NAME',
        get: function get$$1() {
            return NAME$1;
        }
    }]);
    return PopOver;
}(ToolTip);

/*
 * ScrollSpy class definition
 */

/*
 * Constants / Defaults
 */

var NAME$2 = 'v-b-scrollspy';
var ACTIVATE_EVENT = 'bv::scrollspy::activate';

var Default = {
    element: 'body',
    offset: 10,
    method: 'auto',
    throttle: 75
};

var DefaultType = {
    element: '(string|element|component)',
    offset: 'number',
    method: 'string',
    throttle: 'number'
};

var ClassName$2 = {
    DROPDOWN_ITEM: 'dropdown-item',
    ACTIVE: 'active'
};

var Selector$3 = {
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    NAV_ITEMS: '.nav-item',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown, dropup',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
};

var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
};

// HREFs must start with # but can be === '#', or start with '#/' or '#!' (which can be router links)
var HREF_REGEX = /^#[^/!]+/;

// Transition Events
var TransitionEndEvents$2 = ['webkitTransitionEnd', 'transitionend', 'otransitionend', 'oTransitionEnd'];

/*
 * Utility Methods
 */

// Better var type detection
function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}

// Check config properties for expected types
function typeCheckConfig(componentName, config, configTypes) {
    for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
            var expectedTypes = configTypes[property];
            var value = config[property];
            var valueType = value && isElement(value) ? 'element' : toType(value);
            // handle Vue instances
            valueType = value && value._isVue ? 'component' : valueType;

            if (!new RegExp(expectedTypes).test(valueType)) {
                warn(componentName + ': Option "' + property + '" provided type "' + valueType + '", but expected type "' + expectedTypes + '"');
            }
        }
    }
}

/*
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var ScrollSpy = function () {
    function ScrollSpy(element, config, $root) {
        classCallCheck(this, ScrollSpy);

        // The element we activate links in
        this.$el = element;
        this.$scroller = null;
        this.$selector = [Selector$3.NAV_LINKS, Selector$3.LIST_ITEMS, Selector$3.DROPDOWN_ITEMS].join(',');
        this.$offsets = [];
        this.$targets = [];
        this.$activeTarget = null;
        this.$scrollHeight = 0;
        this.$resizeTimeout = null;
        this.$obs_scroller = null;
        this.$obs_targets = null;
        this.$root = $root || null;
        this.$config = null;

        this.updateConfig(config);
    }

    createClass(ScrollSpy, [{
        key: 'updateConfig',
        value: function updateConfig(config, $root) {
            if (this.$scroller) {
                // Just in case out scroll element has changed
                this.unlisten();
                this.$scroller = null;
            }
            var cfg = assign({}, this.constructor.Default, config);
            if ($root) {
                this.$root = $root;
            }
            typeCheckConfig(this.constructor.Name, cfg, this.constructor.DefaultType);
            this.$config = cfg;

            if (this.$root) {
                var self = this;
                this.$root.$nextTick(function () {
                    self.listen();
                });
            } else {
                this.listen();
            }
        }
    }, {
        key: 'dispose',
        value: function dispose() {
            this.unlisten();
            clearTimeout(this.$resizeTimeout);
            this.$resizeTimeout = null;
            this.$el = null;
            this.$config = null;
            this.$scroller = null;
            this.$selector = null;
            this.$offsets = null;
            this.$targets = null;
            this.$activeTarget = null;
            this.$scrollHeight = null;
        }
    }, {
        key: 'listen',
        value: function listen() {
            var _this = this;

            var scroller = this.getScroller();
            if (scroller && scroller.tagName !== 'BODY') {
                eventOn(scroller, 'scroll', this);
            }
            eventOn(window, 'scroll', this);
            eventOn(window, 'resize', this);
            eventOn(window, 'orientationchange', this);
            TransitionEndEvents$2.forEach(function (evtName) {
                eventOn(window, evtName, _this);
            });
            this.setObservers(true);
            // Scedule a refresh
            this.handleEvent('refresh');
        }
    }, {
        key: 'unlisten',
        value: function unlisten() {
            var _this2 = this;

            var scroller = this.getScroller();
            this.setObservers(false);
            if (scroller && scroller.tagName !== 'BODY') {
                eventOff(scroller, 'scroll', this);
            }
            eventOff(window, 'scroll', this);
            eventOff(window, 'resize', this);
            eventOff(window, 'orientationchange', this);
            TransitionEndEvents$2.forEach(function (evtName) {
                eventOff(window, evtName, _this2);
            });
        }
    }, {
        key: 'setObservers',
        value: function setObservers(on) {
            var _this3 = this;

            // We observe both the scroller for content changes, and the target links
            if (this.$obs_scroller) {
                this.$obs_scroller.disconnect();
                this.$obs_scroller = null;
            }
            if (this.$obs_targets) {
                this.$obs_targets.disconnect();
                this.$obs_targets = null;
            }
            if (on) {
                this.$obs_targets = observeDOM(this.$el, function () {
                    _this3.handleEvent('mutation');
                }, {
                    subtree: true,
                    childList: true,
                    attributes: true,
                    attributeFilter: ['href']
                });
                this.$obs_scroller = observeDOM(this.getScroller(), function () {
                    _this3.handleEvent('mutation');
                }, {
                    subtree: true,
                    childList: true,
                    characterData: true,
                    attributes: true,
                    attributeFilter: ['id', 'style', 'class']
                });
            }
        }

        // general event handler

    }, {
        key: 'handleEvent',
        value: function handleEvent(evt) {
            var type = typeof evt === 'string' ? evt : evt.type;

            var self = this;
            function resizeThrottle() {
                if (!self.$resizeTimeout) {
                    self.$resizeTimeout = setTimeout(function () {
                        self.refresh();
                        self.process();
                        self.$resizeTimeout = null;
                    }, self.$config.throttle);
                }
            }

            if (type === 'scroll') {
                if (!this.$obs_scroller) {
                    // Just in case we are added to the DOM before the scroll target is
                    // We re-instantiate our listeners, just in case
                    this.listen();
                }
                this.process();
            } else if (/(resize|orientationchange|mutation|refresh)/.test(type)) {
                // Postpone these events by throttle time
                resizeThrottle();
            }
        }

        // Refresh the list of target links on the element we are applied to

    }, {
        key: 'refresh',
        value: function refresh() {
            var _this4 = this;

            var scroller = this.getScroller();
            if (!scroller) {
                return;
            }
            var autoMethod = scroller !== scroller.window ? OffsetMethod.POSITION : OffsetMethod.OFFSET;
            var method = this.$config.method === 'auto' ? autoMethod : this.$config.method;
            var methodFn = method === OffsetMethod.POSITION ? position : offset;
            var offsetBase = method === OffsetMethod.POSITION ? this.getScrollTop() : 0;

            this.$offsets = [];
            this.$targets = [];

            this.$scrollHeight = this.getScrollHeight();

            // Find all the unique link href's
            selectAll(this.$selector, this.$el).map(function (link) {
                return getAttr(link, 'href');
            }).filter(function (href) {
                return HREF_REGEX.test(href || '');
            }).map(function (href) {
                var el = select(href, scroller);
                if (isVisible(el)) {
                    return {
                        offset: parseInt(methodFn(el).top, 10) + offsetBase,
                        target: href
                    };
                }
                return null;
            }).filter(function (item) {
                return item;
            }).sort(function (a, b) {
                return a.offset - b.offset;
            }).reduce(function (memo, item) {
                // record only unique targets/offfsets
                if (!memo[item.target]) {
                    _this4.$offsets.push(item.offset);
                    _this4.$targets.push(item.target);
                    memo[item.target] = true;
                }
                return memo;
            }, {});

            return this;
        }

        // Handle activating/clearing

    }, {
        key: 'process',
        value: function process() {
            var scrollTop = this.getScrollTop() + this.$config.offset;
            var scrollHeight = this.getScrollHeight();
            var maxScroll = this.$config.offset + scrollHeight - this.getOffsetHeight();

            if (this.$scrollHeight !== scrollHeight) {
                this.refresh();
            }

            if (scrollTop >= maxScroll) {
                var target = this.$targets[this.$targets.length - 1];
                if (this.$activeTarget !== target) {
                    this.activate(target);
                }
                return;
            }

            if (this.$activeTarget && scrollTop < this.$offsets[0] && this.$offsets[0] > 0) {
                this.$activeTarget = null;
                this.clear();
                return;
            }

            for (var i = this.$offsets.length; i--;) {
                var isActiveTarget = this.$activeTarget !== this.$targets[i] && scrollTop >= this.$offsets[i] && (typeof this.$offsets[i + 1] === 'undefined' || scrollTop < this.$offsets[i + 1]);

                if (isActiveTarget) {
                    this.activate(this.$targets[i]);
                }
            }
        }
    }, {
        key: 'getScroller',
        value: function getScroller() {
            if (this.$scroller) {
                return this.$scroller;
            }
            var scroller = this.$config.element;
            if (!scroller) {
                return null;
            } else if (isElement(scroller.$el)) {
                scroller = scroller.$el;
            } else if (typeof scroller === 'string') {
                scroller = select(scroller);
            }
            if (!scroller) {
                return null;
            }
            this.$scroller = scroller.tagName === 'BODY' ? window : scroller;
            return this.$scroller;
        }
    }, {
        key: 'getScrollTop',
        value: function getScrollTop() {
            var scroller = this.getScroller();
            return scroller === window ? scroller.pageYOffset : scroller.scrollTop;
        }
    }, {
        key: 'getScrollHeight',
        value: function getScrollHeight() {
            return this.getScroller().scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        }
    }, {
        key: 'getOffsetHeight',
        value: function getOffsetHeight() {
            var scroller = this.getScroller();
            return scroller === window ? window.innerHeight : getBCR(scroller).height;
        }
    }, {
        key: 'activate',
        value: function activate(target) {
            var _this5 = this;

            this.$activeTarget = target;
            this.clear();

            // Grab the list of target links (<a href="{$target}">)
            var links = selectAll(this.$selector.split(',').map(function (selector) {
                return selector + '[href="' + target + '"]';
            }).join(','), this.$el);

            links.forEach(function (link) {
                if (hasClass(link, ClassName$2.DROPDOWN_ITEM)) {
                    // This is a dropdown item, so find the .dropdown-toggle and set it's state
                    var dropdown = closest(Selector$3.DROPDOWN, link);
                    if (dropdown) {
                        _this5.setActiveState(select(Selector$3.DROPDOWN_TOGGLE, dropdown), true);
                    }
                    // Also set this link's state
                    _this5.setActiveState(link, true);
                } else {
                    // Set triggered link as active
                    _this5.setActiveState(link, true);
                    if (matches(link.parentElement, Selector$3.NAV_ITEMS)) {
                        // Handle nav-link inside nav-item, and set nav-item active
                        _this5.setActiveState(link.parentElement, true);
                    }
                    // Set triggered links parents as active
                    // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
                    var el = link;
                    while (el) {
                        el = closest(Selector$3.NAV_LIST_GROUP, el);
                        var sibling = el ? el.previousElementSibling : null;
                        if (matches(sibling, Selector$3.NAV_LINKS + ', ' + Selector$3.LIST_ITEMS)) {
                            _this5.setActiveState(sibling, true);
                        }
                        // Handle special case where nav-link is inside a nav-item
                        if (matches(sibling, Selector$3.NAV_ITEMS)) {
                            _this5.setActiveState(select(Selector$3.NAV_LINKS, sibling), true);
                            // Add active state to nav-item as well
                            _this5.setActiveState(sibling, true);
                        }
                    }
                }
            });

            // Signal event to via $root, passing ID of activaed target and reference to array of links
            if (links && links.length > 0 && this.$root) {
                this.$root.$emit(ACTIVATE_EVENT, target, links);
            }
        }
    }, {
        key: 'clear',
        value: function clear() {
            var _this6 = this;

            selectAll(this.$selector + ', ' + Selector$3.NAV_ITEMS, this.$el).filter(function (el) {
                return hasClass(el, ClassName$2.ACTIVE);
            }).forEach(function (el) {
                return _this6.setActiveState(el, false);
            });
        }
    }, {
        key: 'setActiveState',
        value: function setActiveState(el, active) {
            if (!el) {
                return;
            }
            if (active) {
                addClass(el, ClassName$2.ACTIVE);
            } else {
                removeClass(el, ClassName$2.ACTIVE);
            }
        }
    }], [{
        key: 'Name',
        get: function get$$1() {
            return NAME$2;
        }
    }, {
        key: 'Default',
        get: function get$$1() {
            return Default;
        }
    }, {
        key: 'DefaultType',
        get: function get$$1() {
            return DefaultType;
        }
    }]);
    return ScrollSpy;
}();

var Selector = {
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top',
    NAVBAR_TOGGLER: '.navbar-toggler'
};

var OBSERVER_CONFIG$1 = {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: ['style', 'class']
};

var modal = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return !_vm.is_hidden ? _c('div', { attrs: { "id": _vm.safeId('__BV_modal_outer_') } }, [_c('transition', { attrs: { "enter-class": "", "enter-to-class": "", "enter-active-class": "", "leave-class": "", "leave-active-class": "", "leave-to-class": "" }, on: { "before-enter": _vm.onBeforeEnter, "enter": _vm.onEnter, "after-enter": _vm.onAfterEnter, "before-leave": _vm.onBeforeLeave, "leave": _vm.onLeave, "after-leave": _vm.onAfterLeave } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.is_visible, expression: "is_visible" }], ref: "modal", class: _vm.modalClasses, attrs: { "id": _vm.safeId(), "aria-hidden": _vm.is_visible ? null : 'true', "role": "dialog" }, on: { "click": _vm.onClickOut, "keyup": function keyup($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) {
                        return null;
                    }_vm.onEsc($event);
                } } }, [_c('div', { class: _vm.dialogClasses }, [_c('div', { ref: "content", staticClass: "modal-content", attrs: { "tabindex": "-1", "role": "document", "aria-labelledby": _vm.hideHeader ? null : _vm.safeId('__BV_modal_header_'), "aria-describedby": _vm.safeId('__BV_modal_body_') }, on: { "focusout": _vm.onFocusout, "click": function click($event) {
                    $event.stopPropagation();
                } } }, [!_vm.hideHeader ? _c('header', { ref: "header", class: _vm.headerClasses, attrs: { "id": _vm.safeId('__BV_modal_header_') } }, [_vm._t("modal-header", [_c(_vm.titleTag, { tag: "h5", staticClass: "modal-title" }, [_vm._t("modal-title", [_vm._v(_vm._s(_vm.title))])], 2), !_vm.hideHeaderClose ? _c('b-btn-close', { attrs: { "disabled": _vm.is_transitioning, "aria-label": _vm.headerCloseLabel, "text-variant": _vm.headerTextVariant }, on: { "click": function click($event) {
                    _vm.hide('headerclose');
                } } }, [_vm._t("modal-header-close")], 2) : _vm._e()])], 2) : _vm._e(), _c('div', { ref: "body", class: _vm.bodyClasses, attrs: { "id": _vm.safeId('__BV_modal_body_') } }, [_vm._t("default")], 2), !_vm.hideFooter ? _c('footer', { ref: "footer", class: _vm.footerClasses, attrs: { "id": _vm.safeId('__BV_modal_footer_') } }, [_vm._t("modal-footer", [!_vm.okOnly ? _c('b-btn', { attrs: { "variant": _vm.cancelVariant, "size": _vm.buttonSize, "disabled": _vm.is_transitioning }, on: { "click": function click($event) {
                    _vm.hide('cancel');
                } } }, [_vm._t("modal-cancel", [_vm._v(_vm._s(_vm.cancelTitle))])], 2) : _vm._e(), _c('b-btn', { attrs: { "variant": _vm.okVariant, "size": _vm.buttonSize, "disabled": _vm.okDisabled || _vm.is_transitioning }, on: { "click": function click($event) {
                    _vm.hide('ok');
                } } }, [_vm._t("modal-ok", [_vm._v(_vm._s(_vm.okTitle))])], 2)])], 2) : _vm._e()])])])]), !_vm.hideBackdrop && (_vm.is_visible || _vm.is_transitioning) ? _c('div', { class: _vm.backdropClasses, attrs: { "id": _vm.safeId('__BV_modal_backdrop_') } }) : _vm._e()], 1) : _vm._e();
    }, staticRenderFns: [],
    mixins: [idMixin, listenOnRootMixin],
    components: { bBtn: bBtn, bBtnClose: bBtnClose },
    data: function data() {
        return {
            is_hidden: this.lazy || false,
            is_visible: false,
            is_transitioning: false,
            is_show: false,
            is_block: false,
            scrollbarWidth: 0,
            isBodyOverflowing: false,
            return_focus: this.returnFocus || null
        };
    },

    model: {
        prop: 'visible',
        event: 'change'
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        titleTag: {
            type: String,
            default: 'h5'
        },
        size: {
            type: String,
            default: 'md'
        },
        buttonSize: {
            type: String,
            default: ''
        },
        noFade: {
            type: Boolean,
            default: false
        },
        noCloseOnBackdrop: {
            type: Boolean,
            default: false
        },
        noCloseOnEsc: {
            type: Boolean,
            default: false
        },
        noEnforceFocus: {
            type: Boolean,
            default: false
        },
        headerBgVariant: {
            type: String,
            default: null
        },
        headerBorderVariant: {
            type: String,
            default: null
        },
        headerTextVariant: {
            type: String,
            default: null
        },
        bodyBgVariant: {
            type: String,
            default: null
        },
        bodyTextVariant: {
            type: String,
            default: null
        },
        footerBgVariant: {
            type: String,
            default: null
        },
        footerBorderVariant: {
            type: String,
            default: null
        },
        footerTextVariant: {
            type: String,
            default: null
        },
        hideHeader: {
            type: Boolean,
            default: false
        },
        hideFooter: {
            type: Boolean,
            default: false
        },
        hideHeaderClose: {
            type: Boolean,
            default: false
        },
        hideBackdrop: {
            type: Boolean,
            default: false
        },
        okOnly: {
            type: Boolean,
            default: false
        },
        okDisabled: {
            type: Boolean,
            default: false
        },
        visible: {
            type: Boolean,
            default: false
        },
        returnFocus: {
            default: null
        },
        headerCloseLabel: {
            type: String,
            default: 'Close'
        },
        cancelTitle: {
            type: String,
            default: 'Cancel'
        },
        okTitle: {
            type: String,
            default: 'OK'
        },
        cancelVariant: {
            type: String,
            default: 'secondary'
        },
        okVariant: {
            type: String,
            default: 'primary'
        },
        lazy: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        modalClasses: function modalClasses() {
            return ['modal', {
                fade: !this.noFade,
                show: this.is_show,
                'd-block': this.is_block
            }];
        },
        dialogClasses: function dialogClasses() {
            return ['modal-dialog', defineProperty$1({}, 'modal-' + this.size, Boolean(this.size))];
        },
        backdropClasses: function backdropClasses() {
            return ['modal-backdrop', {
                fade: !this.noFade,
                show: this.is_show || this.noFade
            }];
        },
        headerClasses: function headerClasses() {
            var _ref2;

            return ['modal-header', (_ref2 = {
                'rounded-top': Boolean(this.headerBgVariant)
            }, defineProperty$1(_ref2, 'bg-' + this.headerBgVariant, Boolean(this.headerBgVariant)), defineProperty$1(_ref2, 'text-' + this.headerTextVariant, Boolean(this.headerTextVariant)), defineProperty$1(_ref2, 'border-' + this.headerBorderVariant, Boolean(this.headerBorderVariant)), _ref2)];
        },
        bodyClasses: function bodyClasses() {
            var _ref3;

            return ['modal-body', (_ref3 = {}, defineProperty$1(_ref3, 'bg-' + this.bodyBgVariant, Boolean(this.bodyBgVariant)), defineProperty$1(_ref3, 'text-' + this.bodyTextVariant, Boolean(this.bodyTextVariant)), _ref3)];
        },
        footerClasses: function footerClasses() {
            var _ref4;

            return ['modal-footer', (_ref4 = {
                'rounded-bottom': Boolean(this.footerBgVariant)
            }, defineProperty$1(_ref4, 'bg-' + this.footerBgVariant, Boolean(this.footerBgVariant)), defineProperty$1(_ref4, 'text-' + this.footerTextVariant, Boolean(this.footerTextVariant)), defineProperty$1(_ref4, 'border-' + this.footerBorderVariant, Boolean(this.footerBorderVariant)), _ref4)];
        }
    },
    watch: {
        visible: function visible(new_val, old_val) {
            if (new_val === old_val) {
                return;
            }
            this[new_val ? 'show' : 'hide']();
        }
    },
    methods: {
        // Public Methods
        show: function show() {
            var _this = this;

            if (this.is_visible) {
                return;
            }
            var showEvt = new BvEvent('show', {
                cancelable: true,
                vueTarget: this,
                target: this.$refs.modal,
                relatedTarget: null
            });
            this.emitEvent(showEvt);
            // Show if not canceled
            if (showEvt.defaultPrevented || this.is_visible) {
                return;
            }
            this.is_hidden = false;
            this.$nextTick(function () {
                // We do this in nextTick to ensure hte modal is in DOM first before we show it
                _this.is_visible = true;
                _this.$emit('change', true);
                // Observe changes in modal content and adjust if necessary
                _this._observer = observeDOM(_this.$refs.content, _this.adjustDialog.bind(_this), OBSERVER_CONFIG$1);
            });
        },
        hide: function hide(trigger) {
            if (!this.is_visible) {
                return;
            }
            var hideEvt = new BvEvent('hide', {
                cancelable: true,
                vueTarget: this,
                target: this.$refs.modal,
                relatedTarget: null, // this could be the trigger element/component reference
                isOK: trigger || null,
                trigger: trigger || null,
                cancel: function cancel() {
                    // Backwards compatibility
                    warn('b-modal: evt.cancel() is deprecated. Please use evt.preventDefault().');
                    this.preventDefault();
                }
            });
            if (trigger === 'ok') {
                this.$emit('ok', hideEvt);
            } else if (trigger === 'cancel') {
                this.$emit('cancel', hideEvt);
            }
            this.emitEvent(hideEvt);
            // Hide if not canceled
            if (hideEvt.defaultPrevented || !this.is_visible) {
                return;
            }
            // stop observing for content changes
            if (this._observer) {
                this._observer.disconnect();
                this._observer = null;
            }
            this.is_visible = false;
            this.$emit('change', false);
        },

        // Transition Handlers
        onBeforeEnter: function onBeforeEnter() {
            this.is_transitioning = true;
            this.checkScrollbar();
            this.setScrollbar();
            addClass(document.body, 'modal-open');
            this.setResizeEvent(true);
        },
        onEnter: function onEnter() {
            this.is_block = true;
            this.$refs.modal.scrollTop = 0;
        },
        onAfterEnter: function onAfterEnter() {
            var _this2 = this;

            this.is_show = true;
            this.is_transitioning = false;
            this.$nextTick(function () {
                _this2.focusFirst();
                var shownEvt = new BvEvent('shown', {
                    cancelable: false,
                    vueTarget: _this2,
                    target: _this2.$refs.modal,
                    relatedTarget: null
                });
                _this2.emitEvent(shownEvt);
            });
        },
        onBeforeLeave: function onBeforeLeave() {
            this.is_transitioning = true;
            this.setResizeEvent(false);
        },
        onLeave: function onLeave() {
            // Remove the 'show' class
            this.is_show = false;
        },
        onAfterLeave: function onAfterLeave() {
            var _this3 = this;

            removeClass(document.body, 'modal-open');
            this.is_block = false;
            this.resetAdjustments();
            this.resetScrollbar();
            this.is_transitioning = false;
            this.$nextTick(function () {
                _this3.is_hidden = _this3.lazy || false;
                _this3.returnFocusTo();
                var hiddenEvt = new BvEvent('hidden', {
                    cancelable: false,
                    vueTarget: _this3,
                    target: _this3.lazy ? null : _this3.$refs.modal,
                    relatedTarget: null
                });
                _this3.emitEvent(hiddenEvt);
            });
        },

        // Event emitter
        emitEvent: function emitEvent(bvEvt) {
            var type = bvEvt.type;
            this.$emit(type, bvEvt);
            this.$root.$emit('bv::modal::' + type, bvEvt);
        },

        // UI Event Handlers
        onClickOut: function onClickOut() {
            // If backdrop clicked, hide modal
            if (this.is_visible && !this.noCloseOnBackdrop) {
                this.hide('backdrop');
            }
        },
        onEsc: function onEsc() {
            // If ESC pressed, hide modal
            if (this.is_visible && !this.noCloseOnEsc) {
                this.hide('esc');
            }
        },
        onFocusout: function onFocusout(evt) {
            // If focus leaves modal, bring it back
            // 'focusout' Event Listener bound on content
            var content = this.$refs.content;
            if (!this.noEnforceFocus && this.is_visible && content && !content.contains(evt.relatedTarget)) {
                content.focus();
            }
        },

        // Resize Listener
        setResizeEvent: function setResizeEvent(on) {
            var _this4 = this;

            ['resize', 'orientationchange'].forEach(function (evtName) {
                if (on) {
                    eventOn(window, evtName, _this4.adjustDialog);
                } else {
                    eventOff(window, evtName, _this4.adjustDialog);
                }
            });
        },

        // Root Listener handlers
        showHandler: function showHandler(id, triggerEl) {
            if (id === this.id) {
                this.return_focus = triggerEl || null;
                this.show();
            }
        },
        hideHandler: function hideHandler(id) {
            if (id === this.id) {
                this.hide();
            }
        },
        modalListener: function modalListener(bvEvt) {
            // If another modal opens, close this one
            if (bvEvt.vueTarget !== this) {
                this.hide();
            }
        },

        // Focus control handlers
        focusFirst: function focusFirst() {
            // Don't try and focus if we are SSR
            if (typeof document === 'undefined') {
                return;
            }
            var content = this.$refs.content;
            var activeElement = document.activeElement;
            if (activeElement && content && content.contains(activeElement)) {
                // If activeElement is child of content, no need to change focus
                return;
            } else if (content) {
                // Focus the modal content wrapper
                content.focus();
            }
        },
        returnFocusTo: function returnFocusTo() {
            // Prefer returnFocus prop over event specified return_focus value
            var el = this.returnFocus || this.return_focus || null;
            if (typeof el === 'string') {
                // CSS Selector
                el = select(el);
            }
            if (el) {
                el = el.$el || el;
                if (isVisible(el)) {
                    el.focus();
                }
            }
        },

        // Utility methods
        getScrollbarWidth: function getScrollbarWidth() {
            var scrollDiv = document.createElement('div');
            scrollDiv.className = 'modal-scrollbar-measure';
            document.body.appendChild(scrollDiv);
            this.scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
            document.body.removeChild(scrollDiv);
        },
        adjustDialog: function adjustDialog() {
            if (!this.is_visible) {
                return;
            }
            var modal = this.$refs.modal;
            var isModalOverflowing = modal.scrollHeight > document.documentElement.clientHeight;

            if (!this.isBodyOverflowing && isModalOverflowing) {
                modal.style.paddingLeft = this.scrollbarWidth + 'px';
            }

            if (this.isBodyOverflowing && !isModalOverflowing) {
                modal.style.paddingRight = this.scrollbarWidth + 'px';
            }
        },
        resetAdjustments: function resetAdjustments() {
            var modal = this.$refs.modal;
            modal.style.paddingLeft = '';
            modal.style.paddingRight = '';
        },
        checkScrollbar: function checkScrollbar() {
            var rect = getBCR(document.body);
            this.isBodyOverflowing = rect.left + rect.right < window.innerWidth;
        },
        setScrollbar: function setScrollbar() {
            var _this5 = this;

            if (this.isBodyOverflowing) {
                // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
                //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set

                var computedStyle = window.getComputedStyle;
                var body = document.body;
                selectAll(Selector.FIXED_CONTENT).forEach(function (el) {
                    var actualPadding = el.style.paddingRight;
                    var calculatedPadding = computedStyle(el).paddingRight || 0;
                    setAttr(el, 'data-padding-right', actualPadding);
                    el.style.paddingRight = parseFloat(calculatedPadding) + _this5.scrollbarWidth + 'px';
                });

                // Adjust sticky content margin
                selectAll(Selector.STICKY_CONTENT).forEach(function (el) {
                    var actualMargin = el.style.marginRight;
                    var calculatedMargin = computedStyle(el).marginRight || 0;
                    setAttr(el, 'data-margin-right', actualMargin);
                    el.style.marginRight = parseFloat(calculatedMargin) - _this5.scrollbarWidth + 'px';
                });

                // Adjust navbar-toggler margin
                selectAll(Selector.NAVBAR_TOGGLER).forEach(function (el) {
                    var actualMargin = el.style.marginRight;
                    var calculatedMargin = computedStyle(el).marginRight || 0;
                    setAttr(el, 'data-margin-right', actualMargin);
                    el.style.marginRight = parseFloat(calculatedMargin) + _this5.scrollbarWidth + 'px';
                });

                // Adjust body padding
                var actualPadding = body.style.paddingRight;
                var calculatedPadding = computedStyle(body).paddingRight;
                setAttr(body, 'data-padding-right', actualPadding);
                body.style.paddingRight = parseFloat(calculatedPadding) + this.scrollbarWidth + 'px';
            }
        },
        resetScrollbar: function resetScrollbar() {
            // Restore fixed content padding
            selectAll(Selector.FIXED_CONTENT).forEach(function (el) {
                el.style.paddingRight = getAttr(el, 'data-padding-right') || '';
                removeAttr(el, 'data-padding-right');
            });

            // Restore sticky content and navbar-toggler margin
            selectAll(Selector.STICKY_CONTENT + ', ' + Selector.NAVBAR_TOGGLER).forEach(function (el) {
                el.style.marginRight = getAttr(el, 'data-margin-right') || '';
                removeAttr(el, 'data-margin-right');
            });

            // Restore body padding
            var body = document.body;
            body.style.paddingRight = getAttr(body, 'data-padding-right') || '';
            removeAttr(body, 'data-padding-right');
        }
    },
    created: function created() {
        // create non-reactive property
        this._observer = null;
    },
    mounted: function mounted() {
        // Measure scrollbar
        this.getScrollbarWidth();
        // Listen for events from others to either open or close ourselves
        this.listenOnRoot('bv::show::modal', this.showHandler);
        this.listenOnRoot('bv::hide::modal', this.hideHandler);
        // Listen for bv:modal::show events, and close ourselves if the opening modal not us
        this.listenOnRoot('bv::modal::show', this.modalListener);
        // Initially show modal?
        if (this.visible === true) {
            this.show();
        }
    },
    beforeDestroy: function beforeDestroy() {
        if (this._observer) {
            this._observer.disconnect();
            this._observer = null;
        }
        this.setResizeEvent(false);
    }
};

var props$35 = {
    tag: {
        type: String,
        default: "ul"
    },
    fill: {
        type: Boolean,
        default: false
    },
    justified: {
        type: Boolean,
        default: false
    },
    tabs: {
        type: Boolean,
        default: false
    },
    pills: {
        type: Boolean,
        default: false
    },
    vertical: {
        type: Boolean,
        default: false
    },
    isNavBar: {
        type: Boolean,
        default: false
    }
};

var nav = {
    functional: true,
    props: props$35,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        return h(props.tag, lib_common(data, {
            staticClass: "nav",
            class: {
                "navbar-nav": props.isNavBar,
                "nav-tabs": props.tabs,
                "nav-pills": props.pills,
                "flex-column": props.vertical,
                "nav-fill": props.fill,
                "nav-justified": props.justified
            }
        }), children);
    }
};

var props$36 = propsFactory();

var navItem = {
    functional: true,
    props: props$36,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        return h("li", lib_common(data, {
            staticClass: "nav-item"
        }), [h(bLink, { staticClass: "nav-link", props: props }, children)]);
    }
};

var navItemDropdown = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('li', { class: _vm.dropdownClasses, attrs: { "id": _vm.safeId() } }, [_c('a', { ref: "toggle", class: _vm.toggleClasses, attrs: { "href": "#", "id": _vm.safeId('_BV_button_'), "aria-haspopup": "true", "aria-expanded": _vm.visible ? 'true' : 'false', "disabled": _vm.disabled }, on: { "click": function click($event) {
                    $event.stopPropagation();$event.preventDefault();_vm.toggle($event);
                }, "keydown": [function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) {
                        return null;
                    }$event.stopPropagation();$event.preventDefault();_vm.toggle($event);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "space", 32)) {
                        return null;
                    }$event.stopPropagation();$event.preventDefault();_vm.toggle($event);
                }] } }, [_vm._t("button-content", [_vm._t("text", [_c('span', { domProps: { "innerHTML": _vm._s(_vm.text) } })])])], 2), _c('div', { ref: "menu", class: _vm.menuClasses, attrs: { "role": _vm.role, "aria-labelledby": _vm.safeId('_BV_button_') }, on: { "mouseover": _vm.onMouseOver, "keyup": function keyup($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) {
                        return null;
                    }_vm.onEsc($event);
                }, "keydown": [function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "tab", 9)) {
                        return null;
                    }_vm.onTab($event);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) {
                        return null;
                    }_vm.focusNext($event, true);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) {
                        return null;
                    }_vm.focusNext($event, false);
                }] } }, [_vm._t("default")], 2)]);
    }, staticRenderFns: [],
    mixins: [idMixin, dropdownMixin],
    computed: {
        isNav: function isNav() {
            // Signal to dropdown mixin that we are in a navbar
            return true;
        },
        dropdownClasses: function dropdownClasses() {
            return ['nav-item', 'b-nav-dropdown', 'dropdown', this.dropup ? 'dropup' : '', this.visible ? 'show' : ''];
        },
        toggleClasses: function toggleClasses() {
            return ['nav-link', this.noCaret ? '' : 'dropdown-toggle', this.disabled ? disabled : ''];
        },
        menuClasses: function menuClasses() {
            return ['dropdown-menu', this.right ? 'dropdown-menu-right' : 'dropdown-menu-left', this.visible ? 'show' : ''];
        }
    },
    props: {
        noCaret: {
            type: Boolean,
            default: false
        },
        role: {
            type: String,
            default: 'menu'
        }
    }
};

var navToggle = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('button', { class: _vm.classObject, attrs: { "type": "button", "aria-label": _vm.label, "aria-controls": _vm.target.id ? _vm.target.id : _vm.target, "aria-expanded": _vm.toggleState ? 'true' : 'false' }, on: { "click": _vm.onclick } }, [_vm._t("default", [_c('span', { staticClass: "navbar-toggler-icon" })])], 2);
    }, staticRenderFns: [],
    mixins: [listenOnRootMixin],
    computed: {
        classObject: function classObject() {
            return ['navbar-toggler', 'navbar-toggler-' + this.position];
        }
    },
    data: function data() {
        return {
            toggleState: false
        };
    },

    props: {
        label: {
            type: String,
            default: 'Toggle navigation'
        },
        position: {
            type: String,
            default: 'right'
        },
        target: {
            required: true
        }
    },
    methods: {
        onclick: function onclick() {
            var target = this.target;
            if (target.toggle) {
                target.toggle();
            }
            this.$root.$emit('bv::toggle::collapse', this.target);
        },
        handleStateEvt: function handleStateEvt(target, state) {
            if (target === this.target || target === this.target.id) {
                this.toggleState = state;
            }
        }
    },
    created: function created() {
        this.listenOnRoot('bv::collapse::state', this.handleStateEvt);
    }
};

var props$37 = {
    tag: {
        type: String,
        default: "nav"
    },
    type: {
        type: String,
        default: "light"
    },
    variant: {
        type: String
    },
    toggleable: {
        type: [Boolean, String],
        default: false
    },
    toggleBreakpoint: {
        // Deprecated.  Set toggleable to a string breakpoint
        type: String,
        default: null
    },
    fixed: {
        type: String
    },
    sticky: {
        type: Boolean,
        default: false
    }
};

var navbar = {
    functional: true,
    props: props$37,
    render: function render(h, _ref) {
        var _class;

        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        var breakpoint = props.toggleBreakpoint || (props.toggleable === true ? 'sm' : props.toggleable) || 'sm';
        return h(props.tag, lib_common(data, {
            staticClass: "navbar",
            class: (_class = {}, defineProperty$1(_class, "navbar-" + props.type, Boolean(props.type)), defineProperty$1(_class, "bg-" + props.variant, Boolean(props.variant)), defineProperty$1(_class, "fixed-" + props.fixed, Boolean(props.fixed)), defineProperty$1(_class, "sticky-top", props.sticky), defineProperty$1(_class, "navbar-expand-" + breakpoint, props.toggleable !== false), _class)
        }), children);
    }
};

var linkProps$2 = propsFactory();
linkProps$2.href.default = undefined;
linkProps$2.to.default = undefined;

var props$38 = assign(linkProps$2, {
    tag: {
        type: String,
        default: "div"
    }
});

var navbarBrand = {
    functional: true,
    props: props$38,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        var isLink = Boolean(props.to || props.href);
        var tag = isLink ? bLink : props.tag;

        return h(tag, lib_common(data, {
            staticClass: "navbar-brand",
            props: isLink ? pluckProps(linkProps$2, props) : {}
        }), children);
    }
};

var props$39 = {
    tag: {
        type: String,
        default: "span"
    }
};

var navText = {
    functional: true,
    props: props$39,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        return h(props.tag, lib_common(data, { staticClass: "navbar-text" }), children);
    }
};

var navForm = {
    functional: true,
    props: {
        id: {
            type: String,
            default: null
        }
    },
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        return h(Form, lib_common(data, { attrs: { id: props.id }, props: { inline: true } }), children);
    }
};

var COMMON_ALIGNMENT = ["start", "end", "center"];

var props$40 = {
    tag: {
        type: String,
        default: "div"
    },
    noGutters: {
        type: Boolean,
        default: false
    },
    alignV: {
        type: String,
        default: null,
        validator: function validator(str) {
            return arrayIncludes(COMMON_ALIGNMENT.concat(["baseline", "stretch"]), str);
        }
    },
    alignH: {
        type: String,
        default: null,
        validator: function validator(str) {
            return arrayIncludes(COMMON_ALIGNMENT.concat(["between", "around"]), str);
        }
    },
    alignContent: {
        type: String,
        default: null,
        validator: function validator(str) {
            return arrayIncludes(COMMON_ALIGNMENT.concat(["between", "around", "stretch"]), str);
        }
    }
};

var row = {
    functional: true,
    props: props$40,
    render: function render(h, _ref) {
        var _class;

        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        return h(props.tag, lib_common(data, {
            staticClass: "row",
            class: (_class = {
                "no-gutters": props.noGutters
            }, defineProperty$1(_class, "align-items-" + props.alignV, props.alignV), defineProperty$1(_class, "justify-content-" + props.alignH, props.alignH), defineProperty$1(_class, "align-content-" + props.alignContent, props.alignContent), _class)
        }), children);
    }
};

var props$41 = {
    perPage: {
        type: Number,
        default: 20
    },
    totalRows: {
        type: Number,
        default: 20
    },
    ariaControls: {
        type: String,
        default: null
    }
};

var pagination = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('ul', { class: ['pagination', _vm.btnSize, _vm.alignment], attrs: { "aria-disabled": _vm.disabled ? 'true' : 'false', "aria-label": _vm.ariaLabel ? _vm.ariaLabel : null, "role": "menubar" }, on: { "focusin": function focusin($event) {
                    if ($event.target !== $event.currentTarget) {
                        return null;
                    }_vm.focusCurrent($event);
                }, "keydown": [function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "left", 37)) {
                        return null;
                    }if ('button' in $event && $event.button !== 0) {
                        return null;
                    }$event.preventDefault();_vm.focusPrev($event);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "right", 39)) {
                        return null;
                    }if ('button' in $event && $event.button !== 2) {
                        return null;
                    }$event.preventDefault();_vm.focusNext($event);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "left", 37)) {
                        return null;
                    }if (!$event.shiftKey) {
                        return null;
                    }if ('button' in $event && $event.button !== 0) {
                        return null;
                    }$event.preventDefault();_vm.focusFirst($event);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "right", 39)) {
                        return null;
                    }if (!$event.shiftKey) {
                        return null;
                    }if ('button' in $event && $event.button !== 2) {
                        return null;
                    }$event.preventDefault();_vm.focusLast($event);
                }] } }, [!_vm.hideGotoEndButtons ? [_vm.isActive(1) || _vm.disabled ? _c('li', { staticClass: "page-item disabled", attrs: { "role": "none presentation", "aria-hidden": "true" } }, [_c('span', { staticClass: "page-link", domProps: { "innerHTML": _vm._s(_vm.firstText) } })]) : _c('li', { staticClass: "page-item", attrs: { "role": "none presentation" } }, [_c('a', { staticClass: "page-link", attrs: { "aria-label": _vm.labelFirstPage, "aria-controls": _vm.ariaControls || null, "role": "menuitem", "href": "#", "tabindex": "-1" }, on: { "click": function click($event) {
                    $event.preventDefault();_vm.setPage($event, 1);
                }, "keydown": [function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) {
                        return null;
                    }$event.preventDefault();_vm.setPage($event, 1);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "space", 32)) {
                        return null;
                    }$event.preventDefault();_vm.setPage($event, 1);
                }] } }, [_c('span', { attrs: { "aria-hidden": "true" }, domProps: { "innerHTML": _vm._s(_vm.firstText) } })])])] : _vm._e(), _vm.isActive(1) || _vm.disabled ? _c('li', { staticClass: "page-item disabled", attrs: { "role": "none presentation", "aria-hidden": "true" } }, [_c('span', { staticClass: "page-link", domProps: { "innerHTML": _vm._s(_vm.prevText) } })]) : _c('li', { staticClass: "page-item", attrs: { "role": "none presentation" } }, [_c('a', { staticClass: "page-link", attrs: { "aria-label": _vm.labelPrevPage, "aria-controls": _vm.ariaControls || null, "role": "menuitem", "href": "#", "tabindex": "-1" }, on: { "click": function click($event) {
                    $event.preventDefault();_vm.setPage($event, _vm.currentPage - 1);
                }, "keydown": [function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) {
                        return null;
                    }$event.preventDefault();_vm.setPage($event, _vm.currentPage - 1);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "space", 32)) {
                        return null;
                    }$event.preventDefault();_vm.setPage($event, _vm.currentPage - 1);
                }] } }, [_c('span', { attrs: { "aria-hidden": "true" }, domProps: { "innerHTML": _vm._s(_vm.prevText) } })])]), _vm.showFirstDots ? _c('li', { staticClass: "page-item disabled d-none d-sm-flex", attrs: { "role": "separator" } }, [_c('span', { staticClass: "page-link", domProps: { "innerHTML": _vm._s(_vm.ellipsisText) } })]) : _vm._e(), _vm._l(_vm.pageList, function (page) {
            return _c('li', { key: page.number, class: _vm.pageItemClasses(page), attrs: { "role": "none presentation" } }, [_c('a', { class: _vm.pageLinkClasses(page), attrs: { "disabled": _vm.disabled, "aria-disabled": _vm.disabled ? 'true' : null, "aria-label": _vm.labelPage + ' ' + page.number, "aria-checked": _vm.isActive(page.number) ? 'true' : 'false', "aria-controls": _vm.ariaControls || null, "aria-posinset": page.number, "aria-setsize": _vm.numberOfPages, "role": "menuitemradio", "href": "#", "tabindex": "-1" }, on: { "click": function click($event) {
                        $event.preventDefault();_vm.setPage($event, page.number);
                    }, "keydown": [function ($event) {
                        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) {
                            return null;
                        }$event.preventDefault();_vm.setPage($event, page.number);
                    }, function ($event) {
                        if (!('button' in $event) && _vm._k($event.keyCode, "space", 32)) {
                            return null;
                        }$event.preventDefault();_vm.setPage($event, page.number);
                    }] } }, [_vm._v(_vm._s(page.number))])]);
        }), _vm.showLastDots ? _c('li', { staticClass: "page-item disabled d-none d-sm-flex", attrs: { "role": "separator" } }, [_c('span', { staticClass: "page-link", domProps: { "innerHTML": _vm._s(_vm.ellipsisText) } })]) : _vm._e(), _vm.isActive(_vm.numberOfPages) || _vm.disabled ? _c('li', { staticClass: "page-item disabled", attrs: { "role": "none presentation", "aria-hidden": "true" } }, [_c('span', { staticClass: "page-link", domProps: { "innerHTML": _vm._s(_vm.nextText) } })]) : _c('li', { staticClass: "page-item", attrs: { "role": "none presentation" } }, [_c('a', { staticClass: "page-link", attrs: { "aria-label": _vm.labelNextPage, "aria-controls": _vm.ariaControls || null, "role": "menuitem", "href": "#", "tabindex": "-1" }, on: { "click": function click($event) {
                    $event.preventDefault();_vm.setPage($event, _vm.currentPage + 1);
                }, "keydown": [function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) {
                        return null;
                    }$event.preventDefault();_vm.setPage($event, _vm.currentPage + 1);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "space", 32)) {
                        return null;
                    }$event.preventDefault();_vm.setPage($event, _vm.currentPage + 1);
                }] } }, [_c('span', { attrs: { "aria-hidden": "true" }, domProps: { "innerHTML": _vm._s(_vm.nextText) } })])]), !_vm.hideGotoEndButtons ? [_vm.isActive(_vm.numberOfPages) || _vm.disabled ? _c('li', { staticClass: "page-item disabled", attrs: { "role": "none presentation", "aria-hidden": "true" } }, [_c('span', { staticClass: "page-link", domProps: { "innerHTML": _vm._s(_vm.lastText) } })]) : _c('li', { staticClass: "page-item", attrs: { "role": "none presentation" } }, [_c('a', { staticClass: "page-link", attrs: { "aria-label": _vm.labelLastPage, "aria-controls": _vm.ariaControls || null, "role": "menuitem", "href": "#", "tabindex": "-1" }, on: { "click": function click($event) {
                    $event.preventDefault();_vm.setPage($event, _vm.numberOfPages);
                }, "keydown": [function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) {
                        return null;
                    }$event.preventDefault();_vm.setPage($event, _vm.numberOfPages);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "space", 32)) {
                        return null;
                    }$event.preventDefault();_vm.setPage($event, _vm.numberOfPages);
                }] } }, [_c('span', { attrs: { "aria-hidden": "true" }, domProps: { "innerHTML": _vm._s(_vm.lastText) } })])])] : _vm._e()], 2);
    }, staticRenderFns: [], _scopeId: 'data-v-2792960b',
    mixins: [paginationMixin],
    props: props$41,
    computed: {
        numberOfPages: function numberOfPages() {
            var result = Math.ceil(this.totalRows / this.perPage);
            return result < 1 ? 1 : result;
        }
    },
    methods: {
        setPage: function setPage(e, num) {
            var _this = this;

            if (this.disabled) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            if (num > this.numberOfPages) {
                this.currentPage = this.numberOfPages;
            } else if (num < 1) {
                this.currentpage = 1;
            } else {
                this.currentPage = num;
            }
            this.$nextTick(function () {
                // Keep the current button focused if possible
                if (isVisible(e.target) && e.target.focus) {
                    e.target.focus();
                } else {
                    _this.focusCurrent();
                }
            });
            this.$emit('change', this.currentPage);
        }
    }
};

// Props needed for router links
var routerProps = pickLinkProps('activeClass', 'exactActiveClass', 'append', 'exact', 'replace', 'target', 'rel');

// Props object
var props$42 = assign(
// pagination-nav specific props
{
    numberOfPages: {
        type: Number,
        default: 1
    },
    baseUrl: {
        type: String,
        default: '/'
    },
    useRouter: {
        type: Boolean,
        default: false
    },
    linkGen: {
        type: Function,
        default: null
    },
    pageGen: {
        type: Function,
        default: null
    }
},
// Router specific props
routerProps);

var paginationNav = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('nav', [_c('ul', { class: ['pagination', _vm.btnSize, _vm.alignment], attrs: { "aria-disabled": _vm.disabled ? 'true' : 'false', "aria-label": _vm.ariaLabel ? _vm.ariaLabel : null, "role": "menubar" }, on: { "focusin": function focusin($event) {
                    if ($event.target !== $event.currentTarget) {
                        return null;
                    }_vm.focusCurrent($event);
                }, "keydown": [function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "left", 37)) {
                        return null;
                    }if ('button' in $event && $event.button !== 0) {
                        return null;
                    }$event.preventDefault();_vm.focusPrev($event);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "right", 39)) {
                        return null;
                    }if ('button' in $event && $event.button !== 2) {
                        return null;
                    }$event.preventDefault();_vm.focusNext($event);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "left", 37)) {
                        return null;
                    }if (!$event.shiftKey) {
                        return null;
                    }if ('button' in $event && $event.button !== 0) {
                        return null;
                    }$event.preventDefault();_vm.focusFirst($event);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "right", 39)) {
                        return null;
                    }if (!$event.shiftKey) {
                        return null;
                    }if ('button' in $event && $event.button !== 2) {
                        return null;
                    }$event.preventDefault();_vm.focusLast($event);
                }] } }, [!_vm.hideGotoEndButtons ? [_vm.isActive(1) || _vm.disabled ? _c('li', { staticClass: "page-item disabled", attrs: { "role": "none presentation", "aria-hidden": "true" } }, [_c('span', { staticClass: "page-link", domProps: { "innerHTML": _vm._s(_vm.firstText) } })]) : _c('li', { staticClass: "page-item", attrs: { "role": "none presentation" } }, [_c('b-link', _vm._b({ staticClass: "page-link", attrs: { "aria-label": _vm.labelFirstPage, "role": "menuitem", "tabindex": "-1" }, on: { "click": function click($event) {
                    _vm.onClick(1);
                } } }, 'b-link', _vm.linkProps(1), false), [_c('span', { attrs: { "aria-hidden": "true" }, domProps: { "innerHTML": _vm._s(_vm.firstText) } })])], 1)] : _vm._e(), _vm.isActive(1) || _vm.disabled ? _c('li', { staticClass: "page-item disabled", attrs: { "role": "none presentation", "aria-hidden": "true" } }, [_c('span', { staticClass: "page-link", domProps: { "innerHTML": _vm._s(_vm.prevText) } })]) : _c('li', { staticClass: "page-item", attrs: { "role": "none presentation" } }, [_c('b-link', _vm._b({ staticClass: "page-link", attrs: { "aria-label": _vm.labelPrevPage, "role": "menuitem", "tabindex": "-1" }, on: { "click": function click($event) {
                    _vm.onClick(_vm.currentPage - 1);
                } } }, 'b-link', _vm.linkProps(_vm.currentPage - 1), false), [_c('span', { attrs: { "aria-hidden": "true" }, domProps: { "innerHTML": _vm._s(_vm.prevText) } })])], 1), _vm.showFirstDots ? _c('li', { staticClass: "page-item disabled d-none d-sm-flex", attrs: { "role": "separator" } }, [_c('span', { staticClass: "page-link", domProps: { "innerHTML": _vm._s(_vm.ellipsisText) } })]) : _vm._e(), _vm._l(_vm.pageList, function (page) {
            return _c('li', { key: page.number, class: _vm.pageItemClasses(page), attrs: { "role": "none presentation" } }, [_vm.disabled ? _c('span', { staticClass: "page-link" }, [_vm._v(_vm._s(page.number))]) : _c('b-link', _vm._b({ class: _vm.pageLinkClasses(page), attrs: { "disabled": _vm.disabled, "aria-disabled": _vm.disabled ? 'true' : null, "aria-label": _vm.labelPage + ' ' + page.number, "aria-checked": _vm.isActive(page.number) ? 'true' : 'false', "aria-posinset": page.number, "aria-setsize": _vm.numberOfPages, "role": "menuitemradio", "tabindex": "-1" }, domProps: { "innerHTML": _vm._s(_vm.makePage(page.number)) }, on: { "click": function click($event) {
                        _vm.onClick(page.number);
                    } } }, 'b-link', _vm.linkProps(page.number), false))], 1);
        }), _vm.showLastDots ? _c('li', { staticClass: "page-item disabled d-none d-sm-flex", attrs: { "role": "separator" } }, [_c('span', { staticClass: "page-link", domProps: { "innerHTML": _vm._s(_vm.ellipsisText) } })]) : _vm._e(), _vm.isActive(_vm.numberOfPages) || _vm.disabled ? _c('li', { staticClass: "page-item disabled", attrs: { "role": "none presentation", "aria-hidden": "true" } }, [_c('span', { staticClass: "page-link", domProps: { "innerHTML": _vm._s(_vm.nextText) } })]) : _c('li', { staticClass: "page-item", attrs: { "role": "none presentation" } }, [_c('b-link', _vm._b({ staticClass: "page-link", attrs: { "aria-label": _vm.labelNextPage, "role": "menuitem", "tabindex": "-1" }, on: { "click": function click($event) {
                    _vm.onClick(_vm.currentPage + 1);
                } } }, 'b-link', _vm.linkProps(_vm.currentPage + 1), false), [_c('span', { attrs: { "aria-hidden": "true" }, domProps: { "innerHTML": _vm._s(_vm.nextText) } })])], 1), !_vm.hideGotoEndButtons ? [_vm.isActive(_vm.numberOfPages) || _vm.disabled ? _c('li', { staticClass: "page-item disabled", attrs: { "role": "none presentation", "aria-hidden": "true" } }, [_c('span', { staticClass: "page-link", domProps: { "innerHTML": _vm._s(_vm.lastText) } })]) : _c('li', { staticClass: "page-item", attrs: { "role": "none presentation" } }, [_c('b-link', _vm._b({ staticClass: "page-link", attrs: { "aria-label": _vm.labelLastPage, "role": "menuitem" }, on: { "click": function click($event) {
                    _vm.onClick(_vm.numberOfPages);
                } } }, 'b-link', _vm.linkProps(_vm.numberOfPages), false), [_c('span', { attrs: { "aria-hidden": "true" }, domProps: { "innerHTML": _vm._s(_vm.lastText) } })])], 1)] : _vm._e()], 2)]);
    }, staticRenderFns: [], _scopeId: 'data-v-20c4e761',
    components: { bLink: bLink },
    mixins: [paginationMixin],
    props: props$42,
    methods: {
        onClick: function onClick(pageNum) {
            this.currentPage = pageNum;
        },
        makeLink: function makeLink(pagenum) {
            if (this.linkGen && typeof this.linkGen === 'function') {
                return this.linkGen(pagenum);
            }
            var link = '' + this.baseUrl + pagenum;
            return this.useRouter ? { path: link } : link;
        },
        makePage: function makePage(pagenum) {
            if (this.pageGen && typeof this.pageGen === 'function') {
                return this.pageGen(pagenum);
            }
            return pagenum;
        },
        linkProps: function linkProps(pagenum) {
            var link = this.makeLink(pagenum);
            var props = {
                href: typeof link === 'string' ? link : void 0,
                target: this.target || null,
                rel: this.rel || null,
                disabled: this.disabled
            };
            if (this.useRouter || (typeof link === 'undefined' ? 'undefined' : _typeof(link)) === 'object') {
                props = assign(props, {
                    to: link,
                    exact: this.exact,
                    activeClass: this.activeClass,
                    exactActiveClass: this.exactActiveClass,
                    append: this.append,
                    replace: this.replace
                });
            }
            return props;
        }
    }
};

var popover = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { directives: [{ name: "show", rawName: "v-show", value: false, expression: "false" }], staticClass: "d-none", attrs: { "aria-hidden": "true" } }, [_c('div', { ref: "title" }, [_vm._t("title")], 2), _c('div', { ref: "content" }, [_vm._t("default")], 2)]);
    }, staticRenderFns: [],
    mixins: [toolpopMixin],
    data: function data() {
        return {};
    },

    props: {
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        triggers: {
            type: [String, Array],
            default: 'click'
        },
        placement: {
            type: String,
            default: 'right'
        }
    },
    methods: {
        createToolpop: function createToolpop() {
            // getTarget is in toolpop mixin
            var target = this.getTarget();
            if (target) {
                this._toolpop = new PopOver(target, this.getConfig(), this.$root);
            } else {
                this._toolpop = null;
                warn("b-popover: 'target' element not found!");
            }
            return this._toolpop;
        }
    }
};

var bProgressBar = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.progressBarClasses, style: _vm.progressBarStyles, attrs: { "role": "progressbar", "aria-valuenow": _vm.value.toFixed(_vm.computedPrecision), "aria-valuemin": "0", "aria-valuemax": _vm.computedMax } }, [_vm._t("default", [_vm.label ? _c('span', { domProps: { "innerHTML": _vm._s(_vm.label) } }) : _vm.computedShowProgress ? [_vm._v(_vm._s(_vm.progress.toFixed(_vm.computedPrecision)) + "%")] : _vm.computedShowValue ? [_vm._v(_vm._s(_vm.value.toFixed(_vm.computedPrecision)))] : _vm._e()])], 2);
    }, staticRenderFns: [],
    computed: {
        progressBarClasses: function progressBarClasses() {
            return ['progress-bar', this.computedVariant ? "bg-" + this.computedVariant : '', this.computedStriped || this.computedAnimated ? 'progress-bar-striped' : '', this.computedAnimated ? 'progress-bar-animated' : ''];
        },
        progressBarStyles: function progressBarStyles() {
            return {
                width: 100 * (this.value / this.computedMax) + '%',
                height: this.computedHeight,
                lineHeight: this.computedHeight
            };
        },
        progress: function progress() {
            var p = Math.pow(10, this.computedPrecision);
            return Math.round(100 * p * this.value / this.computedMax) / p;
        },
        computedMax: function computedMax() {
            // Prefer our max over parent setting
            return typeof this.max === 'number' ? this.max : this.$parent.max || 100;
        },
        computedHeight: function computedHeight() {
            // Prefer parent height over our height
            return this.$parent.height || this.height || '1rem';
        },
        computedVariant: function computedVariant() {
            // Prefer our variant over parent setting
            return this.variant || this.$parent.variant;
        },
        computedPrecision: function computedPrecision() {
            // Prefer our precision over parent setting
            return typeof this.precision === 'number' ? this.precision : this.$parent.precision || 0;
        },
        computedStriped: function computedStriped() {
            // Prefer our striped over parent setting
            return typeof this.striped === 'boolean' ? this.striped : this.$parent.striped || false;
        },
        computedAnimated: function computedAnimated() {
            // Prefer our animated over parent setting
            return typeof this.animated === 'boolean' ? this.animated : this.$parent.animated || false;
        },
        computedShowProgress: function computedShowProgress() {
            // Prefer our showProgress over parent setting
            return typeof this.showProgress === 'boolean' ? this.showProgress : this.$parent.showProgress || false;
        },
        computedShowValue: function computedShowValue() {
            // Prefer our showValue over parent setting
            return typeof this.showValue === 'boolean' ? this.showValue : this.$parent.showValue || false;
        }
    },
    props: {
        value: {
            type: Number,
            default: 0
        },
        label: {
            type: String,
            value: null
        },
        // $parent prop values take precedence over the following props
        // Which is why they are defaulted to null
        max: {
            type: Number,
            default: null
        },
        precision: {
            type: Number,
            default: null
        },
        variant: {
            type: String,
            default: null
        },
        striped: {
            type: Boolean,
            default: null
        },
        animated: {
            type: Boolean,
            default: null
        },
        showProgress: {
            type: Boolean,
            default: null
        },
        showValue: {
            type: Boolean,
            default: null
        },
        height: {
            type: String,
            default: null
        }
    }
};

var progress = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "progress" }, [_vm._t("default", [_c('b-progress-bar', { attrs: { "value": _vm.value, "max": _vm.max, "precision": _vm.precision, "variant": _vm.variant, "animated": _vm.animated, "striped": _vm.striped, "show-progress": _vm.showProgress, "show-value": _vm.showValue, "height": _vm.height } })])], 2);
    }, staticRenderFns: [],
    components: { bProgressBar: bProgressBar },
    props: {
        // These props can be inherited via the child b-progress-bar(s)
        variant: {
            type: String,
            default: null
        },
        striped: {
            type: Boolean,
            default: false
        },
        animated: {
            type: Boolean,
            default: false
        },
        height: {
            type: String,
            default: '1rem'
        },
        precision: {
            type: Number,
            default: 0
        },
        showProgress: {
            type: Boolean,
            default: false
        },
        showValue: {
            type: Boolean,
            default: false
        },
        max: {
            type: Number,
            default: 100
        },
        // This prop is not inherited by child b-progress-bar(s)
        value: {
            type: Number,
            default: 0
        }
    }
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff';
var rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23';
var rsComboSymbolsRange = '\\u20d0-\\u20f0';
var rsDingbatRange = '\\u2700-\\u27bf';
var rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff';
var rsMathOpRange = '\\xac\\xb1\\xd7\\xf7';
var rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf';
var rsPunctuationRange = '\\u2000-\\u206f';
var rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000';
var rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde';
var rsVarRange = '\\ufe0e\\ufe0f';
var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";
var rsAstral = '[' + rsAstralRange + ']';
var rsBreak = '[' + rsBreakRange + ']';
var rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']';
var rsDigits = '\\d+';
var rsDingbat = '[' + rsDingbatRange + ']';
var rsLower = '[' + rsLowerRange + ']';
var rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']';
var rsFitz = '\\ud83c[\\udffb-\\udfff]';
var rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')';
var rsNonAstral = '[^' + rsAstralRange + ']';
var rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
var rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
var rsUpper = '[' + rsUpperRange + ']';
var rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')';
var rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')';
var rsOptLowerContr = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?';
var rsOptUpperContr = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?';
var reOptMod = rsModifier + '?';
var rsOptVar = '[' + rsVarRange + ']?';
var rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';
var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;
var rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([rsUpper + '?' + rsLower + '+' + rsOptLowerContr + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')', rsUpperMisc + '+' + rsOptUpperContr + '(?=' + [rsBreak, rsUpper + rsLowerMisc, '$'].join('|') + ')', rsUpper + '?' + rsLowerMisc + '+' + rsOptLowerContr, rsUpper + '+' + rsOptUpperContr, rsDigits, rsEmoji].join('|'), 'g');

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A', '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a', '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C', '\xe7': 'c',
  '\xd0': 'D', '\xf0': 'd',
  '\xc8': 'E', '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e', '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I', '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i', '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N', '\xf1': 'n',
  '\xd2': 'O', '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o', '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U', '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u', '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y', '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A', '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a', '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C', '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c', '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D', '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E', '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e', '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G', '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g', '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H', '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I', '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i', '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J', '\u0135': 'j',
  '\u0136': 'K', '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L', '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l', '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N', '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n', '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O', '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o', '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R', '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r', '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S', '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's', '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T', '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't', '\u0165': 't', '\u0167': 't',
  '\u0168': 'U', '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u', '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W', '\u0175': 'w',
  '\u0176': 'Y', '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z', '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z', '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 'ss'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function (key) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol$1 = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined;
var symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return !start && end >= length ? array : baseSlice(array, start, end);
}

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function (string) {
    string = toString$1(string);

    var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;

    var chr = strSymbols ? strSymbols[0] : string.charAt(0);

    var trailing = strSymbols ? castSlice(strSymbols, 1).join('') : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function (string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString$1(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('d??j?? vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString$1(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @static
 * @memberOf _
 * @since 3.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @example
 *
 * _.startCase('--foo-bar--');
 * // => 'Foo Bar'
 *
 * _.startCase('fooBar');
 * // => 'Foo Bar'
 *
 * _.startCase('__FOO_BAR__');
 * // => 'FOO BAR'
 */
var startCase = createCompounder(function (result, word, index) {
  return result + (index ? ' ' : '') + upperFirst$1(word);
});

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst$1 = createCaseFirst('toUpperCase');

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString$1(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

var lodash_startcase = startCase;

function toString(v) {
    if (!v) {
        return '';
    }
    if (v instanceof Object) {
        return keys(v).map(function (k) {
            return toString(v[k]);
        }).join(' ');
    }
    return String(v);
}

function recToString(obj) {
    if (!(obj instanceof Object)) {
        return '';
    }

    return toString(keys(obj).reduce(function (o, k) {
        // Ignore fields that start with _
        if (!/^_/.test(k)) {
            o[k] = obj[k];
        }
        return o;
    }, {}));
}

function defaultSortCompare(a, b, sortBy) {
    if (typeof a[sortBy] === 'number' && typeof b[sortBy] === 'number') {
        return a[sortBy] < b[sortBy] && -1 || a[sortBy] > b[sortBy] && 1 || 0;
    }
    return toString(a[sortBy]).localeCompare(toString(b[sortBy]), undefined, {
        numeric: true
    });
}

function processField(key, value) {
    var field = null;
    if (typeof value === 'string') {
        // Label shortcut
        field = { key: key, label: lodash_startcase(value) };
    } else if (typeof value === 'function') {
        // Formatter shortcut
        field = { key: key, formatter: value };
    } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
        field = assign({}, value);
        field.key = field.key || key;
    } else if (value !== false) {
        // Fallback to just key
        field = { key: key };
    }
    return field;
}

var table = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('table', { class: _vm.tableClasses, attrs: { "id": _vm.id || null, "aria-busy": _vm.computedBusy ? 'true' : 'false' } }, [_c('thead', { class: _vm.headClasses }, [_c('tr', _vm._l(_vm.computedFields, function (field) {
            return _c('th', { key: field.key, class: _vm.fieldClasses(field), style: field.thStyle || {}, attrs: { "aria-label": field.sortable ? _vm.localSortDesc && _vm.localSortBy === field.key ? _vm.labelSortAsc : _vm.labelSortDesc : null, "aria-sort": field.sortable && _vm.localSortBy === field.key ? _vm.localSortDesc ? 'descending' : 'ascending' : null, "tabindex": field.sortable ? '0' : null }, on: { "click": function click($event) {
                        $event.stopPropagation();$event.preventDefault();_vm.headClicked($event, field);
                    }, "keydown": [function ($event) {
                        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) {
                            return null;
                        }$event.stopPropagation();$event.preventDefault();_vm.headClicked($event, field);
                    }, function ($event) {
                        if (!('button' in $event) && _vm._k($event.keyCode, "space", 32)) {
                            return null;
                        }$event.stopPropagation();$event.preventDefault();_vm.headClicked($event, field);
                    }] } }, [_vm._t('HEAD_' + field.key, [_c('div', { domProps: { "innerHTML": _vm._s(field.label) } })], { label: field.label, column: field.key, field: field })], 2);
        }))]), _vm.footClone ? _c('tfoot', { class: _vm.footClasses }, [_c('tr', _vm._l(_vm.computedFields, function (field) {
            return _c('th', { key: field.key, class: _vm.fieldClasses(field), style: field.thStyle || {}, attrs: { "aria-label": field.sortable ? _vm.localSortDesc && _vm.localSortBy === field.key ? _vm.labelSortAsc : _vm.labelSortDesc : null, "aria-sort": field.sortable && _vm.localSortBy === field.key ? _vm.localSortDesc ? 'descending' : 'ascending' : null, "tabindex": field.sortable ? '0' : null }, on: { "click": function click($event) {
                        $event.stopPropagation();$event.preventDefault();_vm.headClicked($event, field);
                    }, "keydown": [function ($event) {
                        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) {
                            return null;
                        }$event.stopPropagation();$event.preventDefault();_vm.headClicked($event, field);
                    }, function ($event) {
                        if (!('button' in $event) && _vm._k($event.keyCode, "space", 32)) {
                            return null;
                        }$event.stopPropagation();$event.preventDefault();_vm.headClicked($event, field);
                    }] } }, [_vm.$scopedSlots['FOOT_' + field.key] ? _vm._t('FOOT_' + field.key, [_c('div', { domProps: { "innerHTML": _vm._s(field.label) } })], { label: field.label, column: field.key, field: field }) : _vm._t('HEAD_' + field.key, [_c('div', { domProps: { "innerHTML": _vm._s(field.label) } })], { label: field.label, column: field.key, field: field })], 2);
        }))]) : _vm._e(), _c('tbody', [_vm.$scopedSlots['top-row'] ? _c('tr', [_vm._t("top-row", null, { columns: _vm.computedFields.length, fields: _vm.computedFields })], 2) : _vm._e(), _vm._l(_vm.computedItems, function (item, index) {
            return _c('tr', { key: index, class: _vm.rowClasses(item), on: { "click": function click($event) {
                        _vm.rowClicked($event, item, index);
                    }, "dblclick": function dblclick($event) {
                        _vm.rowDblClicked($event, item, index);
                    }, "mouseenter": function mouseenter($event) {
                        _vm.rowHovered($event, item, index);
                    } } }, [_vm._l(_vm.computedFields, function (field) {
                return [_vm.$scopedSlots[field.key] ? _c('td', { key: field.key, class: _vm.tdClasses(field, item) }, [_vm._t(field.key, null, { value: _vm.getFormattedValue(item, field), unformatted: item[field.key], item: item, index: index })], 2) : _c('td', { key: field.key, class: _vm.tdClasses(field, item), domProps: { "innerHTML": _vm._s(_vm.getFormattedValue(item, field)) } })];
            })], 2);
        }), _vm.showEmpty && (!_vm.computedItems || _vm.computedItems.length === 0) ? _c('tr', [_c('td', { attrs: { "colspan": _vm.computedFields.length } }, [_vm.filter ? _c('div', { attrs: { "role": "alert", "aria-live": "polite" } }, [_vm._t("emptyfiltered", [_c('div', { staticClass: "text-center my-2", domProps: { "innerHTML": _vm._s(_vm.emptyFilteredText) } })])], 2) : _c('div', { attrs: { "role": "alert", "aria-live": "polite" } }, [_vm._t("empty", [_c('div', { staticClass: "text-center my-2", domProps: { "innerHTML": _vm._s(_vm.emptyText) } })])], 2)])]) : _vm._e(), _vm.$scopedSlots['bottom-row'] ? _c('tr', [_vm._t("bottom-row", null, { columns: _vm.computedfields.length, fields: _vm.computedFields })], 2) : _vm._e()], 2)]);
    }, staticRenderFns: [],
    mixins: [listenOnRootMixin],
    data: function data() {
        return {
            localSortBy: this.sortBy || '',
            localSortDesc: this.sortDesc || false,
            localItems: [],
            // Note: filteredItems only used to determine if # of items changed
            filteredItems: [],
            localBusy: this.busy
        };
    },

    props: {
        id: {
            type: String,
            default: ''
        },
        items: {
            type: [Array, Function],
            default: function _default() {
                return [];
            }
        },
        sortBy: {
            type: String,
            default: null
        },
        sortDesc: {
            type: Boolean,
            default: false
        },
        apiUrl: {
            type: String,
            default: ''
        },
        fields: {
            type: [Object, Array],
            default: null
        },
        striped: {
            type: Boolean,
            default: false
        },
        bordered: {
            type: Boolean,
            default: false
        },
        inverse: {
            type: Boolean,
            default: false
        },
        hover: {
            type: Boolean,
            default: false
        },
        small: {
            type: Boolean,
            default: false
        },
        responsive: {
            type: Boolean,
            default: false
        },
        fixed: {
            type: Boolean,
            default: false
        },
        headVariant: {
            type: String,
            default: ''
        },
        footVariant: {
            type: String,
            default: ''
        },
        perPage: {
            type: Number,
            default: null
        },
        currentPage: {
            type: Number,
            default: 1
        },
        filter: {
            type: [String, RegExp, Function],
            default: null
        },
        sortCompare: {
            type: Function,
            default: null
        },
        noLocalSorting: {
            type: Boolean,
            default: false
        },
        noProviderPaging: {
            type: Boolean,
            default: false
        },
        noProviderSorting: {
            type: Boolean,
            default: false
        },
        noProviderFiltering: {
            type: Boolean,
            default: false
        },
        busy: {
            type: Boolean,
            default: false
        },
        value: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        footClone: {
            type: Boolean,
            default: false
        },
        labelSortAsc: {
            type: String,
            default: 'Click to sort Ascending'
        },
        labelSortDesc: {
            type: String,
            default: 'Click to sort Descending'
        },
        showEmpty: {
            type: Boolean,
            default: false
        },
        emptyText: {
            type: String,
            default: 'There are no records to show'
        },
        emptyFilteredText: {
            type: String,
            default: 'There are no records matching your request'
        }
    },
    watch: {
        items: function items(newVal, oldVal) {
            if (oldVal !== newVal) {
                this._providerUpdate();
            }
        },
        context: function context(newVal, oldVal) {
            if (!looseEqual(newVal, oldVal)) {
                this.$emit('context-changed', newVal);
            }
        },
        filteredItems: function filteredItems(newVal, oldVal) {
            if (this.localFiltering && newVal.length !== oldVal.length) {
                // Emit a filtered notification event, as number of filtered items has changed
                this.$emit('filtered', newVal);
            }
        },
        sortDesc: function sortDesc(newVal, oldVal) {
            if (newVal === this.localSortDesc) {
                return;
            }
            this.localSortDesc = newVal || false;
        },
        localSortDesc: function localSortDesc(newVal, oldVal) {
            // Emit update to sort-desc.sync
            if (newVal !== oldVal) {
                this.$emit('update:sortDesc', newVal);
                if (!this.noProviderSorting) {
                    this._providerUpdate();
                }
            }
        },
        sortBy: function sortBy(newVal, oldVal) {
            if (newVal === this.localSortBy) {
                return;
            }
            this.localSortBy = newVal || null;
        },
        localSortBy: function localSortBy(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.$emit('update:sortBy', newVal);
                if (!this.noProviderSorting) {
                    this._providerUpdate();
                }
            }
        },
        perPage: function perPage(newVal, oldVal) {
            if (oldVal !== newVal && !this.noProviderPaging) {
                this._providerUpdate();
            }
        },
        currentPage: function currentPage(newVal, oldVal) {
            if (oldVal !== newVal && !this.noProviderPaging) {
                this._providerUpdate();
            }
        },
        filter: function filter(newVal, oldVal) {
            if (oldVal !== newVal && !this.noProviderFiltering) {
                this._providerUpdate();
            }
        },
        localBusy: function localBusy(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.$emit('update:busy', newVal);
            }
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.localSortBy = this.sortBy;
        this.localSortDesc = this.sortDesc;
        this.localBusy = this.busy;
        if (this.hasProvider) {
            this._providerUpdate();
        }
        this.listenOnRoot('bv::refresh::table', function (id) {
            if (id === _this.id || id === _this) {
                _this._providerUpdate();
            }
        });
    },

    computed: {
        tableClasses: function tableClasses() {
            return ['table', 'b-table', this.striped ? 'table-striped' : '', this.hover ? 'table-hover' : '', this.inverse ? 'table-inverse' : '', this.bordered ? 'table-bordered' : '', this.responsive ? 'table-responsive' : '', this.fixed ? 'table-fixed' : '', this.small ? 'table-sm' : ''];
        },
        headClasses: function headClasses() {
            return this.headVariant ? 'thead-' + this.headVariant : '';
        },
        footClasses: function footClasses() {
            var variant = this.footVariant || this.headVariant || null;
            return variant ? 'thead-' + variant : '';
        },
        hasProvider: function hasProvider() {
            return this.items instanceof Function;
        },
        localFiltering: function localFiltering() {
            return this.hasProvider ? this.noProviderFiltering : true;
        },
        localSorting: function localSorting() {
            return this.hasProvider ? this.noProviderSorting : !this.noLocalSorting;
        },
        localPaging: function localPaging() {
            return this.hasProvider ? this.noProviderPaging : true;
        },
        context: function context() {
            return {
                perPage: this.perPage,
                currentPage: this.currentPage,
                filter: this.filter,
                apiUrl: this.apiUrl,
                sortBy: this.localSortBy,
                sortDesc: this.localSortDesc
            };
        },
        computedFields: function computedFields() {
            var _this2 = this;

            // We normalize fields into an array of objects
            // [ { key:..., label:..., ...}, {...}, ..., {..}]
            var fields = [];

            if (isArray(this.fields)) {
                // Normalize array Form
                this.fields.filter(function (f) {
                    return f;
                }).forEach(function (f) {
                    if (typeof f === 'string') {
                        fields.push({ key: f, label: lodash_startcase(f) });
                    } else if ((typeof f === 'undefined' ? 'undefined' : _typeof(f)) === 'object' && f.key && typeof f.key === 'string') {
                        // Full object definition. We use assign so that we don't mutate the original
                        fields.push(assign({}, f));
                    } else if ((typeof f === 'undefined' ? 'undefined' : _typeof(f)) === 'object' && keys(f).length === 1) {
                        // Shortcut object (i.e. { 'foo_bar': 'This is Foo Bar' }
                        var key = keys(f)[0];
                        var field = processField(key, f[key]);
                        if (field) {
                            fields.push(field);
                        }
                    }
                });
            } else if (this.fields && _typeof(this.fields) === 'object' && keys(this.fields).length > 0) {
                // Normalize object Form
                keys(this.fields).forEach(function (key) {
                    var field = processField(key, _this2.fields[key]);
                    if (field) {
                        fields.push(field);
                    }
                });
            }

            // If no field provided, take a sample from first record (if exits)
            if (fields.length === 0 && this.computedItems.length > 0) {
                var sample = this.computedItems[0];
                keys(sample).forEach(function (k) {
                    fields.push({ key: k, label: lodash_startcase(k) });
                });
            }

            // Ensure we have a unique array of fields and that htey have labels
            var memo = {};
            return fields.filter(function (f) {
                if (!memo[f.key]) {
                    memo[f.key] = true;
                    f.label = f.label || lodash_startcase(f.key);
                    return true;
                } else {
                    return false;
                }
            });
        },
        computedItems: function computedItems() {
            // Grab some props/data to ensure reactivity
            var perPage = this.perPage;
            var currentPage = this.currentPage;
            var filter = this.filter;
            var sortBy = this.localSortBy;
            var sortDesc = this.localSortDesc;
            var sortCompare = this.sortCompare;
            var localFiltering = this.localFiltering;
            var localSorting = this.localSorting;
            var localPaging = this.localPaging;

            var items = this.hasProvider ? this.localItems : this.items;

            if (!items) {
                this.$nextTick(this._providerUpdate);
                return [];
            }

            // Array copy for sorting, filtering, etc.
            items = items.slice();

            // Apply local filter
            if (filter && localFiltering) {
                if (filter instanceof Function) {
                    items = items.filter(filter);
                } else {
                    var regex = void 0;
                    if (filter instanceof RegExp) {
                        regex = filter;
                    } else {
                        regex = new RegExp('.*' + filter + '.*', 'ig');
                    }
                    items = items.filter(function (item) {
                        var test = regex.test(recToString(item));
                        regex.lastIndex = 0;
                        return test;
                    });
                }
            }
            if (localFiltering) {
                // Make a local copy of filtered items to trigger filtered event
                this.filteredItems = items.slice();
            }

            // Apply local Sort
            if (sortBy && localSorting) {
                items = items.sort(function sortItemsFn(a, b) {
                    var ret = null;
                    if (typeof sortCompare === 'function') {
                        // Call user provided sortCompare routine
                        ret = sortCompare(a, b, sortBy);
                    }
                    if (ret === null || ret === undefined) {
                        // Fallback to defaultSortCompare if sortCompare not defined or returns null
                        ret = defaultSortCompare(a, b, sortBy);
                    }
                    // Handle sorting direction
                    return (ret || 0) * (sortDesc ? -1 : 1);
                });
            }

            // Apply local pagination
            if (Boolean(perPage) && localPaging) {
                // Grab the current page of data (which may be past filtered items)
                items = items.slice((currentPage - 1) * perPage, currentPage * perPage);
            }

            // Update the value model with the filtered/sorted/paginated data set
            this.$emit('input', items);
            return items;
        },
        computedBusy: function computedBusy() {
            return this.busy || this.localBusy;
        }
    },
    methods: {
        keys: keys,
        fieldClasses: function fieldClasses(field) {
            return [field.sortable ? 'sorting' : '', field.sortable && this.localSortBy === field.key ? 'sorting_' + (this.localSortDesc ? 'desc' : 'asc') : '', field.variant ? 'table-' + field.variant : '', field.class ? field.class : '', field.thClass ? field.thClass : ''];
        },
        tdClasses: function tdClasses(field, item) {
            var cellVariant = '';
            if (item._cellVariants && item._cellVariants[field.key]) {
                cellVariant = (this.inverse ? 'bg-' : 'table-') + item._cellVariants[field.key];
            }
            return [field.variant && !cellVariant ? (this.inverse ? 'bg-' : 'table-') + field.variant : '', cellVariant, field.class ? field.class : '', field.tdClass ? field.tdClass : ''];
        },
        rowClasses: function rowClasses(item) {
            return [item._rowVariant ? (this.inverse ? 'bg-' : 'table-') + item._rowVariant : ''];
        },
        rowClicked: function rowClicked(e, item, index) {
            if (this.stopIfBusy(e)) {
                // If table is busy (via provider) then don't propagate
                return;
            }
            this.$emit('row-clicked', item, index, e);
        },
        rowDblClicked: function rowDblClicked(e, item, index) {
            if (this.stopIfBusy(e)) {
                // If table is busy (via provider) then don't propagate
                return;
            }
            this.$emit('row-dblclicked', item, index, e);
        },
        rowHovered: function rowHovered(e, item, index) {
            if (this.stopIfBusy(e)) {
                // If table is busy (via provider) then don't propagate
                return;
            }
            this.$emit('row-hovered', item, index, e);
        },
        headClicked: function headClicked(e, field) {
            if (this.stopIfBusy(e)) {
                // If table is busy (via provider) then don't propagate
                return;
            }
            var sortChanged = false;
            if (field.sortable) {
                if (field.key === this.localSortBy) {
                    // Change sorting direction on current column
                    this.localSortDesc = !this.localSortDesc;
                } else {
                    // Start sorting this column ascending
                    this.localSortBy = field.key;
                    this.localSortDesc = false;
                }
                sortChanged = true;
            } else if (this.localSortBy) {
                this.localSortBy = null;
                this.localSortDesc = false;
                sortChanged = true;
            }

            this.$emit('head-clicked', field.key, field, e);
            if (sortChanged) {
                // Sorting parameters changed
                this.$emit('sort-changed', this.context);
            }
        },
        stopIfBusy: function stopIfBusy(evt) {
            if (this.computedBusy) {
                // If table is busy (via provider) then don't propagate
                evt.preventDefault();
                evt.stopPropagation();
                return true;
            }
            return false;
        },
        refresh: function refresh() {
            // Expose refresh method
            if (this.hasProvider) {
                this._providerUpdate();
            }
        },
        _providerSetLocal: function _providerSetLocal(items) {
            this.localItems = items && items.length > 0 ? items.slice() : [];
            this.localBusy = false;
            this.$emit('refreshed');
            this.emitOnRoot('table::refreshed', this.id);
        },
        _providerUpdate: function _providerUpdate() {
            var _this3 = this;

            // Refresh the provider items
            if (this.computedBusy || !this.hasProvider) {
                // Don't refresh remote data if we are 'busy' or if no provider
                return;
            }

            // Set internal busy state
            this.localBusy = true;

            // Call provider function with context and optional callback
            var data = this.items(this.context, this._providerSetLocal);

            if (data) if (data.then && typeof data.then === 'function') {
                // Provider returned Promise
                data.then(function (items) {
                    _this3._providerSetLocal(items);
                });
            } else {
                // Provider returned Array data
                this._providerSetLocal(data);
            }
        },
        getFormattedValue: function getFormattedValue(item, field) {
            var key = field.key;
            var formatter = field.formatter;
            var parent = this.$parent;
            var value = item[key];
            if (formatter) {
                if (typeof formatter === 'function') {
                    value = formatter(value, key, item);
                } else if (typeof formatter === 'string' && typeof parent[formatter] === 'function') {
                    value = parent[formatter](value, key, item);
                }
            }
            return value;
        }
    }
};

var tabs = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.tag, { tag: "component", staticClass: "tabs", attrs: { "id": _vm.safeId() } }, [_vm.bottom ? _c('div', { ref: "tabsContainer", class: ['tab-content', { 'card-body': _vm.card }], attrs: { "id": _vm.safeId('_BV_tab_container_') } }, [_vm._t("default"), !_vm.tabs || !_vm.tabs.length ? _vm._t("empty") : _vm._e()], 2) : _vm._e(), _c('div', { class: { 'card-header': _vm.card } }, [_c('ul', { class: ['nav', 'nav-' + _vm.navStyle, _vm.card ? 'card-header-' + _vm.navStyle : null], attrs: { "role": "tablist", "tabindex": "0" }, on: { "keydown": [function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "left", 37)) {
                        return null;
                    }if ('button' in $event && $event.button !== 0) {
                        return null;
                    }_vm.previousTab($event);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) {
                        return null;
                    }_vm.previousTab($event);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "right", 39)) {
                        return null;
                    }if ('button' in $event && $event.button !== 2) {
                        return null;
                    }_vm.nextTab($event);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) {
                        return null;
                    }_vm.nextTab($event);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "left", 37)) {
                        return null;
                    }if (!$event.shiftKey) {
                        return null;
                    }if ('button' in $event && $event.button !== 0) {
                        return null;
                    }_vm.setTab(0, false, 1);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) {
                        return null;
                    }if (!$event.shiftKey) {
                        return null;
                    }_vm.setTab(0, false, 1);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "right", 39)) {
                        return null;
                    }if (!$event.shiftKey) {
                        return null;
                    }if ('button' in $event && $event.button !== 2) {
                        return null;
                    }_vm.setTab(_vm.tabs.length - 1, false, -1);
                }, function ($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) {
                        return null;
                    }if (!$event.shiftKey) {
                        return null;
                    }_vm.setTab(_vm.tabs.length - 1, false, -1);
                }] } }, [_vm._l(_vm.tabs, function (tab, index) {
            return _c('li', { staticClass: "nav-item", attrs: { "role": "presentation" } }, [!tab.headHtml ? _c('a', { class: ['nav-link', { small: _vm.small, active: tab.localActive, disabled: tab.disabled }], attrs: { "href": tab.href, "role": "tab", "aria-setsize": _vm.tabs.length, "aria-posinset": _vm.currentTab + 1, "aria-selected": tab.localActive ? 'true' : 'false', "aria-controls": _vm.safeId('_BV_tab_container_'), "aria-disabled": tab.disabled, "id": tab.controlledBy || _vm.safeId('_BV_tab_${index+1}_'), "tabindex": "-1" }, domProps: { "innerHTML": _vm._s(tab.title) }, on: { "click": function click($event) {
                        $event.preventDefault();$event.stopPropagation();_vm.setTab(index);
                    }, "keydown": [function ($event) {
                        if (!('button' in $event) && _vm._k($event.keyCode, "space", 32)) {
                            return null;
                        }$event.preventDefault();$event.stopPropagation();_vm.setTab(index);
                    }, function ($event) {
                        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) {
                            return null;
                        }$event.preventDefault();$event.stopPropagation();_vm.setTab(index);
                    }] } }) : _c('div', { class: ['tab-head', { small: _vm.small, active: tab.localActive, disabled: tab.disabled }], attrs: { "role": "heading", "tabindex": "-1" }, domProps: { "innerHTML": _vm._s(tab.headHtml) } })]);
        }), _vm._t("tabs")], 2)]), !_vm.bottom ? _c('div', { ref: "tabsContainer", class: ['tab-content', { 'card-body': _vm.card }], attrs: { "id": _vm.safeId('_BV_tab_container_') } }, [_vm._t("default"), !_vm.tabs || !_vm.tabs.length ? _vm._t("empty") : _vm._e()], 2) : _vm._e()]);
    }, staticRenderFns: [],
    mixins: [idMixin],
    data: function data() {
        return {
            currentTab: this.value,
            tabs: []
        };
    },

    props: {
        tag: {
            type: String,
            default: 'div'
        },
        card: {
            type: Boolean,
            default: false
        },
        small: {
            type: Boolean,
            default: false
        },
        value: {
            type: Number,
            default: null
        },
        pills: {
            type: Boolean,
            default: false
        },
        bottom: {
            type: Boolean,
            default: false
        },
        noFade: {
            type: Boolean,
            default: false
        },
        lazy: {
            // This prop is sniffed by the tab child
            type: Boolean,
            default: false
        }
    },
    watch: {
        currentTab: function currentTab(val, old) {
            if (val === old) {
                return;
            }
            this.$root.$emit('changed::tab', this, val, this.tabs[val]);
            this.$emit('input', val);
            this.tabs[val].$emit('click');
        },
        value: function value(val, old) {
            if (val === old) {
                return;
            }
            if (typeof old !== 'number') {
                old = 0;
            }
            // Moving left or right?
            var direction = val < old ? -1 : 1;
            this.setTab(val, false, direction);
        }
    },
    computed: {
        fade: function fade() {
            // This computed prop is sniffed by the tab child
            return !this.noFade;
        },
        navStyle: function navStyle() {
            return this.pills ? 'pills' : 'tabs';
        }
    },
    methods: {
        /**
         * Util: Return the sign of a number (as -1, 0, or 1)
         */
        sign: function sign(x) {
            return x === 0 ? 0 : x > 0 ? 1 : -1;
        },


        /**
         * Move to next tab
         */
        nextTab: function nextTab() {
            this.setTab(this.currentTab + 1, false, 1);
        },


        /**
         * Move to previous tab
         */
        previousTab: function previousTab() {
            this.setTab(this.currentTab - 1, false, -1);
        },


        /**
         * Set active tab on the tabs collection and the child 'tab' component
         * Index is the tab we want to activate. Direction is the direction we are moving
         * so if the tab we requested is disabled, we can skip over it.
         * Force is used by updateTabs to ensure we have cleared any previous active tabs.
         */
        setTab: function setTab(index, force, direction) {
            var _this = this;

            direction = this.sign(direction || 0);
            index = index || 0;

            // Prevent setting same tab and infinite loops!
            if (!force && index === this.currentTab) {
                return;
            }

            var tab = this.tabs[index];

            // Don't go beyond indexes!
            if (!tab) {
                // Reset the v-model to the current Tab
                this.$emit('input', this.currentTab);
                return;
            }

            // Ignore or Skip disabled
            if (tab.disabled) {
                if (direction) {
                    // Skip to next non disabled tab in specified direction (recursive)
                    this.setTab(index + direction, force, direction);
                }
                return;
            }

            // Activate requested current tab, and deactivte any old tabs
            this.tabs.forEach(function (t) {
                if (t === tab) {
                    // Set new tab as active
                    _this.$set(t, 'localActive', true);
                } else {
                    // Ensure non current tabs are not active
                    _this.$set(t, 'localActive', false);
                }
            });

            // Update currentTab
            this.currentTab = index;
        },


        /**
         * Dynamically update tabs list
         */
        updateTabs: function updateTabs() {
            // Probe tabs
            this.tabs = this.$children.filter(function (child) {
                return child._isTab;
            });

            // Set initial active tab
            var tabIndex = null;

            // Find *last* active non-dsabled tab in current tabs
            // We trust tab state over currentTab
            this.tabs.forEach(function (tab, index) {
                if (tab.localActive && !tab.disabled) {
                    tabIndex = index;
                }
            });

            // Else try setting to currentTab
            if (tabIndex === null) {
                if (this.currentTab >= this.tabs.length) {
                    // Handle last tab being removed
                    this.setTab(this.tabs.length - 1, true, -1);
                    return;
                } else if (this.tabs[this.currentTab] && !this.tabs[this.currentTab].disabled) {
                    tabIndex = this.currentTab;
                }
            }

            // Else find *first* non-disabled tab in current tabs
            if (tabIndex === null) {
                this.tabs.forEach(function (tab, index) {
                    if (!tab.disabled && tabIndex === null) {
                        tabIndex = index;
                    }
                });
            }

            this.setTab(tabIndex || 0, true, 0);
        }
    },
    mounted: function mounted() {
        this.updateTabs();

        // Observe Child changes so we can notify tabs change
        observeDOM(this.$refs.tabsContainer, this.updateTabs.bind(this), { subtree: false });
    }
};

var tab = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "mode": "out-in" }, on: { "before-enter": _vm.beforeEnter, "after-enter": _vm.afterEnter, "after-leave": _vm.afterLeave } }, [_vm.localActive || !_vm.computedLazy ? _c(_vm.tag, { directives: [{ name: "show", rawName: "v-show", value: _vm.localActive, expression: "localActive" }], ref: "panel", tag: "component", class: _vm.tabClasses, attrs: { "id": _vm.safeId(), "role": "tabpanel", "aria-hidden": _vm.localActive ? 'false' : 'true', "aria-expanded": _vm.localActive ? 'true' : 'false', "aria-lablelledby": _vm.controlledBy || null } }, [_vm._t("default")], 2) : _vm._e()], 1);
    }, staticRenderFns: [],
    mixins: [idMixin],
    methods: {
        beforeEnter: function beforeEnter() {
            this.show = false;
        },
        afterEnter: function afterEnter() {
            this.show = true;
        },
        afterLeave: function afterLeave() {
            this.show = false;
        }
    },
    data: function data() {
        return {
            localActive: this.active && !this.disabled,
            show: false
        };
    },
    mounted: function mounted() {
        this.show = this.localActive;
    },

    computed: {
        tabClasses: function tabClasses() {
            return ['tab-pane', this.show ? 'show' : '', this.computedFade ? 'fade' : '', this.disabled ? 'disabled' : '', this.localActive ? 'active' : ''];
        },
        controlledBy: function controlledBy() {
            return this.buttonId || this.safeId('__BV_tab_button__');
        },
        computedFade: function computedFade() {
            return this.$parent.fade;
        },
        computedLazy: function computedLazy() {
            return this.$parent.lazy;
        },
        _isTab: function _isTab() {
            // For parent sniffing of child
            return true;
        }
    },
    props: {
        active: {
            type: Boolean,
            default: false
        },
        tag: {
            type: String,
            default: 'div'
        },
        buttonId: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        headHtml: {
            type: String,
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        },
        href: {
            type: String,
            default: '#'
        }
    }
};

var tooltip = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { directives: [{ name: "show", rawName: "v-show", value: false, expression: "false" }], staticClass: "d-none", attrs: { "aria-hidden": "true" } }, [_c('div', { ref: "title" }, [_vm._t("default")], 2)]);
    }, staticRenderFns: [],
    mixins: [toolpopMixin],
    data: function data() {
        return {};
    },

    props: {
        title: {
            type: String,
            default: ''
        },
        triggers: {
            type: [String, Array],
            default: 'hover focus'
        },
        placement: {
            type: String,
            default: 'top'
        }
    },
    methods: {
        createToolpop: function createToolpop() {
            // getTarget is in toolpop mixin
            var target = this.getTarget();
            if (target) {
                this._toolpop = new ToolTip(target, this.getConfig(), this.$root);
            } else {
                this._toolpop = null;
                warn("b-tooltip: 'target' element not found!");
            }
            return this._toolpop;
        }
    }
};



var components = Object.freeze({
	bAlert: alert,
	bBreadcrumb: breadcrumb,
	bBreadcrumbItem: BreadcrumbItem,
	bBreadcrumbLink: BreadcrumbLink,
	bButton: bBtn,
	bBtn: bBtn,
	bButtonClose: bBtnClose,
	bBtnClose: bBtnClose,
	bButtonToolbar: buttonToolbar,
	bBtnToolbar: buttonToolbar,
	bButtonGroup: buttonGroup,
	bBtnGroup: buttonGroup,
	bInputGroup: inputGroup,
	bInputGroupAddon: bInputGroupAddon,
	bInputGroupButton: inputGroupButton,
	bInputGroupBtn: inputGroupButton,
	bCol: col,
	bContainer: Container,
	bCard: card,
	bCardBody: CardBody,
	bCardHeader: CardHeader,
	bCardFooter: CardFooter,
	bCardGroup: cardGroup,
	bCardImg: CardImg,
	bDropdown: dropdown,
	bDd: dropdown,
	bDropdownItem: dropdownItem,
	bDdItem: dropdownItem,
	bDropdownItemButton: dropdownItemButton,
	bDdItemBtn: dropdownItemButton,
	bDdItemButton: dropdownItemButton,
	bDropdownItemBtn: dropdownItemButton,
	bDropdownDivider: dropdownDivider,
	bDdDivider: dropdownDivider,
	bDropdownHeader: dropdownHeader,
	bDdHeader: dropdownHeader,
	bEmbed: embed,
	bForm: Form,
	bFormRow: bFormRow,
	bFormText: bFormText,
	bFormFeedback: bFormFeedback,
	bFormGroup: formGroup,
	bFormFieldset: formGroup,
	bFormInput: formInput,
	bInput: formInput,
	bFormTextarea: formTextarea,
	bTextarea: formTextarea,
	bFormFile: formFile,
	bFile: formFile,
	bFormCheckboxGroup: formCheckboxGroup,
	bCheckboxGroup: formCheckboxGroup,
	bCheckGroup: formCheckboxGroup,
	bFormCheckbox: bFormCheckbox,
	bCheckbox: bFormCheckbox,
	bCheck: bFormCheckbox,
	bFormRadioGroup: formRadioGroup,
	bRadioGroup: formRadioGroup,
	bFormRadio: bFormRadio,
	bRadio: bFormRadio,
	bFormSelect: formSelect,
	bSelect: formSelect,
	bImg: bImg,
	bImgLazy: imgLazy,
	bJumbotron: jumbotron,
	bBadge: badge,
	bMedia: media,
	bMediaBody: MediaBody,
	bMediaAside: MediaAside,
	bModal: modal,
	bNavbar: navbar,
	bNavbarBrand: navbarBrand,
	bNavText: navText,
	bNavForm: navForm,
	bRow: row,
	bPagination: pagination,
	bPaginationNav: paginationNav,
	bPopover: popover,
	bProgressBar: bProgressBar,
	bProgress: progress,
	bTable: table,
	bTooltip: tooltip,
	bTab: tab,
	bTabs: tabs,
	bNav: nav,
	bNavItem: navItem,
	bNavItemDropdown: navItemDropdown,
	bNavDropdown: navItemDropdown,
	bNavItemDd: navItemDropdown,
	bNavDd: navItemDropdown,
	bNavToggle: navToggle,
	bListGroupItem: listGroupItem,
	bListGroup: listGroup,
	bCarouselSlide: carouselSlide,
	bCarousel: carousel,
	bCollapse: collapse,
	bLink: bLink
});

var all_listen_types = { hover: true, click: true, focus: true };

function targets(vnode, binding, listen_types, fn) {

    var targets = keys(binding.modifiers || {}).filter(function (t) {
        return !all_listen_types[t];
    });

    if (binding.value) {
        targets.push(binding.value);
    }

    var listener = function listener() {
        fn({ targets: targets, vnode: vnode });
    };

    keys(all_listen_types).forEach(function (type) {
        if (listen_types[type] || binding.modifiers[type]) {
            vnode.elm.addEventListener(type, listener);
        }
    });

    // Return the list of targets
    return targets;
}

// Are we client side?
var inBrowser = typeof window !== 'undefined';

// target listen types
var listen_types = { click: true };

// Property key for handler storage
var BVT = '__BV_toggle__';

// Emitted Control Event for collapse (emitted to collapse)
var EVENT_TOGGLE$1 = 'bv::toggle::collapse';

// Listen to Event for toggle state update (Emited by collapse)
var EVENT_STATE$1 = 'bv::collapse::state';

var toggle = {
    bind: function bind(el, binding, vnode) {

        var targets$$1 = targets(vnode, binding, listen_types, function (_ref) {
            var targets$$1 = _ref.targets,
                vnode = _ref.vnode;

            targets$$1.forEach(function (target$$1) {
                vnode.context.$root.$emit(EVENT_TOGGLE$1, target$$1);
            });
        });

        if (inBrowser && vnode.context && targets$$1.length > 0) {
            // Add aria attributes to element
            setAttr(el, 'aria-controls', targets$$1.join(' '));
            setAttr(el, 'aria-expanded', 'false');

            // Toggle state hadnler, stored on element
            el[BVT] = function toggleDirectiveHandler(id, state) {
                if (targets$$1.indexOf(id) !== -1) {
                    // Set aria-expanded state
                    setAttr(el, 'aria-expanded', state ? 'true' : 'false');
                    // Set/Clear 'collapsed' class state
                    if (state) {
                        removeClass(el, 'collapsed');
                    } else {
                        addClass(el, 'collapsed');
                    }
                }
            };

            // Listen for toggle state changes
            vnode.context.$root.$on(EVENT_STATE$1, el[BVT]);
        }
    },
    unbind: function unbind(el, binding, vnode) {
        if (el[BVT]) {
            // Remove our $root listener
            vnode.context.$root.$off(EVENT_STATE$1, el[BVT]);
            el[BVT] = null;
        }
    }
};

var listen_types$1 = { click: true };

var modal$1 = {
    // eslint-disable-next-line no-shadow-restricted-names
    bind: function bind(undefined, binding, vnode) {
        targets(vnode, binding, listen_types$1, function (_ref) {
            var targets$$1 = _ref.targets,
                vnode = _ref.vnode;

            targets$$1.forEach(function (target) {
                vnode.context.$root.$emit('bv::show::modal', target, vnode.elm);
            });
        });
    }
};

/*
 * ScrollSpy directive v-b-scrollspy
 */

var inBrowser$1 = typeof window !== 'undefined';
var isServer = !inBrowser$1;

// Key we use to store our Instance
var BVSS = '__BV_ScrollSpy__';

// Generate config from bindings
function makeConfig(binding) {
    var config = {};

    // If Argument, assume element ID
    if (binding.arg) {
        // Element ID specified as arg. We must pre-pend #
        config.element = '#' + binding.arg;
    }

    // Process modifiers
    keys(binding.modifiers).forEach(function (mod) {
        if (/^\d+$/.test(mod)) {
            // Offest value
            config.offset = parseInt(mod, 10);
        } else if (/^(auto|position|offset)$/.test(val)) {
            // Offset method
            config.method = val;
        }
    });

    // Process value
    if (typeof binding.value === 'string') {
        // Value is a CSS ID or selector
        config.element = binding.value;
    } else if (typeof binding.value === 'number') {
        // Value is offset
        config.offset = Math.round(binding.value);
    } else if (_typeof(binding.value) === 'object') {
        // Value is config object
        // Filter the object based on our supported config options
        keys(binding.value).filter(function (k) {
            return Boolean(ScrollSpy.DefaultType[k]);
        }).forEach(function (k) {
            config[k] = binding.value[k];
        });
    }

    return config;
}

function addBVSS(el, binding, vnode) {
    if (isServer) {
        return;
    }
    var cfg = makeConfig(binding);
    if (!el[BVSS]) {
        el[BVSS] = new ScrollSpy(el, cfg, vnode.context.$root);
    } else {
        el[BVSS].updateConfig(cfg, vnode.context.$root);
    }
    return el[BVSS];
}

function removeBVSS(el) {
    if (el[BVSS]) {
        el[BVSS].dispose();
        el[BVSS] = null;
    }
}

/*
 * Export our directive
 */

var scrollspy = {
    bind: function bind(el, binding, vnode) {
        addBVSS(el, binding, vnode);
    },
    inserted: function inserted(el, binding, vnode) {
        addBVSS(el, binding, vnode);
    },
    update: function update(el, binding, vnode) {
        addBVSS(el, binding, vnode);
    },
    componentUpdated: function componentUpdated(el, binding, vnode) {
        addBVSS(el, binding, vnode);
    },
    unbind: function unbind(el) {
        if (isServer) {
            return;
        }
        // Remove scroll event listener on scrollElId
        removeBVSS(el);
    }
};

var inBrowser$2 = typeof window !== 'undefined' && typeof document !== 'undefined';

// Key which we use to store tooltip object on element
var BVTT = '__BV_ToolTip__';

// Valid event triggers
var validTriggers = {
    'focus': true,
    'hover': true,
    'click': true,
    'blur': true
};

// Build a ToolTip config based on bindings (if any)
// Arguments and modifiers take precedence over passed value config object
function parseBindings(bindings) {

    // We start out with a blank config
    var config = {};

    // Process bindings.value
    if (typeof bindings.value === 'string') {
        // Value is tooltip content (html optionally supported)
        config.title = bindings.value;
    } else if (typeof bindings.value === 'function') {
        // Title generator function
        config.title = bindings.value;
    } else if (_typeof(bindings.value) === 'object') {
        // Value is config object, so merge
        config = assign(bindings.value);
    }

    // If Argument, assume element ID of container element
    if (bindings.arg) {
        // Element ID specified as arg. We must prepend '#' to become a CSS selector
        config.container = '#' + bindings.arg;
    }

    // Process modifiers
    keys(bindings.modifiers).forEach(function (mod) {
        if (/^html$/.test(mod)) {
            // Title allows HTML
            config.html = true;
        } else if (/^nofade$/.test(mod)) {
            // no animation
            config.animation = false;
        } else if (/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/.test(mod)) {
            // placement of tooltip
            config.placement = mod;
        } else if (/^d\d+$/.test(mod)) {
            // delay value
            var delay = parseInt(mod.slice(1), 10) || 0;
            if (delay) {
                config.delay = delay;
            }
        } else if (/^o-?\d+$/.test(mod)) {
            // offset value. Negative allowed
            var offset = parseInt(mod.slice(1), 10) || 0;
            if (offset) {
                config.offset = offset;
            }
        }
    });

    // Special handling of event trigger modifiers Trigger is a space separated list
    var selectedTriggers = {};

    // parse current config object trigger
    var triggers = typeof config.trigger === 'string' ? config.trigger.trim().split(/\s+/) : [];
    triggers.forEach(function (trigger) {
        if (validTriggers[trigger]) {
            selectedTriggers[trigger] = true;
        }
    });

    // Parse Modifiers for triggers
    keys(validTriggers).forEach(function (trigger) {
        if (bindings.modifiers[trigger]) {
            selectedTriggers[trigger] = true;
        }
    });

    // Sanitize triggers
    config.trigger = keys(selectedTriggers).join(' ');
    if (config.trigger === 'blur') {
        // Blur by itself is useless, so convert it to 'focus'
        config.trigger = 'focus';
    }
    if (!config.trigger) {
        // remove trigger config
        delete config.trigger;
    }

    return config;
}

//
// Add or Update tooltip on our element
//
function applyBVTT(el, bindings, vnode) {
    if (!inBrowser$2) {
        return;
    }
    if (!Popper) {
        // Popper is required for tooltips to work
        warn("v-b-tooltip: Popper.js is required for tooltips to work");
        return;
    }
    if (el[BVTT]) {
        el[BVTT].updateConfig(parseBindings(bindings));
    } else {
        el[BVTT] = new ToolTip(el, parseBindings(bindings), vnode.context.$root);
    }
}

//
// Remove tooltip on our element
//
function removeBVTT(el) {
    if (!inBrowser$2) {
        return;
    }
    if (el[BVTT]) {
        el[BVTT].destroy();
        el[BVTT] = null;
        delete el[BVTT];
    }
}

/*
 * Export our directive
 */
var tooltip$1 = {
    bind: function bind(el, bindings, vnode) {
        applyBVTT(el, bindings, vnode);
    },
    inserted: function inserted(el, bindings, vnode) {
        applyBVTT(el, bindings, vnode);
    },
    update: function update(el, bindings, vnode) {
        if (bindings.value !== bindings.oldValue) {
            applyBVTT(el, bindings, vnode);
        }
    },
    componentUpdated: function componentUpdated(el, bindings, vnode) {
        if (bindings.value !== bindings.oldValue) {
            applyBVTT(el, bindings, vnode);
        }
    },
    unbind: function unbind(el) {
        removeBVTT(el);
    }
};

var inBrowser$3 = typeof window !== 'undefined' && typeof document !== 'undefined';

// Key which we use to store tooltip object on element
var BVPO = '__BV_PopOver__';

// Vlid event triggers
var validTriggers$1 = {
    'focus': true,
    'hover': true,
    'click': true,
    'blur': true
};

// Build a PopOver config based on bindings (if any)
// Arguments and modifiers take precedence over pased value config object
function parseBindings$1(bindings) {

    // We start out with a blank config
    var config = {};

    // Process bindings.value
    if (typeof bindings.value === 'string') {
        // Value is popover content (html optionally supported)
        config.content = bindings.value;
    } else if (typeof bindings.value === 'function') {
        // Content generator function
        config.content = bindings.value;
    } else if (_typeof(bindings.value) === 'object') {
        // Value is config object, so merge
        config = assign(bindings.value);
    }

    // If Argument, assume element ID of container element
    if (bindings.arg) {
        // Element ID specified as arg. We must prepend '#' to become a CSS selector
        config.container = '#' + bindings.arg;
    }

    // Process modifiers
    keys(bindings.modifiers).forEach(function (mod) {
        if (/^html$/.test(mod)) {
            // Title allows HTML
            config.html = true;
        } else if (/^nofade$/.test(mod)) {
            // no animation
            config.animation = false;
        } else if (/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/.test(mod)) {
            // placement of popover
            config.placement = mod;
        } else if (/^d\d+$/.test(mod)) {
            // delay value
            var delay = parseInt(mod.slice(1), 10) || 0;
            if (delay) {
                config.delay = delay;
            }
        } else if (/^o-?\d+$/.test(mod)) {
            // offset value (negative allowed)
            var offset = parseInt(mod.slice(1), 10) || 0;
            if (offset) {
                config.offset = offset;
            }
        }
    });

    // Special handling of event trigger modifiers Trigger is a space separated list
    var selectedTriggers = {};

    // parse current config object trigger
    var triggers = typeof config.trigger === 'string' ? config.trigger.trim().split(/\s+/) : [];
    triggers.forEach(function (trigger) {
        if (validTriggers$1[trigger]) {
            selectedTriggers[trigger] = true;
        }
    });

    // Parse Modifiers for triggers
    keys(validTriggers$1).forEach(function (trigger) {
        if (bindings.modifiers[trigger]) {
            selectedTriggers[trigger] = true;
        }
    });

    // Sanitize triggers
    config.trigger = keys(selectedTriggers).join(' ');
    if (config.trigger === 'blur') {
        // Blur by itself is useless, so convert it to focus
        config.trigger = 'focus';
    }
    if (!config.trigger) {
        // remove trigger config
        delete config.trigger;
    }

    return config;
}

//
// Add or Update popover on our element
//
function applyBVPO(el, bindings, vnode) {
    if (!inBrowser$3) {
        return;
    }
    if (!Popper) {
        // Popper is required for tooltips to work
        warn("v-b-popover: Popper.js is required for popovers to work");
        return;
    }
    if (el[BVPO]) {
        el[BVPO].updateConfig(parseBindings$1(bindings));
    } else {
        el[BVPO] = new PopOver(el, parseBindings$1(bindings), vnode.context.$root);
    }
}

//
// Remove popover on our element
//
function removeBVPO(el) {
    if (!inBrowser$3) {
        return;
    }
    if (el[BVPO]) {
        el[BVPO].destroy();
        el[BVPO] = null;
        delete el[BVPO];
    }
}

/*
 * Export our directive
 */
var popover$1 = {
    bind: function bind(el, bindings, vnode) {
        applyBVPO(el, bindings, vnode);
    },
    inserted: function inserted(el, bindings, vnode) {
        applyBVPO(el, bindings, vnode);
    },
    update: function update(el, bindings, vnode) {
        if (bindings.value !== bindings.oldValue) {
            applyBVPO(el, bindings, vnode);
        }
    },
    componentUpdated: function componentUpdated(el, bindings, vnode) {
        if (bindings.value !== bindings.oldValue) {
            applyBVPO(el, bindings, vnode);
        }
    },
    unbind: function unbind(el) {
        removeBVPO(el);
    }
};



var directives = Object.freeze({
	bToggle: toggle,
	bModal: modal$1,
	bScrollspy: scrollspy,
	bTooltip: tooltip$1,
	bPopover: popover$1
});

/* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */

var VuePlugin = {
    install: function install(Vue) {
        if (Vue._bootstrap_vue_installed) {
            return;
        }

        Vue._bootstrap_vue_installed = true;

        // Register components
        for (var component in components) {
            Vue.component(component, components[component]);
        }

        // Register directives
        for (var directive in directives) {
            Vue.directive(directive, directives[directive]);
        }
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VuePlugin);
}

/* harmony default export */ __webpack_exports__["a"] = (VuePlugin);
//# sourceMappingURL=bootstrap-vue.esm.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(7)
/* template */
var __vue_template__ = __webpack_require__(8)
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/@coreui/vue/Vue_Full_Project/src/components/SidebarMinimizer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SidebarMinimizer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-117a4e29", Component.options)
  } else {
    hotAPI.reload("data-v-117a4e29", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'sidebar-minimizer',
  methods: {
    sidebarMinimize: function sidebarMinimize() {
      document.body.classList.toggle('sidebar-minimized');
    },
    brandMinimize: function brandMinimize() {
      document.body.classList.toggle('brand-minimized');
    }
  }
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("button", {
    staticClass: "sidebar-minimizer",
    attrs: { type: "button" },
    on: {
      click: function($event) {
        _vm.sidebarMinimize()
        _vm.brandMinimize()
      }
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-117a4e29", module.exports)
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(10)
/* template */
var __vue_template__ = __webpack_require__(11)
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/MobileSidebarToggler.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MobileSidebarToggler.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5fa2c27f", Component.options)
  } else {
    hotAPI.reload("data-v-5fa2c27f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'mobile-sidebar-toggler',
    methods: {
        mobileSidebarToggle: function mobileSidebarToggle(e) {
            e.preventDefault();
            document.body.classList.toggle('sidebar-mobile-show');
        }
    }
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "navbar-toggler mobile-sidebar-toggler d-lg-none",
      attrs: { type: "button" },
      on: { click: _vm.mobileSidebarToggle }
    },
    [_vm._v("???")]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5fa2c27f", module.exports)
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(13)
/* template */
var __vue_template__ = __webpack_require__(14)
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/SidebarToggler.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SidebarToggler.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-70b4987d", Component.options)
  } else {
    hotAPI.reload("data-v-70b4987d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'sidebar-toggler',
    methods: {
        sidebarToggle: function sidebarToggle(e) {
            e.preventDefault();
            document.body.classList.toggle('sidebar-hidden');
        }
    }
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "navbar-toggler sidebar-toggler d-md-down-none",
      attrs: { type: "button" },
      on: { click: _vm.sidebarToggle }
    },
    [_vm._v("???")]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-70b4987d", module.exports)
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(16)
/* template */
var __vue_template__ = __webpack_require__(17)
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/AsideToggler.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AsideToggler.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9d5bdc3e", Component.options)
  } else {
    hotAPI.reload("data-v-9d5bdc3e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'aside-toggler',
    methods: {
        asideToggle: function asideToggle(e) {
            e.preventDefault();
            document.body.classList.toggle('aside-menu-hidden');
        }
    }
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "navbar-toggler aside-menu-toggler d-md-down-none",
      attrs: { type: "button" },
      on: { click: _vm.asideToggle }
    },
    [_vm._v("???")]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9d5bdc3e", module.exports)
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);