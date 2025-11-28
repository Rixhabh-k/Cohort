let p = document.querySelector('p')

let text = p.innerHTML

let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

let iteration = 0

function randomText(){
    let str = text.split("").map((char, index)=>{
        if(index<iteration){
            return char
        }
        return character.split("")[Math.floor(Math.random()*52)]
    }).join("")

    p.innerHTML = str

    iteration += 0.25

 
if(iteration>= text.length){
        clearInterval(str)
    }
    


}

setInterval(function(){
    randomText()
},30)


    