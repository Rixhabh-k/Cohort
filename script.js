var main = document.querySelector('main')
var cursor = document.querySelector('#cursor img')

main.addEventListener('mousemove',(val)=>{
    
    cursor.style.top = val.y + 'px'
    cursor.style.left = val.x + 'px'
    
})