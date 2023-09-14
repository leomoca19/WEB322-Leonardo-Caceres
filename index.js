const EventEmitter = require('events')
const myEventEmitter = new EventEmitter()

const lights = [
    {color:"red", duration:5000},
    {color:"yellow", duration:2000},
    {color:"green", duration:5000}

]

let i = 0
function lightChange() {
    console.log(lights[i++].color)
    // i === 3 ? 0 : i++
    if(i === 3){
        i = 0
    }

    setTimeout(lightChange, lights[i].duration)
}

// The cycle should repeat indefinitely.
// Implement an event emitter to emit an event ```console.log('The light just changed')```` whenever the color changes.
// Bonus: The event should include the current color as a parameter.
// myEventEmitter.on('')///////////

lightChange()