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
});

// toBeTruthy
// toBeFalsy

test('0은 false 입니다.', () => {
    expect(fn.add(1, -1)).toBeFalsy();
});

test('비어있지 않은 문자열을 true 입니다.', () => {
    expect(fn.add('hello', 'world')).toBeTruthy();
});

// toBeGreaterThan 크다
// toBeGreaterThanOrEqual 크거나 같다
// toBeLessThan 작다
// toBeLessThanOrEqaul 작거나 같다

test('ID는 10자 이하여야 합니다.', () => {
    const id = 'GABRIELYOO'
    expect(id.length).toBeLessThanOrEqual(10);
});

test('비밀번호는 4자리 입니다.', () => {
    const pw = '1234'
    expect(pw.length).toEqual(4);
});

test('0.1 더하기 0.2 는 0.3 입니다.', () => {
    expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3); //근사값
});

// 글자 처리

test('Hello World에 h라는 글자가 있나?', () => {
    expect('Hello World').toMatch(/h/i);
});

//toContain

test('유저 리스트에 Gabriel이 있는가?', () => {
    const user = "Gabriel";
    const userList = ['Tom', 'Mike', 'Gabriel'];
    expect(userList).toContain(user);
});

// errror

test('이거 에러 남?', () => {
    expect(() => fn.throwErr()).toThrow();
});

test('이거 에러 남?', () => {
    expect(() => fn.throwErr()).toThrow('xx'); // error 내용 일치 여부도 검사할 수 있음
});

// 비동기

test("3초 후에 받아온 이름은 Gabriel", (done) => {
    function callback(name) {
        expect(name).toBe("Gabriel");
        done(); //기다려라
    }
    fn.getName(callback);
});

// Promise를 이용한 비동기
test("3초 후에 받아온 나이는 30", () => {
    //Promise 쓰려면 테스트 함수에서 반드시 return 해줘야 함
    return fn.getAge().then(age => {
        expect(age).toBe(30);
    })
});

// Promise를 이용한 비동기 (resolves, rejects)
test("3초 후에 받아온 나이는 30 (resolves, rejects)", () => {
    //Promise 쓰려면 테스트 함수에서 반드시 return 해줘야 함
    return expect(fn.getAge()).resolves.toBe(30); //rejects도 가능함
});


// async/await을 이용한 
test("3초 후에 받아온 나이는 30", async () => {
    const age = await fn.getAge();
    expect(age).toBe(30);
});

// beforeEach를 사용하면 순서대로 처리하는 것도 가능함.