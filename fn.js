const fn = {
    add: (a, b) => a + b,
    makeUser: (name, age) => ({ name, age }),
    throwErr: () => {
        throw new Error('xx');
    },
    getName: callback => {
        const name = "Gabriel";
        setTimeout(() => {
            callback(name);
        }, 3000);
    }
};
module.exports = fn;