
const slideContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('#nextBtn');
const preBtn = document.querySelector('#preBtn');

const items = document.querySelectorAll('.item');

const slideWidth = slides[0].clientWidth;

let index = 0;

function updateSlideIndex(offSet){
    index += offSet;
    if(index < 0 ){//para ir a la izq
        index = slides.length - 1;
    }else if(index >= slides.length){
        index = 0;
    }
}

function updateSlides(){
   slideContainer.style.transition = 'all 0.3s ease-in-out';
   slideContainer.style.transform = `translateX(${-slideWidth * (index + 1)}px)`; 
}


function setActiveItem(){
    items.forEach((item)=>item.classList.remove('active'));
    items[index].classList.add('active');
}

function moveToNextSlide(){
    updateSlideIndex(1);
    updateSlides();
    setActiveItem();

}

function movetoPrevSlide(){
    updateSlideIndex(-1);
    updateSlides();
    setActiveItem();
}

function handleItemClick(i){
    index = i;
    setActiveItem();
    updateSlides();
}

items.forEach((item,i) => item.addEventListener('click',()=>handleItemClick(i)));

preBtn.addEventListener('click', movetoPrevSlide);
nextBtn.addEventListener('click', moveToNextSlide);

slideContainer.insertAdjacentHTML("afterbegin", slides[slides.length - 1].outerHTML);
slideContainer.insertAdjacentHTML("beforeend", slides[0].outerHTML);
slideContainer.style.transform = `translateX(${-slideWidth}px)`;

setActiveItem()
