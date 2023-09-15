const EventEmitter = require('events')
const myEventEmitter = new EventEmitter()

const lights = [
    {color:"red", duration:5000},
    {color:"yellow", duration:2000},
    {color:"green", duration:5000}

]

let i = 0
function lightChange() {
    console.log(lights[i].color)
    i = i === 2 ? 0 : i + 1 //i++ wouldn't work, i = i++ wouldn't work as expected
    setTimeout(lightChange, lights[i].duration)
}

// Implement an event emitter to emit an event ```console.log('The light just changed')```` whenever the color changes.
// Bonus: The event should include the current color as a parameter.
// myEventEmitter.on('')///////////

lightChange()