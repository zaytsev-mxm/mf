import myUtils from './utils.js';

class Host {
    constructor() {
        this.myUtils = myUtils;

        // this.loadGuest();
    }

    loadGuest() {
        import('guest/utils').then((guestUtils) => {
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

export default Host;
