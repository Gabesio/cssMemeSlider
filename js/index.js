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
const dots = document.querySelectorAll('.dot');

const pag1 = document.querySelector('.p1');
const pag2 = document.querySelector('.p2');
const pag3 = document.querySelector('.p3');
const pag4 = document.querySelector('.p4');

const block = document.querySelector('.block');

const imgs = document.querySelectorAll('.img')

window.addEventListener('resize', showSlide());

setTimeout(isMobile(), 200)

function isMobile () {
    if (window.screen.width < 560) {
        block.style = `max-width: ${window.screen.width}px`;
        container.style = `max-width: ${window.screen.width}px`;
    }
}

function showSlide () {
    sliderWidth = container.offsetWidth;
    track.style.width = sliderWidth * items.length + 'px';
    items.forEach(a => a.style.width = sliderWidth + 'px');
    /*imgs.forEach(a => a.style.width = sliderWidth - (document.querySelector('.slider_item').offsetWidtha) + 'px');*/
    block.style.width = sliderWidth * 2
}
showSlide();

function rollSlider() {
    track.style.transform = `translateX(${-sliderCount * sliderWidth}px)`
}

function thisSlide(index) {
    dots.forEach(a => a.classList.remove('active'));
    dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
    })
})

/*pag1.addEventListener('click', function() {
    dots.forEach(a => a.classList.remove('active'));
    dot1.classList.toggle('active');
    track.style.transform = `translateX(0rem)`;
})

pag2.addEventListener('click', function() {
    dots.forEach(a => a.classList.remove('active'));
    dot2.classList.toggle('active');
    track.style.transform = `translateX(-34.4rem)`;
})

pag3.addEventListener('click', function() {
    dots.forEach(a => a.classList.remove('active'));
    dot3.classList.toggle('active');
    track.style.transform = `translateX(-68.8rem)`;
})

pag4.addEventListener('click', function() {
    dots.forEach(a => a.classList.remove('active'));
    dot4.classList.toggle('active');
    track.style.transform = `translateX(-103.1rem)`;
})*/

document.querySelectorAll('.pagination').forEach(a => a.addEventListener('mouseover', function() {
    a.childNodes['1'].classList.add('hover');
}))

document.querySelectorAll('.pagination').forEach(a => a.addEventListener('mouseout', function() {
    a.childNodes['1'].classList.remove('hover');
}))

console.log(window.screen.width)
console.log(items.length)
console.log('container: '+container.offsetWidth)
console.log('block: '+block.offsetWidth)