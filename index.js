const EventEmitter = require('events')
const myEventEmitter = new EventEmitter()

// Display "Red" using console.log for 5 seconds.
myEventEmitter.on('red', ()=>{
    console.log('red')
    setTimeout(()=>{
        console.log('')
    }, 5000)
})

// Display "Yellow" for 2 seconds.
myEventEmitter.on('yellow', ()=>{
    console.log('yellow')
    setTimeout(()=>{
        console.log('')
    }, 2000)
})

// Display "Green" for 5 seconds.
// The cycle should repeat indefinitely.
// Implement an event emitter to emit an event ```console.log('The light just changed')```` whenever the color changes.
// Bonus: The event should include the current color as a parameter.

myEventEmitter.emit('red')
myEventEmitter.emit('yellow')