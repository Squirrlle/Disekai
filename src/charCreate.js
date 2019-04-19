var fs = require("fs")
var firstNames = require("./first-names.json")
var lastNames = require("./last-names.json")


module.exports = {
    handleUser : handleUser
}

var activeUsers = {
    /*  "test#0841" : {
     *      "stage" : 0
     *  }
     */
}
/* Character Creation process
 * Ask user who they want to hire
 * List classes
 * Receive response
 * Display
 *
 */
function handleUser(user,text) {
    //user and text are both strings
    if(Object.keys(activeUsers).indexOf(user,0) > -1) {
        let stage = activeUsers[user].stage;
        switch(stage) {
            case 0:
                activeUsers[user].stage += 1
                return "bottom text"
            case 1:
                activeUsers[user].stage += 1
                return "do not lewd the loli"
            default:
                return "bones";
        }
    } else {
        activeUsers[user] = {
            "stage" : 0
        }
        return "Beginning character creation"
    }
}

function choice(arr) {
    return arr[Math.floor(Math.random()*arr.length)]
}

function range(a,b) {
    return a + Math.floor(Math.random()*(b-a))
}

function randomName() {
    let first = choice(firstNames)
    let last = choice(lastNames)
    return first + " " + last
}

function randomCharacter() {
    let statsTemplate = ["Stronks","Fasts","IQs","Facebook Friends"]
    let stats = {"HP" : 10}
    let name = randomName()
    let clas = choice(["Warrior","Rogue","Mage"])

    switch(clas) {
        case "Warrior":
            stats["Stronks"] = range(12,18)
            stats["Fasts"] = range(11,17)
            stats["IQs"] = range(6,12)
            stats["Facebook Friends"] = range(9,15)
            break
        case "Rogue":
            stats["Stronks"] = range(7,13)
            stats["Fasts"] = range(12,18)
            stats["IQs"] = range(8,14)
            stats["Facebook Friends"] = range(11,17)
            break
        case "Mage":
            stats["Stronks"] = range(8,14)
            stats["Fasts"] = range(10,16)
            stats["IQs"] = range(12,18)
            stats["Facebook Friends"] = range(8,14)
            break
    }

    let skilz = []

    for(var i = 0; i < 3 + range(-1,1); ++i) {
        let skil = choice(["Climbing","Swimming","Literacy","Hygiene","Looting","Trading"])
        if(skilz.includes(skil)) {
            i--;
        } else {
            skilz.push(skil)
        }
    }

    let character = {}
    character["name"] = name
    character["class"] = clas
    character["Stats"] = stats
    character["Skilz"] = skilz

    switch(clas) {
        case "Warrior":
            character["Resistances"] = ["Physical","Poison","Heat","Cold"]
            break
        case "Rogue":
            character["Resistances"] = ["Poison","Will","Cold"]
            break
        case "Mage":
            character["Resistances"] = ["Will","Magic"]
            break
    }

    character["Fears"] = {}
    character["Shekels"] = 10

    return character

}

for(var i = 0; i < 10; ++i) {
    console.log(range(10,15))
}

for(var i = 0; i < 10; ++i) {
    console.log(JSON.stringify(randomCharacter()))
}
