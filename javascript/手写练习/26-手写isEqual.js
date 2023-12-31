function isObject(obj) {
    return (typeof obj === 'object' && null !== obj);
}

function isEqual(obj1, obj2) {
    // 1.判断是不是引用类型，不是引用
    if (!isObject(obj1) || !isObject(obj2)) {
        return obj1 === obj2;
    }
    // 2.比较是否为同一个内存地址
    if (obj1 === obj2) return true;
    // 3.比较 key 的数量
    const obj1KeysLength = Object.keys(obj1).length;
    const obj2KeysLength = Object.keys(obj2).length;
    if (obj1KeysLength !== obj2KeysLength) return false;
    // 4.比较 value 的值
    for (let key in obj1) {
        const result = isEqual(obj1[key], obj2[key]);
        if(!result) return false;
    }
    return true;
}

const obj1 = {
    a: 100,
    b: {
        x: 200,
        y: 300
    },
    c: 400
}

const obj2 = {
    a: 100,
    b: {
        x: 200,
        y: 300
    },
    c: 400
}

console.log(obj1 === obj1);
console.log(isEqual(obj1, obj2));
