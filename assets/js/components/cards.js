const cards = () => {
    let cards = document.getElementsByClassName('grid__block');

    // Remove class from all components
    let removeClass = (cardsFlipped) => {
        [].forEach.call(cards,(card)=>{
            card.classList.remove('flipped');
        });
    }

    // Touchstart event
    [].forEach.call(cards, (card) => {
        card.addEventListener('touchstart', (event, index) => {
            let cardsFlipped = document.getElementsByClassName('flipped');
            if(event.currentTarget.classList.contains('flipped')) {
                removeClass(cardsFlipped)
            }else {
                removeClass(cardsFlipped)
                event.currentTarget.classList.add('flipped');
            } 
        })
    })
}
export default cards;
