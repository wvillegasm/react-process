const data = {
  name: 'Mary',
  age: 56,
}

const service = { serviceName: 'X-filter' }

function displayMsg(fn) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!fn || typeof fn !== 'function') {
        reject(new Error('Function expected'))
        return
      }
      resolve(fn.call(this, data, service))
    }, 5000)
  })
}

export default displayMsg
