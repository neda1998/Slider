const img = document.querySelectorAll('.box');
const sliders = document.querySelectorAll('.btn-slider span')




let index = 1;
showImg(index)


function slide(e) {
    showImg(index += e)
}

function btnSlide(e) {
    showImg(index = e)
}


function showImg(e) {
    let i;
    if (e > img.length) {
        index = 1
    }

    if (e < 1) {
        index = img.length
    }

    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none"
    }

    for (i = 0; i < sliders.length; i++) {
        sliders[i].style.background = "white"
    }

    img[index - 1].style.display = "block";
    sliders[index - 1].style.background = "#fffe80"

}