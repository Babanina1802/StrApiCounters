'use strict';

/**
 * vendor-modem service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vendor-modem.vendor-modem');
