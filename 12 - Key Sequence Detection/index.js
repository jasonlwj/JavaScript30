const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
const keyHistory = []

const doSomething = event => {
	keyHistory.push(event.key)
	keyHistory.splice(0, keyHistory.length - secretCode.length)
	
	console.log(keyHistory.join() === secretCode.join())
}

window.addEventListener('keydown', doSomething)