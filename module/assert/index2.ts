interface Cat {
	name: string
	run(): void
}
interface Fish {
	name: string
	swim(): void
}
// 以下会报错
// function isFish2(animal: Cat | Fish) {
//   if (typeof animal.swim === 'function') {
//       return true;
//   }
//   return false;
// }

function isFish(animal: Cat | Fish) {
	if (typeof (animal as Fish).swim === 'function') {
		return true
	}
	return false
}
