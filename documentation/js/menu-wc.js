'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">salad-bar-api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-87f085f3aefa116981d41b99b12c4ae437dbeeabb8a321b2e20b45e4e6a8a1600c7e4c9aacfe1bfb24e346b76d6650085b69fed9ecb978ce9a0eb6e2e60fcc6e"' : 'data-target="#xs-controllers-links-module-AppModule-87f085f3aefa116981d41b99b12c4ae437dbeeabb8a321b2e20b45e4e6a8a1600c7e4c9aacfe1bfb24e346b76d6650085b69fed9ecb978ce9a0eb6e2e60fcc6e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-87f085f3aefa116981d41b99b12c4ae437dbeeabb8a321b2e20b45e4e6a8a1600c7e4c9aacfe1bfb24e346b76d6650085b69fed9ecb978ce9a0eb6e2e60fcc6e"' :
                                            'id="xs-controllers-links-module-AppModule-87f085f3aefa116981d41b99b12c4ae437dbeeabb8a321b2e20b45e4e6a8a1600c7e4c9aacfe1bfb24e346b76d6650085b69fed9ecb978ce9a0eb6e2e60fcc6e"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/IngredientController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IngredientController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-87f085f3aefa116981d41b99b12c4ae437dbeeabb8a321b2e20b45e4e6a8a1600c7e4c9aacfe1bfb24e346b76d6650085b69fed9ecb978ce9a0eb6e2e60fcc6e"' : 'data-target="#xs-injectables-links-module-AppModule-87f085f3aefa116981d41b99b12c4ae437dbeeabb8a321b2e20b45e4e6a8a1600c7e4c9aacfe1bfb24e346b76d6650085b69fed9ecb978ce9a0eb6e2e60fcc6e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-87f085f3aefa116981d41b99b12c4ae437dbeeabb8a321b2e20b45e4e6a8a1600c7e4c9aacfe1bfb24e346b76d6650085b69fed9ecb978ce9a0eb6e2e60fcc6e"' :
                                        'id="xs-injectables-links-module-AppModule-87f085f3aefa116981d41b99b12c4ae437dbeeabb8a321b2e20b45e4e6a8a1600c7e4c9aacfe1bfb24e346b76d6650085b69fed9ecb978ce9a0eb6e2e60fcc6e"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DressingsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DressingsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ToppingsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToppingsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DataModule.html" data-type="entity-link" >DataModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SaladModule.html" data-type="entity-link" >SaladModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SaladModule-4cd3cca5ed425549f8c8203933781c67b73d9cde1bcb1ad868dbc9cc97be8c08eb67fcb71531f83de95373639870a50c63d1ecdce0790a55ff133fb62558444d"' : 'data-target="#xs-controllers-links-module-SaladModule-4cd3cca5ed425549f8c8203933781c67b73d9cde1bcb1ad868dbc9cc97be8c08eb67fcb71531f83de95373639870a50c63d1ecdce0790a55ff133fb62558444d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SaladModule-4cd3cca5ed425549f8c8203933781c67b73d9cde1bcb1ad868dbc9cc97be8c08eb67fcb71531f83de95373639870a50c63d1ecdce0790a55ff133fb62558444d"' :
                                            'id="xs-controllers-links-module-SaladModule-4cd3cca5ed425549f8c8203933781c67b73d9cde1bcb1ad868dbc9cc97be8c08eb67fcb71531f83de95373639870a50c63d1ecdce0790a55ff133fb62558444d"' }>
                                            <li class="link">
                                                <a href="controllers/SaladController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SaladController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SaladModule-4cd3cca5ed425549f8c8203933781c67b73d9cde1bcb1ad868dbc9cc97be8c08eb67fcb71531f83de95373639870a50c63d1ecdce0790a55ff133fb62558444d"' : 'data-target="#xs-injectables-links-module-SaladModule-4cd3cca5ed425549f8c8203933781c67b73d9cde1bcb1ad868dbc9cc97be8c08eb67fcb71531f83de95373639870a50c63d1ecdce0790a55ff133fb62558444d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SaladModule-4cd3cca5ed425549f8c8203933781c67b73d9cde1bcb1ad868dbc9cc97be8c08eb67fcb71531f83de95373639870a50c63d1ecdce0790a55ff133fb62558444d"' :
                                        'id="xs-injectables-links-module-SaladModule-4cd3cca5ed425549f8c8203933781c67b73d9cde1bcb1ad868dbc9cc97be8c08eb67fcb71531f83de95373639870a50c63d1ecdce0790a55ff133fb62558444d"' }>
                                        <li class="link">
                                            <a href="injectables/DressingsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DressingsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SaladService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SaladService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ToppingsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToppingsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateDressingDTO.html" data-type="entity-link" >CreateDressingDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSaladDTO.html" data-type="entity-link" >CreateSaladDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateToppingDTO.html" data-type="entity-link" >CreateToppingDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/DressingDTO.html" data-type="entity-link" >DressingDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/ToppingDTO.html" data-type="entity-link" >ToppingDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DressingPipe.html" data-type="entity-link" >DressingPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerMiddleware.html" data-type="entity-link" >LoggerMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggingInterceptor.html" data-type="entity-link" >LoggingInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToppingsPipe.html" data-type="entity-link" >ToppingsPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Dressing.html" data-type="entity-link" >Dressing</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Salad.html" data-type="entity-link" >Salad</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Topping.html" data-type="entity-link" >Topping</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});