document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', function () {
        this.style.backgroundColor = 'red';
    });

    card.addEventListener('mouseout', function () {
        this.style.backgroundColor = ''; // Reset to default
    });
});

