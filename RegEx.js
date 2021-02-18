const htmlString = '<label>Username: John Doe</label>'
const result = htmlString.match(/<label>(.+)<\/label>/)

// console.log(result[1], result[1].split(": ")[1])
console.log(result[1].split(": "))