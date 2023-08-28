let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector('.slider_container');
const track = document.querySelector('.slider_track');
const trackWidth = track.clientWidth;
const items = document.querySelectorAll('.slider_item');
const itemWidth = document.querySelector('.slider_item').clientWidth;
const movePosition = 'some';

const dot1 = document.querySelector('.d1');
const dot2 = document.querySelector('.d2');
const dot3 = document.querySelector('.d3');
const dot4 = document.querySelector('.d4');

const pag1 = document.querySelector('.p1');
const pag2 = document.querySelector('.p2');
const pag3 = document.querySelector('.p3');
const pag4 = document.querySelector('.p4');

items.forEach((item) => {
    item.style.Width = `${itemWidth}px`
})

pag1.addEventListener('click', function() {
    dot1.classList.toggle('active');
    track.style.transform = `translateX(0rem)`;
})

pag2.addEventListener('click', function() {
    dot2.classList.toggle('active');
    track.style.transform = `translateX(-34.4rem)`;
})

pag3.addEventListener('click', function() {
    dot3.classList.toggle('active');
    track.style.transform = `translateX(-68.8rem)`;
})

pag4.addEventListener('click', function() {
    dot4.classList.toggle('active');
    track.style.transform = `translateX(-103.1rem)`;
})

document.querySelectorAll('.pagination').forEach(a => a.addEventListener('mouseover', function() {
    a.childNodes['1'].classList.add('hover');
}))

document.querySelectorAll('.pagination').forEach(a => a.addEventListener('mouseout', function() {
    a.childNodes['1'].classList.remove('hover');
}))

console.log(window.screen.width)
console.log(itemWidth)
console.log(trackWidth)