require('./../scss/main.scss');

window.Popper = require('popper.js');
require('bootstrap');
require('share-api-polyfill');
require('./components/closest');
require('./components/share');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
