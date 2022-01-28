const utils = require('./utils/utils');

class Guest {
    constructor() {
        this.utils = utils;
    }

    getGuestUtils() {
        return this.utils;
    }
}

module.exports = Guest;
