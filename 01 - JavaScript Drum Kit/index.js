const handleKeypress = event => {
	const keyPressed = event.key.toLowerCase()
	const keyTag = document.querySelector(`div.key[data-key='${keyPressed}']`)
	const audioTag = document.querySelector(`audio[data-key='${keyPressed}']`)
	
	if (!audioTag)
		return
	
	audioTag.currentTime = 0
	audioTag.play()
	keyTag.classList.add('playing')
}

const removeTransition = event => {
	if (event.propertyName !== 'transform')
		return
	
	event.target.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

document.addEventListener('keydown', handleKeypress)
