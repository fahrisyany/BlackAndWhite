


var container2 = document.querySelector('.container2')
var jumbo = document.querySelector('.jumbo')
const thumbs2 = document.querySelectorAll('.thumb2')

container2.addEventListener('click', function (e) {

    //cek yg diklik adalah thumb
    if (e.target.className === 'thumb2') {

        jumbo.src = e.target.src
        jumbo.classList.add('fade');
        setTimeout(function () {

            jumbo.classList.remove('fade')
        }, 500)
    }
    thumbs2.forEach(function (thumb2) {
        // if (thumb2.classList.contains('active')) {
        //     thumb2.classList.remove('active')
        // }
        thumb2.className = 'thumb2'
    })
    e.target.classList.add('active')
});