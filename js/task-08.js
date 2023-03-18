const form = document.querySelector('.login-form');
form.addEventListener('submit', formSubmitHandler);
function formSubmitHandler(event) {
    event.preventDefault();
    const {
        elements: {
            email,
            password,
        }
    } = event.currentTarget;
    
if (email.value === '' || password.value === '') {
    return alert('Fill in all the fields to submit');
}
    console.log(`Login: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
};
