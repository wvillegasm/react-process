// import 'babel-polyfill'
import displayMsg from './helper/lib'

async function callDisplay() {
  console.log('Begining lib demo')
  try {
    const m = await displayMsg((data, service) => `Give some details: ${JSON.stringify(data)} & service: ${JSON.stringify(service)}`)
    console.log('X: ', m)
  } catch (e) {
    console.error(e)
  }
  console.log('Finishing XXX')
}

console.log('Before callDisplay - dispatch')
callDisplay()
console.log('After callDisplay')
callDisplay()

if (module.hot) {
  module.hot.accept()
}
