module.exports = {
    getArea:getArea
}

data = require("./missiondata.json")


function generateName(area) {
    return area //im sorry
}

//hazards are integers, see mission.md for the listing

function choice(arr) {
    return arr[Math.floor(Math.random()*arr.length)]
}

function randbit() {
    return Math.random() > 0.5
}

function getArea() {
    let a = choice(data.areas)
    let name = generateName(a)
    let hazards = []
    let mobs = []
    let difficulty = choice([0,1,2]) //easy, medium, hard
    for(var i = 0; i <= difficulty+1; ++i) {
        if(Math.random()>.9) {
            let mob = choice(data.adjs) + " " + name + " " + choice(data.mobs) + "s"
            if(Math.random()>1-.15*difficulty) {
                mob = choice(data.adjs) + " " + mob;
            }
            mobs.push(mob)
        } else {
            mobs.push(name+ " " + choice(data.mobs) + "s");
        }
    }
    for(var i = 0; i <= difficulty+2; ++i) {
        let h = Math.floor(Math.random()*10)
        if(hazards.includes(h)) {
            i--;
        } else {
            hazards.push(h);
        }
    }
    console.log(hazards)
    console.log(mobs)
    return {"area":name,"hazards":hazards,"mobs":mobs,difficulty:difficulty}
}
