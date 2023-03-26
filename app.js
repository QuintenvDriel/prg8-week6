import { DecisionTree } from "./libraries/decisiontree.js"
import { VegaTree } from "./libraries/vegatree.js"

const csvFile = "./data/diabetes.csv"
const trainingLabel = "pregnancies"
const ignoredColumns = ['Name']

// inladen csv data
function loadData() {
    Papa.parse(csvFile, {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: (results) => checkData(results.data) // train het model met deze data
    })
}


function checkData(data) {
    console.table(data)
}
let data = loadData = "data"
shuffleArray(data)

function shuffleArray(arr) {
    const arr = []
    arr.sort((function(){return 0.5 - Math.random()}))
}
let arr = shuffleArray = "arr"
trainData(arr)
testData(arr)

// model trainen met net verkregen data

let trainData = data.slice(0, Math.floor(data.length * 0.8))
let testData = data.slice(Math.floor(data.length * 0.8) + 1)

trainModel

//
// MACHINE LEARNING - Bouw de Decision Tree
//
function trainModel(data) {

    let ignoredColumns = ["Outcome"]
    let label = "Outcome"
    // let label = "label"
    
    let decisionTree = new DecisionTree({
        ignoredAttributes: ignoredColumns,
        trainingSet: data,
        categoryAttr: label
    })

    // Teken de boomstructuur - DOM element, breedte, hoogte, decision tree
    let json = decisionTree.toJSON()
    let visual = new VegaTree('#view', 800, 400, decisionTree.toJSON())
}

loadData()