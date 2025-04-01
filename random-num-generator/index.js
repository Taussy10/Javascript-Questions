const input = +prompt()
const random = Math.round(Math.random()*100)

// Jab tak sahi answer nahi aaye tab tak keep looping 

function checkValue() {
    if (random === input) {
        console.log(`Yeah, you are correct: ${random}`);
    } else if(input> random) {
        console.log(`"you are too low": ${input}`);
        console.log();
    
    }else if(input< random) {
        console.log(`you are too high: ${input}`);4 
        
    }    
}

