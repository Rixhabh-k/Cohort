var main = document.querySelector('main')
var btn = document.querySelector('button')

btn.addEventListener('click',()=>{
    
    var box = document.createElement('div');

    let x = Math.random()*80
    let y = Math.random()*80

    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)

    let rot = Math.random()*360

    box.style.height = '100px'
    box.style.width = '100px'
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    box.style.position = 'absolute'
    box.style.top = x+'%'
    box.style.left = y+'%'
    box.style.rotate = rot+'deg'

    main.append(box)
    
    
})