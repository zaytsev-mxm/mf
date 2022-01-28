import utils from './utils-guest.js';

class Guest {
    constructor() {
        this.utils = utils;
    }

    getGuestUtils() {
        return this.utils;
    }
}

export default Guest;
