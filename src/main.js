
if (typeof Promise === 'undefined') {
  var Promise = require('bluebird'); 
}

import {bootstrap} from 'aurelia-bootstrapper-webpack';

import '../node_modules/font-awesome/css/font-awesome.css';
import './styles/site.scss';

bootstrap(aurelia => {
  
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.start().then(() => aurelia.setRoot('app', document.body));
});