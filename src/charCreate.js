var fs = require("fs")

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
