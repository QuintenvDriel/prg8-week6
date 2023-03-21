import { DecisionTree } from "./libraries/decisiontree.js"
import { VegaTree } from "./libraries/vegatree.js"

const csvFile = "./data/diabetes.csv"
const trainingLabel = "Gender"
const ignoredColumns = ['Name']

// inladen csv data
function loadData() {
    Papa.parse(csvFile, {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: (results) => console.log(results.data) // train het model met deze data
    })
}

//
// MACHINE LEARNING - Bouw de Decision Tree
//
function trainModel(data) {

    let ignoredColumns = ["Outcome"]
    let label = "label"
    
    let decisionTree = new DecisionTree({
        ignoredAttributes: ignoredColumns,
        trainingSet: data,
        categoryAttr: label
    })

    // Teken de boomstructuur - DOM element, breedte, hoogte, decision tree
    let visual = new VegaTree('#view', 800, 400, decisionTree.toJSON())
}

loadData()