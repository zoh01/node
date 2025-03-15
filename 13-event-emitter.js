const EventEmitter = require('events');

const customEmitter = new EventEmitter

customEmitter.on('response', (name, id) => {
  console.log(`data received user ${name} with id:${id}`)
})
customEmitter.emit('response')
customEmitter.emit('response', () => {
  console.log(`Some other logic here`)
})
customEmitter.emit('response', 'john', 34)