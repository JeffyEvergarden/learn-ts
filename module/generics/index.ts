function createArray(length: number, value: any): Array<any> {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

console.log(createArray(3, 'x'));

// 泛型写法
function createArray2<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

console.log(createArray(3, 'x'));

// 交换值， 传了数组
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

console.log(swap([7, 'seven'])); // ['seven', 7]


//下例中，泛型 T 不一定包含属性 length，所以编译的时候报错了。
function loggingIdentity<T>(arg: T): T {
  // console.log(arg.length); //  error TS2339: Property 'length' does not exist on type 'T'.
  return arg;
}

// 多个类型互相约束
function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
    target[id] = (<T>source)[id];
    // 也可以这样写(<U>target)[id] = source[id];
    // 以下写法会报错
    // target[id] = source[id];  // 报错 “T”可以使用与“U”无关的任意类型进行实例化。
    // target[id] = <T>source[id]; // 不可以这样写
    (<U>target)[id] = source[id];
  }
  return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };
console.log(copyFields(x, { b: 10, d: 20 }));