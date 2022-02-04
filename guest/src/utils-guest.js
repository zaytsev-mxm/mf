import isNumber from 'is-number';

function GuestUtils() {
    this.bar = 24;
}

GuestUtils.prototype.sayIsNumber = (...args) => {
    return isNumber(...args);
};

export default GuestUtils;