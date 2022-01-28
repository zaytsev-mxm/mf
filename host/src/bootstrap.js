import hostUtils from './utils-host.js';
import guestUtils from 'guest/guest-utils';

class Host {
    constructor() {
        this.hostUtils = hostUtils;

        // this.loadGuest();
    }

    loadGuest() {
        // import('guest/guest-utils').then((guestUtils) => {
        //     this.guestUtils = guestUtils;
        // }).then(() => {
        //     this.showUtils();
        // });

        this.guestUtils = guestUtils;
    }

    showUtils() {
        // TODO: investigate why "getGuestUtils" here is "module=>module.default" but not just an object
        console.log('{ hostUtils, guestUtils }: ', {
            hostUtils: this.getHostUtils(),
            guestUtils: this.getGuestUtils(),
        });
    }

    getHostUtils() {
        return this.hostUtils;
    }

    getGuestUtils() {
        return this.guestUtils;
    }
}

window.onload = handleLoaded;

function handleLoaded() {
    const host = new Host();
    // console.log('{ host }: ', { host });

    const btnEl = document.querySelector('#btn');
    btnEl.addEventListener('click', function handleClick() {
        host.loadGuest();
        host.showUtils();
    });
}

export default Host;
