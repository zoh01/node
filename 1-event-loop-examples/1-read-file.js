const { readFile, writeFile } = require('fs')

console.log('Started the first task')
// CHECK FILE PATH!!!
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('Completed first task')
})
console.log('Starting next task')
