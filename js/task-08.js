const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();
    
const formEl = event.currentTarget.elements;
const email = formEl.email.value;
const password = formEl.password.value;

if (email === `` || password ===``)
{ alert(`Мы тут не в игры играем - бегом заполнил.`);}
else { const formData = { email: email,
password: password};
console.log(formData);
form.reset();}
    
}
