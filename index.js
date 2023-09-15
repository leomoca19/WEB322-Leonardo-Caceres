const EventEmitter = require('events')
const myEventEmitter = new EventEmitter()

const lights = [
    {color:"green", duration:5000},
    {color:"yellow", duration:2000},
    {color:"red", duration:5000}

]

let i = -1
function lightChange() {
    i = i === 2 ? 0 : i + 1
    myEventEmitter.emit('change-lights', lights[i].color)
    setTimeout(lightChange, lights[i].duration) 
}

myEventEmitter.on('change-lights', (color)=>{
    console.log(color)
    console.log('The light just changed')
})

lightChange()