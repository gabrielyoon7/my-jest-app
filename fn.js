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
        }, 0); // 제대로 테스트하려면 3000으로 수정하기
    },
    getAge: () => {
        const age = 30;
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(age);
            }, 0); // 제대로 테스트하려면 3000으로 수정하기
        });
    },
};
module.exports = fn;