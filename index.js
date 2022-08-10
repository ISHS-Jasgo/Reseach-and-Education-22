var neurosky = require('node-neurosky')
var fs = require('fs')

var client = neurosky.createClient({
	appName: 'NodeNeuroSky',
	appKey: '0fc4141b4b45c675cc8d3a765b8d71c5bde9390'
})

var json = {}
var list = new Array()
client.on('data', function (data) {
	if (data.eegPower) {
		list.push(data)
		json["data"] = list
		fs.writeFileSync('test.json', JSON.stringify(json))
	}
	console.log(data)
})

client.connect()