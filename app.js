const center = document.querySelector('.center');

const {left, right} = center.getBoundingClientRect();

function colorRectangle (){

    center.addEventListener('mousemove', (dets) => {
    let avarage = (left + right) /2
    let centerDistance = (avarage - dets.clientX)
    let disParcent = (centerDistance / (right - avarage));
    let color = 255 * disParcent

    if(dets.clientX <= (avarage)){
        center.style.backgroundColor = `rgb(${color},0,0)`
    }else{
        center.style.backgroundColor = `rgb(0,0,${color * -1})`
    }
    })
}

colorRectangle();