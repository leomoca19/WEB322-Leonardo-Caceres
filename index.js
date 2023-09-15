const EventEmitter = require('events')
const myEventEmitter = new EventEmitter()

const lights = [
    {color:"green", duration:5000},
    {color:"yellow", duration:2000},
    {color:"red", duration:5000}

]

let i = 0
function lightChange() {
    myEventEmitter.emit('change-lights', lights[i].color)
    i = i === 2 ? 0 : i + 1 //i++ wouldn't work, i = i++ wouldn't work as expected
    setTimeout(lightChange, lights[i].duration) //problem, each lights waits for the time of the next light because the index was incremented before this line is executed
}

myEventEmitter.on('change-lights', (color)=>{
    console.log(color)
    console.log('The light just changed')
})

lightChange()