const chai = require('chai')
const expect = chai.expect


function taskComplete(arg) {
    if(typeof arg === "number"){
     if(arg  % 3 === 0 && arg % 7 === 0){
         return "Good Evening!"
     }   
 
    if (arg === 1) {
        return 1
    }
    if (arg === 2) {
        return 2
    }
    if ( arg === 3) {
        return "Good Morning!"
    }
    if (arg === 7) {
        return "Good Afternoon!"
    }
    if   (arg % 3 === 0){
        return "Good Morning!"
    }else if (arg % 7 === 0){
        return "Good Afternoon!"
    }else{
        const str = arg.toString()
        return str
    } 

}else{
        return "ERROR! NUMBERS ONLY!"
    }
}
it('returns 1 when passed 1',function(){
    expect (taskComplete(1)).to.equal(1)
})
it('returns 2 when passed 2',function(){
    expect (taskComplete(2)).to.equal(2)
})
it('returns "Good Morning" when passed 3',function(){
    expect (taskComplete(3)).to.equal("Good Morning")
})
it('returns "Good Afternoon" when passed 7',function(){
    expect (taskComplete(7)).to.equal("Good Afternoon")
})
it('returns "Good Morning" when passed 3 or multiple thereof',function(){
    expect (taskComplete(6)).to.equal("Good Morning")
})
it('returns "Good Afternoon" when passed 7 or multiple thereof',function(){
    expect (taskComplete(14)).to.equal("Good Afternoon")
})
it('returns "Good Evening" when passed a multiple of 3 and 7',function(){
    expect (taskComplete(21)).to.equal("Good Evening")
})
it('returns "" when passed neither a multiple of 3 and 7',function(){
    expect (taskComplete(4)).to.equal("4")
})
it('returns "ERROR! NUMBERS ONLY!" when passed not a number',function(){
    expect (taskComplete('nope')).to.equal("ERROR ONLY NUMBERS")
})