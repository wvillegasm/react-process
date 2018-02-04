import displayMsg from './helper/lib'

async function callDisplay() {
  console.log('Begining lib')
  try {
    const m = await displayMsg((data, service) => `Give some details: ${JSON.stringify(data)} & service: ${JSON.stringify(service)}`)
    console.log('X: ', m)
  } catch (e) {
    console.error(e)
  }
  console.log('Finishing lib')
}

console.log('Before callDisplay')
callDisplay()
console.log('After callDisplay')
callDisplay()
