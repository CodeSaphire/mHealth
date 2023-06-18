let addCards = document.querySelector('#additional-cards');
let cardButton = document.querySelector('#toggleCards');

// let's attach an event listener on the button
cardButton.addEventListener('click',function(e){
    e.preventDefault;

    let status = addCards.classList.toggle('cards-add');
    console.log(status);
    if(status){
        cardButton.innerText = 'Less Cards'
    }
    else{
        cardButton.innerText = 'More Cards'
    }
})
