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
        //     // TODO: investigate why guestUtils here is "module=>module" but not just an object
        //     console.log('{ hostUtils, guestUtils }: ', {
        //         hostUtils: this.getHostUtils(),
        //         guestUtils: this.getGuestUtils(),
        //     });
        // });

        this.guestUtils = guestUtils;
    }

    getHostUtils() {
        return this.hostUtils;
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

export default Host;
