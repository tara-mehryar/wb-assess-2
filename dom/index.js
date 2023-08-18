const form = document.querySelector('.form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const closeButton = document.getElementById('close-form');
const formContainer = document.querySelector('.form-container');

closeButton.addEventListener('click', () => {
    form.classList.toggle('hide');
    closeButton.textContent = form.classList.contains('hide') ? '+' : 'X';
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();

    if (nameValue === '' && emailValue === ''){
        alert('You must enter a name and an email address to subscribe!');
        nameInput.style.border = '2px solid red';
        emailInput.style.border = '2px solid red';
    } else if (nameValue === ''){
        alert('Please enter a name to subscribe.');
        nameInput.style.border = '2px solid red';
        emailInput.style.border = 'none';
    } else if (emailValue === ''){
        alert('Please enter an email address to subscribe.');
        nameInput.style.border = 'none';
        emailInput.style.border = '2px solid red';
    } else {
        formContainer.innerHTML = '<p>Thank you for subscribing!<p>';
    }
});