const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const clearBtn = document.getElementById('clear')
const sizeBtn = document.getElementById('size')
const colorBtn = document.getElementById('color')


const ctx = canvas.getContext("2d");

let isPressed = false

let size = 5
let color = 'black'
let x
let y

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY

})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined

})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
       const x2 = e.offsetX
       const y2 = e.offsetY

        drwaCircle(x2, y2)
        drwaLine(x, y, x2, y2)

        x = x2
        y= y2

    }

    

   
})


function drwaCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color
    ctx.fill();
}

function drwaLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

function updateSizeOnScreen() {
    sizeBtn.innerText = size
}

increaseBtn.addEventListener('click', () => {
    size += 5

    if(size > 30) {
        size = 30
    }

    updateSizeOnScreen()
})
decreaseBtn.addEventListener('click', () => {
    size -= 5

    if(size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})

clearBtn.addEventListener('click', (e) => ctx.clearRect(0, 0, canvas.width, canvas.height))

colorBtn.addEventListener('change', (e) => 
color = e.target.value)