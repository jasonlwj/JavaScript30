const video = document.querySelector('.viewer')
const progressBar = document.querySelector('.progress')
const progressFilled = document.querySelector('.progress__filled')
const playButton = document.querySelector('.toggle')
const fullscreenButton = document.querySelector('.fullscreen')
const skipButtons = document.querySelectorAll('[data-skip]')
const rangeSliders = document.querySelectorAll('input[type="range"]')

const updatePlaybackIcon = () => {
	const icon = (video.paused) ? '►' : '❚❚'
	playButton.textContent = icon
}

const togglePlayback = () => {
	if (video.paused) {
		video.play()
	} else {
		video.pause()
	}
}

const updateProgressBar = () => {
	const percentage = (video.currentTime / video.duration) * 100
	progressFilled.style.flexBasis = `${percentage}%`
}

const handleRangeUpdate = event => {
	video[event.target.name] = event.target.value
}

const scrubVideo = event => {
	const scrubPoint = event.offsetX / progressBar.offsetWidth
	const scrubTime = scrubPoint * video.duration
	video.currentTime = scrubTime
}

const skipTime = event => {
	const skipValue = event.target.dataset.skip
	video.currentTime = video.currentTime + parseInt(skipValue) 
}

const toggleFullscreen = () => {
	if (video.requestFullscreen()) video.requestFullscreen()
	if (video.webkitRequestFullscreen()) video.webkitRequestFullscreen()
	if (video.msRequestFullscreen()) video.msRequestFullscreen()
}

// video playback
video.addEventListener('timeupdate', updateProgressBar)
video.addEventListener('click', togglePlayback)
video.addEventListener('play', updatePlaybackIcon)
video.addEventListener('pause', updatePlaybackIcon)

// progress manipulation
let isScrubbing = false
progressBar.addEventListener('click', scrubVideo)
progressBar.addEventListener('mousemove', event => isScrubbing && scrubVideo(event))
progressBar.addEventListener('mousedown', () => isScrubbing = true)
progressBar.addEventListener('mouseup', () => isScrubbing = false)

// media controls
playButton.addEventListener('click', togglePlayback)
skipButtons.forEach(button => button.addEventListener('click', skipTime))
rangeSliders.forEach(slider => slider.addEventListener('change', handleRangeUpdate))
rangeSliders.forEach(slider => slider.addEventListener('mousemove', handleRangeUpdate))
fullscreenButton.addEventListener('click', toggleFullscreen)
