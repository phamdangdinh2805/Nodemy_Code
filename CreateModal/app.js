var modalClass = document.querySelector('.modal');
var btnClose = document.querySelector('.modal__footer');
function openModal(){
    modalClass.classList.remove('hide');
}
function closeModal(){
    modalClass.classList.add('hide');
}
modalClass.addEventListener('click', openModal());
btnClose.addEventListener('click', closeModal());
modalClass.addEventListener('click', function(event){
    event.stopPropagation(0);
});

