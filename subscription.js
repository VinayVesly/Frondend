const cancel = document.getElementById('cancel-btn');
const popup = document.getElementById('popup');
const no = document.getElementById('no-btn');
const cross = document.getElementById('cross-icon');

// Show popup when cancel button is clicked
cancel.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    popup.classList.remove('hidden');
});

// Hide popup when "No" is clicked
no.addEventListener('click', () => {
    popup.classList.add('hidden');
});

// Hide popup when cross icon is clicked
cross.addEventListener('click', () => {
    popup.classList.add('hidden');
});