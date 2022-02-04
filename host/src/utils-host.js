import isNumber from 'is-number';

function HostUtils() {
    this.foo = 42;
}

HostUtils.prototype.sayIsNumber = (...args) => {
    return isNumber(...args);
};

export default HostUtils;