interface Person {
	name: string
	age: number
}

// 可选属性
interface Apple {
	name: string
	age?: number
}

// 1、少参数会报错
// let tom: Person = {
// 	name: 'Tom'
// }

// 2、多参数会报错
// let tom: Person = {
// 	name: 'Tom',
// 	age: 25,
// 	gender: 'male'
// }

// 3、任意类型用例
let apple: Apple = {
	name: 'Tom'
}

// 4、设置了可选属性 多参数依然会报错
// let apple2: Apple = {
//   name: 'Tom',
//   age: 25,
//   gender: 'male'
// };

//  一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子
interface Person2 {
	name: string
	age?: number
	[propName: string]: any
}

// 若以上使用 [propName: string] 定义了任意属性取 string 类型的值。 会报错
let tom2: Person2 = {
	name: 'Tom',
	age: 25,
	gender: 'male'
}

// 只读属性
interface Person3 {
	readonly id: number
	name: string
	age?: number
	[propName: string]: any
}

let person3: Person3 = {
	id: 89757,
	name: 'Tom',
	gender: 'male'
}

// person3.id = 9527 // 设置了只读属性会报错