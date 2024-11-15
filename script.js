document.querySelectorAll('.flashcard').forEach(card => {
    card.addEventListener('click', () => {
        const innerCard = card.querySelector('.card-inner');
        innerCard.style.transform =
            innerCard.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
    });
});
