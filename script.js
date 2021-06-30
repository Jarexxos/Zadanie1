const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow')
const expandable = document.getElementById('expandable');

leftArrow.addEventListener('click', function(){
    expandable.classList.add('hidden')
    leftArrow.classList.add('d-none')
    rightArrow.classList.remove('d-none')  
})

rightArrow.addEventListener('click', function(){
    expandable.classList.remove('hidden')
    leftArrow.classList.remove('d-none')
    rightArrow.classList.add('d-none')
    
})

$(document).ready(function(){
    $('.search').click(function(){
    $('#input').toggleClass('search-field');
    });
    });