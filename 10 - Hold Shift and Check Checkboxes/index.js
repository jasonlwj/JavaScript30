const checkboxes = document.querySelectorAll('.item input[type="checkbox"]')
let lastChecked = null

const handleCheck = event => {
	let inBetween = false
	
	if (event.target.checked && event.shiftKey) {
		checkboxes.forEach(checkbox => {
			if (checkbox === event.target || checkbox === lastChecked) {
				inBetween = !inBetween
			}

			if (inBetween) {
				checkbox.checked = true
			}
		})
	}

	lastChecked = event.target
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
