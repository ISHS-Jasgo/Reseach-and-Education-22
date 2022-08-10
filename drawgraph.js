var plot = require('nodeplotlib')
var fs = require('fs')

var data = JSON.parse(fs.readFileSync('test.json')).data

var delta = []
var theta = []
var lowAlpha = []
var highAlpha = []
var lowBeta = []
var highBeta = []
var lowGamma = []
var highGamma = []

var x = []

data.forEach(element => {
    delta.push(element.eegPower.delta)
    theta.push(element.eegPower.theta)
    lowAlpha.push(element.eegPower.lowAlpha)
    highAlpha.push(element.eegPower.highAlpha)
    lowBeta.push(element.eegPower.lowBeta)
    highBeta.push(element.eegPower.highBeta)
    lowGamma.push(element.eegPower.lowGamma)
    highGamma.push(element.eegPower.highGamma)
});

for(let i = 1; i <= delta.length; i++) {
    x.push(i)
}

var deltaPlotData = {
    name: 'Delta',
    x: x,
    y: delta,
    type: 'scatter'
}
var thetaPlotData = {
    name: 'Theta',
    x: x,
    y: theta,
    type: 'scatter'
}
var lowAlphaPlotData = {
    name: 'LowAlpha',
    x: x,
    y: lowAlpha,
    type: 'scatter'
}
var highAlphaPlotData = {
    name: 'HighAlpha',
    x: x,
    y: highAlpha,
    type: 'scatter'
}
var lowBetaPlotData = {
    name: 'LowBeta',
    x: x,
    y: lowBeta,
    type: 'scatter'
}
var highBetaPlotData = {
    name: 'HighBeta',
    x: x,
    y: highBeta,
    type: 'scatter'
}
var lowGammaPlotData = {
    name: 'LowGamma',
    x: x,
    y: lowGamma,
    type: 'scatter'
}
var highGammaPlotData = {
    name: 'HighGamma',
    x: x,
    y: highGamma,
    type: 'scatter'
}

var plotDataList = [deltaPlotData, thetaPlotData, lowAlphaPlotData, highAlphaPlotData, lowBetaPlotData, highBetaPlotData, lowGammaPlotData, highGammaPlotData]

console.log(plotDataList)
plot.plot(plotDataList)


