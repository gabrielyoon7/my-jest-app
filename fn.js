const fn = {
    add: (a, b) => a + b,
    makeUser: (name, age) => ({ name, age }),
    throwErr: () => {
        throw new Error('xx');
    },
};
module.exports = fn;