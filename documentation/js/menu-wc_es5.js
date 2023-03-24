'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  var _super = _createSuper(_class);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">salad-bar-api documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-AppModule-87f085f3aefa116981d41b99b12c4ae437dbeeabb8a321b2e20b45e4e6a8a1600c7e4c9aacfe1bfb24e346b76d6650085b69fed9ecb978ce9a0eb6e2e60fcc6e"' : 'data-target="#xs-controllers-links-module-AppModule-87f085f3aefa116981d41b99b12c4ae437dbeeabb8a321b2e20b45e4e6a8a1600c7e4c9aacfe1bfb24e346b76d6650085b69fed9ecb978ce9a0eb6e2e60fcc6e"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AppModule-87f085f3aefa116981d41b99b12c4ae437dbeeabb8a321b2e20b45e4e6a8a1600c7e4c9aacfe1bfb24e346b76d6650085b69fed9ecb978ce9a0eb6e2e60fcc6e"' : 'id="xs-controllers-links-module-AppModule-87f085f3aefa116981d41b99b12c4ae437dbeeabb8a321b2e20b45e4e6a8a1600c7e4c9aacfe1bfb24e346b76d6650085b69fed9ecb978ce9a0eb6e2e60fcc6e"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AppController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppController</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"controllers/IngredientController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >IngredientController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AppModule-87f085f3aefa116981d41b99b12c4ae437dbeeabb8a321b2e20b45e4e6a8a1600c7e4c9aacfe1bfb24e346b76d6650085b69fed9ecb978ce9a0eb6e2e60fcc6e"' : 'data-target="#xs-injectables-links-module-AppModule-87f085f3aefa116981d41b99b12c4ae437dbeeabb8a321b2e20b45e4e6a8a1600c7e4c9aacfe1bfb24e346b76d6650085b69fed9ecb978ce9a0eb6e2e60fcc6e"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AppModule-87f085f3aefa116981d41b99b12c4ae437dbeeabb8a321b2e20b45e4e6a8a1600c7e4c9aacfe1bfb24e346b76d6650085b69fed9ecb978ce9a0eb6e2e60fcc6e"' : 'id="xs-injectables-links-module-AppModule-87f085f3aefa116981d41b99b12c4ae437dbeeabb8a321b2e20b45e4e6a8a1600c7e4c9aacfe1bfb24e346b76d6650085b69fed9ecb978ce9a0eb6e2e60fcc6e"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AppService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/DressingsService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DressingsService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/ToppingsService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ToppingsService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DataModule.html\" data-type=\"entity-link\" >DataModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SaladModule.html\" data-type=\"entity-link\" >SaladModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-SaladModule-4cd3cca5ed425549f8c8203933781c67b73d9cde1bcb1ad868dbc9cc97be8c08eb67fcb71531f83de95373639870a50c63d1ecdce0790a55ff133fb62558444d"' : 'data-target="#xs-controllers-links-module-SaladModule-4cd3cca5ed425549f8c8203933781c67b73d9cde1bcb1ad868dbc9cc97be8c08eb67fcb71531f83de95373639870a50c63d1ecdce0790a55ff133fb62558444d"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-SaladModule-4cd3cca5ed425549f8c8203933781c67b73d9cde1bcb1ad868dbc9cc97be8c08eb67fcb71531f83de95373639870a50c63d1ecdce0790a55ff133fb62558444d"' : 'id="xs-controllers-links-module-SaladModule-4cd3cca5ed425549f8c8203933781c67b73d9cde1bcb1ad868dbc9cc97be8c08eb67fcb71531f83de95373639870a50c63d1ecdce0790a55ff133fb62558444d"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/SaladController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SaladController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-SaladModule-4cd3cca5ed425549f8c8203933781c67b73d9cde1bcb1ad868dbc9cc97be8c08eb67fcb71531f83de95373639870a50c63d1ecdce0790a55ff133fb62558444d"' : 'data-target="#xs-injectables-links-module-SaladModule-4cd3cca5ed425549f8c8203933781c67b73d9cde1bcb1ad868dbc9cc97be8c08eb67fcb71531f83de95373639870a50c63d1ecdce0790a55ff133fb62558444d"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-SaladModule-4cd3cca5ed425549f8c8203933781c67b73d9cde1bcb1ad868dbc9cc97be8c08eb67fcb71531f83de95373639870a50c63d1ecdce0790a55ff133fb62558444d"' : 'id="xs-injectables-links-module-SaladModule-4cd3cca5ed425549f8c8203933781c67b73d9cde1bcb1ad868dbc9cc97be8c08eb67fcb71531f83de95373639870a50c63d1ecdce0790a55ff133fb62558444d"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/DressingsService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DressingsService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/SaladService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SaladService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/ToppingsService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ToppingsService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/CreateDressingDTO.html\" data-type=\"entity-link\" >CreateDressingDTO</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateSaladDTO.html\" data-type=\"entity-link\" >CreateSaladDTO</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateToppingDTO.html\" data-type=\"entity-link\" >CreateToppingDTO</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/DressingDTO.html\" data-type=\"entity-link\" >DressingDTO</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ToppingDTO.html\" data-type=\"entity-link\" >ToppingDTO</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/DressingPipe.html\" data-type=\"entity-link\" >DressingPipe</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/LoggerMiddleware.html\" data-type=\"entity-link\" >LoggerMiddleware</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/LoggingInterceptor.html\" data-type=\"entity-link\" >LoggingInterceptor</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ToppingsPipe.html\" data-type=\"entity-link\" >ToppingsPipe</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"', ">\n                            <span class=\"icon ion-ios-lock\"></span>\n                            <span>Guards</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"', ">\n                            <li class=\"link\">\n                                <a href=\"guards/AuthGuard.html\" data-type=\"entity-link\" >AuthGuard</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/Dressing.html\" data-type=\"entity-link\" >Dressing</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Salad.html\" data-type=\"entity-link\" >Salad</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Topping.html\" data-type=\"entity-link\" >Topping</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));