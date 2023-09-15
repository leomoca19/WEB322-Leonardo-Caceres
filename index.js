const EventEmitter = require('events')
const myEventEmitter = new EventEmitter()

const lights = [
    {color:"green", duration:5000},
    {color:"yellow", duration:2000},
    {color:"red", duration:5000}

]

let i = 0
function lightChange() {
    myEventEmitter.emit('change-lights')
    i = i === 2 ? 0 : i + 1 //i++ wouldn't work, i = i++ wouldn't work as expected
    setTimeout(lightChange, lights[i].duration) //problem, each lights waits for the time of the next light because the index was incremented before this line is executed
}

// Implement an event emitter to emit an event ```console.log('The light just changed')```` whenever the color changes.
// Bonus: The event should include the current color as a parameter.
myEventEmitter.on('change-lights', ()=>{
    console.log(lights[i].color)
    console.log('The light just changed')
})

lightChange()