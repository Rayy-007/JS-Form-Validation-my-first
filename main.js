const formTag = document.querySelector('#my-form');
const msgTag = document.querySelector('.msg');
const inputTag = document.querySelector('#name');
const emailTag = document.querySelector('#email');
const ulTag = document.querySelector('#users');

const onSubmit = (event) => {
    event.preventDefault();
    if (inputTag.value === '' || emailTag.value === '') {
        msgTag.classList.add('error');
        msgTag.innerHTML = 'Please failed all informations';
    } else {
        const liTag = document.createElement('li');
        liTag.appendChild(document.createTextNode(`${inputTag.value} : ${emailTag.value}`));
        ulTag.appendChild(liTag);

        // clear input vlaue 
        inputTag.value = '';
        emailTag.value = '';
    }
}

formTag.addEventListener('submit', onSubmit);

