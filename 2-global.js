// __dirname - path at current directory
// __filename - file name
// require - function to use modules
// module - info about current module
// process - info about env. where program is being executed


console.log(__dirname)
console.log(__filename)
console.log(require)
console.log(process)
setInterval(() => {
	console.log('Jameson')
},1000)