const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
const cities = []
const searchBar = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

fetch(endpoint)
	.then(response => response.json())
	.then(data => cities.push(...data))

const findMatches = (query, cities) => (
	cities.filter(place => {
		const regex = new RegExp(query, 'gi')
		return place.city.match(regex) || place.state.match(regex)
	})
)

const formatLargeNumber = number => (
	number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
)

const updateResults = event => {
	const query = event.target.value
	const filteredCities = findMatches(query, cities)
	const newHTML = filteredCities.map(place => {
		const regex = new RegExp(query, 'gi')
		const formattedCity = place.city.replace(regex, `<span class="hl">${query}</span>`)
		const formattedState = place.state.replace(regex, `<span class="hl">${query}</span>`)
		return `
			<li>
				<span class="name">${formattedCity}, ${formattedState}</span>
				<span class="population">${formatLargeNumber(place.population)}</span>
			</li>
		`
	}).join('')
	suggestions.innerHTML = newHTML
}

searchBar.addEventListener('input', updateResults)
