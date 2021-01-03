const panels = document.querySelectorAll('.panel')

const expandPanel = panel => {
	panel.classList.toggle('open')
}

const toggleActive = event => {
	if (event.propertyName.includes('flex')) {
		event.target.classList.add('open-active')
	}
}

panels.forEach(panel => {
	panel.addEventListener('click', () => expandPanel(panel))
})

panels.forEach(panel => {
	panel.addEventListener('transitionend', toggleActive)
})
