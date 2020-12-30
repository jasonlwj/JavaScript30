const root = document.documentElement

const updateStyle = ({ target }) => {
	const suffix = target.dataset.sizing || ''
	const value = target.value + suffix
	root.style.setProperty(`--${target.name}`, value)
}

const inputs = document.querySelectorAll('input')

inputs.forEach(input => input.addEventListener('change', updateStyle))
