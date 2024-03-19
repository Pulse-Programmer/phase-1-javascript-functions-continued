// code your solution here
function saturdayFun (activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;   
}

const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;             
}

function wrapAdjective (j="*") {
    return function (p = "special") {
        return `You are ${j}${p}${j}!`;
    }
}