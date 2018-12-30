const stubbedStorage = {}

const methods = ['getItem', 'setItem', 'removeItem']
methods.forEach(method => (stubbedStorage[method] = () => null))

let localStorage
try {
    localStorage = window.localStorage
}
catch (e) {
    if (e instanceof ReferenceError) {
        localStorage = stubbedStorage
    }
}

const storage = {
    get: key => JSON.parse(localStorage.getItem(key)),
    set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
    remove: key => localStorage.removeItem(key)
}

export default storage