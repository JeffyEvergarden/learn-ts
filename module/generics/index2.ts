//泛型接口
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
let mySearch2: SearchFunc;

// 以下写法：
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1;
}
mySearch2 = function (a: string, b: string) {
  return a.search(b) !== -1;
}

// 泛型接口形式写法
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>;
}
// 也能提到外面的写法
interface CreateArrayFunc2<T> {
  (length: number, value: T): Array<T>;
}

let createArray3: CreateArrayFunc;
createArray3 = function <T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

createArray3(3, 'x'); // ['x', 'x', 'x']


// 泛型类的设计
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };

// 泛型的默认制定类型
function createArray4<T = string>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
      result[i] = value;
  }
  return result;
}