;/*!com/global/1.0.0:dollar*/
define('com/global/1.0.0:dollar', ['lib/jquery/1.11.3:jquery'], function(require, exports, module) {

  module.exports = require('lib/jquery/1.11.3:jquery');

});

;/*!com/global/1.0.0:global*/
define('com/global/1.0.0:global', ['com/global/1.0.0:dollar'], function(require, exports, module) {

  var $ = require('com/global/1.0.0:dollar');
  // @require 'com/global/1.0.0:global.css';
  

});
