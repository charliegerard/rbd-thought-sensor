module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var thoughtSensor = function thoughtSensor(api) {
    var ws = new WebSocket('ws://localhost:3030');
    ws.onopen = function () {
        console.log('WebSocket connection established');
    };

    var start = (0, _react.useCallback)(function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
            var _actions, moveUp, moveDown, moveLeft, moveRight, drop;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            event.data === 'disappear' && setDisplay(false);

                            if (!(event.data === 'tab-forward')) {
                                _context.next = 6;
                                break;
                            }

                            counter += 1;
                            document.querySelectorAll("[data-rbd-draggable-id=task-" + counter + "]")[0].focus();
                            _context.next = 41;
                            break;

                        case 6:
                            if (event.data === 'select') {
                                preDrag = api.tryGetLock('task-' + counter);
                                actions = preDrag.snapLift();
                            }

                            if (preDrag) {
                                _context.next = 11;
                                break;
                            }

                            return _context.abrupt('return');

                        case 11:
                            if (!actions) {
                                _context.next = 40;
                                break;
                            }

                            _actions = actions, moveUp = _actions.moveUp, moveDown = _actions.moveDown, moveLeft = _actions.moveLeft, moveRight = _actions.moveRight, drop = _actions.drop;
                            _context.t0 = event.data;
                            _context.next = _context.t0 === 'down' ? 16 : _context.t0 === 'up' ? 21 : _context.t0 === 'left' ? 26 : _context.t0 === 'right' ? 31 : _context.t0 === 'drop' ? 36 : 39;
                            break;

                        case 16:
                            _context.next = 18;
                            return delay(moveDown);

                        case 18:
                            _context.next = 20;
                            return delay(drop);

                        case 20:
                            return _context.abrupt('break', 40);

                        case 21:
                            _context.next = 23;
                            return delay(moveUp);

                        case 23:
                            _context.next = 25;
                            return delay(drop);

                        case 25:
                            return _context.abrupt('break', 40);

                        case 26:
                            _context.next = 28;
                            return delay(moveLeft);

                        case 28:
                            _context.next = 30;
                            return delay(drop);

                        case 30:
                            return _context.abrupt('break', 40);

                        case 31:
                            _context.next = 33;
                            return delay(moveRight);

                        case 33:
                            _context.next = 35;
                            return delay(drop);

                        case 35:
                            return _context.abrupt('break', 40);

                        case 36:
                            _context.next = 38;
                            return delay(drop);

                        case 38:
                            return _context.abrupt('break', 40);

                        case 39:
                            return _context.abrupt('break', 40);

                        case 40:
                            preDrag.abort();

                        case 41:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function start(_x) {
            return _ref.apply(this, arguments);
        }

        return start;
    }(), [api]);

    (0, _react.useEffect)(function () {
        ws.onmessage = function (event) {
            return start(event);
        };
        return function () {};
    }, [start]);
};

exports.default = thoughtSensor;

/***/ })
/******/ ]);