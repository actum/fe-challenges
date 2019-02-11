import 'babel-polyfill';
/**
 * https://github.com/Keyamoon/svgxuse
 * If you do not use SVG <use xlink:href="…"> elements, remove svgxuse module
 */
import 'svgxuse';

// import { init } from './helpers/init';
// import { render, renderFactory } from './render';
// import configureStore from './store/configureStore';

/**
 * The core component initialization method
 * @param {HTMLElement} container - The container within which components will be initialized
 */
const app = (_container, _config) => {
  // Init components (single occurance)
  // Init components (multiple occurance)
  // initMultiple(module, container.getElementsByClassName('js-accordion'));
  // const store = configureStore(config);
};

// Init the components
app(document, window.config);

// Define a global JS function that can be called from window object (BE can init FE components)
window.reinitJs = app;
