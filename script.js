var inner = document.querySelector('.inner')

var btn = document.querySelector('#Download')

var progress = document.querySelector('#progress')

var main = document.querySelector('main')

btn.addEventListener('click', function () {
    var a = 0

    var int = setInterval(function () {
        a++
        inner.style.width = a + "%"

        progress.textContent = a + "%"

    }, 50)

    btn.disabled = true

    setTimeout(function(){
        clearInterval(int)
    },5000)

    

})





