const breakdown = document.querySelector('#breakdown')
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

makeGreen = () => {
	const p = document.querySelector('p');
	p.style.color = '#BADA55';
	p.style.fontSize = '50px';
}

breakdown.addEventListener('click', makeGreen)

// Regular
console.log('YOUTUBE FROG LULW 7')

// Interpolated
console.log('%s FROG LULW 7', 'LULW')

// Styled
console.log('%c YOUTUBE FROG LULW 7', 'font-size: 20px')

// warning!
console.warn('YOUTUBE FROG LULW 7')

// Error :|
console.error('YOUTUBE FROG LULW 7')

// Info
console.info('YOUTUBE FROG LULW 7')

// Testing
console.assert(1 !== 1, 'YOUTUBE FROG LULW 7')

// clearing
console.clear()

// Viewing DOM Elements
console.dir(breakdown)

// Grouping together
dogs.forEach(dog => {
	console.group(dog.name)
	console.log(`This is ${dog.name}`)
	console.log(`${dog.name} is ${dog.age} years old`)
	console.log(`${dog.name} is ${dog.age * 7} dog years old`)
	console.groupEnd(dog.name)
})

// counting
console.count('YOUTUBE FROG LULW 7')
console.count('YOUTUBE FROG LULW 7')
console.count('YOUTUBE FROG KEKVV 7')

// timing
console.time('fetching data')
fetch('https://api.github.com/users/jasonlwj')
	.then(data => data.json())
	.then(json => {
		console.timeEnd('fetching data')
		console.log(json)
	})

// table
console.table(dogs)