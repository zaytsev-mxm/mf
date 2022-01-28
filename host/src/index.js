import myUtils from './utils.js';

class Host {
    constructor() {
        this.myUtils = myUtils;

        // this.loadGuest();
    }

    loadGuest() {
        import('guest/utils').then((guestUtils) => {
            this.guestUtils = guestUtils;
        }).then(() => {
            const myUtils = this.getMyUtils();
            const guestUtils = this.getGuestUtils();

            // TODO: investigate why guestUtils here is "module=>module" but not just an object
            console.log('{ myUtils, guestUtils }: ', { myUtils, guestUtils });
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
