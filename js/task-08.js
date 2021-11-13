const form = document.querySelector(".login-form");

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const { login, password } = event.currentTarget.elements;
//     let flag = false;
//     const formData = new FormData(form);
//     const data = {};
//     formData.forEach((value, key) => {
//         data[key] = value;
//         if (!value) {
//             flag = true;
//         }
//     });
//     if (flag) {
//         return alert('Bсе поля должны быть заполнены!');
//     }
//     console.log(data);
//     form.reset();
// });

//Второй способ ришения задачи
form.addEventListener('submit', e => {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;
    console.log(email, password);
    if (email.value === "" || password.value === "") {
        return alert('Bсе поля должны быть заполнены!')
    }
    const formData = { email: email.value, password: password.value }
    console.log(formData);
});