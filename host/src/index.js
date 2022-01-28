const myUtils = require('./utils');

class Host {
    constructor() {
        this.myUtils = myUtils;

        // this.loadGuest();
    }

    loadGuest() {
        require.ensure(['guest/utils'], (require) => {
            const guestUtils = require('guest/utils');
            this.guestUtils = guestUtils;
            console.log('{ guestUtils }: ', {guestUtils});
        });
    }

    getMyUtils() {
        return this.myUtils;
    }

    getGuestUtils() {
        return this.guestUtils;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const host = new Host();
    // console.log('{ host }: ', { host });

    const btnEl = document.querySelector('#btn');
    btnEl.addEventListener('click', function handleClick() {
        host.loadGuest();
    });
})

module.exports = Host;
