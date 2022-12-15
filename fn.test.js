const fn = require('./fn');

test('1은 1이야.', () => {
    expect(1).toBe(1);
});

test('2더하기 3은 5야.', () => {
    expect(fn.add(2, 3)).toEqual(5);
});

test('3더하기 3은 5아니야.', () => {
    expect(fn.add(3, 3)).not.toBe(5);
});

// test('이름과 나이를 전달받아서 객체를 반환해줘', () => {
//     expect(fn.makeUser("Mike", 30)).toBe({ //error
//         name: "Mike",
//         age: 30,
//     });
// });

test('이름과 나이를 전달받아서 객체를 반환해줘', () => {
    expect(fn.makeUser("Mike", 30)).toEqual({
        name: "Mike",
        age: 30,
    });
});

test('이름과 나이를 전달받아서 객체를 반환해줘', () => {
    expect(fn.makeUser("Mike", 30)).toStrictEqual({
        name: "Mike",
        age: 30,
    });
});

// toBeNull
// toBeUndefined
// toBeDefined

test('null은 null 입니다.', () => {
    expect(null).toBeNull();
})

// toBeTruthy
// toBeFalsy

test('0은 false 입니다.', () => {
    expect(fn.add(1, -1)).toBeFalsy();
})

test('비어있지 않은 문자열을 true 입니다.', () => {
    expect(fn.add('hello', 'world')).toBeTruthy();
})