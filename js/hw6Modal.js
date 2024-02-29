const openButton = document.querySelector('[data-action="open-modal"]');

const closeButton = document.querySelector('[data-action="close-modal"]')


function toggleModal(){
    const bodyElement = document.body;
    bodyElement.classList.toggle('show-modal')
}

openButton.addEventListener('click', toggleModal)
closeButton.addEventListener('click', toggleModal)






// openButton.addEventListener('click', () => {
//     document.body.classList.toggle('show-modal')
// })