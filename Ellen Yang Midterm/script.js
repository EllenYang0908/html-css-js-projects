const imageContainer = document.querySelector('.image-container');
const popup = document.querySelector('.popup');

imageContainer.addEventListener('click', function() {
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
});
