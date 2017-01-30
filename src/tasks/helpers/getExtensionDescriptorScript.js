/*!
 * ADOBE SYSTEMS INCORPORATED
 * Copyright 2016 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
 * terms of the Adobe license agreement accompanying it.  If you have received this file from a
 * source other than Adobe, then your use, modification, or distribution of it requires the prior
 * written permission of Adobe.
 */

'use strict';

var getExtensionDescriptor = require('./getExtensionDescriptor');

module.exports = function() {
  return 'window.extensionDescriptor = ' +  JSON.stringify(getExtensionDescriptor()) + ';';
};
