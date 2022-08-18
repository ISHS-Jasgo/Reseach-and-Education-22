var neurosky = require('node-thinkgear')
var fs = require('fs')
var net = require('net')

var client = neurosky.createClient({
	appName: 'NodeNeuroSky',
	appKey: '0fc4141b4b45c675cc8d3a765b8d71c5bde9390'
})

var json = {}
var list = new Array()
const socket = net.connect({ host: 'localhost', port: '3000' }, () => {
	console.log("Connected to Server")
})

function writeData(socket, data) {
	var success = !socket.write(data);
	if (!success) {
		(function (socket, data) {
			socket.once('drain', function () {
				writeData(socket, data);
			});
		})(socket, data);
	}
}

socket.on('data', (data) => {
	console.log(data)
})

client.on('data', function (data) {
	if (data.eegPower) {
		list.push(data)
		json["data"] = list
		writeData(socket, JSON.stringify(data))
		fs.writeFileSync('test.json', JSON.stringify(json))
	}
	console.log(data)
})

client.connect()
