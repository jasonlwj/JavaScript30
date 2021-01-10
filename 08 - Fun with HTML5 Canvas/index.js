const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 30
ctx.globalCompositeOperation = 'luminosity'

let isDrawing = false
let lastX = 0
let lastY = 0
let hue = 0

const draw = event => {
		if (!isDrawing) return
	
		ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
		ctx.beginPath()
		ctx.moveTo(lastX, lastY)
		ctx.lineTo(event.offsetX, event.offsetY)
		ctx.stroke()
	
		;[lastX, lastY] = [event.offsetX, event.offsetY]

		hue = (hue >= 360) 
			? 0 
			: hue + 1
}

const startLine = event => {
		isDrawing = true
		;[lastX, lastY] = [event.offsetX, event.offsetY]
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', startLine)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)
