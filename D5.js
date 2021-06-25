const area = function(l1, l2) {
    let rectangle = l1*l1 
        return rectangle       
}
console.log("First excersize", area(1, 2))

const crazySum = function(x, y) {
    let result  
    if (x !== y) {
        result = x + y
    } else {
        result = (x + y) * 3
    }
    return result 
}

console.log("Second excersize", crazySum(2, 5))

const crazyDiff = function(value) {
    let absoluteDifference 
    if (value <= 19) {
        absoluteDifference = 19 - value
    } else {
        absoluteDifference = (value - 19) * 3
    }
    return absoluteDifference
}

console.log("Third task", crazyDiff(3)) 


const boundary = function(n) {
     
    if (n >= 20 && n <= 100) {
        return true
    } else if ( n === 400) {
        return true
    } else {
        return false
    }
}

console.log("This is fourth task", boundary(50))
