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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/man-watching-sunset-grand-canyon.jpg */ "./src/images/man-watching-sunset-grand-canyon.jpg"));

// Module
exports.push([module.i, "* {\n  font-family: \"Times New Roman\", Times, serif; }\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + "); }\n\ntitle {\n  display: flex;\n  flex-direction: row;\n  justify-content: center; }\n\nh1 {\n  background-color: #048A81;\n  border: 4px solid black;\n  border-radius: 10px;\n  font-size: 5em;\n  padding: 1em; }\n\nh2 {\n  display: flex;\n  justify-content: center; }\n\nbutton {\n  width: 10em;\n  height: 2em; }\n\n.homepage {\n  display: flex;\n  justify-content: center;\n  display: flex;\n  width: 100%;\n  height: 100%; }\n\n#toggle-view-button {\n  height: 5vh; }\n\n.inputs {\n  font-size: 2em; }\n\n.customer-login, .manager-login {\n  display: flex;\n  background-color: #048A81;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 4px solid black;\n  border-radius: 10px;\n  width: 500px;\n  height: 500px; }\n\n#welcome-message {\n  font-size: 3em; }\n\n.login {\n  margin: 10px;\n  width: 15vh;\n  height: 3vh; }\n\n.tab {\n  overflow: hidden;\n  border: 1px solid #ccc;\n  background-color: #f1f1f1; }\n\n.user-profile-page {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-content: space-between; }\n\n.side-bar {\n  background-color: #048A81;\n  border: 4px solid black;\n  border-radius: 10px;\n  font-size: 5em;\n  padding: 1em;\n  height: 200vh;\n  width: 2em; }\n\n.sidebar-profile-pic {\n  border-radius: 50%; }\n\n.user-card {\n  margin-top: 6em;\n  width: 50em;\n  height: 55vh;\n  overflow: hidden;\n  border: 1px solid #ccc;\n  background-color: #f1f1f1;\n  border: 4px solid black;\n  border-radius: 10px;\n  overflow: scroll; }\n\n#past-bookings {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 1em; }\n\n#upcoming-bookings {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 1em; }\n\n.past-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.future-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\nul {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n\n#upcoming-bookings-button {\n  border: none;\n  width: 15em;\n  height: 4em; }\n\n#past-bookings-button {\n  border: none;\n  width: 15em;\n  height: 4em;\n  border-left: solid 2px black; }\n\ninput[type=\"checkbox\"] {\n  margin: 3.5vh; }\n\n.selected {\n  background-color: #c7c0c0; }\n\n.middle {\n  display: flex;\n  flex-direction: column; }\n\n.book-room {\n  margin-top: 3em; }\n\n#booking-button {\n  margin-top: 2em;\n  width: 20em;\n  height: 3em; }\n\n.error {\n  color: red; }\n\n.manager-profile-page {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-content: space-between; }\n\n.manager-card {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: centerr;\n  flex-wrap: wrap;\n  width: 15em;\n  height: 15vh; }\n\n.middle-manager {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: space-between;\n  width: 50em; }\n\n.style {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly; }\n\n#search-customer-form {\n  display: flex;\n  justify-content: center;\n  margin-top: 5em; }\n\n#logout-button {\n  margin-top: .5em;\n  margin-bottom: 1em; }\n\n.hidden {\n  display: none; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/Bookings.js":
/*!*************************!*\
  !*** ./src/Bookings.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Bookings {
  constructor(bookingsData) {
    this.bookingsData = bookingsData;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Bookings);


/***/ }),

/***/ "./src/Customer.js":
/*!*************************!*\
  !*** ./src/Customer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User_Repo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User-Repo */ "./src/User-Repo.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./src/User.js");



class Customer extends _User__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(id, name, previousBookings, futureBookings) {
    super(id, name, previousBookings, futureBookings);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Customer);

/***/ }),

/***/ "./src/Manager.js":
/*!************************!*\
  !*** ./src/Manager.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/User.js");


class Manager extends _User__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this.username = 'manager';
    this.password = 'overlook2020';
  }

  searchForCustomer(searchedCustomer, userRepo) {
    const foundCustomer = userRepo.find(user => {
      return searchedCustomer === user.name;
    });
    if (typeof(foundCustomer) === "undefined") {

    }
    return foundCustomer
  };
  
  deleteBookedRoom(user, date) {
    console.log(user.futureBookings)
    user.futureBookings = user.futureBookings.filter(futureBooking => {
      return futureBooking.date !== date;
    });
    console.log("deleted")
    console.log(user.futureBookings)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Manager);

/***/ }),

/***/ "./src/Room.js":
/*!*********************!*\
  !*** ./src/Room.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Room {
  constructor(roomData) {
    this.roomData = roomData;
    this.singleRooms;
    this.juniorSuites;
    this.suites;
    this.residentialSuites;
  }

  sortRoomsByType() {
    this.singleRooms = this.roomData.filter(room => {
      return room.roomType === 'single room';
    });
    this.juniorSuites = this.roomData.filter(room => {
      return room.roomType === 'junior suite';
    });
    this.suites = this.roomData.filter(room => {
      return room.roomType === 'suite';
    });
    this.residentialSuites = this.roomData.filter(room => {
      return room.roomType === 'residential suite';
    });
  }
  
  //filterRoomsByType(roomType) {
    //this.roomData.filter(roomData)
  //}
}

/* harmony default export */ __webpack_exports__["default"] = (Room);

/***/ }),

/***/ "./src/User-Repo.js":
/*!**************************!*\
  !*** ./src/User-Repo.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class UserRepo {
  constructor(customers) {
    this.customers = customers;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (UserRepo);



/***/ }),

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class User {
  constructor(id, name, previousBookings, futureBookings) {
    this.id = id;
    this.name = name;
    this.previousBookings = previousBookings || [];
    this.futureBookings = futureBookings || [];
  }

  bookRoom(potentialBooking, bookingsList) {
    let alreadyBooked;
    bookingsList.forEach((booking) => {
      alreadyBooked = false;
      console.log(
        booking.roomNumber,
        potentialBooking.roomNumber,
        booking.date,
        potentialBooking.date
      );
      if (
        booking.roomNumber === potentialBooking.roomNumber &&
        booking.date == potentialBooking.date
      ) {
        alreadyBooked = true;
        console.log("qwoeifnaweoiwqe");
      }
    });
    if (alreadyBooked === true) {
      console.log("Your room has already been booked");
      //return false;
    } else {
      this.futureBookings.push(potentialBooking);
      //return true;
    }
    return alreadyBooked;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/images/man-watching-sunset-grand-canyon.jpg":
/*!*********************************************************!*\
  !*** ./src/images/man-watching-sunset-grand-canyon.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/man-watching-sunset-grand-canyon.jpg";

/***/ }),

/***/ "./src/images/profile-pic.png":
/*!************************************!*\
  !*** ./src/images/profile-pic.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/profile-pic.png";

/***/ }),

/***/ "./src/images/turing-logo.png":
/*!************************************!*\
  !*** ./src/images/turing-logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/turing-logo.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Bookings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bookings */ "./src/Bookings.js");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_base_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Customer */ "./src/Customer.js");
/* harmony import */ var _images_man_watching_sunset_grand_canyon_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/man-watching-sunset-grand-canyon.jpg */ "./src/images/man-watching-sunset-grand-canyon.jpg");
/* harmony import */ var _images_man_watching_sunset_grand_canyon_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_man_watching_sunset_grand_canyon_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_turing_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/turing-logo.png */ "./src/images/turing-logo.png");
/* harmony import */ var _images_turing_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_turing_logo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_profile_pic_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/profile-pic.png */ "./src/images/profile-pic.png");
/* harmony import */ var _images_profile_pic_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_profile_pic_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Room__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Room */ "./src/Room.js");
/* harmony import */ var _User_Repo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./User-Repo */ "./src/User-Repo.js");
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Manager */ "./src/Manager.js");











// ~~~~~~~~~~~~~~~~~~~~~~~~~ QUERY SELECTORS ~~~~~~~~~~~~~~~~~~~~~~~~~~~

const heading = document.querySelector(".heading");

const toggleLoginViewButton = document.querySelector("#toggle-view-button");
const customerUsername = document.querySelector("#customer-username-input");
const userPassword = document.querySelector("#customer-password-input");
const userLoginButton = document.querySelector(".user-login-button");

const managerUsername = document.querySelector("#manager-username-input");
const managerPassword = document.querySelector("#manager-password-input");
const managerLoginButton = document.querySelector(".manager-login-button");

const customerLoginView = document.querySelector(".customer-login");
const managerLoginView = document.querySelector(".manager-login");
const customerLogoutButton = document.querySelector("#customer-logout-button");
const managerLogoutButton = document.querySelector("#manager-logout-button");

const homepage = document.querySelector(".homepage");
const userProfilePage = document.querySelector(".user-profile-page");
const previousBookingsSection = document.querySelector("#previous-bookings");
const futureBookingsSection = document.querySelector("#future-bookings");

const managerProfilePage = document.querySelector(".manager-profile-page");
const managerSideBar = document.querySelector(".manager-side-bar");
const roomsAvailableToday = document.querySelector("#rooms-available-today");
const revenueToday = document.querySelector("#revenue-today");
const roomOccupiedPercentage = document.querySelector(
  "#room-occupied-percentage"
);
const deleteBookingButton = document.querySelector("#delete-booking-button");

const upcomingBookingsButton = document.querySelector(
  "#upcoming-bookings-button"
);
const pastBookingsButton = document.querySelector("#past-bookings-button");

const dateInput = document.querySelector("#date-picker");
const roomFilterDropdown = document.querySelector("#room-filter-dropdown");
const searchRoomsButton = document.querySelector("#search-rooms-button");
const bookingButton = document.querySelector("#booking-button");

const searchCustomerButton = document.querySelector("#search-customer-button");

// ~~~~~~~~~~~~~~~~~~~~~~~~~ EVENT LISTENERS ~~~~~~~~~~~~~~~~~~~~~~~~~~~

window.addEventListener("load", handleLoad);

toggleLoginViewButton.addEventListener("click", toggleUserLogin);

userLoginButton.addEventListener("click", handleUserLogin);
managerLoginButton.addEventListener("click", handleManagerLogin);

upcomingBookingsButton.addEventListener("click", showUpcomingBookings);
pastBookingsButton.addEventListener("click", showPastBookings);

searchRoomsButton.addEventListener("click", displayAvailableRooms);
bookingButton.addEventListener("click", handleBooking);

searchCustomerButton.addEventListener("click", handleSearchForCustomer);

customerLogoutButton.addEventListener("click", handleCustomerLogout);
managerLogoutButton.addEventListener("click", handleManagerLogout);

deleteBookingButton.addEventListener("click", handleDeleteBooking);
// ~~~~~~~~~~~~~~~~~~~~~~~~~ SCRIPTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~

let currentCustomerId;

function handleLoad() {
  getDate();
  fetchAllCustomers();
  fetchAllBookings();
  fetchRoomData();
}

function fetchAllCustomers() {
  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users")
    .then((response) => response.json())
    .then((data) => loadAllCustomers(data.users))
    .catch((error) => console.log(error.message));
}

function fetchAllBookings() {
  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings")
    .then((response) => response.json())
    .then((data) => {
      console.log({ data });
      loadAllBookings(data.bookings);
    })
    .catch((error) => console.log(error.message));
}

function loadAllCustomers(customersList) {
  global.userRepo = new _User_Repo__WEBPACK_IMPORTED_MODULE_7__["default"](customersList);
}

function loadAllBookings(bookingsList) {
  global.bookings = new _Bookings__WEBPACK_IMPORTED_MODULE_0__["default"](bookingsList);
}

function handleUserLogin() {
  if (verifyCustomerUsername() && verifyPassword(userPassword)) {
    loadCustomer();
    displayCustomerView(
      "#past-bookings-date",
      "#future-bookings-date",
      "#total-spent"
    );
    toggleLoginPage(userProfilePage);
  } else {
    displayLoginErrorMessage(userLoginButton);
  }
}

function handleManagerLogin() {
  if (verifyManagerUsername() && verifyPassword(managerPassword)) {
    global.currentManager = new _Manager__WEBPACK_IMPORTED_MODULE_8__["default"]();
    displayManagerView();
  } else {
    displayLoginErrorMessage(managerLoginButton);
  }
}

function verifyCustomerUsername() {
  let customer = userRepo.customers.find((user) => {
    return customerUsername.value == `customer${user.id}`;
  });
  return customer;
}

function verifyManagerUsername() {
  return managerUsername.value === "manager";
}

function verifyPassword(inputLocation) {
  return inputLocation.value === "overlook2020";
}

function loadCustomer() {
  currentCustomerId = verifyCustomerUsername().id;
  const currentCustomerName = verifyCustomerUsername().name;
  const currentCustomerPastBookings = sortFutureBookings(currentCustomerId);
  const currentCustomerFutureBookings = sortPastBookings(currentCustomerId);
  global.currentCustomer = new _Customer__WEBPACK_IMPORTED_MODULE_2__["default"](
    currentCustomerId,
    currentCustomerName,
    currentCustomerPastBookings,
    currentCustomerFutureBookings
  );
}

function getDate() {
  global.currentDate = new Date();
  let unformattedDate = currentDate.toISOString().substring(0, 10);
  currentDate = unformattedDate.replaceAll("-", "/");
  dateInput.setAttribute("min", currentDate);
}

function loadAllCurrentCustomerBookings(customerID) {
  return bookings.bookingsData.filter((booking) => {
    return booking.userID === customerID;
  });
}

function sortFutureBookings(customerID) {
  return loadAllCurrentCustomerBookings(customerID).filter((booking) => {
    return booking.date <= currentDate;
  });
}

function sortPastBookings(customerID) {
  return loadAllCurrentCustomerBookings(customerID).filter((booking) => {
    return booking.date > currentDate;
  });
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~ DOM ~~~~~~~~~~~~~~~~~~~~~~~~~~~

function toggleUserLogin() {
  let loginButtonMessageUser = document.querySelector(
    ".login-button-message-user"
  );
  loginButtonMessageUser.classList.toggle("hidden");
  let loginButtonMessageManager = document.querySelector(
    ".login-button-message-manager"
  );
  loginButtonMessageManager.classList.toggle("hidden");
  customerLoginView.classList.toggle("hidden");
  managerLoginView.classList.toggle("hidden");
}

function displayLoginErrorMessage(buttonLocation) {
  buttonLocation.insertAdjacentHTML(
    "afterend",
    `<br><p class="error" id="login-error-message">The username or password you entered is incorrect. Please try again.</p>`
  );
  setTimeout(() => removeErrorMessage(), 3000);
}

function removeErrorMessage() {
  let loginErrorMessage = document.querySelector("#login-error-message");
  loginErrorMessage.innerHTML = "";
}

function displayCustomerView(location1, location2, location3) {
  displayPastCustomerBookings(location1);
  displayUpcomingCustomerBookings(location2);
  displayTotalSpentByCustomer(location3);
}

function toggleLoginPage(user) {
  heading.classList.toggle("hidden");
  homepage.classList.toggle("hidden");
  user.classList.toggle("hidden");
}

function displayPastCustomerBookings(location) {
  const dateSection = document.querySelector(`${location}`);
  currentCustomer.previousBookings.forEach((booking) => {
    let dateBooked = `<p>${booking.date}</p>`;
    dateSection.insertAdjacentHTML("beforeend", dateBooked);
  });

  currentCustomer.previousBookings.forEach((booking) => {
    const previousStay = allRooms.roomData.find((room) => {
      return room.number === booking.roomNumber;
    });
    const roomNumber = previousStay.number;
    const roomType = previousStay.roomType;
    const bedSize = previousStay.bedSize;
    const bedQuantity = previousStay.numBeds;
    const roomCost = previousStay.costPerNight;
    const bidetBoolean = previousStay.bidet ? "Included" : "Not Included";

    const roomNumberSection = document.querySelector("#past-room-number");
    const roomTypeSection = document.querySelector("#past-room-type");
    const bedSizeSection = document.querySelector("#past-bed-size");
    const bedCountSection = document.querySelector("#past-bed-count");
    const roomCostSection = document.querySelector("#past-cost-per-night");
    const bidetSection = document.querySelector("#past-bidet");

    roomNumberSection.insertAdjacentHTML(
      "beforeend",
      `<li style="list-style-type:none;">${roomNumber}</li>`
    );
    roomTypeSection.insertAdjacentHTML(
      "beforeend",
      `<li style="list-style-type:none;">${roomType}</li>`
    );
    bedSizeSection.insertAdjacentHTML(
      "beforeend",
      `<li style="list-style-type:none;">${bedSize}</li>`
    );
    bedCountSection.insertAdjacentHTML(
      "beforeend",
      `<li style="list-style-type:none;">${bedQuantity}</li>`
    );
    roomCostSection.insertAdjacentHTML(
      "beforeend",
      `<li style="list-style-type:none;">$${roomCost}</li>`
    );
    bidetSection.insertAdjacentHTML(
      "beforeend",
      `<li style="list-style-type:none;">${bidetBoolean}</li>`
    );
  });
}
function displayUpcomingCustomerBookings(location) {
  const dateSection = document.querySelector(`${location}`);
  currentCustomer.futureBookings.forEach((booking) => {
    let dateBooked = `<p>${booking.date}</p>`;
    dateSection.insertAdjacentHTML("beforeend", dateBooked);
  });

  currentCustomer.futureBookings.forEach((booking) => {
    const upcomingStay = allRooms.roomData.find((room) => {
      return room.number === booking.roomNumber;
    });

    if (typeof upcomingStay === "undefined") {
      return;
    } else {
      console.log({ upcomingStay });
      const roomNumber = upcomingStay.number;
      const roomType = upcomingStay.roomType;
      const bedSize = upcomingStay.bedSize;
      const bedQuantity = upcomingStay.numBeds;
      const roomCost = upcomingStay.costPerNight;
      const bidetBoolean = upcomingStay.bidet ? "Included" : "Not Included";

      const roomNumberSection = document.querySelector("#future-room-number");
      const roomTypeSection = document.querySelector("#future-room-type");
      const bedSizeSection = document.querySelector("#future-bed-size");
      const bedCountSection = document.querySelector("#future-bed-count");
      const roomCostSection = document.querySelector("#future-cost-per-night");
      const bidetSection = document.querySelector("#future-bidet");

      roomNumberSection.insertAdjacentHTML(
        "beforeend",
        `<li style="list-style-type:none;">${roomNumber}</li>`
      );
      roomTypeSection.insertAdjacentHTML(
        "beforeend",
        `<li style="list-style-type:none;">${roomType}</li>`
      );
      bedSizeSection.insertAdjacentHTML(
        "beforeend",
        `<li style="list-style-type:none;">${bedSize}</li>`
      );
      bedCountSection.insertAdjacentHTML(
        "beforeend",
        `<li style="list-style-type:none;">${bedQuantity}</li>`
      );
      roomCostSection.insertAdjacentHTML(
        "beforeend",
        `<li style="list-style-type:none;">$${roomCost}</li>`
      );
      bidetSection.insertAdjacentHTML(
        "beforeend",
        `<li style="list-style-type:none;">${bidetBoolean}</li>`
      );
    }
  });
}

function displayTotalSpentByCustomer(location) {
  const totalSpentByCustomer = allRooms.roomData.reduce((totalSpent, room) => {
    currentCustomer.previousBookings.forEach((booking) => {
      if (room.number === booking.roomNumber) {
        totalSpent += room.costPerNight;
      }
    });
    return Math.round(totalSpent);
  }, 0);

  const totalSpendingSection = document.querySelector(`${location}`);
  totalSpendingSection.insertAdjacentHTML(
    "beforeend",
    `<p id="spending-message">Total Spent $${totalSpentByCustomer}</p>`
  );
}

function fetchRoomData() {
  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms")
    .then((response) => response.json())
    .then((data) => loadAllRoomData(data.rooms))
    .catch((error) => console.log(error.message));
}

function loadAllRoomData(allRoomData) {
  console.log({ allRoomData });
  global.allRooms = new _Room__WEBPACK_IMPORTED_MODULE_6__["default"](allRoomData);
  allRooms.sortRoomsByType();
}

function showUpcomingBookings() {
  upcomingBookingsButton.classList.add("selected");
  pastBookingsButton.classList.remove("selected");
  futureBookingsSection.classList.remove("hidden");
  previousBookingsSection.classList.add("hidden");
}

function showPastBookings() {
  upcomingBookingsButton.classList.remove("selected");
  pastBookingsButton.classList.add("selected");
  futureBookingsSection.classList.add("hidden");
  previousBookingsSection.classList.remove("hidden");
}

function searchForRooms(selectedDate, selectedRoomType) {
  const availableRooms = allRooms[selectedRoomType].filter((room) => {
    let bookedRoom = bookings.bookingsData.find((booking) => {
      return (
        booking.date === selectedDate && room.number === booking.roomNumber
      );
    });

    if (typeof bookedRoom === "undefined") {
      return true;
    } else {
      return false;
    }
  });
  return availableRooms;
}

function displayAvailableRooms() {
  let formattedDate = dateInput.value.replaceAll("-", "/");
  let roomTypeSelection;
  if (roomFilterDropdown.value === "all-rooms") {
    roomTypeSelection = "roomData";
  } else if (roomFilterDropdown.value === "single-room") {
    roomTypeSelection = "singleRooms";
  } else if (roomFilterDropdown.value === "junior-suite") {
    roomTypeSelection = "juniorSuites";
  } else if (roomFilterDropdown.value === "suite") {
    roomTypeSelection = "suites";
  } else if (roomFilterDropdown.value === "residential-suite") {
    roomTypeSelection = "residentialSuites";
  }

  const availableBookingsSection = document.querySelector(
    "#available-bookings-section"
  );
  availableBookingsSection.classList.remove("hidden");
  bookingButton.classList.remove("hidden");

  const selectorSection = document.querySelector(".room-to-select");
  const roomNumberSection = document.querySelector("#queried-room-number");
  const roomTypeSection = document.querySelector("#queried-room-type");
  const bedSizeSection = document.querySelector("#queried-bed-size");
  const bedCountSection = document.querySelector("#queried-bed-count");
  const roomCostSection = document.querySelector("#queried-cost-per-night");
  const bidetSection = document.querySelector("#queried-bidet");

  selectorSection.innerHTML = '<p class="room-to-select">Select</p>';
  roomNumberSection.innerHTML = "<p>Room Number</p>";
  roomTypeSection.innerHTML = "<p>Room Type</p>";
  bedSizeSection.innerHTML = "<p>Bed Size</p>";
  bedCountSection.innerHTML = "<p>Number Of Beds</p>";
  roomCostSection.innerHTML = "<p>Cost Per Night</p>";
  bidetSection.innerHTML = "<p>Bidet?</p>";

  if (formattedDate.length === 0) {
    let requiredDateMessage = document.querySelector("#required-date-message");
    requiredDateMessage.classList.toggle("hidden");
    setTimeout(() => {
      requiredDateMessage.classList.toggle("hidden");
    }, 3000);
  } else {
    searchForRooms(formattedDate, roomTypeSelection).forEach(
      (availableRoom) => {
        const roomNumber = availableRoom.number;
        const roomType =
          availableRoom.roomType === "single room"
            ? availableRoom.roomType.slice(0, 7)
            : availableRoom.roomType;
        const bedSize = availableRoom.bedSize;
        const bedQuantity = availableRoom.numBeds;
        const roomCost = availableRoom.costPerNight;
        const bidetBoolean = availableRoom.bidet ? "Included" : "Not Included";

        selectorSection.insertAdjacentHTML(
          "beforeend",
          `<input type="checkbox" class="selector" id=${roomNumber}><br>`
        );
        roomNumberSection.insertAdjacentHTML(
          "beforeend",
          `<li style="list-style-type:none;">${roomNumber}</li>`
        );
        roomTypeSection.insertAdjacentHTML(
          "beforeend",
          `<li style="list-style-type:none;">${roomType}</li>`
        );
        bedSizeSection.insertAdjacentHTML(
          "beforeend",
          `<li style="list-style-type:none;">${bedSize}</li>`
        );
        bedCountSection.insertAdjacentHTML(
          "beforeend",
          `<li style="list-style-type:none;">${bedQuantity}</li>`
        );
        roomCostSection.insertAdjacentHTML(
          "beforeend",
          `<li style="list-style-type:none;">$${roomCost}</li>`
        );
        bidetSection.insertAdjacentHTML(
          "beforeend",
          `<li style="list-style-type:none;">${bidetBoolean}</li>`
        );
      }
    );
  }
}

function handleBooking() {
  let formattedDate = dateInput.value.replaceAll("-", "/");
  let selectedRooms = Array.from(document.getElementsByClassName("selector"));
  if (typeof currentCustomerId === "undefined") {
    currentCustomerId = currentCustomer.id;
  }
  selectedRooms.forEach((selectedRoom) => {
    if (selectedRoom.checked) {
      let roomToBook = {
        userID: currentCustomerId,
        date: formattedDate,
        roomNumber: parseInt(selectedRoom.id),
      };
      if (
        currentCustomer.bookRoom(roomToBook, bookings.bookingsData) === false
      ) {
        postBooking(roomToBook);
        let bookRoomSuccessMessage = document.querySelector(
          "#book-room-success-message"
        );
        bookRoomSuccessMessage.classList.toggle("hidden");
        setTimeout(() => {
          bookRoomSuccessMessage.classList.toggle("hidden");
        }, 3000);
      } else {
        console.log("the booking already exists, cant post");
      }
    }
  });
}

function postBooking(dataToPost) {
  fetch(
    "https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToPost),
    }
  )
    .then((response) => response.json())
    .then((message) => console.log("booking was posted"))
    .catch((error) => console.log(error.message));
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~ Manager Dashboard ~~~~~~~~~~~~~~~~~~~~~~~~~~~

function displayManagerView() {
  toggleLoginPage(managerProfilePage);
  roomsAvailableToday.classList.remove("hidden");
  revenueToday.classList.remove("hidden");
  roomOccupiedPercentage.classList.remove("hidden");
  roomsAvailableToday.innerHTML = `<p>Number Of Rooms Available Today</p><br>${displayRoomsAvailableToday()}`;
  displayTodaysTotalRevenue();
  roomOccupiedPercentage.innerHTML = `<p>Percentage Of Rooms Occupied Today</p><br>${displayRoomOccupiedPercentage()}`;
}

function displayRoomsAvailableToday() {
  let availableRooms = allRooms.roomData.filter((room) => {
    let roomAvailable = true;
    bookings.bookingsData.forEach((booking) => {
      if (booking.date === currentDate && booking.roomNumber === room.number) {
        roomAvailable = false;
      }
    });
    return roomAvailable;
  });
  return availableRooms.length;
}

function displayTodaysTotalRevenue() {
  let todaysRevenue = bookings.bookingsData.reduce((totalRevenue, booking) => {
    allRooms.roomData.forEach((room) => {
      if (currentDate === booking.date) {
        totalRevenue += room.costPerNight;
      }
    });
    return Math.round(totalRevenue);
  }, 0);
  const todaysRevenueSection = document.querySelector("#revenue-today");
  todaysRevenueSection.innerHTML = `<p>Today's Total Revenue</p><br><br><p>$${todaysRevenue}</p>`;
}

function displayRoomOccupiedPercentage() {
  const percentOfOccupiedRooms =
    (displayRoomsAvailableToday() / allRooms.roomData.length) * 100;
  return `<p>${percentOfOccupiedRooms}%</p>`;
}

function handleSearchForCustomer() {
  findCustomerByName();
  managerSideBar.classList.toggle("hidden");
}

function findCustomerByName() {
  const customerSearchField = document.querySelector("#customer-search-field");
  const queriedCustomer = currentManager.searchForCustomer(
    customerSearchField.value,
    userRepo.customers
  );
  if (!queriedCustomer) {
    let unidentifiedUserMessage = document.querySelector(
      "#unidentified-user-message"
    );
    unidentifiedUserMessage.classList.toggle("hidden");
    setTimeout(() => {
      unidentifiedUserMessage.classList.toggle("hidden");
    }, 3000);
  } else {
    const queriedCustomerPastBookings = sortPastBookings(queriedCustomer.id);
    const queriedCustomerFutureBookings = sortFutureBookings(
      queriedCustomer.id
    );
    global.currentCustomer = new _Customer__WEBPACK_IMPORTED_MODULE_2__["default"](
      queriedCustomer.id,
      queriedCustomer.name,
      queriedCustomerFutureBookings,
      queriedCustomerPastBookings
    );

    displayCustomerView(
      "#past-bookings-date",
      "#future-bookings-date",
      "#total-spent"
    );
    const upcomingBookingsTitle = document.querySelector(
      "#upcoming-bookings-title"
    );
    const previousBookingsTitle = document.querySelector(
      "#previous-bookings-title"
    );
    upcomingBookingsTitle.innerText = `Upcoming Bookings For ${currentCustomer.name}`;
    previousBookingsTitle.innerText = `Previous Bookings For ${currentCustomer.name}`;
    userProfilePage.classList.remove("hidden");
    managerSideBar.classList.remove("hidden");
  }
}

function handleCustomerLogout() {
  logout(userProfilePage);
}

function handleManagerLogout() {
  customerLogoutButton.classList.add("hidden");
  userProfilePage.classList.add("hidden");
  logout(managerProfilePage);
}

function logout(user) {
  toggleLoginPage(user);
  //managerProfilePage.classList.add('hidden')
  let spendingMessage = document.querySelector("#spending-message");
  if (typeof spendingMessage === "undefined") {
    return;
  } else if (spendingMessage === null) {
    return;
  } else {
    spendingMessage.remove();
  }
}

function deleteBookingFromApi(id) {
  fetch(
    "https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings",
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    }
  )
    .then((response) => console.log(response))
    //.then(message => console.log('booking was posted'))
    .catch((error) => console.log(error.message));
}

function handleDeleteBooking() {
  const roomNumberToDelete = document.querySelector("#room-number-to-delete");
  const dateToDelete = document.querySelector("#date-to-delete");
  let formattedDate = dateToDelete.value.replaceAll("-", "/");
  const bookingToDelete = bookings.bookingsData.find((booking) => {
    return (
      booking.date === formattedDate &&
      booking.roomNumber == roomNumberToDelete.value
    );
  });
  currentManager.deleteBookedRoom(currentCustomer, formattedDate);
  //deleteBookingFromApi(bookingToDelete.id);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9Cb29raW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ3VzdG9tZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jvb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXItUmVwby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz9iYTg5Iiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbWFuLXdhdGNoaW5nLXN1bnNldC1ncmFuZC1jYW55b24uanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcHJvZmlsZS1waWMucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdHVyaW5nLWxvZ28ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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aW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG52YXIgdXJsRXNjYXBlID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS91cmwtZXNjYXBlLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL21hbi13YXRjaGluZy1zdW5zZXQtZ3JhbmQtY2FueW9uLmpwZ1wiKSk7XG5cbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBmb250LWZhbWlseTogXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIFRpbWVzLCBzZXJpZjsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fICsgXCIpOyB9XFxuXFxudGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbmgxIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDhBODE7XFxuICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXNpemU6IDVlbTtcXG4gIHBhZGRpbmc6IDFlbTsgfVxcblxcbmgyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbmJ1dHRvbiB7XFxuICB3aWR0aDogMTBlbTtcXG4gIGhlaWdodDogMmVtOyB9XFxuXFxuLmhvbWVwYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbiN0b2dnbGUtdmlldy1idXR0b24ge1xcbiAgaGVpZ2h0OiA1dmg7IH1cXG5cXG4uaW5wdXRzIHtcXG4gIGZvbnQtc2l6ZTogMmVtOyB9XFxuXFxuLmN1c3RvbWVyLWxvZ2luLCAubWFuYWdlci1sb2dpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0OEE4MTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4OyB9XFxuXFxuI3dlbGNvbWUtbWVzc2FnZSB7XFxuICBmb250LXNpemU6IDNlbTsgfVxcblxcbi5sb2dpbiB7XFxuICBtYXJnaW46IDEwcHg7XFxuICB3aWR0aDogMTV2aDtcXG4gIGhlaWdodDogM3ZoOyB9XFxuXFxuLnRhYiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7IH1cXG5cXG4udXNlci1wcm9maWxlLXBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG5cXG4uc2lkZS1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0OEE4MTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtc2l6ZTogNWVtO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgaGVpZ2h0OiAyMDB2aDtcXG4gIHdpZHRoOiAyZW07IH1cXG5cXG4uc2lkZWJhci1wcm9maWxlLXBpYyB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7IH1cXG5cXG4udXNlci1jYXJkIHtcXG4gIG1hcmdpbi10b3A6IDZlbTtcXG4gIHdpZHRoOiA1MGVtO1xcbiAgaGVpZ2h0OiA1NXZoO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDsgfVxcblxcbiNwYXN0LWJvb2tpbmdzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMWVtOyB9XFxuXFxuI3VwY29taW5nLWJvb2tpbmdzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMWVtOyB9XFxuXFxuLnBhc3QtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uZnV0dXJlLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxudWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG5cXG4jdXBjb21pbmctYm9va2luZ3MtYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAxNWVtO1xcbiAgaGVpZ2h0OiA0ZW07IH1cXG5cXG4jcGFzdC1ib29raW5ncy1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDE1ZW07XFxuICBoZWlnaHQ6IDRlbTtcXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggYmxhY2s7IH1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIG1hcmdpbjogMy41dmg7IH1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3YzBjMDsgfVxcblxcbi5taWRkbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4uYm9vay1yb29tIHtcXG4gIG1hcmdpbi10b3A6IDNlbTsgfVxcblxcbiNib29raW5nLWJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAyZW07XFxuICB3aWR0aDogMjBlbTtcXG4gIGhlaWdodDogM2VtOyB9XFxuXFxuLmVycm9yIHtcXG4gIGNvbG9yOiByZWQ7IH1cXG5cXG4ubWFuYWdlci1wcm9maWxlLXBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG5cXG4ubWFuYWdlci1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDE1ZW07XFxuICBoZWlnaHQ6IDE1dmg7IH1cXG5cXG4ubWlkZGxlLW1hbmFnZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDUwZW07IH1cXG5cXG4uc3R5bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgfVxcblxcbiNzZWFyY2gtY3VzdG9tZXItZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA1ZW07IH1cXG5cXG4jbG9nb3V0LWJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVzY2FwZSh1cmwsIG5lZWRRdW90ZXMpIHtcbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gJ1wiJyArIHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpICsgJ1wiJztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImNsYXNzIEJvb2tpbmdzIHtcbiAgY29uc3RydWN0b3IoYm9va2luZ3NEYXRhKSB7XG4gICAgdGhpcy5ib29raW5nc0RhdGEgPSBib29raW5nc0RhdGE7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va2luZ3M7XG4iLCJpbXBvcnQgVXNlclJlcG8gZnJvbSAnLi9Vc2VyLVJlcG8nO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcblxuY2xhc3MgQ3VzdG9tZXIgZXh0ZW5kcyBVc2VyIHtcbiAgY29uc3RydWN0b3IoaWQsIG5hbWUsIHByZXZpb3VzQm9va2luZ3MsIGZ1dHVyZUJvb2tpbmdzKSB7XG4gICAgc3VwZXIoaWQsIG5hbWUsIHByZXZpb3VzQm9va2luZ3MsIGZ1dHVyZUJvb2tpbmdzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21lcjsiLCJpbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyXCI7XG5cbmNsYXNzIE1hbmFnZXIgZXh0ZW5kcyBVc2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnVzZXJuYW1lID0gJ21hbmFnZXInO1xuICAgIHRoaXMucGFzc3dvcmQgPSAnb3Zlcmxvb2syMDIwJztcbiAgfVxuXG4gIHNlYXJjaEZvckN1c3RvbWVyKHNlYXJjaGVkQ3VzdG9tZXIsIHVzZXJSZXBvKSB7XG4gICAgY29uc3QgZm91bmRDdXN0b21lciA9IHVzZXJSZXBvLmZpbmQodXNlciA9PiB7XG4gICAgICByZXR1cm4gc2VhcmNoZWRDdXN0b21lciA9PT0gdXNlci5uYW1lO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YoZm91bmRDdXN0b21lcikgPT09IFwidW5kZWZpbmVkXCIpIHtcblxuICAgIH1cbiAgICByZXR1cm4gZm91bmRDdXN0b21lclxuICB9O1xuICBcbiAgZGVsZXRlQm9va2VkUm9vbSh1c2VyLCBkYXRlKSB7XG4gICAgY29uc29sZS5sb2codXNlci5mdXR1cmVCb29raW5ncylcbiAgICB1c2VyLmZ1dHVyZUJvb2tpbmdzID0gdXNlci5mdXR1cmVCb29raW5ncy5maWx0ZXIoZnV0dXJlQm9va2luZyA9PiB7XG4gICAgICByZXR1cm4gZnV0dXJlQm9va2luZy5kYXRlICE9PSBkYXRlO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlZFwiKVxuICAgIGNvbnNvbGUubG9nKHVzZXIuZnV0dXJlQm9va2luZ3MpXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VyOyIsImNsYXNzIFJvb20ge1xuICBjb25zdHJ1Y3Rvcihyb29tRGF0YSkge1xuICAgIHRoaXMucm9vbURhdGEgPSByb29tRGF0YTtcbiAgICB0aGlzLnNpbmdsZVJvb21zO1xuICAgIHRoaXMuanVuaW9yU3VpdGVzO1xuICAgIHRoaXMuc3VpdGVzO1xuICAgIHRoaXMucmVzaWRlbnRpYWxTdWl0ZXM7XG4gIH1cblxuICBzb3J0Um9vbXNCeVR5cGUoKSB7XG4gICAgdGhpcy5zaW5nbGVSb29tcyA9IHRoaXMucm9vbURhdGEuZmlsdGVyKHJvb20gPT4ge1xuICAgICAgcmV0dXJuIHJvb20ucm9vbVR5cGUgPT09ICdzaW5nbGUgcm9vbSc7XG4gICAgfSk7XG4gICAgdGhpcy5qdW5pb3JTdWl0ZXMgPSB0aGlzLnJvb21EYXRhLmZpbHRlcihyb29tID0+IHtcbiAgICAgIHJldHVybiByb29tLnJvb21UeXBlID09PSAnanVuaW9yIHN1aXRlJztcbiAgICB9KTtcbiAgICB0aGlzLnN1aXRlcyA9IHRoaXMucm9vbURhdGEuZmlsdGVyKHJvb20gPT4ge1xuICAgICAgcmV0dXJuIHJvb20ucm9vbVR5cGUgPT09ICdzdWl0ZSc7XG4gICAgfSk7XG4gICAgdGhpcy5yZXNpZGVudGlhbFN1aXRlcyA9IHRoaXMucm9vbURhdGEuZmlsdGVyKHJvb20gPT4ge1xuICAgICAgcmV0dXJuIHJvb20ucm9vbVR5cGUgPT09ICdyZXNpZGVudGlhbCBzdWl0ZSc7XG4gICAgfSk7XG4gIH1cbiAgXG4gIC8vZmlsdGVyUm9vbXNCeVR5cGUocm9vbVR5cGUpIHtcbiAgICAvL3RoaXMucm9vbURhdGEuZmlsdGVyKHJvb21EYXRhKVxuICAvL31cbn1cblxuZXhwb3J0IGRlZmF1bHQgUm9vbTsiLCJjbGFzcyBVc2VyUmVwbyB7XG4gIGNvbnN0cnVjdG9yKGN1c3RvbWVycykge1xuICAgIHRoaXMuY3VzdG9tZXJzID0gY3VzdG9tZXJzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJSZXBvO1xuXG4iLCJjbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IoaWQsIG5hbWUsIHByZXZpb3VzQm9va2luZ3MsIGZ1dHVyZUJvb2tpbmdzKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wcmV2aW91c0Jvb2tpbmdzID0gcHJldmlvdXNCb29raW5ncyB8fCBbXTtcbiAgICB0aGlzLmZ1dHVyZUJvb2tpbmdzID0gZnV0dXJlQm9va2luZ3MgfHwgW107XG4gIH1cblxuICBib29rUm9vbShwb3RlbnRpYWxCb29raW5nLCBib29raW5nc0xpc3QpIHtcbiAgICBsZXQgYWxyZWFkeUJvb2tlZDtcbiAgICBib29raW5nc0xpc3QuZm9yRWFjaCgoYm9va2luZykgPT4ge1xuICAgICAgYWxyZWFkeUJvb2tlZCA9IGZhbHNlO1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGJvb2tpbmcucm9vbU51bWJlcixcbiAgICAgICAgcG90ZW50aWFsQm9va2luZy5yb29tTnVtYmVyLFxuICAgICAgICBib29raW5nLmRhdGUsXG4gICAgICAgIHBvdGVudGlhbEJvb2tpbmcuZGF0ZVxuICAgICAgKTtcbiAgICAgIGlmIChcbiAgICAgICAgYm9va2luZy5yb29tTnVtYmVyID09PSBwb3RlbnRpYWxCb29raW5nLnJvb21OdW1iZXIgJiZcbiAgICAgICAgYm9va2luZy5kYXRlID09IHBvdGVudGlhbEJvb2tpbmcuZGF0ZVxuICAgICAgKSB7XG4gICAgICAgIGFscmVhZHlCb29rZWQgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhcInF3b2VpZm5hd2VvaXdxZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoYWxyZWFkeUJvb2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgY29uc29sZS5sb2coXCJZb3VyIHJvb20gaGFzIGFscmVhZHkgYmVlbiBib29rZWRcIik7XG4gICAgICAvL3JldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mdXR1cmVCb29raW5ncy5wdXNoKHBvdGVudGlhbEJvb2tpbmcpO1xuICAgICAgLy9yZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGFscmVhZHlCb29rZWQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jhc2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jhc2Uuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvbWFuLXdhdGNoaW5nLXN1bnNldC1ncmFuZC1jYW55b24uanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9wcm9maWxlLXBpYy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3R1cmluZy1sb2dvLnBuZ1wiOyIsImltcG9ydCBCb29raW5ncyBmcm9tIFwiLi9Cb29raW5nc1wiO1xuaW1wb3J0IFwiLi9jc3MvYmFzZS5zY3NzXCI7XG5pbXBvcnQgQ3VzdG9tZXIgZnJvbSBcIi4vQ3VzdG9tZXJcIjtcblxuaW1wb3J0IFwiLi9pbWFnZXMvbWFuLXdhdGNoaW5nLXN1bnNldC1ncmFuZC1jYW55b24uanBnXCI7XG5pbXBvcnQgXCIuL2ltYWdlcy90dXJpbmctbG9nby5wbmdcIjtcbmltcG9ydCBcIi4vaW1hZ2VzL3Byb2ZpbGUtcGljLnBuZ1wiO1xuaW1wb3J0IFJvb20gZnJvbSBcIi4vUm9vbVwiO1xuaW1wb3J0IFVzZXJSZXBvIGZyb20gXCIuL1VzZXItUmVwb1wiO1xuaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xuXG4vLyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+IFFVRVJZIFNFTEVDVE9SUyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cblxuY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGluZ1wiKTtcblxuY29uc3QgdG9nZ2xlTG9naW5WaWV3QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGUtdmlldy1idXR0b25cIik7XG5jb25zdCBjdXN0b21lclVzZXJuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXN0b21lci11c2VybmFtZS1pbnB1dFwiKTtcbmNvbnN0IHVzZXJQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tZXItcGFzc3dvcmQtaW5wdXRcIik7XG5jb25zdCB1c2VyTG9naW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItbG9naW4tYnV0dG9uXCIpO1xuXG5jb25zdCBtYW5hZ2VyVXNlcm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21hbmFnZXItdXNlcm5hbWUtaW5wdXRcIik7XG5jb25zdCBtYW5hZ2VyUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21hbmFnZXItcGFzc3dvcmQtaW5wdXRcIik7XG5jb25zdCBtYW5hZ2VyTG9naW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1hbmFnZXItbG9naW4tYnV0dG9uXCIpO1xuXG5jb25zdCBjdXN0b21lckxvZ2luVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VzdG9tZXItbG9naW5cIik7XG5jb25zdCBtYW5hZ2VyTG9naW5WaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYW5hZ2VyLWxvZ2luXCIpO1xuY29uc3QgY3VzdG9tZXJMb2dvdXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1c3RvbWVyLWxvZ291dC1idXR0b25cIik7XG5jb25zdCBtYW5hZ2VyTG9nb3V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYW5hZ2VyLWxvZ291dC1idXR0b25cIik7XG5cbmNvbnN0IGhvbWVwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lcGFnZVwiKTtcbmNvbnN0IHVzZXJQcm9maWxlUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlci1wcm9maWxlLXBhZ2VcIik7XG5jb25zdCBwcmV2aW91c0Jvb2tpbmdzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldmlvdXMtYm9va2luZ3NcIik7XG5jb25zdCBmdXR1cmVCb29raW5nc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Z1dHVyZS1ib29raW5nc1wiKTtcblxuY29uc3QgbWFuYWdlclByb2ZpbGVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYW5hZ2VyLXByb2ZpbGUtcGFnZVwiKTtcbmNvbnN0IG1hbmFnZXJTaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYW5hZ2VyLXNpZGUtYmFyXCIpO1xuY29uc3Qgcm9vbXNBdmFpbGFibGVUb2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vbXMtYXZhaWxhYmxlLXRvZGF5XCIpO1xuY29uc3QgcmV2ZW51ZVRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXZlbnVlLXRvZGF5XCIpO1xuY29uc3Qgcm9vbU9jY3VwaWVkUGVyY2VudGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiI3Jvb20tb2NjdXBpZWQtcGVyY2VudGFnZVwiXG4pO1xuY29uc3QgZGVsZXRlQm9va2luZ0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVsZXRlLWJvb2tpbmctYnV0dG9uXCIpO1xuXG5jb25zdCB1cGNvbWluZ0Jvb2tpbmdzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCIjdXBjb21pbmctYm9va2luZ3MtYnV0dG9uXCJcbik7XG5jb25zdCBwYXN0Qm9va2luZ3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3QtYm9va2luZ3MtYnV0dG9uXCIpO1xuXG5jb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGUtcGlja2VyXCIpO1xuY29uc3Qgcm9vbUZpbHRlckRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb29tLWZpbHRlci1kcm9wZG93blwiKTtcbmNvbnN0IHNlYXJjaFJvb21zQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtcm9vbXMtYnV0dG9uXCIpO1xuY29uc3QgYm9va2luZ0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9va2luZy1idXR0b25cIik7XG5cbmNvbnN0IHNlYXJjaEN1c3RvbWVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtY3VzdG9tZXItYnV0dG9uXCIpO1xuXG4vLyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+IEVWRU5UIExJU1RFTkVSUyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGhhbmRsZUxvYWQpO1xuXG50b2dnbGVMb2dpblZpZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVVzZXJMb2dpbik7XG5cbnVzZXJMb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVXNlckxvZ2luKTtcbm1hbmFnZXJMb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTWFuYWdlckxvZ2luKTtcblxudXBjb21pbmdCb29raW5nc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1VwY29taW5nQm9va2luZ3MpO1xucGFzdEJvb2tpbmdzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93UGFzdEJvb2tpbmdzKTtcblxuc2VhcmNoUm9vbXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlBdmFpbGFibGVSb29tcyk7XG5ib29raW5nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVCb29raW5nKTtcblxuc2VhcmNoQ3VzdG9tZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVNlYXJjaEZvckN1c3RvbWVyKTtcblxuY3VzdG9tZXJMb2dvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUN1c3RvbWVyTG9nb3V0KTtcbm1hbmFnZXJMb2dvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU1hbmFnZXJMb2dvdXQpO1xuXG5kZWxldGVCb29raW5nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVEZWxldGVCb29raW5nKTtcbi8vIH5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn4gU0NSSVBUUyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cblxubGV0IGN1cnJlbnRDdXN0b21lcklkO1xuXG5mdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICBnZXREYXRlKCk7XG4gIGZldGNoQWxsQ3VzdG9tZXJzKCk7XG4gIGZldGNoQWxsQm9va2luZ3MoKTtcbiAgZmV0Y2hSb29tRGF0YSgpO1xufVxuXG5mdW5jdGlvbiBmZXRjaEFsbEN1c3RvbWVycygpIHtcbiAgZmV0Y2goXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC91c2Vycy91c2Vyc1wiKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiBsb2FkQWxsQ3VzdG9tZXJzKGRhdGEudXNlcnMpKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpKTtcbn1cblxuZnVuY3Rpb24gZmV0Y2hBbGxCb29raW5ncygpIHtcbiAgZmV0Y2goXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9ib29raW5ncy9ib29raW5nc1wiKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh7IGRhdGEgfSk7XG4gICAgICBsb2FkQWxsQm9va2luZ3MoZGF0YS5ib29raW5ncyk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRBbGxDdXN0b21lcnMoY3VzdG9tZXJzTGlzdCkge1xuICBnbG9iYWwudXNlclJlcG8gPSBuZXcgVXNlclJlcG8oY3VzdG9tZXJzTGlzdCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRBbGxCb29raW5ncyhib29raW5nc0xpc3QpIHtcbiAgZ2xvYmFsLmJvb2tpbmdzID0gbmV3IEJvb2tpbmdzKGJvb2tpbmdzTGlzdCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVVzZXJMb2dpbigpIHtcbiAgaWYgKHZlcmlmeUN1c3RvbWVyVXNlcm5hbWUoKSAmJiB2ZXJpZnlQYXNzd29yZCh1c2VyUGFzc3dvcmQpKSB7XG4gICAgbG9hZEN1c3RvbWVyKCk7XG4gICAgZGlzcGxheUN1c3RvbWVyVmlldyhcbiAgICAgIFwiI3Bhc3QtYm9va2luZ3MtZGF0ZVwiLFxuICAgICAgXCIjZnV0dXJlLWJvb2tpbmdzLWRhdGVcIixcbiAgICAgIFwiI3RvdGFsLXNwZW50XCJcbiAgICApO1xuICAgIHRvZ2dsZUxvZ2luUGFnZSh1c2VyUHJvZmlsZVBhZ2UpO1xuICB9IGVsc2Uge1xuICAgIGRpc3BsYXlMb2dpbkVycm9yTWVzc2FnZSh1c2VyTG9naW5CdXR0b24pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1hbmFnZXJMb2dpbigpIHtcbiAgaWYgKHZlcmlmeU1hbmFnZXJVc2VybmFtZSgpICYmIHZlcmlmeVBhc3N3b3JkKG1hbmFnZXJQYXNzd29yZCkpIHtcbiAgICBnbG9iYWwuY3VycmVudE1hbmFnZXIgPSBuZXcgTWFuYWdlcigpO1xuICAgIGRpc3BsYXlNYW5hZ2VyVmlldygpO1xuICB9IGVsc2Uge1xuICAgIGRpc3BsYXlMb2dpbkVycm9yTWVzc2FnZShtYW5hZ2VyTG9naW5CdXR0b24pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUN1c3RvbWVyVXNlcm5hbWUoKSB7XG4gIGxldCBjdXN0b21lciA9IHVzZXJSZXBvLmN1c3RvbWVycy5maW5kKCh1c2VyKSA9PiB7XG4gICAgcmV0dXJuIGN1c3RvbWVyVXNlcm5hbWUudmFsdWUgPT0gYGN1c3RvbWVyJHt1c2VyLmlkfWA7XG4gIH0pO1xuICByZXR1cm4gY3VzdG9tZXI7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU1hbmFnZXJVc2VybmFtZSgpIHtcbiAgcmV0dXJuIG1hbmFnZXJVc2VybmFtZS52YWx1ZSA9PT0gXCJtYW5hZ2VyXCI7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVBhc3N3b3JkKGlucHV0TG9jYXRpb24pIHtcbiAgcmV0dXJuIGlucHV0TG9jYXRpb24udmFsdWUgPT09IFwib3Zlcmxvb2syMDIwXCI7XG59XG5cbmZ1bmN0aW9uIGxvYWRDdXN0b21lcigpIHtcbiAgY3VycmVudEN1c3RvbWVySWQgPSB2ZXJpZnlDdXN0b21lclVzZXJuYW1lKCkuaWQ7XG4gIGNvbnN0IGN1cnJlbnRDdXN0b21lck5hbWUgPSB2ZXJpZnlDdXN0b21lclVzZXJuYW1lKCkubmFtZTtcbiAgY29uc3QgY3VycmVudEN1c3RvbWVyUGFzdEJvb2tpbmdzID0gc29ydEZ1dHVyZUJvb2tpbmdzKGN1cnJlbnRDdXN0b21lcklkKTtcbiAgY29uc3QgY3VycmVudEN1c3RvbWVyRnV0dXJlQm9va2luZ3MgPSBzb3J0UGFzdEJvb2tpbmdzKGN1cnJlbnRDdXN0b21lcklkKTtcbiAgZ2xvYmFsLmN1cnJlbnRDdXN0b21lciA9IG5ldyBDdXN0b21lcihcbiAgICBjdXJyZW50Q3VzdG9tZXJJZCxcbiAgICBjdXJyZW50Q3VzdG9tZXJOYW1lLFxuICAgIGN1cnJlbnRDdXN0b21lclBhc3RCb29raW5ncyxcbiAgICBjdXJyZW50Q3VzdG9tZXJGdXR1cmVCb29raW5nc1xuICApO1xufVxuXG5mdW5jdGlvbiBnZXREYXRlKCkge1xuICBnbG9iYWwuY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICBsZXQgdW5mb3JtYXR0ZWREYXRlID0gY3VycmVudERhdGUudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApO1xuICBjdXJyZW50RGF0ZSA9IHVuZm9ybWF0dGVkRGF0ZS5yZXBsYWNlQWxsKFwiLVwiLCBcIi9cIik7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgY3VycmVudERhdGUpO1xufVxuXG5mdW5jdGlvbiBsb2FkQWxsQ3VycmVudEN1c3RvbWVyQm9va2luZ3MoY3VzdG9tZXJJRCkge1xuICByZXR1cm4gYm9va2luZ3MuYm9va2luZ3NEYXRhLmZpbHRlcigoYm9va2luZykgPT4ge1xuICAgIHJldHVybiBib29raW5nLnVzZXJJRCA9PT0gY3VzdG9tZXJJRDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNvcnRGdXR1cmVCb29raW5ncyhjdXN0b21lcklEKSB7XG4gIHJldHVybiBsb2FkQWxsQ3VycmVudEN1c3RvbWVyQm9va2luZ3MoY3VzdG9tZXJJRCkuZmlsdGVyKChib29raW5nKSA9PiB7XG4gICAgcmV0dXJuIGJvb2tpbmcuZGF0ZSA8PSBjdXJyZW50RGF0ZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNvcnRQYXN0Qm9va2luZ3MoY3VzdG9tZXJJRCkge1xuICByZXR1cm4gbG9hZEFsbEN1cnJlbnRDdXN0b21lckJvb2tpbmdzKGN1c3RvbWVySUQpLmZpbHRlcigoYm9va2luZykgPT4ge1xuICAgIHJldHVybiBib29raW5nLmRhdGUgPiBjdXJyZW50RGF0ZTtcbiAgfSk7XG59XG5cbi8vIH5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn4gRE9NIH5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flxuXG5mdW5jdGlvbiB0b2dnbGVVc2VyTG9naW4oKSB7XG4gIGxldCBsb2dpbkJ1dHRvbk1lc3NhZ2VVc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5sb2dpbi1idXR0b24tbWVzc2FnZS11c2VyXCJcbiAgKTtcbiAgbG9naW5CdXR0b25NZXNzYWdlVXNlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICBsZXQgbG9naW5CdXR0b25NZXNzYWdlTWFuYWdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIubG9naW4tYnV0dG9uLW1lc3NhZ2UtbWFuYWdlclwiXG4gICk7XG4gIGxvZ2luQnV0dG9uTWVzc2FnZU1hbmFnZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgY3VzdG9tZXJMb2dpblZpZXcuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgbWFuYWdlckxvZ2luVmlldy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TG9naW5FcnJvck1lc3NhZ2UoYnV0dG9uTG9jYXRpb24pIHtcbiAgYnV0dG9uTG9jYXRpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgIFwiYWZ0ZXJlbmRcIixcbiAgICBgPGJyPjxwIGNsYXNzPVwiZXJyb3JcIiBpZD1cImxvZ2luLWVycm9yLW1lc3NhZ2VcIj5UaGUgdXNlcm5hbWUgb3IgcGFzc3dvcmQgeW91IGVudGVyZWQgaXMgaW5jb3JyZWN0LiBQbGVhc2UgdHJ5IGFnYWluLjwvcD5gXG4gICk7XG4gIHNldFRpbWVvdXQoKCkgPT4gcmVtb3ZlRXJyb3JNZXNzYWdlKCksIDMwMDApO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFcnJvck1lc3NhZ2UoKSB7XG4gIGxldCBsb2dpbkVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9naW4tZXJyb3ItbWVzc2FnZVwiKTtcbiAgbG9naW5FcnJvck1lc3NhZ2UuaW5uZXJIVE1MID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUN1c3RvbWVyVmlldyhsb2NhdGlvbjEsIGxvY2F0aW9uMiwgbG9jYXRpb24zKSB7XG4gIGRpc3BsYXlQYXN0Q3VzdG9tZXJCb29raW5ncyhsb2NhdGlvbjEpO1xuICBkaXNwbGF5VXBjb21pbmdDdXN0b21lckJvb2tpbmdzKGxvY2F0aW9uMik7XG4gIGRpc3BsYXlUb3RhbFNwZW50QnlDdXN0b21lcihsb2NhdGlvbjMpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVMb2dpblBhZ2UodXNlcikge1xuICBoZWFkaW5nLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIGhvbWVwYWdlLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIHVzZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVBhc3RDdXN0b21lckJvb2tpbmdzKGxvY2F0aW9uKSB7XG4gIGNvbnN0IGRhdGVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtsb2NhdGlvbn1gKTtcbiAgY3VycmVudEN1c3RvbWVyLnByZXZpb3VzQm9va2luZ3MuZm9yRWFjaCgoYm9va2luZykgPT4ge1xuICAgIGxldCBkYXRlQm9va2VkID0gYDxwPiR7Ym9va2luZy5kYXRlfTwvcD5gO1xuICAgIGRhdGVTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBkYXRlQm9va2VkKTtcbiAgfSk7XG5cbiAgY3VycmVudEN1c3RvbWVyLnByZXZpb3VzQm9va2luZ3MuZm9yRWFjaCgoYm9va2luZykgPT4ge1xuICAgIGNvbnN0IHByZXZpb3VzU3RheSA9IGFsbFJvb21zLnJvb21EYXRhLmZpbmQoKHJvb20pID0+IHtcbiAgICAgIHJldHVybiByb29tLm51bWJlciA9PT0gYm9va2luZy5yb29tTnVtYmVyO1xuICAgIH0pO1xuICAgIGNvbnN0IHJvb21OdW1iZXIgPSBwcmV2aW91c1N0YXkubnVtYmVyO1xuICAgIGNvbnN0IHJvb21UeXBlID0gcHJldmlvdXNTdGF5LnJvb21UeXBlO1xuICAgIGNvbnN0IGJlZFNpemUgPSBwcmV2aW91c1N0YXkuYmVkU2l6ZTtcbiAgICBjb25zdCBiZWRRdWFudGl0eSA9IHByZXZpb3VzU3RheS5udW1CZWRzO1xuICAgIGNvbnN0IHJvb21Db3N0ID0gcHJldmlvdXNTdGF5LmNvc3RQZXJOaWdodDtcbiAgICBjb25zdCBiaWRldEJvb2xlYW4gPSBwcmV2aW91c1N0YXkuYmlkZXQgPyBcIkluY2x1ZGVkXCIgOiBcIk5vdCBJbmNsdWRlZFwiO1xuXG4gICAgY29uc3Qgcm9vbU51bWJlclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3Qtcm9vbS1udW1iZXJcIik7XG4gICAgY29uc3Qgcm9vbVR5cGVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXN0LXJvb20tdHlwZVwiKTtcbiAgICBjb25zdCBiZWRTaXplU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzdC1iZWQtc2l6ZVwiKTtcbiAgICBjb25zdCBiZWRDb3VudFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3QtYmVkLWNvdW50XCIpO1xuICAgIGNvbnN0IHJvb21Db3N0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzdC1jb3N0LXBlci1uaWdodFwiKTtcbiAgICBjb25zdCBiaWRldFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3QtYmlkZXRcIik7XG5cbiAgICByb29tTnVtYmVyU2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICBcImJlZm9yZWVuZFwiLFxuICAgICAgYDxsaSBzdHlsZT1cImxpc3Qtc3R5bGUtdHlwZTpub25lO1wiPiR7cm9vbU51bWJlcn08L2xpPmBcbiAgICApO1xuICAgIHJvb21UeXBlU2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICBcImJlZm9yZWVuZFwiLFxuICAgICAgYDxsaSBzdHlsZT1cImxpc3Qtc3R5bGUtdHlwZTpub25lO1wiPiR7cm9vbVR5cGV9PC9saT5gXG4gICAgKTtcbiAgICBiZWRTaXplU2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICBcImJlZm9yZWVuZFwiLFxuICAgICAgYDxsaSBzdHlsZT1cImxpc3Qtc3R5bGUtdHlwZTpub25lO1wiPiR7YmVkU2l6ZX08L2xpPmBcbiAgICApO1xuICAgIGJlZENvdW50U2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICBcImJlZm9yZWVuZFwiLFxuICAgICAgYDxsaSBzdHlsZT1cImxpc3Qtc3R5bGUtdHlwZTpub25lO1wiPiR7YmVkUXVhbnRpdHl9PC9saT5gXG4gICAgKTtcbiAgICByb29tQ29zdFNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgIGA8bGkgc3R5bGU9XCJsaXN0LXN0eWxlLXR5cGU6bm9uZTtcIj4kJHtyb29tQ29zdH08L2xpPmBcbiAgICApO1xuICAgIGJpZGV0U2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICBcImJlZm9yZWVuZFwiLFxuICAgICAgYDxsaSBzdHlsZT1cImxpc3Qtc3R5bGUtdHlwZTpub25lO1wiPiR7YmlkZXRCb29sZWFufTwvbGk+YFxuICAgICk7XG4gIH0pO1xufVxuZnVuY3Rpb24gZGlzcGxheVVwY29taW5nQ3VzdG9tZXJCb29raW5ncyhsb2NhdGlvbikge1xuICBjb25zdCBkYXRlU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7bG9jYXRpb259YCk7XG4gIGN1cnJlbnRDdXN0b21lci5mdXR1cmVCb29raW5ncy5mb3JFYWNoKChib29raW5nKSA9PiB7XG4gICAgbGV0IGRhdGVCb29rZWQgPSBgPHA+JHtib29raW5nLmRhdGV9PC9wPmA7XG4gICAgZGF0ZVNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGRhdGVCb29rZWQpO1xuICB9KTtcblxuICBjdXJyZW50Q3VzdG9tZXIuZnV0dXJlQm9va2luZ3MuZm9yRWFjaCgoYm9va2luZykgPT4ge1xuICAgIGNvbnN0IHVwY29taW5nU3RheSA9IGFsbFJvb21zLnJvb21EYXRhLmZpbmQoKHJvb20pID0+IHtcbiAgICAgIHJldHVybiByb29tLm51bWJlciA9PT0gYm9va2luZy5yb29tTnVtYmVyO1xuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiB1cGNvbWluZ1N0YXkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coeyB1cGNvbWluZ1N0YXkgfSk7XG4gICAgICBjb25zdCByb29tTnVtYmVyID0gdXBjb21pbmdTdGF5Lm51bWJlcjtcbiAgICAgIGNvbnN0IHJvb21UeXBlID0gdXBjb21pbmdTdGF5LnJvb21UeXBlO1xuICAgICAgY29uc3QgYmVkU2l6ZSA9IHVwY29taW5nU3RheS5iZWRTaXplO1xuICAgICAgY29uc3QgYmVkUXVhbnRpdHkgPSB1cGNvbWluZ1N0YXkubnVtQmVkcztcbiAgICAgIGNvbnN0IHJvb21Db3N0ID0gdXBjb21pbmdTdGF5LmNvc3RQZXJOaWdodDtcbiAgICAgIGNvbnN0IGJpZGV0Qm9vbGVhbiA9IHVwY29taW5nU3RheS5iaWRldCA/IFwiSW5jbHVkZWRcIiA6IFwiTm90IEluY2x1ZGVkXCI7XG5cbiAgICAgIGNvbnN0IHJvb21OdW1iZXJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmdXR1cmUtcm9vbS1udW1iZXJcIik7XG4gICAgICBjb25zdCByb29tVHlwZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Z1dHVyZS1yb29tLXR5cGVcIik7XG4gICAgICBjb25zdCBiZWRTaXplU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZnV0dXJlLWJlZC1zaXplXCIpO1xuICAgICAgY29uc3QgYmVkQ291bnRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmdXR1cmUtYmVkLWNvdW50XCIpO1xuICAgICAgY29uc3Qgcm9vbUNvc3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmdXR1cmUtY29zdC1wZXItbmlnaHRcIik7XG4gICAgICBjb25zdCBiaWRldFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Z1dHVyZS1iaWRldFwiKTtcblxuICAgICAgcm9vbU51bWJlclNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICBcImJlZm9yZWVuZFwiLFxuICAgICAgICBgPGxpIHN0eWxlPVwibGlzdC1zdHlsZS10eXBlOm5vbmU7XCI+JHtyb29tTnVtYmVyfTwvbGk+YFxuICAgICAgKTtcbiAgICAgIHJvb21UeXBlU2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgIFwiYmVmb3JlZW5kXCIsXG4gICAgICAgIGA8bGkgc3R5bGU9XCJsaXN0LXN0eWxlLXR5cGU6bm9uZTtcIj4ke3Jvb21UeXBlfTwvbGk+YFxuICAgICAgKTtcbiAgICAgIGJlZFNpemVTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgICAgYDxsaSBzdHlsZT1cImxpc3Qtc3R5bGUtdHlwZTpub25lO1wiPiR7YmVkU2l6ZX08L2xpPmBcbiAgICAgICk7XG4gICAgICBiZWRDb3VudFNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICBcImJlZm9yZWVuZFwiLFxuICAgICAgICBgPGxpIHN0eWxlPVwibGlzdC1zdHlsZS10eXBlOm5vbmU7XCI+JHtiZWRRdWFudGl0eX08L2xpPmBcbiAgICAgICk7XG4gICAgICByb29tQ29zdFNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICBcImJlZm9yZWVuZFwiLFxuICAgICAgICBgPGxpIHN0eWxlPVwibGlzdC1zdHlsZS10eXBlOm5vbmU7XCI+JCR7cm9vbUNvc3R9PC9saT5gXG4gICAgICApO1xuICAgICAgYmlkZXRTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgICAgYDxsaSBzdHlsZT1cImxpc3Qtc3R5bGUtdHlwZTpub25lO1wiPiR7YmlkZXRCb29sZWFufTwvbGk+YFxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VG90YWxTcGVudEJ5Q3VzdG9tZXIobG9jYXRpb24pIHtcbiAgY29uc3QgdG90YWxTcGVudEJ5Q3VzdG9tZXIgPSBhbGxSb29tcy5yb29tRGF0YS5yZWR1Y2UoKHRvdGFsU3BlbnQsIHJvb20pID0+IHtcbiAgICBjdXJyZW50Q3VzdG9tZXIucHJldmlvdXNCb29raW5ncy5mb3JFYWNoKChib29raW5nKSA9PiB7XG4gICAgICBpZiAocm9vbS5udW1iZXIgPT09IGJvb2tpbmcucm9vbU51bWJlcikge1xuICAgICAgICB0b3RhbFNwZW50ICs9IHJvb20uY29zdFBlck5pZ2h0O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHRvdGFsU3BlbnQpO1xuICB9LCAwKTtcblxuICBjb25zdCB0b3RhbFNwZW5kaW5nU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7bG9jYXRpb259YCk7XG4gIHRvdGFsU3BlbmRpbmdTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTChcbiAgICBcImJlZm9yZWVuZFwiLFxuICAgIGA8cCBpZD1cInNwZW5kaW5nLW1lc3NhZ2VcIj5Ub3RhbCBTcGVudCAkJHt0b3RhbFNwZW50QnlDdXN0b21lcn08L3A+YFxuICApO1xufVxuXG5mdW5jdGlvbiBmZXRjaFJvb21EYXRhKCkge1xuICBmZXRjaChcImh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L3Jvb21zL3Jvb21zXCIpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IGxvYWRBbGxSb29tRGF0YShkYXRhLnJvb21zKSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRBbGxSb29tRGF0YShhbGxSb29tRGF0YSkge1xuICBjb25zb2xlLmxvZyh7IGFsbFJvb21EYXRhIH0pO1xuICBnbG9iYWwuYWxsUm9vbXMgPSBuZXcgUm9vbShhbGxSb29tRGF0YSk7XG4gIGFsbFJvb21zLnNvcnRSb29tc0J5VHlwZSgpO1xufVxuXG5mdW5jdGlvbiBzaG93VXBjb21pbmdCb29raW5ncygpIHtcbiAgdXBjb21pbmdCb29raW5nc0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gIHBhc3RCb29raW5nc0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gIGZ1dHVyZUJvb2tpbmdzU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICBwcmV2aW91c0Jvb2tpbmdzU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufVxuXG5mdW5jdGlvbiBzaG93UGFzdEJvb2tpbmdzKCkge1xuICB1cGNvbWluZ0Jvb2tpbmdzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgcGFzdEJvb2tpbmdzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgZnV0dXJlQm9va2luZ3NTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIHByZXZpb3VzQm9va2luZ3NTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG59XG5cbmZ1bmN0aW9uIHNlYXJjaEZvclJvb21zKHNlbGVjdGVkRGF0ZSwgc2VsZWN0ZWRSb29tVHlwZSkge1xuICBjb25zdCBhdmFpbGFibGVSb29tcyA9IGFsbFJvb21zW3NlbGVjdGVkUm9vbVR5cGVdLmZpbHRlcigocm9vbSkgPT4ge1xuICAgIGxldCBib29rZWRSb29tID0gYm9va2luZ3MuYm9va2luZ3NEYXRhLmZpbmQoKGJvb2tpbmcpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGJvb2tpbmcuZGF0ZSA9PT0gc2VsZWN0ZWREYXRlICYmIHJvb20ubnVtYmVyID09PSBib29raW5nLnJvb21OdW1iZXJcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIGJvb2tlZFJvb20gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGF2YWlsYWJsZVJvb21zO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5QXZhaWxhYmxlUm9vbXMoKSB7XG4gIGxldCBmb3JtYXR0ZWREYXRlID0gZGF0ZUlucHV0LnZhbHVlLnJlcGxhY2VBbGwoXCItXCIsIFwiL1wiKTtcbiAgbGV0IHJvb21UeXBlU2VsZWN0aW9uO1xuICBpZiAocm9vbUZpbHRlckRyb3Bkb3duLnZhbHVlID09PSBcImFsbC1yb29tc1wiKSB7XG4gICAgcm9vbVR5cGVTZWxlY3Rpb24gPSBcInJvb21EYXRhXCI7XG4gIH0gZWxzZSBpZiAocm9vbUZpbHRlckRyb3Bkb3duLnZhbHVlID09PSBcInNpbmdsZS1yb29tXCIpIHtcbiAgICByb29tVHlwZVNlbGVjdGlvbiA9IFwic2luZ2xlUm9vbXNcIjtcbiAgfSBlbHNlIGlmIChyb29tRmlsdGVyRHJvcGRvd24udmFsdWUgPT09IFwianVuaW9yLXN1aXRlXCIpIHtcbiAgICByb29tVHlwZVNlbGVjdGlvbiA9IFwianVuaW9yU3VpdGVzXCI7XG4gIH0gZWxzZSBpZiAocm9vbUZpbHRlckRyb3Bkb3duLnZhbHVlID09PSBcInN1aXRlXCIpIHtcbiAgICByb29tVHlwZVNlbGVjdGlvbiA9IFwic3VpdGVzXCI7XG4gIH0gZWxzZSBpZiAocm9vbUZpbHRlckRyb3Bkb3duLnZhbHVlID09PSBcInJlc2lkZW50aWFsLXN1aXRlXCIpIHtcbiAgICByb29tVHlwZVNlbGVjdGlvbiA9IFwicmVzaWRlbnRpYWxTdWl0ZXNcIjtcbiAgfVxuXG4gIGNvbnN0IGF2YWlsYWJsZUJvb2tpbmdzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjYXZhaWxhYmxlLWJvb2tpbmdzLXNlY3Rpb25cIlxuICApO1xuICBhdmFpbGFibGVCb29raW5nc1NlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgYm9va2luZ0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXG4gIGNvbnN0IHNlbGVjdG9yU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm9vbS10by1zZWxlY3RcIik7XG4gIGNvbnN0IHJvb21OdW1iZXJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNxdWVyaWVkLXJvb20tbnVtYmVyXCIpO1xuICBjb25zdCByb29tVHlwZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3F1ZXJpZWQtcm9vbS10eXBlXCIpO1xuICBjb25zdCBiZWRTaXplU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcXVlcmllZC1iZWQtc2l6ZVwiKTtcbiAgY29uc3QgYmVkQ291bnRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNxdWVyaWVkLWJlZC1jb3VudFwiKTtcbiAgY29uc3Qgcm9vbUNvc3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNxdWVyaWVkLWNvc3QtcGVyLW5pZ2h0XCIpO1xuICBjb25zdCBiaWRldFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3F1ZXJpZWQtYmlkZXRcIik7XG5cbiAgc2VsZWN0b3JTZWN0aW9uLmlubmVySFRNTCA9ICc8cCBjbGFzcz1cInJvb20tdG8tc2VsZWN0XCI+U2VsZWN0PC9wPic7XG4gIHJvb21OdW1iZXJTZWN0aW9uLmlubmVySFRNTCA9IFwiPHA+Um9vbSBOdW1iZXI8L3A+XCI7XG4gIHJvb21UeXBlU2VjdGlvbi5pbm5lckhUTUwgPSBcIjxwPlJvb20gVHlwZTwvcD5cIjtcbiAgYmVkU2l6ZVNlY3Rpb24uaW5uZXJIVE1MID0gXCI8cD5CZWQgU2l6ZTwvcD5cIjtcbiAgYmVkQ291bnRTZWN0aW9uLmlubmVySFRNTCA9IFwiPHA+TnVtYmVyIE9mIEJlZHM8L3A+XCI7XG4gIHJvb21Db3N0U2VjdGlvbi5pbm5lckhUTUwgPSBcIjxwPkNvc3QgUGVyIE5pZ2h0PC9wPlwiO1xuICBiaWRldFNlY3Rpb24uaW5uZXJIVE1MID0gXCI8cD5CaWRldD88L3A+XCI7XG5cbiAgaWYgKGZvcm1hdHRlZERhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgbGV0IHJlcXVpcmVkRGF0ZU1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlcXVpcmVkLWRhdGUtbWVzc2FnZVwiKTtcbiAgICByZXF1aXJlZERhdGVNZXNzYWdlLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXF1aXJlZERhdGVNZXNzYWdlLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgfSwgMzAwMCk7XG4gIH0gZWxzZSB7XG4gICAgc2VhcmNoRm9yUm9vbXMoZm9ybWF0dGVkRGF0ZSwgcm9vbVR5cGVTZWxlY3Rpb24pLmZvckVhY2goXG4gICAgICAoYXZhaWxhYmxlUm9vbSkgPT4ge1xuICAgICAgICBjb25zdCByb29tTnVtYmVyID0gYXZhaWxhYmxlUm9vbS5udW1iZXI7XG4gICAgICAgIGNvbnN0IHJvb21UeXBlID1cbiAgICAgICAgICBhdmFpbGFibGVSb29tLnJvb21UeXBlID09PSBcInNpbmdsZSByb29tXCJcbiAgICAgICAgICAgID8gYXZhaWxhYmxlUm9vbS5yb29tVHlwZS5zbGljZSgwLCA3KVxuICAgICAgICAgICAgOiBhdmFpbGFibGVSb29tLnJvb21UeXBlO1xuICAgICAgICBjb25zdCBiZWRTaXplID0gYXZhaWxhYmxlUm9vbS5iZWRTaXplO1xuICAgICAgICBjb25zdCBiZWRRdWFudGl0eSA9IGF2YWlsYWJsZVJvb20ubnVtQmVkcztcbiAgICAgICAgY29uc3Qgcm9vbUNvc3QgPSBhdmFpbGFibGVSb29tLmNvc3RQZXJOaWdodDtcbiAgICAgICAgY29uc3QgYmlkZXRCb29sZWFuID0gYXZhaWxhYmxlUm9vbS5iaWRldCA/IFwiSW5jbHVkZWRcIiA6IFwiTm90IEluY2x1ZGVkXCI7XG5cbiAgICAgICAgc2VsZWN0b3JTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICBcImJlZm9yZWVuZFwiLFxuICAgICAgICAgIGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJzZWxlY3RvclwiIGlkPSR7cm9vbU51bWJlcn0+PGJyPmBcbiAgICAgICAgKTtcbiAgICAgICAgcm9vbU51bWJlclNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgIFwiYmVmb3JlZW5kXCIsXG4gICAgICAgICAgYDxsaSBzdHlsZT1cImxpc3Qtc3R5bGUtdHlwZTpub25lO1wiPiR7cm9vbU51bWJlcn08L2xpPmBcbiAgICAgICAgKTtcbiAgICAgICAgcm9vbVR5cGVTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICBcImJlZm9yZWVuZFwiLFxuICAgICAgICAgIGA8bGkgc3R5bGU9XCJsaXN0LXN0eWxlLXR5cGU6bm9uZTtcIj4ke3Jvb21UeXBlfTwvbGk+YFxuICAgICAgICApO1xuICAgICAgICBiZWRTaXplU2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgICAgICBgPGxpIHN0eWxlPVwibGlzdC1zdHlsZS10eXBlOm5vbmU7XCI+JHtiZWRTaXplfTwvbGk+YFxuICAgICAgICApO1xuICAgICAgICBiZWRDb3VudFNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgIFwiYmVmb3JlZW5kXCIsXG4gICAgICAgICAgYDxsaSBzdHlsZT1cImxpc3Qtc3R5bGUtdHlwZTpub25lO1wiPiR7YmVkUXVhbnRpdHl9PC9saT5gXG4gICAgICAgICk7XG4gICAgICAgIHJvb21Db3N0U2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgICAgICBgPGxpIHN0eWxlPVwibGlzdC1zdHlsZS10eXBlOm5vbmU7XCI+JCR7cm9vbUNvc3R9PC9saT5gXG4gICAgICAgICk7XG4gICAgICAgIGJpZGV0U2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgICAgICBgPGxpIHN0eWxlPVwibGlzdC1zdHlsZS10eXBlOm5vbmU7XCI+JHtiaWRldEJvb2xlYW59PC9saT5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVCb29raW5nKCkge1xuICBsZXQgZm9ybWF0dGVkRGF0ZSA9IGRhdGVJbnB1dC52YWx1ZS5yZXBsYWNlQWxsKFwiLVwiLCBcIi9cIik7XG4gIGxldCBzZWxlY3RlZFJvb21zID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2VsZWN0b3JcIikpO1xuICBpZiAodHlwZW9mIGN1cnJlbnRDdXN0b21lcklkID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3VycmVudEN1c3RvbWVySWQgPSBjdXJyZW50Q3VzdG9tZXIuaWQ7XG4gIH1cbiAgc2VsZWN0ZWRSb29tcy5mb3JFYWNoKChzZWxlY3RlZFJvb20pID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRSb29tLmNoZWNrZWQpIHtcbiAgICAgIGxldCByb29tVG9Cb29rID0ge1xuICAgICAgICB1c2VySUQ6IGN1cnJlbnRDdXN0b21lcklkLFxuICAgICAgICBkYXRlOiBmb3JtYXR0ZWREYXRlLFxuICAgICAgICByb29tTnVtYmVyOiBwYXJzZUludChzZWxlY3RlZFJvb20uaWQpLFxuICAgICAgfTtcbiAgICAgIGlmIChcbiAgICAgICAgY3VycmVudEN1c3RvbWVyLmJvb2tSb29tKHJvb21Ub0Jvb2ssIGJvb2tpbmdzLmJvb2tpbmdzRGF0YSkgPT09IGZhbHNlXG4gICAgICApIHtcbiAgICAgICAgcG9zdEJvb2tpbmcocm9vbVRvQm9vayk7XG4gICAgICAgIGxldCBib29rUm9vbVN1Y2Nlc3NNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBcIiNib29rLXJvb20tc3VjY2Vzcy1tZXNzYWdlXCJcbiAgICAgICAgKTtcbiAgICAgICAgYm9va1Jvb21TdWNjZXNzTWVzc2FnZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBib29rUm9vbVN1Y2Nlc3NNZXNzYWdlLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICAgIH0sIDMwMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGUgYm9va2luZyBhbHJlYWR5IGV4aXN0cywgY2FudCBwb3N0XCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBvc3RCb29raW5nKGRhdGFUb1Bvc3QpIHtcbiAgZmV0Y2goXG4gICAgXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9ib29raW5ncy9ib29raW5nc1wiLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGFUb1Bvc3QpLFxuICAgIH1cbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChtZXNzYWdlKSA9PiBjb25zb2xlLmxvZyhcImJvb2tpbmcgd2FzIHBvc3RlZFwiKSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKSk7XG59XG5cbi8vIH5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn4gTWFuYWdlciBEYXNoYm9hcmQgfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5cbmZ1bmN0aW9uIGRpc3BsYXlNYW5hZ2VyVmlldygpIHtcbiAgdG9nZ2xlTG9naW5QYWdlKG1hbmFnZXJQcm9maWxlUGFnZSk7XG4gIHJvb21zQXZhaWxhYmxlVG9kYXkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgcmV2ZW51ZVRvZGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIHJvb21PY2N1cGllZFBlcmNlbnRhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgcm9vbXNBdmFpbGFibGVUb2RheS5pbm5lckhUTUwgPSBgPHA+TnVtYmVyIE9mIFJvb21zIEF2YWlsYWJsZSBUb2RheTwvcD48YnI+JHtkaXNwbGF5Um9vbXNBdmFpbGFibGVUb2RheSgpfWA7XG4gIGRpc3BsYXlUb2RheXNUb3RhbFJldmVudWUoKTtcbiAgcm9vbU9jY3VwaWVkUGVyY2VudGFnZS5pbm5lckhUTUwgPSBgPHA+UGVyY2VudGFnZSBPZiBSb29tcyBPY2N1cGllZCBUb2RheTwvcD48YnI+JHtkaXNwbGF5Um9vbU9jY3VwaWVkUGVyY2VudGFnZSgpfWA7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlSb29tc0F2YWlsYWJsZVRvZGF5KCkge1xuICBsZXQgYXZhaWxhYmxlUm9vbXMgPSBhbGxSb29tcy5yb29tRGF0YS5maWx0ZXIoKHJvb20pID0+IHtcbiAgICBsZXQgcm9vbUF2YWlsYWJsZSA9IHRydWU7XG4gICAgYm9va2luZ3MuYm9va2luZ3NEYXRhLmZvckVhY2goKGJvb2tpbmcpID0+IHtcbiAgICAgIGlmIChib29raW5nLmRhdGUgPT09IGN1cnJlbnREYXRlICYmIGJvb2tpbmcucm9vbU51bWJlciA9PT0gcm9vbS5udW1iZXIpIHtcbiAgICAgICAgcm9vbUF2YWlsYWJsZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByb29tQXZhaWxhYmxlO1xuICB9KTtcbiAgcmV0dXJuIGF2YWlsYWJsZVJvb21zLmxlbmd0aDtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvZGF5c1RvdGFsUmV2ZW51ZSgpIHtcbiAgbGV0IHRvZGF5c1JldmVudWUgPSBib29raW5ncy5ib29raW5nc0RhdGEucmVkdWNlKCh0b3RhbFJldmVudWUsIGJvb2tpbmcpID0+IHtcbiAgICBhbGxSb29tcy5yb29tRGF0YS5mb3JFYWNoKChyb29tKSA9PiB7XG4gICAgICBpZiAoY3VycmVudERhdGUgPT09IGJvb2tpbmcuZGF0ZSkge1xuICAgICAgICB0b3RhbFJldmVudWUgKz0gcm9vbS5jb3N0UGVyTmlnaHQ7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodG90YWxSZXZlbnVlKTtcbiAgfSwgMCk7XG4gIGNvbnN0IHRvZGF5c1JldmVudWVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXZlbnVlLXRvZGF5XCIpO1xuICB0b2RheXNSZXZlbnVlU2VjdGlvbi5pbm5lckhUTUwgPSBgPHA+VG9kYXkncyBUb3RhbCBSZXZlbnVlPC9wPjxicj48YnI+PHA+JCR7dG9kYXlzUmV2ZW51ZX08L3A+YDtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVJvb21PY2N1cGllZFBlcmNlbnRhZ2UoKSB7XG4gIGNvbnN0IHBlcmNlbnRPZk9jY3VwaWVkUm9vbXMgPVxuICAgIChkaXNwbGF5Um9vbXNBdmFpbGFibGVUb2RheSgpIC8gYWxsUm9vbXMucm9vbURhdGEubGVuZ3RoKSAqIDEwMDtcbiAgcmV0dXJuIGA8cD4ke3BlcmNlbnRPZk9jY3VwaWVkUm9vbXN9JTwvcD5gO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVTZWFyY2hGb3JDdXN0b21lcigpIHtcbiAgZmluZEN1c3RvbWVyQnlOYW1lKCk7XG4gIG1hbmFnZXJTaWRlQmFyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG59XG5cbmZ1bmN0aW9uIGZpbmRDdXN0b21lckJ5TmFtZSgpIHtcbiAgY29uc3QgY3VzdG9tZXJTZWFyY2hGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tZXItc2VhcmNoLWZpZWxkXCIpO1xuICBjb25zdCBxdWVyaWVkQ3VzdG9tZXIgPSBjdXJyZW50TWFuYWdlci5zZWFyY2hGb3JDdXN0b21lcihcbiAgICBjdXN0b21lclNlYXJjaEZpZWxkLnZhbHVlLFxuICAgIHVzZXJSZXBvLmN1c3RvbWVyc1xuICApO1xuICBpZiAoIXF1ZXJpZWRDdXN0b21lcikge1xuICAgIGxldCB1bmlkZW50aWZpZWRVc2VyTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIiN1bmlkZW50aWZpZWQtdXNlci1tZXNzYWdlXCJcbiAgICApO1xuICAgIHVuaWRlbnRpZmllZFVzZXJNZXNzYWdlLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB1bmlkZW50aWZpZWRVc2VyTWVzc2FnZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIH0sIDMwMDApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHF1ZXJpZWRDdXN0b21lclBhc3RCb29raW5ncyA9IHNvcnRQYXN0Qm9va2luZ3MocXVlcmllZEN1c3RvbWVyLmlkKTtcbiAgICBjb25zdCBxdWVyaWVkQ3VzdG9tZXJGdXR1cmVCb29raW5ncyA9IHNvcnRGdXR1cmVCb29raW5ncyhcbiAgICAgIHF1ZXJpZWRDdXN0b21lci5pZFxuICAgICk7XG4gICAgZ2xvYmFsLmN1cnJlbnRDdXN0b21lciA9IG5ldyBDdXN0b21lcihcbiAgICAgIHF1ZXJpZWRDdXN0b21lci5pZCxcbiAgICAgIHF1ZXJpZWRDdXN0b21lci5uYW1lLFxuICAgICAgcXVlcmllZEN1c3RvbWVyRnV0dXJlQm9va2luZ3MsXG4gICAgICBxdWVyaWVkQ3VzdG9tZXJQYXN0Qm9va2luZ3NcbiAgICApO1xuXG4gICAgZGlzcGxheUN1c3RvbWVyVmlldyhcbiAgICAgIFwiI3Bhc3QtYm9va2luZ3MtZGF0ZVwiLFxuICAgICAgXCIjZnV0dXJlLWJvb2tpbmdzLWRhdGVcIixcbiAgICAgIFwiI3RvdGFsLXNwZW50XCJcbiAgICApO1xuICAgIGNvbnN0IHVwY29taW5nQm9va2luZ3NUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIiN1cGNvbWluZy1ib29raW5ncy10aXRsZVwiXG4gICAgKTtcbiAgICBjb25zdCBwcmV2aW91c0Jvb2tpbmdzVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIjcHJldmlvdXMtYm9va2luZ3MtdGl0bGVcIlxuICAgICk7XG4gICAgdXBjb21pbmdCb29raW5nc1RpdGxlLmlubmVyVGV4dCA9IGBVcGNvbWluZyBCb29raW5ncyBGb3IgJHtjdXJyZW50Q3VzdG9tZXIubmFtZX1gO1xuICAgIHByZXZpb3VzQm9va2luZ3NUaXRsZS5pbm5lclRleHQgPSBgUHJldmlvdXMgQm9va2luZ3MgRm9yICR7Y3VycmVudEN1c3RvbWVyLm5hbWV9YDtcbiAgICB1c2VyUHJvZmlsZVBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBtYW5hZ2VyU2lkZUJhci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUN1c3RvbWVyTG9nb3V0KCkge1xuICBsb2dvdXQodXNlclByb2ZpbGVQYWdlKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTWFuYWdlckxvZ291dCgpIHtcbiAgY3VzdG9tZXJMb2dvdXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgdXNlclByb2ZpbGVQYWdlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIGxvZ291dChtYW5hZ2VyUHJvZmlsZVBhZ2UpO1xufVxuXG5mdW5jdGlvbiBsb2dvdXQodXNlcikge1xuICB0b2dnbGVMb2dpblBhZ2UodXNlcik7XG4gIC8vbWFuYWdlclByb2ZpbGVQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gIGxldCBzcGVuZGluZ01lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NwZW5kaW5nLW1lc3NhZ2VcIik7XG4gIGlmICh0eXBlb2Ygc3BlbmRpbmdNZXNzYWdlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKHNwZW5kaW5nTWVzc2FnZSA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBzcGVuZGluZ01lc3NhZ2UucmVtb3ZlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlQm9va2luZ0Zyb21BcGkoaWQpIHtcbiAgZmV0Y2goXG4gICAgXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9ib29raW5ncy9ib29raW5nc1wiLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpZCB9KSxcbiAgICB9XG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSlcbiAgICAvLy50aGVuKG1lc3NhZ2UgPT4gY29uc29sZS5sb2coJ2Jvb2tpbmcgd2FzIHBvc3RlZCcpKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRGVsZXRlQm9va2luZygpIHtcbiAgY29uc3Qgcm9vbU51bWJlclRvRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb29tLW51bWJlci10by1kZWxldGVcIik7XG4gIGNvbnN0IGRhdGVUb0RlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZS10by1kZWxldGVcIik7XG4gIGxldCBmb3JtYXR0ZWREYXRlID0gZGF0ZVRvRGVsZXRlLnZhbHVlLnJlcGxhY2VBbGwoXCItXCIsIFwiL1wiKTtcbiAgY29uc3QgYm9va2luZ1RvRGVsZXRlID0gYm9va2luZ3MuYm9va2luZ3NEYXRhLmZpbmQoKGJvb2tpbmcpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYm9va2luZy5kYXRlID09PSBmb3JtYXR0ZWREYXRlICYmXG4gICAgICBib29raW5nLnJvb21OdW1iZXIgPT0gcm9vbU51bWJlclRvRGVsZXRlLnZhbHVlXG4gICAgKTtcbiAgfSk7XG4gIGN1cnJlbnRNYW5hZ2VyLmRlbGV0ZUJvb2tlZFJvb20oY3VycmVudEN1c3RvbWVyLCBmb3JtYXR0ZWREYXRlKTtcbiAgLy9kZWxldGVCb29raW5nRnJvbUFwaShib29raW5nVG9EZWxldGUuaWQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==